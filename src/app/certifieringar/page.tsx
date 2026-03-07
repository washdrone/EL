import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = createPageMetadata({
  title: "Certifieringar & tillstånd | GridDrone",
  description:
    "GridDrones certifieringar för drönarinspektion av elnät. EASA-utbildade piloter, BVLOS-behörighet, mörkerflyg och ansvarsförsäkring.",
  path: "/certifieringar",
  keywords: [
    "BVLOS certifiering",
    "drönare tillstånd Sverige",
    "EASA UAS operatör",
    "drönarinspektion certifiering",
    "elnätsinspektion tillstånd",
  ],
});

const certifications = [
  {
    title: "EASA-utbildning",
    category: "Pilotbehörighet",
    description:
      "Våra piloter är utbildade enligt EASA:s regelverk för obemannade luftfartyg (UAS). Utbildningen omfattar de kategorier och behörigheter som krävs för professionell inspektion av elnätsinfrastruktur.",
    details: "Certifikatnummer: [VERIFIERAS]",
    relevance: (
      <>
        Relevant för alla våra{" "}
        <Link
          href="/tjanster"
          className="text-brand-600 hover:text-brand-700 underline"
        >
          inspektionstjänster
        </Link>
        .
      </>
    ),
  },
  {
    title: "BVLOS-behörighet",
    category: "Operativt tillstånd",
    description:
      "Behörighet för flygning utanför synhåll (Beyond Visual Line of Sight). Möjliggör inspektion av långa ledningssträckor i sammanhängande flygningar utan ompositionering, vilket ger effektivare inspektion av stora nätområden.",
    details: "Tillståndsnummer: [VERIFIERAS]",
    relevance: (
      <>
        Centralt för{" "}
        <Link
          href="/tjanster/bvlos-inspektion"
          className="text-brand-600 hover:text-brand-700 underline"
        >
          BVLOS-inspektion
        </Link>{" "}
        och{" "}
        <Link
          href="/tjanster/kraftledningsinspektion"
          className="text-brand-600 hover:text-brand-700 underline"
        >
          kraftledningsinspektion
        </Link>
        .
      </>
    ),
  },
  {
    title: "Mörkerflyg",
    category: "Operativt tillstånd",
    description:
      "Behörighet att utföra drönarflygning under mörka förhållanden. Ger flexibilitet i planering och genomförande, särskilt vid akuta inspektioner eller under vinterhalvårets begränsade dagsljus.",
    details: "Tillståndsnummer: [VERIFIERAS]",
    relevance: (
      <>
        Viktigt vid{" "}
        <Link
          href="/tjanster/stormskadeinspektion"
          className="text-brand-600 hover:text-brand-700 underline"
        >
          stormskadeinspektion
        </Link>{" "}
        och vinterinspektion.
      </>
    ),
  },
  {
    title: "Ansvarsförsäkring",
    category: "Försäkring",
    description:
      "Ansvarsförsäkring som täcker vår UAS-verksamhet och drönarbaserade inspektionsuppdrag. Försäkringen är anpassad för professionell inspektion av elnäts- och energiinfrastruktur.",
    details: "Försäkringsgivare och belopp: [VERIFIERAS]",
    relevance: <>Täcker samtliga inspektionsuppdrag.</>,
  },
];

export default function CertifieringarPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[{ name: "Certifieringar" }]}
      />

      <Hero
        title="Certifieringar och tillstånd"
        subtitle="Certifieringar"
        description="Översikt av GridDrones certifieringar, behörigheter och försäkringar för drönarinspektion av elnät och kraftledningar."
        compact
      />

      <Breadcrumbs items={[{ name: "Certifieringar" }]} />

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <p className="body-text">
              Professionell drönarinspektion av elnät kräver rätt behörigheter,
              tillstånd och försäkringar. Nedan redovisas de certifieringar som
              ligger till grund för vår verksamhet. Vi uppdaterar denna sida
              löpande – kontakta oss om ni behöver aktuella intyg inför
              upphandling eller avtalsförhandling.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications grid */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 sm:grid-cols-2">
              {certifications.map((cert) => (
                <div key={cert.title} className="card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50">
                    <svg
                      className="h-6 w-6 text-brand-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  </div>
                  <p className="mt-3 text-xs font-medium uppercase tracking-wide text-brand-600">
                    {cert.category}
                  </p>
                  <h2 className="mt-1 text-lg font-semibold text-surface-900">
                    {cert.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-surface-500">
                    {cert.description}
                  </p>
                  <p className="mt-3 text-xs text-surface-400 italic">
                    {cert.details}
                  </p>
                  <p className="mt-2 text-xs text-surface-500">
                    {cert.relevance}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-surface-200 bg-white p-6 text-center">
              <h3 className="text-base font-semibold text-surface-900">
                Behöver ni verifiering inför upphandling?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-surface-500">
                Vi tillhandahåller aktuella kopior av certifikat, tillstånd och
                försäkringsbevis på begäran. Kontakta oss så skickar vi
                relevanta underlag.
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/kontakt"
                  className="btn-primary inline-flex items-center text-sm"
                >
                  Kontakta oss
                  <svg
                    className="ml-2 h-4 w-4"
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
                </Link>
                <Link
                  href="/om-oss"
                  className="text-sm font-medium text-brand-600 hover:text-brand-700"
                >
                  Mer om GridDrone &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
