import { NextResponse } from "next/server";
import { listProjects, StitchError } from "@/lib/stitch";

/**
 * GET /api/stitch/projects
 * Returns all Stitch projects for the authenticated account.
 */
export async function GET() {
  try {
    const projects = await listProjects();
    return NextResponse.json({ projects });
  } catch (err) {
    if (err instanceof StitchError) {
      return NextResponse.json(
        { error: err.message },
        { status: err.status }
      );
    }
    return NextResponse.json(
      { error: "Kunde inte hämta projekt från Stitch." },
      { status: 500 }
    );
  }
}
