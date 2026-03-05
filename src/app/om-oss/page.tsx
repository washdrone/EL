import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = createPageMetadata({
  title: "Om GridDrone — Drönarinspektion av Elnät & Energiinfrastruktur",
  description:
    "GridDrone utför professionell drönarinspektion av kraftledningar, elnät och energiinfrastruktur i hela Sverige. BVLOS-certifierat team med gedigen branscherfarenhet.",
  path: "/om-oss",
  keywords: [
    "om GridDrone",
    "drönarinspektion företag Sverige",
    "kraftledningsinspektion företag",
  ],
});

const reasons = [
  {
    title: "BVLOS-certifierat",
    description:
      "Vi har tillstånd att flyga utanför synhåll (Beyond Visual Line of Sight), vilket gör det möjligt att inspektera långa ledningssträckor effektivt utan ompositionering.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
    ),
    iconExtra: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
  },
  {
    title: "Specialiserade på energi",
    description:
      "Vi är inget generellt drönarföretag. Vårt fokus ligger helt på inspektion av elnät och energiinfrastruktur, vilket ger djupare kompetens och bättre resultat.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    ),
  },
  {
    title: "Standardiserad process",
    description:
      "Varje uppdrag följer samma beprövade metodik – från planering och datainsamling till leverans. Det ger repeterbar kvalitet och jämförbart underlag över tid.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m10.5-6v4.5m0-4.5h-4.5m4.5 0L15 9m-10.5 6v4.5m0-4.5h4.5m-4.5 0L9 15m10.5 0l-5.25-5.25M19.5 15v4.5m0-4.5h-4.5"
      />
    ),
  },
  {
    title: "Certifierat & försäkrat",
    description:
      "Vi är registrerade UAS-operatörer med giltiga tillstånd och ansvarsförsäkring. Alla certifieringar och tillstånd dokumenteras löpande.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    ),
  },
];

export default function OmOssPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[{ name: "Om oss" }]}
      />

      <Hero
        title="Om GridDrone"
        subtitle="Om oss"
        description="GridDrone utför professionell drönarinspektion av kraftledningar, elnät och energiinfrastruktur i hela Sverige. BVLOS-certifierat team med gedigen branscherfarenhet."
        compact
      />

      <Breadcrumbs items={[{ name: "Om oss" }]} />

      {/* Vår mission */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-2">Vår mission</h2>
            <p className="body-text mt-6">
              GridDrone grundades med en tydlig mission: att göra inspektion av
              elnät och energiinfrastruktur säkrare, snabbare och mer
              kostnadseffektiv genom drönarteknologi.
            </p>
            <p className="body-text mt-4">
              Traditionell inspektion av kraftledningar innebär arbete på hög
              höjd, driftstopp och resurskrävande logistik. Vi ersätter och
              kompletterar dessa metoder med standardiserad drönareinspektion som
              levererar strukturerad, georefererad data – redo att användas
              direkt i era nätförvaltningssystem.
            </p>
            <p className="body-text mt-4">
              Genom att kombinera BVLOS-kapacitet med branschspecifik kompetens
              kan vi inspektera stora ledningssträckor effektivt, utan att
              tumma på noggrannhet eller säkerhet. Vårt mål är att vara den
              självklara partnern för elnätsbolag och energiföretag som vill
              modernisera sin inspektionsprocess.
            </p>
          </div>
        </div>
      </section>

      {/* Varför GridDrone */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Varför GridDrone</h2>
            <p className="body-text mt-4">
              Vi kombinerar specialiserad branschkunskap med avancerad
              drönarteknik för att leverera inspektion i toppklass.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2">
            {reasons.map((item) => (
              <div key={item.title} className="card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50">
                  <svg
                    className="h-6 w-6 text-brand-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    {item.icon}
                    {item.iconExtra}
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-surface-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-surface-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifieringar */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-2">Certifieringar</h2>
            <p className="body-text mt-4">
              Vi har de tillstånd och certifieringar som krävs för professionell
              drönarinspektion av elnät i Sverige.
            </p>
            <div className="mt-8">
              <Link
                href="/certifieringar"
                className="btn-primary inline-flex items-center"
              >
                Se alla certifieringar
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
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
