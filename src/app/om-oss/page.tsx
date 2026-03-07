import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = createPageMetadata({
  title: "Om GridDrone — Drönarinspektion av elnät & kraftledningar",
  description:
    "GridDrone är specialiserade på drönarinspektion av kraftledningar och elnät. EASA-utbildade piloter med BVLOS-behörighet för säker, effektiv nätinspektion.",
  path: "/om-oss",
  keywords: [
    "om GridDrone",
    "drönarinspektion företag Sverige",
    "kraftledningsinspektion företag",
    "elnätsinspektion drönare",
  ],
});

const reasons = [
  {
    title: "Renodlat fokus på elnät",
    description:
      "Vi är specialiserade på inspektion av kraftledningar, transformatorstationer och tillhörande nätinfrastruktur. Det innebär att vår metodik, utrustning och kompetens är anpassad för elnätsbranschens krav – inte generell drönarfotografering.",
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
    title: "BVLOS-kapacitet",
    description:
      "Våra piloter har BVLOS-behörighet (Beyond Visual Line of Sight), vilket möjliggör inspektion av långa ledningssträckor i en sammanhängande flygning – utan ompositionering och med lägre kostnad per inspekterad kilometer.",
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
    title: "Standardiserad datakvalitet",
    description:
      "Varje uppdrag följer en beprövad metodik – från flygplanering och datainsamling till strukturerad leverans. Det ger repeterbar kvalitet, jämförbart underlag över tid och data som kan integreras direkt i ert nätförvaltningssystem.",
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
    title: "Försäkrat & certifierat",
    description:
      "Vi har ansvarsförsäkring och de tillstånd som krävs för professionell drönarinspektion av elnät. Se vår certifieringssida för fullständiga detaljer.",
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
        description="Vi är specialiserade på drönarinspektion av kraftledningar, elnät och energiinfrastruktur. Vårt fokus ligger på att leverera strukturerad, tillförlitlig inspektionsdata till elnätsbolag och nätägare."
        compact
      />

      <Breadcrumbs items={[{ name: "Om oss" }]} />

      {/* Vår mission */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-2">Vår inriktning</h2>
            <p className="body-text mt-6">
              GridDrone finns till för att lösa ett konkret problem: inspektion
              av Sveriges elnät är resurskrävande, innebär arbete på hög höjd
              och ger ofta begränsad dokumentation. Vi erbjuder ett
              drönarbaserat alternativ som är säkrare för personalen, snabbare
              att genomföra och ger mer detaljerad data.
            </p>
            <p className="body-text mt-4">
              Vi är specialiserade på inspektion av{" "}
              <Link
                href="/tjanster/kraftledningsinspektion"
                className="text-brand-600 hover:text-brand-700 underline"
              >
                kraftledningar
              </Link>
              ,{" "}
              <Link
                href="/tjanster/transformatorstation-inspektion"
                className="text-brand-600 hover:text-brand-700 underline"
              >
                transformatorstationer
              </Link>{" "}
              och tillhörande nätkomponenter. Genom att fokusera enbart på
              elnätssektorn kan vi anpassa metodik, sensorer och
              leveransformat efter de specifika behov som nätägare och
              elnätsbolag har.
            </p>
            <p className="body-text mt-4">
              Vår{" "}
              <Link
                href="/tjanster/bvlos-inspektion"
                className="text-brand-600 hover:text-brand-700 underline"
              >
                BVLOS-kapacitet
              </Link>{" "}
              gör det möjligt att inspektera långa ledningssträckor i
              sammanhängande flygningar, vilket ger effektivitet utan att
              kompromissa med noggrannhet. Inspektionsdata levereras
              strukturerat och georefererat – redo att användas i era
              befintliga nätförvaltningssystem.
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
              Vi kombinerar branschspecifik kompetens inom elnätsinspektion med
              avancerad drönarteknik och standardiserade leveransprocesser.
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

      {/* Tjänster & certifieringar */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-2 text-center">
              Tjänster och certifieringar
            </h2>
            <p className="body-text mt-4 text-center">
              Våra piloter är EASA-utbildade med BVLOS-behörighet och
              mörkerflyg. Vi har ansvarsförsäkring för vår UAS-verksamhet.
              Utforska våra tjänster eller läs mer om våra tillstånd.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/certifieringar"
                className="btn-primary inline-flex items-center"
              >
                Se certifieringar
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
                href="/tjanster"
                className="btn-secondary inline-flex items-center"
              >
                Alla tjänster
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
