import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Drönarinspektion för försäkringsbolag",
  description:
    "Georefererad skadedokumentation med drönare för försäkringsbolag. Objektiv kartläggning av stormskador på elnät och kraftledningar som underlag vid skadereglering.",
  path: "/branscher/forsakring",
  keywords: [
    "drönarinspektion försäkringsbolag",
    "skadedokumentation drönare försäkring",
    "stormskada dokumentation elnät",
    "försäkring skadereglering drönare",
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
        serviceName="Drönarinspektion för försäkringsbolag — skadedokumentation"
        serviceDescription="Georefererad skadedokumentation med drönare för försäkringsbolag. Objektiv kartläggning av skador på elnät och infrastruktur."
      />

      <Hero
        title="Drönarinspektion för försäkringsbolag — skadedokumentation"
        subtitle="Försäkring & skadereglering"
        description="Objektiv, georefererad dokumentation av skador på elnät och kraftledningar. Strukturerade rapporter med GPS-position, tidsstämpel och bildmaterial som underlag vid försäkringsbedömning."
        primaryCta={{ label: "Kontakta oss", href: "/kontakt" }}
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
          <h2 className="heading-2">Skadedokumentation med drönare</h2>
          <p className="body-text mt-4 max-w-3xl">
            Vid skador på elnät och kraftledningar — exempelvis efter storm,
            blixtnedslag eller trädfällning — behöver försäkringsbolag
            tillförlitlig dokumentation av skadeomfattningen.
            Drönarinspektion ger georefererat bildmaterial med GPS-koordinater
            och tidsstämplar, vilket skapar ett objektivt underlag för
            skadereglering.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Stormskadekartläggning",
                desc: "Systematisk dokumentation av stormskador på kraftledningar, stolpar och nätstationer med georefererade bilder.",
                href: "/tjanster/stormskadeinspektion",
              },
              {
                title: "Tillståndsbedömning",
                desc: "Oberoende visuell inspektion av infrastrukturens tillstånd före eller efter en skadehändelse.",
                href: "/tjanster/kraftledningsinspektion",
              },
              {
                title: "Termografering",
                desc: "Värmekamerainspektion för att identifiera dolda skador och defekter i elnät och elanläggningar.",
                href: "/tjanster/termografering-kraftledning",
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
          <h2 className="heading-2">Varför drönarbaserad skadedokumentation?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Georefererad dokumentation",
                desc: "Varje bild kopplas till GPS-koordinater och tidsstämpel, vilket ger ett spårbart och objektivt underlag för skadebedömning.",
              },
              {
                title: "Stora skadeområden",
                desc: "Drönare kan kartlägga omfattande skadeområden systematiskt — ett effektivt alternativ till manuell inspektion punkt för punkt.",
              },
              {
                title: "Tillgänglighet vid skadehändelse",
                desc: "Drönare kan nå skadeplatser som kan vara svårtillgängliga efter exempelvis storm eller översvämning, beroende på rådande förhållanden.",
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

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Rapportering och leverans</h2>
          <p className="body-text mt-4 max-w-3xl">
            Inspektionsresultatet levereras som en strukturerad rapport med
            georefererade bilder, tillståndsklassificering och
            skadeomfattning. Rapporten kan anpassas efter
            försäkringsbolagets specifika krav och format.
            Dokumentationen kan användas som underlag vid
            försäkringsärenden och skadereglering.
          </p>
          <p className="body-text mt-4 max-w-3xl">
            <Link
              href="/tjanster/stormskadeinspektion"
              className="text-brand-600 underline hover:text-brand-800"
            >
              Läs mer om vår stormskadeinspektion →
            </Link>
          </p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
