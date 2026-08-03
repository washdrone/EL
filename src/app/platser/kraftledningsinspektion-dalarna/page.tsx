import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Kraftledningsinspektion Dalarna – drönare & termografi",
  description:
    "Drönarinspektion av kraftledningar och elnät i Dalarna. Visuell inspektion, termografering och LiDAR-vegetationskontroll. Begär offert.",
  path: "/platser/kraftledningsinspektion-dalarna",
  keywords: [
    "kraftledningsinspektion Dalarna",
    "drönarinspektion elnät Dalarna",
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
          { name: "Platser", href: "/platser" },
          { name: "Dalarna", href: "/platser/kraftledningsinspektion-dalarna" },
        ]}
      />
      <JsonLd
        type="Service"
        servicePath="/platser/kraftledningsinspektion-dalarna"
        serviceName="Kraftledningsinspektion Dalarna"
        serviceDescription="Professionell drönarinspektion av kraftledningar och elnät i Dalarna."
      />

      <Hero
        title="Kraftledningsinspektion med drönare i Dalarna"
        subtitle="Dalarna"
        description="Professionell drönarinspektion av kraftledningar och elnät i Dalarnas län — från tätortsnära distributionsnät till ledningssträckor genom skog och bergsområden."
        primaryCta={{ label: "Begär offert", href: "/kontakt" }}
        secondaryCta={{ label: "Våra tjänster", href: "/tjanster" }}
      />

      <Breadcrumbs
        items={[
          { name: "Platser", href: "/platser" },
          { name: "Dalarna" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Drönarinspektion av elnät i Dalarna</h2>
          <p className="body-text mt-4 max-w-3xl">
            Dalarna har ett varierat elnät med tätortsnära distributionsnät
            kring Falun och Borlänge samt långa ledningssträckor genom
            skogsmark och bergsområden i norr och väster. Regionens
            skiftande terräng och klimat ställer krav på regelbunden
            inspektion. Vi anpassar inspektionsmetod efter förutsättningarna
            i varje uppdrag.
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
                desc: "LiDAR-kartläggning av vegetation längs ledningsgator i skogsrik terräng.",
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
            Vi utför uppdrag i hela Dalarnas län, inklusive Falun, Borlänge,
            Mora, Leksand, Rättvik och Ludvika. Med BVLOS-kapacitet täcker vi
            även längre sträckor i skogsrik terräng.
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
