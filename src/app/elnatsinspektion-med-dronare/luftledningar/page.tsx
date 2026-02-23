import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = createPageMetadata({
  title: "Inspektion av luftledningar med drönare",
  description:
    "Drönareinspektion av luftledningar i distributions- och regionnät. Dokumentation av stolpar, isolatorer, traverser och ledningsgata utan driftstopp.",
  path: "/elnatsinspektion-med-dronare/luftledningar",
  keywords: [
    "inspektion luftledningar drönare",
    "kraftledningsinspektion",
    "stolpinspektion drönare",
    "luftledning inspektion",
    "elnät luftledning",
  ],
});

export default function LuftledningarPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          {
            name: "Elnätsinspektion med drönare",
            href: "/elnatsinspektion-med-dronare",
          },
          { name: "Luftledningar" },
        ]}
      />
      <JsonLd
        type="Service"
        serviceName="Inspektion av luftledningar med drönare"
        serviceDescription="Systematisk drönareinspektion av luftledningar i elnät – stolpar, isolatorer, traverser och ledningsgata."
        servicePath="/elnatsinspektion-med-dronare/luftledningar"
      />

      <Breadcrumbs
        items={[
          {
            name: "Elnätsinspektion med drönare",
            href: "/elnatsinspektion-med-dronare",
          },
          { name: "Luftledningar" },
        ]}
      />

      <Hero
        title="Inspektion av luftledningar – systematiskt och spårbart"
        subtitle="Luftledningar"
        description="Detaljerad dokumentation av stolpar, isolatorer, traverser, linor och ledningsgata. Utan klättring, utan driftstopp – med standardiserad och repeterbar metodik."
        primaryCta={{
          label: "Boka genomgång",
          href: "/elnatsinspektion-med-dronare/kontakt",
        }}
      />

      {/* Vad vi inspekterar */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-2">Vad vi inspekterar</h2>
            <p className="body-text mt-4">
              Vi inspekterar luftledningar i distributions- och regionnät.
              Inspektionen anpassas efter nätägarens specifikation och kan
              omfatta hela ledningssträckor eller utvalda sektioner.
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <h3 className="heading-3">Stolpar och fundament</h3>
                <p className="body-text mt-2">
                  Dokumentation av stolpens allmäntillstånd, sprickor,
                  röta (trästolpar), korrosion (stålstolpar) och
                  fundamentets kondition. Standardiserade bildvinklar
                  från flera håll.
                </p>
              </div>

              <div>
                <h3 className="heading-3">Isolatorer och kopplingar</h3>
                <p className="body-text mt-2">
                  Närbilder av isolatorer, bärklämmor, skarvar och
                  anslutningar. Dokumentation av sprickor, nedsmutsning,
                  mekanisk skada och korrosion.
                </p>
              </div>

              <div>
                <h3 className="heading-3">Traverser och konsoler</h3>
                <p className="body-text mt-2">
                  Inspektion av traverser, stag och konsoler. Kontroll av
                  infästningar, lutning och mekaniskt slitage.
                </p>
              </div>

              <div>
                <h3 className="heading-3">Linor och ledare</h3>
                <p className="body-text mt-2">
                  Visuell granskning av faslinor, jordlinor och
                  fiberoptiska kablar. Dokumentation av synliga skador,
                  hängande föremål och avvikande nedböjning.
                </p>
              </div>

              <div>
                <h3 className="heading-3">Ledningsgata och vegetation</h3>
                <p className="body-text mt-2">
                  Översiktlig dokumentation av vegetationsintrång,
                  träd inom riskavstånd och markförhållanden kring
                  stolpar. Ger underlag för röjningsplanering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fördelar */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-2">Fördelar med drönareinspektion av luftledningar</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Ingen klättring",
                  desc: "Minskar risken för fallolyckor och behovet av ställningsarbete. Inspektionen sker från säkert avstånd.",
                },
                {
                  title: "Ingen driftstörning",
                  desc: "Inspektionen genomförs normalt utan att ledningen behöver kopplas ifrån. Minimal påverkan på nätdriften.",
                },
                {
                  title: "Tillgänglig terräng",
                  desc: "Drönare når stolpar i svårtillgänglig terräng – skog, vatten, bergig mark – utan markburen utrustning.",
                },
                {
                  title: "Standardiserad dokumentation",
                  desc: "Samma bildvinklar och kontrollpunkter vid varje inspektion. Möjliggör objektiv jämförelse över tid.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="card"
                >
                  <h3 className="text-base font-semibold text-surface-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-surface-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intern navigering */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-2">Gå vidare</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link
                href="/elnatsinspektion-med-dronare/inspektionsprogram"
                className="nav-card group"
              >
                <h3 className="font-semibold text-brand-600 group-hover:text-brand-700">
                  Inspektionsprogram →
                </h3>
                <p className="mt-1 text-sm text-surface-500">
                  Se våra inspektionstyper: årlig, detaljerad och akut.
                </p>
              </Link>
              <Link
                href="/elnatsinspektion-med-dronare/dataleveranser"
                className="nav-card group"
              >
                <h3 className="font-semibold text-brand-600 group-hover:text-brand-700">
                  Dataleveranser →
                </h3>
                <p className="mt-1 text-sm text-surface-500">
                  Bilder, rapporter och kartlager – vad ni faktiskt får.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
