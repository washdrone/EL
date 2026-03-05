import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = createPageMetadata({
  title: "Blogg — Drönarinspektion av Elnät | GridDrone",
  description:
    "Artiklar och guider om drönarinspektion av kraftledningar, termografering, BVLOS och elnätsinspektion. Branschnyheter och tekniska djupdykningar.",
  path: "/blogg",
  keywords: [
    "drönarinspektion blogg",
    "kraftledningsinspektion guide",
    "BVLOS blogg",
  ],
});

const plannedArticles = [
  "Helikopter vs Drönare — Kostnadsanalys Kraftledningsinspektion",
  "Hur fungerar BVLOS-certifiering för drönare i Sverige?",
  "Vad är termografering av elnät och varför är det viktigt?",
  "Vegetationskontroll längs kraftledningar — guide och krav",
];

export default function BloggPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[{ name: "Blogg" }]}
      />

      <Hero
        title="Blogg & kunskapsbank"
        subtitle="Blogg"
        description="Artiklar och guider om drönarinspektion av kraftledningar, termografering, BVLOS och elnätsinspektion. Branschnyheter och tekniska djupdykningar."
        compact
      />

      <Breadcrumbs items={[{ name: "Blogg" }]} />

      {/* Kommer snart */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-2">Kommer snart</h2>
            <p className="body-text mt-6">
              Vi arbetar med att publicera artiklar och guider om
              drönarinspektion av elnät och energiinfrastruktur. Första
              artiklarna publiceras inom kort.
            </p>
          </div>
        </div>
      </section>

      {/* Planned articles */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Planerade artiklar</h2>
            <p className="body-text mt-4">
              Här är ett urval av de ämnen vi kommer att skriva om.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {plannedArticles.map((title) => (
              <div key={title} className="card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50">
                  <svg
                    className="h-5 w-5 text-brand-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-semibold text-surface-900">
                  {title}
                </h3>
                <p className="mt-2 text-xs font-medium text-surface-400">
                  Kommer snart
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
