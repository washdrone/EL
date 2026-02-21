import { GoogleAuth } from "google-auth-library";

// ---------------------------------------------------------------------------
// Google Stitch API Client
// ---------------------------------------------------------------------------
// Stitch is Google's AI-powered UI design tool (stitch.withgoogle.com).
// This client connects to the Stitch MCP service on Google Cloud to:
//   - List projects & screens
//   - Retrieve screen HTML/code and screenshot images
//   - Generate new screens from text prompts
//
// Auth: either STITCH_API_KEY (simplest) or Application Default Credentials.
// ---------------------------------------------------------------------------

const STITCH_HOST =
  process.env.STITCH_HOST || "https://stitch.googleapis.com";
const STITCH_API_KEY = process.env.STITCH_API_KEY || "";
const GOOGLE_CLOUD_PROJECT = process.env.GOOGLE_CLOUD_PROJECT || "";

// ---- Types ----------------------------------------------------------------

export interface StitchProject {
  id: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
  screensCount?: number;
}

export interface StitchScreen {
  id: string;
  name: string;
  projectId: string;
  imageUrl?: string;
  createdAt?: string;
}

export interface StitchScreenCode {
  screenId: string;
  html: string;
  css?: string;
}

export interface StitchScreenImage {
  screenId: string;
  base64: string;
  mimeType: string;
}

export interface StitchGenerateResult {
  projectId: string;
  screenId: string;
  html: string;
}

interface McpToolCall {
  tool: string;
  arguments: Record<string, unknown>;
}

interface McpResponse<T = unknown> {
  result?: T;
  error?: { message: string; code?: number };
}

// ---- Auth helpers ----------------------------------------------------------

let _authClient: GoogleAuth | null = null;

function getAuthClient(): GoogleAuth {
  if (!_authClient) {
    _authClient = new GoogleAuth({
      scopes: ["https://www.googleapis.com/auth/cloud-platform"],
    });
  }
  return _authClient;
}

async function getAuthHeaders(): Promise<Record<string, string>> {
  if (STITCH_API_KEY) {
    return { "x-goog-api-key": STITCH_API_KEY };
  }

  const auth = getAuthClient();
  const client = await auth.getClient();
  const token = await client.getAccessToken();

  return {
    Authorization: `Bearer ${token.token}`,
    ...(GOOGLE_CLOUD_PROJECT
      ? { "x-goog-user-project": GOOGLE_CLOUD_PROJECT }
      : {}),
  };
}

// ---- Low-level MCP call ---------------------------------------------------

async function callMcpTool<T = unknown>(
  call: McpToolCall
): Promise<McpResponse<T>> {
  const headers = await getAuthHeaders();

  const res = await fetch(`${STITCH_HOST}/v1/tools:call`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify({
      tool: call.tool,
      arguments: call.arguments,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new StitchError(
      `Stitch API error ${res.status}: ${text}`,
      res.status
    );
  }

  return (await res.json()) as McpResponse<T>;
}

// ---- Error class ----------------------------------------------------------

export class StitchError extends Error {
  status: number;
  constructor(message: string, status = 500) {
    super(message);
    this.name = "StitchError";
    this.status = status;
  }
}

// ---- Public API -----------------------------------------------------------

/**
 * List all Stitch projects for the authenticated user.
 */
export async function listProjects(): Promise<StitchProject[]> {
  const res = await callMcpTool<{ projects: StitchProject[] }>({
    tool: "list_projects",
    arguments: {},
  });
  return res.result?.projects ?? [];
}

/**
 * Get details about a specific project.
 */
export async function getProject(projectId: string): Promise<StitchProject> {
  const res = await callMcpTool<StitchProject>({
    tool: "get_project",
    arguments: { projectId },
  });
  if (!res.result) throw new StitchError("Project not found", 404);
  return res.result;
}

/**
 * List all screens within a project.
 */
export async function listScreens(
  projectId: string
): Promise<StitchScreen[]> {
  const res = await callMcpTool<{ screens: StitchScreen[] }>({
    tool: "list_screens",
    arguments: { projectId },
  });
  return res.result?.screens ?? [];
}

/**
 * Get the HTML/CSS code for a specific screen.
 */
export async function getScreenCode(
  screenId: string
): Promise<StitchScreenCode> {
  const res = await callMcpTool<StitchScreenCode>({
    tool: "get_screen_code",
    arguments: { screenId },
  });
  if (!res.result) throw new StitchError("Screen code not found", 404);
  return res.result;
}

/**
 * Get a screenshot image for a specific screen (returned as base64).
 */
export async function getScreenImage(
  screenId: string
): Promise<StitchScreenImage> {
  const res = await callMcpTool<StitchScreenImage>({
    tool: "get_screen_image",
    arguments: { screenId },
  });
  if (!res.result) throw new StitchError("Screen image not found", 404);
  return res.result;
}

/**
 * Generate a new screen from a text prompt.
 * @param prompt - Text description of the desired UI
 * @param model  - "flash" (default, faster) or "pro" (higher quality)
 */
export async function generateScreen(
  prompt: string,
  model: "flash" | "pro" = "flash"
): Promise<StitchGenerateResult> {
  const res = await callMcpTool<StitchGenerateResult>({
    tool: "generate_screen",
    arguments: { prompt, model },
  });
  if (!res.result) throw new StitchError("Screen generation failed", 500);
  return res.result;
}

/**
 * Build a multi-page site from a project by mapping screens to routes.
 */
export async function buildSite(
  projectId: string,
  routes: Array<{ screenId: string; route: string }>
): Promise<Record<string, string>> {
  const res = await callMcpTool<Record<string, string>>({
    tool: "build_site",
    arguments: { projectId, routes },
  });
  return res.result ?? {};
}
