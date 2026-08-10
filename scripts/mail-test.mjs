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
    auth: { user: env("SMTP_USER"), pass: env("SMTP_PASS") },
    connectionTimeout: 10_000,
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
    ? "Resend: nyckel finns (används som sista reserv)"
    : "Resend: inte konfigurerad"
);

if (!env("SMTP_HOST") && !env("LEAD_WEBHOOK_URL") && !env("RESEND_API_KEY")) {
  console.error(
    "\n✗ Ingen kanal är konfigurerad – formuläret kan inte skicka något. Se .env.example."
  );
  process.exit(1);
}

process.exit(failures > 0 ? 1 : 0);
