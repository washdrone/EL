This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Kontaktformuläret – e-postutskick

Formuläret på `/kontakt` postar till `/api/lead`, som skickar leadet via ett
leverantörsoberoende lager (`src/lib/mailer.ts`). Kanalerna provas i tur och
ordning tills en lyckas:

| Kanal | Miljövariabler | När den passar |
| --- | --- | --- |
| `smtp` | `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `MAIL_FROM` | Bäst i längden. Fungerar med valfri befintlig brevlåda (webbhotell, Microsoft 365, Google Workspace) och skickar från er egen domän. |
| `webhook` | `LEAD_WEBHOOK_URL`, `LEAD_WEBHOOK_SECRET` | Leads som JSON till Zapier, Make, n8n, Slack eller ett kalkylark. |
| `resend` | `RESEND_API_KEY`, `RESEND_FROM` | Valfri reserv om Resend-nyckeln fungerar. |
| `formsubmit` | *(inga)* | **Standard.** Kräver varken konto eller nyckel, så formuläret fungerar utan konfiguration. |

**Ingen konfiguration krävs för att formuläret ska fungera.** Utan
miljövariabler går leads via FormSubmit till adressen i `CONTACT_EMAIL`.
Första gången en ny mottagaradress används skickar tjänsten ett
aktiveringsmejl dit som måste bekräftas innan leads levereras – kör
`npm run mail:test -- --send` för att framkalla det mejlet direkt i stället
för att en riktig förfrågan ska bli aktiveringen. Observera att leads då
passerar en tredjepartstjänst; vill man undvika det sätter man upp SMTP.

Ordningen styrs av `MAIL_CHANNELS` (standard: `smtp,webhook,resend,formsubmit`).
Mottagare styrs av `LEAD_TO_EMAIL` (kommaseparerad lista); utan den används
`CONTACT_EMAIL` i `src/lib/constants.ts`. Alla variabler beskrivs i
`.env.example`.

### Hemligheter

`.env` är incheckad i repot och repot är publikt – lägg därför **aldrig**
API-nycklar eller SMTP-lösenord där. Hemligheter sätts i Vercel under
Project Settings → Environment Variables, eller lokalt i `.env.local`
(gitignorerad).

### Testa uppsättningen

```bash
npm run mail:test           # verifierar konfiguration och SMTP-inloggning
npm run mail:test -- --send # skickar dessutom ett riktigt testmejl
```

Om ingen kanal lyckas returnerar API:t 502, loggar hela leadet i serverloggen
(så inget förloras) och formuläret erbjuder besökaren att skicka samma innehåll
som vanligt mejl istället.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
