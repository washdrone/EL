import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Kraftledningsinspektion Göteborg | Drönare",
  description:
    "Drönarinspektion av kraftledningar och elnät i Göteborg och Västra Götaland. Visuell inspektion, termografering och vegetationskontroll. Begär offert.",
  path: "/platser/kraftledningsinspektion-goteborg",
  keywords: [
    "kraftledningsinspektion Göteborg",
    "drönarinspektion elnät Göteborg",
    "termografering elnät Göteborg",
    "drönare kraftledning Västra Götaland",
  ],
});

export default function GoteborgPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Platser", href: "/platser/kraftledningsinspektion-goteborg" },
          { name: "Göteborg & Västra Götaland" },
        ]}
      />
      <JsonLd
        type="Service"
        servicePath="/platser/kraftledningsinspektion-goteborg"
        serviceName="Kraftledningsinspektion Göteborg"
        serviceDescription="Professionell drönarinspektion av kraftledningar och elnät i Göteborg och Västra Götaland."
      />

      <Hero
        title="Kraftledningsinspektion med drönare i Göteborg"
        subtitle="Göteborg & Västra Götaland"
        description="Professionell drönarinspektion av kraftledningar och elnätsinfrastruktur i Göteborgsregionen och Västra Götaland. Visuell inspektion, termografering och vegetationskontroll."
        primaryCta={{ label: "Begär offert", href: "/kontakt" }}
        secondaryCta={{ label: "Våra tjänster", href: "/tjanster" }}
      />

      <Breadcrumbs
        items={[
          { name: "Platser" },
          { name: "Göteborg & Västra Götaland" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Drönarinspektion av elnät i Västsverige</h2>
          <p className="body-text mt-4 max-w-3xl">
            Västsveriges elnät sträcker sig genom varierad terräng — från
            kustlandskap och industriområden kring Göteborg till skogsbygd
            och jordbruksmark i inlandet. Distributions- och regionnät som
            försörjer hamn, industri och samhällen ställer krav på
            tillförlitlig och regelbunden inspektion.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Kraftledningsinspektion",
                desc: "Visuell inspektion av stolpar, isolatorer och ledningsgata i distributions- och regionnät.",
                href: "/tjanster/kraftledningsinspektion",
              },
              {
                title: "Termografering",
                desc: "Värmekamera för att identifiera varmgångar och kontaktfel i elnätskomponenter.",
                href: "/tjanster/termografering-kraftledning",
              },
              {
                title: "Vegetationskontroll",
                desc: "LiDAR-kartläggning av vegetation längs ledningsgator i skogs- och kustmiljö.",
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
            Vi utför uppdrag i hela Västra Götaland, inklusive Göteborg,
            Borås, Trollhättan, Uddevalla och Skövde. Med BVLOS-kapacitet
            kan längre ledningssträckor inspekteras utan ompositionering.
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
              <Link href="/tjanster/stormskadeinspektion" className="text-brand-600 hover:underline">
                Stormskadeinspektion
              </Link>{" "}
              — snabb skadeinventering efter väderrelaterade händelser
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
