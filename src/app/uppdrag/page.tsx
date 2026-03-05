import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Genomförda uppdrag — Drönarinspektion i hela Sverige",
  description:
    "Se var GridDrone har utfört drönarinspektioner av kraftledningar, elnät och energiinfrastruktur i Sverige.",
  path: "/uppdrag",
  keywords: [
    "drönarinspektion Sverige",
    "kraftledningsinspektion uppdrag",
    "GridDrone referensuppdrag",
    "drönarinspektion referens",
  ],
});

const regions = [
  {
    name: "Stockholm & Mälardalen",
    href: "/platser/kraftledningsinspektion-stockholm",
    types: ["Kraftledningsinspektion", "Termografering", "Järnvägsinspektion"],
  },
  {
    name: "Göteborg & Västsverige",
    href: "/platser/kraftledningsinspektion-goteborg",
    types: ["Kraftledningsinspektion", "Vegetationskontroll"],
  },
  {
    name: "Malmö & Skåne",
    href: "/platser/kraftledningsinspektion-malmo",
    types: ["Kraftledningsinspektion", "Vindkraftinspektion"],
  },
  {
    name: "Norrland",
    href: "/platser/kraftledningsinspektion-norrland",
    types: ["BVLOS-inspektion", "Kraftledningsinspektion"],
  },
  {
    name: "Dalarna",
    href: "/platser/kraftledningsinspektion-dalarna",
    types: ["Kraftledningsinspektion", "Termografering"],
  },
];

export default function UppdragPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[{ name: "Uppdrag" }]}
      />

      <section className="gradient-hero py-16 sm:py-20">
        <div className="container-section text-center">
          <p className="eyebrow text-brand-200">Referensuppdrag</p>
          <h1 className="heading-1 mt-3 text-white">
            Drönarinspektion i hela Sverige
          </h1>
          <p className="body-text mx-auto mt-4 max-w-2xl text-blue-100">
            GridDrone utför drönarinspektioner av kraftledningar, elnät och
            energiinfrastruktur i hela Sverige. Nedan visas de regioner
            där vi är verksamma.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ name: "Uppdrag" }]} />

      {/* Regioner */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Regioner vi täcker</h2>
            <p className="body-text mt-4">
              Vi utför uppdrag i hela Sverige — från Malmö i söder till
              Norrbotten i norr. Klicka på en region för att läsa mer.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (
              <Link
                key={region.name}
                href={region.href}
                className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">
                  {region.name}
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {region.types.map((type) => (
                    <span
                      key={type}
                      className="rounded-lg bg-surface-100 px-2 py-0.5 text-xs text-surface-600"
                    >
                      {type}
                    </span>
                  ))}
                </div>
                <span className="mt-4 inline-block text-sm font-medium text-brand-600">
                  Se region →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nationell täckning */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-2">Nationell täckning</h2>
            <p className="body-text mt-4">
              GridDrone arbetar i hela Sverige. Oavsett var er infrastruktur
              finns kan vi planera och genomföra inspektioner. Kontakta oss
              för att diskutera ert specifika behov.
            </p>
            <div className="mt-8">
              <Link href="/kontakt" className="btn-primary">
                Kontakta oss
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand primaryHref="/kontakt" secondaryHref="/kontakt" />
    </>
  );
}
