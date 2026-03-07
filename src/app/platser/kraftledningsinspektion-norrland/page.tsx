import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Kraftledningsinspektion Norrland | Drönare",
  description:
    "Drönarinspektion av kraftledningar i Norrland. BVLOS-kapacitet för långa sträckor i svårtillgänglig terräng. Begär offert.",
  path: "/platser/kraftledningsinspektion-norrland",
  keywords: [
    "kraftledningsinspektion Norrland",
    "drönarinspektion elnät Norrland",
    "BVLOS inspektion Norrland",
    "drönare kraftledning Norrland",
  ],
});

export default function NorrlandPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Platser", href: "/platser/kraftledningsinspektion-norrland" },
          { name: "Norrland" },
        ]}
      />
      <JsonLd
        type="Service"
        servicePath="/platser/kraftledningsinspektion-norrland"
        serviceName="Kraftledningsinspektion Norrland"
        serviceDescription="Professionell drönarinspektion av kraftledningar och elnät i Norrland."
      />

      <Hero
        title="Kraftledningsinspektion med drönare i Norrland"
        subtitle="Norrland"
        description="Norrland har några av Sveriges längsta kraftledningssträckor i svårtillgänglig terräng. Med BVLOS-kapacitet inspekterar vi effektivt även avlägsna ledningar i skog och fjällmiljö."
        primaryCta={{ label: "Begär offert", href: "/kontakt" }}
        secondaryCta={{ label: "Våra tjänster", href: "/tjanster" }}
      />

      <Breadcrumbs
        items={[
          { name: "Platser" },
          { name: "Norrland" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Drönarinspektion av elnät i Norrland</h2>
          <p className="body-text mt-4 max-w-3xl">
            Norrlands elnät sträcker sig genom skog, fjäll och glesbygd —
            terräng som gör traditionell inspektion med helikopter eller
            markfordon tidskrävande och kostsam. Stora avstånd mellan
            stolpar, begränsad väginfrastruktur och snörika vintrar förstärker
            behovet av effektiva inspektionsmetoder. Drönare med
            BVLOS-kapacitet är särskilt lämpade för dessa förhållanden.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Kraftledningsinspektion",
                desc: "Visuell inspektion av stolpar, isolatorer och ledningsgata i distributions- och regionnät.",
                href: "/tjanster/kraftledningsinspektion",
              },
              {
                title: "BVLOS — lång räckvidd",
                desc: "Inspektera långa ledningssträckor i svårtillgänglig terräng utan ompositionering.",
                href: "/tjanster/bvlos-inspektion",
              },
              {
                title: "Vegetationskontroll",
                desc: "LiDAR-kartläggning av vegetation i Norrlands skogsrika ledningsgator.",
                href: "/tjanster/vegetationskontroll",
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
          <h2 className="heading-2">Täckningsområde</h2>
          <p className="body-text mt-4 max-w-3xl">
            Vi utför uppdrag i hela Norrland — från Gävleborg i söder till
            Norrbotten i norr. Regionens långa avstånd och svårtillgängliga
            terräng gör BVLOS-inspektioner extra värdefulla för elnätsägare
            som ansvarar för stora nätområden.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Relaterade tjänster och branscher</h2>
          <ul className="mt-4 space-y-2 body-text max-w-3xl">
            <li>
              <Link href="/tjanster" className="text-brand-600 hover:underline">
                Alla tjänster
              </Link>{" "}
              — översikt över GridDrones inspektionstjänster
            </li>
            <li>
              <Link href="/tjanster/kraftledningsinspektion" className="text-brand-600 hover:underline">
                Kraftledningsinspektion
              </Link>{" "}
              — detaljerad beskrivning av metodik och leverabler
            </li>
            <li>
              <Link href="/tjanster/bvlos-inspektion" className="text-brand-600 hover:underline">
                BVLOS-inspektion
              </Link>{" "}
              — inspektion bortom synhåll för långa ledningssträckor
            </li>
            <li>
              <Link href="/branscher/energibolag" className="text-brand-600 hover:underline">
                Energibolag
              </Link>{" "}
              — hur vi stödjer elnätsägare och nätoperatörer
            </li>
          </ul>
        </div>
      </section>

      <CTABand />
    </>
  );
}
