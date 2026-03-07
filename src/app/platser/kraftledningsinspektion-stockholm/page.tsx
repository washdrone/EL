import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Kraftledningsinspektion Stockholm | Drönare",
  description:
    "Drönarinspektion av kraftledningar och elnät i Stockholm och Mälardalen. Visuell inspektion, termografering och LiDAR-vegetationskontroll. Begär offert.",
  path: "/platser/kraftledningsinspektion-stockholm",
  keywords: [
    "kraftledningsinspektion Stockholm",
    "drönarinspektion elnät Stockholm",
    "elnätsinspektion Stockholm Mälardalen",
    "drönare kraftledning Stockholm",
  ],
});

export default function StockholmPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Platser", href: "/platser/kraftledningsinspektion-stockholm" },
          { name: "Stockholm & Mälardalen" },
        ]}
      />
      <JsonLd
        type="Service"
        servicePath="/platser/kraftledningsinspektion-stockholm"
        serviceName="Kraftledningsinspektion Stockholm"
        serviceDescription="Professionell drönarinspektion av kraftledningar och elnät i Stockholm och Mälardalen."
      />

      <Hero
        title="Kraftledningsinspektion med drönare i Stockholm"
        subtitle="Stockholm & Mälardalen"
        description="Professionell drönarinspektion av kraftledningar, distributions- och regionnät i Stockholmsregionen och Mälardalen. Visuell inspektion, termografering och vegetationskontroll."
        primaryCta={{ label: "Begär offert", href: "/kontakt" }}
        secondaryCta={{ label: "Våra tjänster", href: "/tjanster" }}
      />

      <Breadcrumbs
        items={[
          { name: "Platser" },
          { name: "Stockholm & Mälardalen" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Drönarinspektion av elnät i Stockholmsregionen</h2>
          <p className="body-text mt-4 max-w-3xl">
            Stockholmsregionen och Mälardalen har ett omfattande elnät som försörjer
            landets mest tätbefolkade område. Distributions- och regionnät sträcker
            sig genom både tätortsnära miljöer och skogsbygd, vilket ställer höga
            krav på regelbunden tillsyn. Drönarinspektion ger möjlighet att
            inventera stolpar, isolatorer och ledningsgator utan driftavbrott
            eller behov av tunga fordon.
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
                desc: "LiDAR-kartläggning av vegetation längs ledningsgator i skogs- och tätortsmiljö.",
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
            Vi utför uppdrag i hela Stockholmsregionen och Mälardalen, inklusive
            Södertälje, Norrtälje, Uppsala, Västerås och Eskilstuna. Med
            BVLOS-kapacitet kan längre ledningssträckor inspekteras utan
            ompositionering.
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
