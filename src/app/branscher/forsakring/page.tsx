import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Drönarinspektioner för försäkringsbolag — Skadedokumentation",
  description:
    "GridDrone utför drönarinspektion och skadekartläggning för försäkringsbolag. Dokumentation av stormskador på elnät och infrastruktur som beslutsunderlag.",
  path: "/branscher/forsakring",
  keywords: [
    "drönarinspektion försäkringsbolag",
    "skadekartläggning drönare försäkring",
    "stormskada dokumentation drönare",
    "försäkring elnät inspektion",
  ],
});

export default function ForsakringPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Branscher", href: "/branscher/energibolag" },
          { name: "Försäkring" },
        ]}
      />
      <JsonLd
        type="Service"
        servicePath="/branscher/forsakring"
        serviceName="Drönarinspektioner för försäkringsbolag"
        serviceDescription="Skadekartläggning och dokumentation med drönare för försäkringsbolag i Sverige."
      />

      <Hero
        title="Drönarinspektioner för försäkringsbolag"
        subtitle="Försäkring & skadekartläggning"
        description="Snabb och systematisk skadekartläggning av elnät och infrastruktur med drönare. GPS-märkt dokumentation som beslutsunderlag för skadereglering."
        primaryCta={{ label: "Boka genomgång", href: "/kontakt" }}
        secondaryCta={{ label: "Stormskadeinspektion", href: "/tjanster/stormskadeinspektion" }}
      />

      <Breadcrumbs
        items={[
          { name: "Branscher" },
          { name: "Försäkring" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Tjänster för försäkringsbolag</h2>
          <p className="body-text mt-4 max-w-3xl">
            Försäkringsbolag behöver snabb, objektiv och systematisk dokumentation
            av skador — särskilt efter stormar och extremväder. Drönare ger en
            effektiv metod för att kartlägga skadeomfattning och skapa underlag
            för skadereglering.
          </p>

          <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Stormskadekartläggning",
                desc: "Systematisk dokumentation av stormskador på elnät och infrastruktur med GPS-märkt bildmaterial.",
                href: "/tjanster/stormskadeinspektion",
              },
              {
                title: "Tillståndsbedömning",
                desc: "Oberoende visuell inspektion av infrastrukturens skick som beslutsunderlag.",
                href: "/tjanster/kraftledningsinspektion",
              },
              {
                title: "Termografering",
                desc: "Identifiera dolda skador och defekter i elsystem med värmekamera.",
                href: "/tjanster/termografering-kraftledning",
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
          <h2 className="heading-2">Varför drönare för försäkring?</h2>
          <div className="mt-8 grid gap-5 sm:gap-6 md:gap-8 md:grid-cols-3">
            {[
              {
                title: "Snabb mobilisering",
                desc: "Drönare kan vara på plats snabbt efter en skadehändelse och dokumentera medan förhållandena fortfarande är relevanta.",
              },
              {
                title: "Objektiv dokumentation",
                desc: "GPS-märkta, tidsstämplade bilder ger ett objektivt underlag som komplement till skadeanmälan.",
              },
              {
                title: "Stora områden effektivt",
                desc: "Drönare täcker stora skadeområden systematiskt — effektivare än manuell inspektion av varje enskild komponent.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-base font-semibold text-surface-900">{item.title}</h3>
                <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
