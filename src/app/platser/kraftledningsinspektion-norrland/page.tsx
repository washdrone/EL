import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Kraftledningsinspektion med drönare i Norrland",
  description:
    "GridDrone utför kraftledningsinspektion med drönare i Norrland. BVLOS-kapacitet för långa sträckor i svårtillgänglig terräng. Begär offert.",
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
          { name: "Platser", href: "/platser/kraftledningsinspektion-stockholm" },
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
        description="Norrland har några av Sveriges längsta kraftledningssträckor i svårtillgänglig terräng. Med BVLOS-kapacitet inspekterar vi effektivt även de mest avlägsna ledningarna."
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
          <h2 className="heading-2">Drönarinspektion i Norrland</h2>
          <p className="body-text mt-4 max-w-3xl">
            Norrlands elnät sträcker sig genom skog, fjäll och glesbygd —
            terräng som gör traditionell inspektion tidskrävande och kostsam.
            Drönare med BVLOS-kapacitet är särskilt lämpade för dessa förhållanden.
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
            terräng gör BVLOS-inspektioner extra värdefulla.
          </p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
