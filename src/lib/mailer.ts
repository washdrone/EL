import nodemailer from "nodemailer";
import { COMPANY_NAME, CONTACT_EMAIL } from "@/lib/constants";

/**
 * Leverantörsoberoende e-postlager.
 *
 * Kanalerna provas i tur och ordning tills en lyckas:
 *   1. SMTP        – fungerar med valfri befintlig brevlåda (webbhotell,
 *                    Microsoft 365, Google Workspace, ...). Kräver inget
 *                    godkännande från en tredjepartstjänst.
 *   2. Webhook     – POST:ar leadet som JSON till valfri endpoint
 *                    (Zapier, Make, n8n, Slack, Google Apps Script).
 *   3. Resend      – behålls som valfri reserv om API-nyckeln fungerar igen.
 *
 * Varje kanal aktiveras enbart av att dess miljövariabler är satta.
 */

export interface MailPayload {
  subject: string;
  html: string;
  text: string;
  /** Avsändarens e-post – används som Reply-To så svar går till kunden. */
  replyTo?: string;
  /** Rådata, används av webhook-kanalen. */
  data: Record<string, unknown>;
}

export interface MailResult {
  ok: boolean;
  /** Kanalen som lyckades, t.ex. "smtp". */
  provider: string | null;
  /** Kanaler som är konfigurerade men misslyckades, med felmeddelande. */
  errors: { provider: string; error: string }[];
  /** True om ingen kanal alls är konfigurerad. */
  notConfigured: boolean;
}

type Channel = {
  name: string;
  send: (payload: MailPayload) => Promise<void>;
};

function env(name: string): string | undefined {
  const value = process.env[name];
  return value && value.trim() !== "" ? value.trim() : undefined;
}

function errorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  return String(err);
}

/** Mottagaradress(er) – kommaseparerad lista tillåten. */
function recipients(): string[] {
  const raw = env("LEAD_TO_EMAIL") || CONTACT_EMAIL;
  return raw
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);
}

/* ------------------------------------------------------------------ SMTP */

function smtpChannel(): Channel | null {
  const host = env("SMTP_HOST");
  const user = env("SMTP_USER");
  const pass = env("SMTP_PASS");

  if (!host || !user || !pass) return null;

  const port = Number(env("SMTP_PORT") || 587);
  // Port 465 använder implicit TLS, 587/25 använder STARTTLS.
  const secure = env("SMTP_SECURE")
    ? env("SMTP_SECURE") === "true"
    : port === 465;
  const from = env("MAIL_FROM") || `${COMPANY_NAME} <${user}>`;
  const to = recipients();

  if (to.length === 0) return null;

  return {
    name: "smtp",
    async send(payload) {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass },
        connectionTimeout: 10_000,
        greetingTimeout: 10_000,
        socketTimeout: 15_000,
      });

      await transporter.sendMail({
        from,
        to,
        replyTo: payload.replyTo,
        subject: payload.subject,
        text: payload.text,
        html: payload.html,
      });
    },
  };
}

/* --------------------------------------------------------------- Webhook */

function webhookChannel(): Channel | null {
  const url = env("LEAD_WEBHOOK_URL");
  if (!url) return null;

  const secret = env("LEAD_WEBHOOK_SECRET");

  return {
    name: "webhook",
    async send(payload) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10_000);

      try {
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(secret ? { "X-Lead-Secret": secret } : {}),
          },
          body: JSON.stringify({
            subject: payload.subject,
            replyTo: payload.replyTo,
            text: payload.text,
            ...payload.data,
          }),
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(`Webhook svarade ${res.status}`);
        }
      } finally {
        clearTimeout(timeout);
      }
    },
  };
}

/* ---------------------------------------------------------------- Resend */

function resendChannel(): Channel | null {
  const apiKey = env("RESEND_API_KEY");
  const from = env("RESEND_FROM") || env("MAIL_FROM");
  const to = recipients();

  if (!apiKey || !from || to.length === 0) return null;

  return {
    name: "resend",
    async send(payload) {
      const { Resend } = await import("resend");
      const { error } = await new Resend(apiKey).emails.send({
        from,
        to,
        replyTo: payload.replyTo,
        subject: payload.subject,
        text: payload.text,
        html: payload.html,
      });

      if (error) {
        throw new Error(error.message || "Okänt Resend-fel");
      }
    },
  };
}

/* ------------------------------------------------------------------ Send */

function channels(): Channel[] {
  const order = (env("MAIL_CHANNELS") || "smtp,webhook,resend")
    .split(",")
    .map((name) => name.trim().toLowerCase())
    .filter(Boolean);

  const builders: Record<string, () => Channel | null> = {
    smtp: smtpChannel,
    webhook: webhookChannel,
    resend: resendChannel,
  };

  return order
    .map((name) => builders[name]?.() ?? null)
    .filter((channel): channel is Channel => channel !== null);
}

export async function sendLeadMail(payload: MailPayload): Promise<MailResult> {
  const available = channels();

  if (available.length === 0) {
    return { ok: false, provider: null, errors: [], notConfigured: true };
  }

  const errors: { provider: string; error: string }[] = [];

  for (const channel of available) {
    try {
      await channel.send(payload);
      return { ok: true, provider: channel.name, errors, notConfigured: false };
    } catch (err) {
      errors.push({ provider: channel.name, error: errorMessage(err) });
    }
  }

  return { ok: false, provider: null, errors, notConfigured: false };
}

/** Vilka kanaler som är konfigurerade – används av hälsokontrollen. */
export function configuredChannels(): string[] {
  return channels().map((channel) => channel.name);
}
