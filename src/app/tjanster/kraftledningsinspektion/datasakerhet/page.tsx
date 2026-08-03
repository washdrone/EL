import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = createPageMetadata({
  title: "Datasäkerhet vid drönarinspektion av elnät",
  description:
    "Hur vi hanterar inspektionsdata: konfidentialitet, åtkomstkontroll, lagring och delning. Datasäkerhet vid drönarinspektion av elnät.",
  path: "/tjanster/kraftledningsinspektion/datasakerhet",
  keywords: [
    "datasäkerhet drönarinspektion",
    "konfidentialitet inspektionsdata",
    "datahantering elnätsinspektion",
    "säkerhet inspektionsdata elnät",
  ],
});

export default function DatasakerhetPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Elnätsinspektion med drönare", href: "/tjanster/kraftledningsinspektion" },
          { name: "Datasäkerhet", href: "/tjanster/kraftledningsinspektion/datasakerhet" },
        ]}
      />

      <Breadcrumbs
        items={[
          {
            name: "Elnätsinspektion med drönare",
            href: "/tjanster/kraftledningsinspektion",
          },
          { name: "Datasäkerhet" },
        ]}
      />

      <Hero
        title="Er data, era villkor"
        subtitle="Datasäkerhet"
        description="Inspektionsdata för elnät är känslig infrastrukturinformation. Vi hanterar den därefter – med tydliga rutiner för konfidentialitet, åtkomst och lagring."
      />

      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-2">Principer för datahantering</h2>
            <p className="body-text mt-4">
              All inspektionsdata behandlas som konfidentiell information.
              Nedan beskriver vi våra grundprinciper. Exakta villkor
              regleras i avtal med uppdragsgivaren.
            </p>

            <div className="mt-10 space-y-8">
              <div className="card">
                <h3 className="heading-3">Konfidentialitet</h3>
                <p className="body-text mt-3">
                  All data hanteras under sekretessavtal. Information om
                  nätstruktur, position och status delas aldrig med tredje
                  part utan uppdragsgivarens skriftliga godkännande.
                </p>
              </div>

              <div className="card">
                <h3 className="heading-3">Åtkomstkontroll</h3>
                <p className="body-text mt-3">
                  Tillgång till inspektionsdata begränsas till behörig
                  personal som deltar i det specifika uppdraget.
                  Uppgifter om nätstruktur och infrastruktur hanteras
                  med restriktiv åtkomst.
                </p>
              </div>

              <div className="card">
                <h3 className="heading-3">Lagring och livscykel</h3>
                <p className="body-text mt-3">
                  Data lagras säkert under avtalad period. Vid
                  avtalsslut raderas eller överlämnas all data enligt
                  överenskommelse med uppdragsgivaren.
                </p>
              </div>

              <div className="card">
                <h3 className="heading-3">Överföring</h3>
                <p className="body-text mt-3">
                  Dataleveranser sker via säkra kanaler. Vid stora
                  datamängder används krypterad filöverföring eller
                  fysisk media enligt överenskommelse.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-surface-50 p-6">
              <h3 className="text-base font-semibold text-surface-900">
                Frågor om datasäkerhet?
              </h3>
              <p className="mt-2 text-sm text-surface-500">
                Vi besvarar gärna detaljerade frågor om vår
                datahantering vid upphandling eller avtalsdiskussion.
                Kontakta oss för en genomgång av era specifika krav.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        heading="Har ni specifika krav på datahantering?"
        description="Vi anpassar våra rutiner efter era policyer och avtalskrav."
      />
    </>
  );
}
