import { NextRequest, NextResponse } from "next/server";
import { CONTACT_EMAIL, COMPANY_NAME } from "@/lib/constants";
import { sendLeadMail } from "@/lib/mailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface LeadData {
  company: string;
  contact: string;
  email: string;
  region?: string;
  inspectionType?: string;
  scope?: string;
  timeframe?: string;
  message?: string;
  /** Honeypot – fylls bara i av bottar. Skickas aldrig av riktiga besökare. */
  website?: string;
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

/** Fälten i visningsordning, tomma värden bortfiltrerade. */
function leadFields(body: LeadData): [string, string][] {
  const rows: [string, string | undefined][] = [
    ["Företag", body.company],
    ["Kontaktperson", body.contact],
    ["E-post", body.email],
    ["Region / nätområde", body.region],
    [
      "Typ av inspektion",
      body.inspectionType
        ? inspectionLabels[body.inspectionType] || body.inspectionType
        : undefined,
    ],
    ["Omfattning", body.scope],
    [
      "Önskad tidsram",
      body.timeframe
        ? timeframeLabels[body.timeframe] || body.timeframe
        : undefined,
    ],
    ["Meddelande", body.message],
  ];

  return rows.filter((row): row is [string, string] => Boolean(row[1]));
}

function timestamp(): string {
  return new Date().toLocaleString("sv-SE", { timeZone: "Europe/Stockholm" });
}

function buildEmailHtml(body: LeadData): string {
  const tableRows = leadFields(body)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;vertical-align:top;white-space:nowrap;border-bottom:1px solid #e2e8f0">${escapeHtml(
          label
        )}</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${escapeHtml(
          value
        ).replace(/\n/g, "<br>")}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#0159a0">Ny förfrågan via ${escapeHtml(COMPANY_NAME)}</h2>
      <table style="width:100%;border-collapse:collapse;margin:16px 0">
        ${tableRows}
      </table>
      <p style="color:#6b7280;font-size:13px;margin-top:24px">
        Skickat ${timestamp()} via griddrone.se
      </p>
    </div>
  `;
}

function buildEmailText(body: LeadData): string {
  const lines = leadFields(body).map(([label, value]) => `${label}: ${value}`);
  return [
    `Ny förfrågan via ${COMPANY_NAME}`,
    "",
    ...lines,
    "",
    `Skickat ${timestamp()} via griddrone.se`,
  ].join("\n");
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadData = await request.json();

    // Honeypot: svara med 200 så botten tror att det gick igenom.
    if (body.website) {
      return NextResponse.json(
        { success: true, message: "Förfrågan mottagen." },
        { status: 200 }
      );
    }

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

    const result = await sendLeadMail({
      subject: `Ny förfrågan: ${body.company} — ${inspectionLabel}`,
      html: buildEmailHtml(body),
      text: buildEmailText(body),
      replyTo: body.email,
      data: {
        company: body.company,
        contact: body.contact,
        email: body.email,
        region: body.region,
        inspectionType: body.inspectionType,
        scope: body.scope,
        timeframe: body.timeframe,
        message: body.message,
        receivedAt: new Date().toISOString(),
      },
    });

    if (result.ok) {
      return NextResponse.json(
        { success: true, message: "Förfrågan mottagen." },
        { status: 200 }
      );
    }

    // Leadet får aldrig försvinna tyst – logga hela innehållet så att det
    // går att hämta ur serverloggen även när utskicket fallerar.
    console.error("=== LEAD KUNDE INTE SKICKAS ===");
    console.error(buildEmailText(body));
    if (result.notConfigured) {
      console.error("Ingen e-postkanal är konfigurerad (se .env.example).");
    } else {
      console.error("Kanalfel:", JSON.stringify(result.errors));
    }
    console.error("===============================");

    // I utvecklingsläge utan konfigurerad kanal räcker loggen.
    if (result.notConfigured && process.env.NODE_ENV !== "production") {
      return NextResponse.json(
        { success: true, message: "Förfrågan mottagen (loggad lokalt)." },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        error: `Meddelandet kunde inte skickas just nu. Mejla oss gärna direkt på ${CONTACT_EMAIL}.`,
      },
      { status: 502 }
    );
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json(
      { error: "Något gick fel. Försök igen." },
      { status: 500 }
    );
  }
}
