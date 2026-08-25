#!/usr/bin/env node
/**
 * Testar e-postuppsättningen för kontaktformuläret utan att starta sajten.
 *
 *   npm run mail:test            – verifierar anslutning/konfiguration
 *   npm run mail:test -- --send  – skickar dessutom ett riktigt testmejl
 *
 * Läser miljövariabler från .env.local och .env (samma namn som i .env.example).
 */

import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import nodemailer from "nodemailer";

function loadEnvFile(file) {
  if (!existsSync(file)) return;
  for (const line of readFileSync(file, "utf8").split("\n")) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (!match) continue;
    const [, key, rawValue] = match;
    if (process.env[key] !== undefined) continue;
    process.env[key] = rawValue.replace(/^["']|["']$/g, "");
  }
}

loadEnvFile(resolve(process.cwd(), ".env.local"));
loadEnvFile(resolve(process.cwd(), ".env"));

const env = (name) => {
  const value = process.env[name];
  return value && value.trim() !== "" ? value.trim() : undefined;
};

const send = process.argv.includes("--send");
const to = env("LEAD_TO_EMAIL") || "info@griddrone.se";

let failures = 0;

/* ---------------------------------------------------------------- SMTP --- */

if (env("SMTP_HOST") && env("SMTP_USER") && env("SMTP_PASS")) {
  const port = Number(env("SMTP_PORT") || 587);
  const secure = env("SMTP_SECURE") ? env("SMTP_SECURE") === "true" : port === 465;

  console.log(`SMTP: ${env("SMTP_USER")}@${env("SMTP_HOST")}:${port} (secure=${secure})`);

  const transporter = nodemailer.createTransport({
    host: env("SMTP_HOST"),
    port,
    secure,
    requireTLS: !secure, // samma krav som i src/lib/mailer.ts
    auth: { user: env("SMTP_USER"), pass: env("SMTP_PASS") },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  try {
    await transporter.verify();
    console.log("  ✓ anslutning och inloggning OK");

    if (send) {
      const info = await transporter.sendMail({
        from: env("MAIL_FROM") || `GridDrone <${env("SMTP_USER")}>`,
        to,
        subject: "Testmejl från griddrone.se",
        text: "Detta är ett testmejl från npm run mail:test.",
      });
      console.log(`  ✓ testmejl skickat till ${to} (${info.messageId})`);
    }
  } catch (err) {
    failures++;
    console.error(`  ✗ ${err.message}`);
  }
} else {
  console.log("SMTP: inte konfigurerad (SMTP_HOST/SMTP_USER/SMTP_PASS saknas)");
}

/* ------------------------------------------------------------- Webhook --- */

if (env("LEAD_WEBHOOK_URL")) {
  console.log(`Webhook: ${env("LEAD_WEBHOOK_URL")}`);

  if (send) {
    try {
      const res = await fetch(env("LEAD_WEBHOOK_URL"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(env("LEAD_WEBHOOK_SECRET")
            ? { "X-Lead-Secret": env("LEAD_WEBHOOK_SECRET") }
            : {}),
        },
        body: JSON.stringify({
          subject: "Testutskick från griddrone.se",
          company: "Testbolaget AB",
          contact: "Test Testsson",
          email: to,
          test: true,
        }),
      });
      if (!res.ok) throw new Error(`svarade ${res.status}`);
      console.log("  ✓ webhook svarade OK");
    } catch (err) {
      failures++;
      console.error(`  ✗ ${err.message}`);
    }
  } else {
    console.log("  – kör med --send för att testa anropet");
  }
} else {
  console.log("Webhook: inte konfigurerad (LEAD_WEBHOOK_URL saknas)");
}

/* -------------------------------------------------------------- Resend --- */

console.log(
  env("RESEND_API_KEY")
    ? "Resend: nyckel finns (används som reserv)"
    : "Resend: inte konfigurerad"
);

/* ---------------------------------------------------------- FormSubmit --- */

if (env("FORMSUBMIT_DISABLED") === "true") {
  console.log("FormSubmit: avstängd (FORMSUBMIT_DISABLED=true)");
} else {
  const target = env("FORMSUBMIT_TOKEN") || to;
  console.log(`FormSubmit: aktiv utan konfiguration, skickar till ${target}`);

  if (send) {
    const base = env("FORMSUBMIT_BASE_URL") || "https://formsubmit.co/ajax";
    try {
      const res = await fetch(`${base}/${encodeURIComponent(target)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "Testutskick från griddrone.se",
          _captcha: "false",
          _template: "table",
          Meddelande: "Detta är ett testutskick från npm run mail:test.",
        }),
      });
      const result = await res.json().catch(() => null);
      if (!res.ok || String(result?.success) === "false") {
        throw new Error(result?.message || `svarade ${res.status}`);
      }
      console.log(`  ✓ ${result?.message || "OK"}`);
      console.log(
        `  → Första gången skickar tjänsten ett aktiveringsmejl till ${target}.\n` +
          "    Klicka på länken i det mejlet, annars levereras inga leads."
      );
    } catch (err) {
      failures++;
      console.error(`  ✗ ${err.message}`);
    }
  } else {
    console.log("  – kör med --send för att testa utskicket");
  }
}

process.exit(failures > 0 ? 1 : 0);
