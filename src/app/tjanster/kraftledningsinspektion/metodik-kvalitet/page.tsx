import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import ProcessSteps from "@/components/ProcessSteps";
import ComplianceModule from "@/components/ComplianceModule";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = createPageMetadata({
  title: "Metodik och kvalitetssäkring – drönarinspektion",
  description:
    "Vår inspektionsmetodik: standardiserade flygprofiler, kvalitetskontroll, spårbarhet och HSE. Upphandlingsvänlig process för elnätsbolag.",
  path: "/tjanster/kraftledningsinspektion/metodik-kvalitet",
  keywords: [
    "metodik drönarinspektion elnät",
    "kvalitetssäkring inspektionsdata",
    "HSE drönare elnät",
    "standardiserad inspektion luftledningar",
    "QA elnätsinspektion",
  ],
});

export default function MetodikKvalitetPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          {
            name: "Elnätsinspektion med drönare",
            href: "/tjanster/kraftledningsinspektion",
          },
          { name: "Metodik & kvalitet" },
        ]}
      />

      <Breadcrumbs
        items={[
          {
            name: "Elnätsinspektion med drönare",
            href: "/tjanster/kraftledningsinspektion",
          },
          { name: "Metodik & kvalitet" },
        ]}
      />

      <Hero
        title="Strukturerad metodik – spårbar kvalitet"
        subtitle="Metodik & kvalitetssäkring"
        description="Från planering till leverans: varje steg i vår process är standardiserat, dokumenterat och spårbart. Upphandlingsvänlig metodik för elnätsbolag och entreprenörer."
      />

      <ProcessSteps />

      {/* Detailed methodology */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-2">Vår metodik i detalj</h2>

            <div className="mt-10 space-y-10">
              <div>
                <h3 className="heading-3">Förberedelse och planering</h3>
                <p className="body-text mt-3">
                  Varje uppdrag inleds med en detaljerad genomgång av
                  uppdragsgivarens GIS-underlag, specifikationer och
                  prioriteringar. Vi fastställer inspektionsomfång,
                  bildkrav, leveransformat och tidsplan. Riskanalys
                  genomförs och nödvändiga tillstånd hanteras.
                </p>
              </div>

              <div>
                <h3 className="heading-3">Standardiserade flygprofiler</h3>
                <p className="body-text mt-3">
                  Vi använder definierade flygprofiler per stolptyp och
                  inspektionstyp. Varje stolpe dokumenteras från
                  samma vinklar och avstånd vid varje
                  inspektionstillfälle, vilket skapar jämförbar data
                  över tid.
                </p>
              </div>

              <div>
                <h3 className="heading-3">Kvalitetskontroll (QA)</h3>
                <p className="body-text mt-3">
                  Alla bilder och data genomgår en intern
                  kvalitetskontroll innan leverans. Saknade bilder,
                  otillräcklig upplösning eller felaktig
                  georeferering identifieras och kompletteras.
                  Leverans sker först när alla kvalitetskrav är uppfyllda.
                </p>
              </div>

              <div>
                <h3 className="heading-3">Spårbarhet</h3>
                <p className="body-text mt-3">
                  Varje bild och rapport kopplas till en specifik stolpe,
                  sektion och inspektionsdatum. Alla leveranser kan
                  spåras tillbaka till det enskilda inspektionstillfället
                  och den pilot som genomförde uppdraget.
                </p>
              </div>

              <div>
                <h3 className="heading-3">Repeterbarhet</h3>
                <p className="body-text mt-3">
                  Standardiserade flygprofiler och dokumentationsrutiner
                  innebär att inspektioner kan upprepas med samma
                  precision oavsett vilken pilot som genomför uppdraget.
                  Detta ger er objektiv och jämförbar data över tid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ComplianceModule />

      {/* Upphandling */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-2">Upphandling och avtal</h2>
            <p className="body-text mt-4">
              Vi kan tillhandahålla den information
              som behövs för att utvärdera vår tjänst i en upphandlingsprocess:
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Tydlig metodbeskrivning med definierade flygprofiler",
                "Leveransformat och kvalitetskrav",
                "QA-process och rutiner för avvikelsehantering",
                "HSE-rutiner och riskanalys",
                "Prissättningsmodell (per km, per stolpe, eller fast pris)",
                "Referensuppdrag och kontaktuppgifter",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-surface-500"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-base text-surface-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand
        heading="Inför upphandling?"
        description="Vi tillhandahåller komplett underlag för er utvärdering. Kontakta oss för metodbeskrivning, referensuppdrag och prismodell."
        primaryLabel="Kontakta oss"
      />
    </>
  );
}
