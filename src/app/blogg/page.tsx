import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = createPageMetadata({
  title: "Blogg — inspektion av elnät & kraftledningar",
  description:
    "Artiklar och guider om drönarinspektion av kraftledningar, termografering, BVLOS och elnätsinspektion. Branschnyheter och tekniska djupdykningar.",
  path: "/blogg",
  keywords: [
    "drönarinspektion blogg",
    "kraftledningsinspektion guide",
    "BVLOS blogg",
  ],
});

const articles = [
  {
    title: "Helikopter vs Drönare — Kostnadsanalys Kraftledningsinspektion",
    description: "Jämförelse av helikopter och drönare som inspektionsmetod. Kostnad, effektivitet, datakvalitet och säkerhet.",
    href: "/blogg/helikopter-vs-dronare",
    category: "Kostnadsanalys",
  },
  {
    title: "Vad är BVLOS och vilka tillstånd krävs i Sverige?",
    description: "Guide till BVLOS-flygning — regelverk, tillståndskrav och vad det innebär för inspektionsuppdrag.",
    href: "/blogg/bvlos-tillstand-sverige",
    category: "Regelverk",
  },
  {
    title: "Vad är termografering av elnät — guide för elnätsägare",
    description: "Hur termografering fungerar, vad det kan hitta och varför det är viktigt för elnätsunderhåll.",
    href: "/blogg/termografering-elnat",
    category: "Guide",
  },
  {
    title: "Vegetationskontroll längs kraftledningar — vad säger lagen?",
    description: "Regler, ansvar och hur drönare med LiDAR effektiviserar kartläggning av riskträd.",
    href: "/blogg/vegetationskontroll-kraftledning",
    category: "Regelverk",
  },
  {
    title: "Stormskador på elnät — så kartlägger drönare skador",
    description: "Hur drönare används för att snabbt och systematiskt kartlägga stormskador på elnät.",
    href: "/blogg/stormskador-elnat-dronare",
    category: "Aktuellt",
  },
  {
    title: "Järnvägsinspektion med drönare — möjligheter och krav",
    description: "Guide om drönarinspektion av järnvägskontaktledningar — möjligheter, krav och fördelar.",
    href: "/blogg/jarnvagsinspektion-guide",
    category: "Guide",
  },
  {
    title: "AI-bildanalys vid drönarinspektion av elnät",
    description: "Hur maskininlärning automatiserar feldetektering i drönarbild och vad det innebär för nätägare.",
    href: "/blogg/ai-bildanalys-dronare-elnat",
    category: "Teknik",
  },
  {
    title: "Prediktivt underhåll av elnät — från reaktivt till datadrivet",
    description: "Hur drönardata möjliggör prediktivt underhåll och längre livslängd på elnätskomponenter.",
    href: "/blogg/prediktivt-underhall-elnat",
    category: "Strategi",
  },
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

      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-brand-500" />
            <span className="eyebrow-brand">Artiklar</span>
          </div>
          <h2 className="heading-2">Artiklar & guider</h2>

          <div className="mt-12 grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group flex flex-col bg-white p-6 transition-colors hover:bg-surface-50"
              >
                <span className="inline-flex self-start border border-brand-200 bg-brand-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                  {article.category}
                </span>
                <h3 className="mt-4 text-base font-semibold leading-snug text-surface-900 group-hover:text-brand-700">
                  {article.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-surface-500">
                  {article.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-600 group-hover:text-brand-700">
                  Läs mer
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
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
