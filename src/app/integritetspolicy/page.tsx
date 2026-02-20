import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY_NAME, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata({
  title: "Integritetspolicy",
  description: `Integritetspolicy för ${COMPANY_NAME}. Hur vi behandlar personuppgifter vid kontaktförfrågningar.`,
  path: "/integritetspolicy",
});

export default function IntegritetspolicyPage() {
  return (
    <>
      <Header />
      <main className="section-padding bg-white">
        <div className="container-section">
          <article className="prose mx-auto max-w-3xl">
            <h1 className="heading-1">Integritetspolicy</h1>
            <p className="body-text mt-4">
              Senast uppdaterad: 2025-01-01
            </p>

            <div className="mt-8 space-y-8 text-base leading-7 text-slate-700">
              <section>
                <h2 className="heading-3">Personuppgiftsansvarig</h2>
                <p className="mt-2">
                  {COMPANY_NAME} är personuppgiftsansvarig för behandlingen av
                  de personuppgifter som samlas in via denna webbplats.
                </p>
              </section>

              <section>
                <h2 className="heading-3">
                  Vilka uppgifter samlar vi in?
                </h2>
                <p className="mt-2">
                  Vi samlar in de uppgifter ni själva lämnar vid kontakt via
                  vårt kontaktformulär:
                </p>
                <ul className="mt-3 list-inside list-disc space-y-1 text-slate-600">
                  <li>Företagsnamn</li>
                  <li>Kontaktpersons namn</li>
                  <li>E-postadress</li>
                  <li>Telefonnummer (valfritt)</li>
                  <li>Uppgifter om inspektionsbehov (nätområde, typ, omfattning)</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3">
                  Varför behandlar vi era uppgifter?
                </h2>
                <p className="mt-2">
                  Vi behandlar era personuppgifter för att:
                </p>
                <ul className="mt-3 list-inside list-disc space-y-1 text-slate-600">
                  <li>Besvara er förfrågan och kontakta er</li>
                  <li>Utarbeta och leverera en offert</li>
                  <li>Administrera kundrelationen</li>
                </ul>
                <p className="mt-3">
                  Rättslig grund: Berättigat intresse (att besvara
                  affärsförfrågningar) samt, vid avtal, fullgörande av avtal.
                </p>
              </section>

              <section>
                <h2 className="heading-3">Hur länge sparar vi uppgifterna?</h2>
                <p className="mt-2">
                  Kontaktuppgifter från förfrågningar sparas i högst 24
                  månader efter senaste kontakttillfälle, om inget avtal
                  ingås. Vid avtal sparas uppgifterna under avtalstiden
                  och enligt gällande bokföringsregler.
                </p>
              </section>

              <section>
                <h2 className="heading-3">Delning med tredje part</h2>
                <p className="mt-2">
                  Vi delar inte era personuppgifter med tredje part i
                  marknadsföringssyfte. Uppgifter kan delas med
                  leverantörer av IT-tjänster som behandlar uppgifter
                  på vårt uppdrag (personuppgiftsbiträden).
                </p>
              </section>

              <section>
                <h2 className="heading-3">Era rättigheter</h2>
                <p className="mt-2">
                  Ni har rätt att begära tillgång till, rättelse av eller
                  radering av era personuppgifter. Ni har också rätt att
                  invända mot behandlingen. Kontakta oss på{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-primary-600 underline hover:text-primary-700"
                  >
                    {CONTACT_EMAIL}
                  </a>{" "}
                  för att utöva era rättigheter.
                </p>
              </section>

              <section>
                <h2 className="heading-3">Cookies</h2>
                <p className="mt-2">
                  Denna webbplats kan använda nödvändiga cookies för
                  grundläggande funktionalitet. Om Google Analytics (GA4)
                  är aktiverat används även analytiska cookies. Ni kan
                  kontrollera cookies via er webbläsares inställningar.
                </p>
              </section>

              <section>
                <h2 className="heading-3">Kontakt</h2>
                <p className="mt-2">
                  Frågor om vår behandling av personuppgifter besvaras via{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-primary-600 underline hover:text-primary-700"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </section>
            </div>

            <div className="mt-12">
              <Link
                href="/elnatsinspektion-med-dronare"
                className="text-sm font-medium text-primary-600 hover:text-primary-700"
              >
                ← Tillbaka till elnätsinspektion
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
