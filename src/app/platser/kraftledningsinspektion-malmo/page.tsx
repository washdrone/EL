import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Kraftledningsinspektion med drönare i Malmö",
  description:
    "GridDrone utför kraftledningsinspektion med drönare i Malmö och Skåne. Visuell inspektion, termografering och vindkraftinspektion. Begär offert.",
  path: "/platser/kraftledningsinspektion-malmo",
  keywords: [
    "kraftledningsinspektion Malmö",
    "drönarinspektion elnät Skåne",
    "vindkraftinspektion Skåne",
    "drönare kraftledning Malmö",
  ],
});

export default function MalmoPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Platser", href: "/platser/kraftledningsinspektion-malmo" },
          { name: "Malmö & Skåne" },
        ]}
      />
      <JsonLd
        type="Service"
        servicePath="/platser/kraftledningsinspektion-malmo"
        serviceName="Kraftledningsinspektion Malmö"
        serviceDescription="Professionell drönarinspektion av kraftledningar, elnät och vindkraftparker i Malmö och Skåne."
      />

      <Hero
        title="Kraftledningsinspektion med drönare i Malmö"
        subtitle="Malmö & Skåne"
        description="Professionell drönarinspektion av kraftledningar, elnät och vindkraftparker i Skåneregionen. BVLOS-certifierat team."
        primaryCta={{ label: "Begär offert", href: "/kontakt" }}
        secondaryCta={{ label: "Våra tjänster", href: "/tjanster" }}
      />

      <Breadcrumbs
        items={[
          { name: "Platser" },
          { name: "Malmö & Skåne" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Drönarinspektion i Skåne</h2>
          <p className="body-text mt-4 max-w-3xl">
            Skåne har både ett omfattande elnät och en växande vindkraftsektor.
            Vi erbjuder drönarinspektion av kraftledningar, vindkraftverk och
            solcellsparker i hela regionen.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Kraftledningsinspektion",
                href: "/tjanster/kraftledningsinspektion",
              },
              {
                title: "Vindkraftinspektion",
                href: "/tjanster/vindkraftinspektion",
              },
              {
                title: "Solcellspark inspektion",
                href: "/tjanster/solcellspark-inspektion",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="card group p-6 text-center transition-all hover:border-brand-200 hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">
                  {item.title}
                </h3>
                <span className="mt-2 inline-block text-sm font-medium text-brand-600">
                  Läs mer →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
