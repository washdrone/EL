import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Drönarinspektion för nätägare & energibolag",
  description:
    "GridDrone inspekterar kraftledningar och elnät för regionala och lokala nätägare, elnätsleverantörer och energibolag. Strukturerade leveranser för ert nätförvaltningssystem.",
  path: "/branscher/energibolag",
  keywords: [
    "drönarinspektion nätägare",
    "drönarinspektion energibolag",
    "elnätsinspektion drönare",
    "kraftledningsinspektion elnätsbolag",
  ],
});

export default function EnergibolagPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Branscher", href: "/branscher/energibolag" },
          { name: "Nätägare & energibolag" },
        ]}
      />
      <JsonLd
        type="Service"
        servicePath="/branscher/energibolag"
        serviceName="Drönarinspektion för nätägare & energibolag"
        serviceDescription="Professionell drönarinspektion av kraftledningar och elnät för nätägare och energibolag i Sverige."
      />

      <Hero
        title="Drönarinspektion för nätägare & energibolag"
        subtitle="Nätägare, elnätsleverantörer & energibolag"
        description="Vi inspekterar ert distributions- och regionnät med standardiserade metoder och levererar strukturerade data direkt till ert nätförvaltningssystem — utan driftstopp och utan klättring."
        primaryCta={{ label: "Boka genomgång", href: "/kontakt" }}
        secondaryCta={{ label: "Se exempelrapport", href: "/exempelrapport" }}
      />

      <Breadcrumbs
        items={[
          { name: "Branscher" },
          { name: "Nätägare & energibolag" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Inspektionstjänster för ert elnät</h2>
          <p className="body-text mt-4 max-w-3xl">
            Oavsett om ni äger ett regionalt stamnät eller ett lokalt
            distributionsnät, anpassar vi inspektion och leveransformat
            efter era krav på dokumentation, spårbarhet och systemintegration.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Kraftledningsinspektion",
                desc: "Visuell inspektion av stolpar, isolatorer, traverser och ledningsgata. Georefererade bilder med standardiserade bildvinklar.",
                href: "/tjanster/kraftledningsinspektion",
              },
              {
                title: "Termografering",
                desc: "Radiometrisk värmekamera för att identifiera varmgångar, kontaktfel och överbelastade komponenter i drift.",
                href: "/tjanster/termografering-kraftledning",
              },
              {
                title: "Vegetationskontroll",
                desc: "LiDAR-baserad kartläggning av vegetation längs kraftledningsgator för prioritering av röjningsinsatser.",
                href: "/tjanster/vegetationskontroll",
              },
              {
                title: "Transformatorstationer",
                desc: "Visuell och termisk kontroll av transformatorstationer utan att personal exponeras för farlig arbetsmiljö.",
                href: "/tjanster/transformatorstation-inspektion",
              },
              {
                title: "BVLOS-inspektion",
                desc: "Inspektera långa ledningssträckor utan ompositionering. Effektivt för stamnät och svårtillgängliga sträckor.",
                href: "/tjanster/bvlos-inspektion",
              },
              {
                title: "Stormskadeinspektion",
                desc: "Akut skadekartläggning efter storm med prioriterad skadeöversikt som beslutsunderlag för reparation.",
                href: "/tjanster/stormskadeinspektion",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">
                  Läs mer →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <h2 className="heading-2">Varför drönare för nätinspektion?</h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-3">
            <div className="text-center">
              <h3 className="text-base font-semibold text-surface-900">Säkrare arbetsmetod</h3>
              <p className="mt-2 text-sm text-surface-500">
                Eliminera klättring och arbete på hög höjd. Minskad riskexponering
                för er personal och underleverantörer.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-base font-semibold text-surface-900">GIS-redo leveranser</h3>
              <p className="mt-2 text-sm text-surface-500">
                Georefererade bilder, avvikelserapporter och kartlager som
                importeras direkt i ert nätförvaltningssystem.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-base font-semibold text-surface-900">Repeterbar process</h3>
              <p className="mt-2 text-sm text-surface-500">
                Standardiserade bildvinklar och dokumentation som möjliggör
                jämförelse och trendanalys mellan inspektionscykler.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Från lokalt distributionsnät till regionnät</h2>
          <p className="body-text mt-4 max-w-3xl">
            Vi arbetar med nätägare av alla storlekar — från kommunala
            energibolag med lokala distributionsnät till regionala nätägare med
            omfattande ledningssträckor. Inspektionsprocessen skalas efter
            ert näts omfattning och era specifika underhållsbehov.
          </p>
          <div className="mt-8">
            <Link
              href="/tjanster/underhallsabonnemang"
              className="text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              Läs om vårt underhållsabonnemang →
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
