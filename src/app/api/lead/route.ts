import { NextRequest, NextResponse } from "next/server";

interface LeadData {
  company: string;
  contact: string;
  email: string;
  region?: string;
  inspectionType?: string;
  scope?: string;
  timeframe?: string;
  message?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadData = await request.json();

    // Validate required fields
    if (!body.company || !body.contact || !body.email) {
      return NextResponse.json(
        { error: "Företag, kontaktperson och e-post är obligatoriska." },
        { status: 400 }
      );
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { error: "Ogiltig e-postadress." },
        { status: 400 }
      );
    }

    // Simple honeypot / rate-limit: check content length
    const totalLength = Object.values(body).join("").length;
    if (totalLength > 5000) {
      return NextResponse.json(
        { error: "Meddelandet är för långt." },
        { status: 400 }
      );
    }

    // Log the lead (replace with your actual lead handling)
    console.log("=== NEW LEAD ===");
    console.log(JSON.stringify(body, null, 2));
    console.log("Timestamp:", new Date().toISOString());
    console.log("================");

    return NextResponse.json(
      { success: true, message: "Förfrågan mottagen." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Något gick fel. Försök igen." },
      { status: 500 }
    );
  }
}
