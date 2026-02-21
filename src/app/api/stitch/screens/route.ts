import { NextRequest, NextResponse } from "next/server";
import {
  listScreens,
  getScreenCode,
  getScreenImage,
  StitchError,
} from "@/lib/stitch";

/**
 * GET /api/stitch/screens?projectId=xxx
 * Lists all screens in a project.
 *
 * GET /api/stitch/screens?screenId=xxx&type=code
 * Returns the HTML/CSS for a specific screen.
 *
 * GET /api/stitch/screens?screenId=xxx&type=image
 * Returns the screenshot image (base64) for a specific screen.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const projectId = searchParams.get("projectId");
  const screenId = searchParams.get("screenId");
  const type = searchParams.get("type"); // "code" | "image"

  try {
    // Single screen: code or image
    if (screenId) {
      if (type === "image") {
        const image = await getScreenImage(screenId);
        return NextResponse.json(image);
      }
      // default to code
      const code = await getScreenCode(screenId);
      return NextResponse.json(code);
    }

    // List screens for a project
    if (projectId) {
      const screens = await listScreens(projectId);
      return NextResponse.json({ screens });
    }

    return NextResponse.json(
      { error: "Ange projectId eller screenId som query-parameter." },
      { status: 400 }
    );
  } catch (err) {
    if (err instanceof StitchError) {
      return NextResponse.json(
        { error: err.message },
        { status: err.status }
      );
    }
    return NextResponse.json(
      { error: "Kunde inte hämta skärmar från Stitch." },
      { status: 500 }
    );
  }
}
