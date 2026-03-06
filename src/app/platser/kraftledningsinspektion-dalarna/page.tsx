import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Drönarinspektion energi i Dalarna",
  description:
    "GridDrone utför drönarinspektion av kraftledningar och energiinfrastruktur i Dalarna. Visuell inspektion, termografering och LiDAR. Begär offert.",
  path: "/platser/kraftledningsinspektion-dalarna",
  keywords: [
    "drönarinspektion energi Dalarna",
    "kraftledningsinspektion Dalarna",
    "elnätsinspektion Dalarna drönare",
    "drönare kraftledning Dalarna",
  ],
});

export default function DalarnaPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Platser", href: "/platser/kraftledningsinspektion-stockholm" },
          { name: "Dalarna" },
        ]}
      />
      <JsonLd
        type="Service"
        servicePath="/platser/kraftledningsinspektion-dalarna"
        serviceName="Drönarinspektion energi Dalarna"
        serviceDescription="Professionell drönarinspektion av kraftledningar och energiinfrastruktur i Dalarna."
      />

      <Hero
        title="Drönarinspektion av energiinfrastruktur i Dalarna"
        subtitle="Dalarna"
        description="Vi utför professionell drönarinspektion av kraftledningar, elnät och energiinfrastruktur i Dalarnas län — från Borlänge och Falun till glesbygden."
        primaryCta={{ label: "Begär offert", href: "/kontakt" }}
        secondaryCta={{ label: "Våra tjänster", href: "/tjanster" }}
      />

      <Breadcrumbs
        items={[
          { name: "Platser" },
          { name: "Dalarna" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Drönarinspektion i Dalarna</h2>
          <p className="body-text mt-4 max-w-3xl">
            Dalarna har ett varierat elnät med både tätortsnära distributionsnät
            och långa ledningssträckor genom skog och bergsområden. Vi anpassar
            inspektionsmetod efter terräng och krav.
          </p>

          <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Kraftledningsinspektion",
                desc: "Visuell inspektion av stolpar, isolatorer och ledningsgata.",
                href: "/tjanster/kraftledningsinspektion",
              },
              {
                title: "Termografering",
                desc: "Värmekamera för att hitta varmgångar och kontaktfel.",
                href: "/tjanster/termografering-kraftledning",
              },
              {
                title: "Vegetationskontroll",
                desc: "LiDAR-kartläggning av vegetation längs ledningsgator.",
                href: "/tjanster/vegetationskontroll",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="card group transition-all hover:border-brand-200 hover:shadow-md"
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
            Vi utför uppdrag i hela Dalarnas län, inklusive Falun, Borlänge,
            Mora, Leksand, Rättvik och Ludvika. Med BVLOS-kapacitet täcker vi
            även längre sträckor i skogsrik terräng.
          </p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
