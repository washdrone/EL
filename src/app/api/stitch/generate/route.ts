import { NextRequest, NextResponse } from "next/server";
import { generateScreen, StitchError } from "@/lib/stitch";

interface GenerateBody {
  prompt: string;
  model?: "flash" | "pro";
}

/**
 * POST /api/stitch/generate
 * Generate a new UI screen from a text prompt.
 *
 * Body: { prompt: string, model?: "flash" | "pro" }
 */
export async function POST(request: NextRequest) {
  try {
    const body: GenerateBody = await request.json();

    if (!body.prompt || body.prompt.trim().length === 0) {
      return NextResponse.json(
        { error: "Prompt krävs för att generera en design." },
        { status: 400 }
      );
    }

    if (body.prompt.length > 2000) {
      return NextResponse.json(
        { error: "Prompten får vara max 2000 tecken." },
        { status: 400 }
      );
    }

    const model = body.model === "pro" ? "pro" : "flash";
    const result = await generateScreen(body.prompt, model);

    return NextResponse.json(result);
  } catch (err) {
    if (err instanceof StitchError) {
      return NextResponse.json(
        { error: err.message },
        { status: err.status }
      );
    }
    return NextResponse.json(
      { error: "Kunde inte generera design via Stitch." },
      { status: 500 }
    );
  }
}
