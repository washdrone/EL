import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Drönarinspektion för kommuner & energibolag",
  description:
    "Drönarinspektion av kraftledningar och elnät för kommuner och kommunala energibolag. Effektiv tillsyn av distributionsnät och belysningsinfrastruktur.",
  path: "/branscher/kommuner",
  keywords: [
    "drönarinspektion kommun",
    "kommunalt energibolag inspektion",
    "elnätsinspektion kommun",
    "kraftledningsinspektion kommunalt nät",
  ],
});

export default function KommunerPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Branscher", href: "/branscher/energibolag" },
          { name: "Kommuner", href: "/branscher/kommuner" },
        ]}
      />
      <JsonLd
        type="Service"
        servicePath="/branscher/kommuner"
        serviceName="Drönarinspektion för kommuner och kommunala energibolag"
        serviceDescription="Drönarinspektion av kraftledningar, distributionsnät och belysningsinfrastruktur för kommuner och kommunala energibolag."
      />

      <Hero
        title="Drönarinspektion för kommuner & kommunala energibolag"
        subtitle="Kommuner & offentlig sektor"
        description="Inspektion av kraftledningar, distributionsnät och belysningsinfrastruktur med drönare. Strukturerad dokumentation anpassad för kommunala elnätsägare och energibolag."
        primaryCta={{ label: "Boka genomgång", href: "/kontakt" }}
        secondaryCta={{ label: "Våra tjänster", href: "/tjanster" }}
      />

      <Breadcrumbs
        items={[
          { name: "Branscher" },
          { name: "Kommuner" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Inspektion av kommunala elnät</h2>
          <p className="body-text mt-4 max-w-3xl">
            Kommuner och kommunala energibolag äger och förvaltar
            distributionsnät, belysningsinfrastruktur och
            transformatorstationer. Drönarinspektion ger en systematisk
            överblick av anläggningarnas tillstånd — utan att kräva
            strömavbrott eller manuell klättring.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Kraftledningsinspektion",
                desc: "Visuell inspektion av stolpar, traverser, isolatorer och ledare i kommunala distributionsnät.",
                href: "/tjanster/kraftledningsinspektion",
              },
              {
                title: "Termografering av elnät",
                desc: "Värmekamerainspektion för att identifiera hotspots i anslutningar, skarvar och transformatorer.",
                href: "/tjanster/termografering-kraftledning",
              },
              {
                title: "Stormskadeinspektion",
                desc: "Snabb kartläggning av skadeomfattning efter storm för prioritering av reparationsinsatser.",
                href: "/tjanster/stormskadeinspektion",
              },
              {
                title: "Vegetationskontroll",
                desc: "Identifiera vegetation som riskerar att orsaka ledningsfel genom avståndsintrång i närheten av ledningsgator.",
                href: "/tjanster/vegetationskontroll",
              },
              {
                title: "Transformatorstationer",
                desc: "Inspektion av transformatorstationer och nätstationer med drönare och värmekamera.",
                href: "/tjanster/transformatorstation-inspektion",
              },
              {
                title: "Underhållsabonnemang",
                desc: "Löpande inspektion med planerad frekvens och trendrapportering av nätets tillstånd över tid.",
                href: "/tjanster/underhallsabonnemang",
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
          <h2 className="heading-2">Anpassat för offentlig upphandling</h2>
          <p className="body-text mt-4 max-w-3xl">
            GridDrone levererar strukturerade inspektionsrapporter med
            georefererade bilder, tillståndsklassificering och
            åtgärdsrekommendationer. Dokumentationen kan anpassas efter
            de krav som ställs vid offentlig upphandling, inklusive
            transparens och spårbarhet.
          </p>
          <p className="body-text mt-4 max-w-3xl">
            Alla inspektioner genomförs i enlighet med gällande
            luftfartsregler och med de tillstånd som krävs för
            drönaroperationer i aktuellt område.
          </p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
