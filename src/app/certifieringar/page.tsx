import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = createPageMetadata({
  title: "Certifieringar & Tillstånd | GridDrone",
  description:
    "GridDrones certifieringar och tillstånd för drönarinspektion av elnät. Kontakta oss för aktuella intyg och dokumentation.",
  path: "/certifieringar",
  keywords: [
    "BVLOS certifiering",
    "drönare tillstånd Sverige",
    "EASA UAS operatör",
    "drönarinspektion certifiering",
  ],
});

const certifications = [
  {
    title: "BVLOS-tillstånd [VERIFIERAS]",
    description:
      "Tillstånd för flygning utanför synhåll (Beyond Visual Line of Sight). Tillståndstyp och godkännandenummer ska anges här när de bekräftats.",
  },
  {
    title: "UAS-operatörstillstånd [VERIFIERAS]",
    description:
      "Registrering som UAS-operatör hos Transportstyrelsen. Registreringsnummer ska anges här när det bekräftats.",
  },
  {
    title: "PDRA S-01 EASA [VERIFIERAS]",
    description:
      "Predefined Risk Assessment för standardiserade BVLOS-operationer. Status och godkännande ska bekräftas.",
  },
  {
    title: "Ansvarsförsäkring [VERIFIERAS]",
    description:
      "UAS-ansvarsförsäkring. Försäkringsbolag och omfattning ska anges här när de bekräftats.",
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
        description="GridDrones certifieringar och tillstånd för drönarinspektion av elnät. Kontakta oss för aktuella intyg och dokumentation."
        compact
      />

      <Breadcrumbs items={[{ name: "Certifieringar" }]} />

      {/* Certifications grid */}
      <section className="section-padding bg-white">
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
                  <h2 className="mt-4 text-lg font-semibold text-surface-900">
                    {cert.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-surface-500">
                    {cert.description}
                  </p>
                  <p className="mt-3 text-xs font-medium text-surface-400">
                    (Verifieras)
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-surface-200 bg-surface-50 p-6 text-center">
              <p className="text-sm leading-relaxed text-surface-500">
                Alla certifieringar och tillstånd verifieras löpande. Kontakta
                oss för aktuella intyg.
              </p>
              <div className="mt-4">
                <Link
                  href="/kontakt"
                  className="text-sm font-medium text-brand-600 hover:text-brand-700"
                >
                  Kontakta oss &rarr;
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
