import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_EMAIL, COMPANY_NAME } from "@/lib/constants";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

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

const inspectionLabels: Record<string, string> = {
  arlig: "Årlig översiktsinspektion",
  detaljerad: "Detaljerad komponentinspektion",
  storm: "Storm- / akutinspektion",
  lidar: "LiDAR / kartläggning (tillägg)",
  annan: "Annat / vet ej",
};

const timeframeLabels: Record<string, string> = {
  akut: "Akut (inom dagar)",
  "1-4veckor": "1–4 veckor",
  "1-3manader": "1–3 månader",
  planering: "Under planering",
  upphandling: "Inför upphandling",
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailHtml(body: LeadData): string {
  const rows = [
    ["Företag", escapeHtml(body.company)],
    ["Kontaktperson", escapeHtml(body.contact)],
    ["E-post", escapeHtml(body.email)],
    ["Region / nätområde", body.region ? escapeHtml(body.region) : undefined],
    [
      "Typ av inspektion",
      body.inspectionType
        ? inspectionLabels[body.inspectionType] || escapeHtml(body.inspectionType)
        : undefined,
    ],
    ["Omfattning", body.scope ? escapeHtml(body.scope) : undefined],
    [
      "Önskad tidsram",
      body.timeframe
        ? timeframeLabels[body.timeframe] || escapeHtml(body.timeframe)
        : undefined,
    ],
    ["Meddelande", body.message ? escapeHtml(body.message) : undefined],
  ];

  const tableRows = rows
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;vertical-align:top;white-space:nowrap;border-bottom:1px solid #e2e8f0">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${value}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#0159a0">Ny förfrågan via ${COMPANY_NAME}</h2>
      <table style="width:100%;border-collapse:collapse;margin:16px 0">
        ${tableRows}
      </table>
      <p style="color:#6b7280;font-size:13px;margin-top:24px">
        Skickat ${new Date().toLocaleString("sv-SE", { timeZone: "Europe/Stockholm" })} via griddrone.se
      </p>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadData = await request.json();

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

    const totalLength = Object.values(body).join("").length;
    if (totalLength > 5000) {
      return NextResponse.json(
        { error: "Meddelandet är för långt." },
        { status: 400 }
      );
    }

    const inspectionLabel = body.inspectionType
      ? inspectionLabels[body.inspectionType] || body.inspectionType
      : "Ej angiven";

    if (!resend) {
      console.error("RESEND_API_KEY is not configured – cannot send email");
      return NextResponse.json(
        { error: "E-post är inte konfigurerad. Kontakta oss direkt på " + CONTACT_EMAIL + "." },
        { status: 503 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: `${COMPANY_NAME} <noreply@griddrone.se>`,
      to: [CONTACT_EMAIL],
      replyTo: body.email,
      subject: `Ny förfrågan: ${body.company} — ${inspectionLabel}`,
      html: buildEmailHtml(body),
    });

    if (error) {
      console.error("Resend API error:", JSON.stringify(error));
      return NextResponse.json(
        { error: "Kunde inte skicka meddelandet. Försök igen eller kontakta oss direkt på " + CONTACT_EMAIL + "." },
        { status: 502 }
      );
    }

    console.log("Email sent successfully, id:", data?.id);

    return NextResponse.json(
      { success: true, message: "Förfrågan mottagen." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json(
      { error: "Något gick fel. Försök igen." },
      { status: 500 }
    );
  }
}
