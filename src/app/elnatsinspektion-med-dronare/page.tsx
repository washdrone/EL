import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import ProgramCards from "@/components/ProgramCards";
import ProcessSteps from "@/components/ProcessSteps";
import DeliverablesModule from "@/components/DeliverablesModule";
import ComplianceModule from "@/components/ComplianceModule";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";
import { CaseCard, sampleCases } from "@/components/CaseCard";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = createPageMetadata({
  title: "Elnätsinspektion med drönare",
  description:
    "Professionell drönareinspektion av luftledningar och elnät. Standardiserad datainsamling, georefererade bilder och strukturerade rapporter för elnätsbolag och entreprenörer.",
  path: "/elnatsinspektion-med-dronare",
  keywords: [
    "elnätsinspektion drönare",
    "kraftledningsinspektion",
    "inspektion luftledningar",
    "drönare elnät",
    "elnätsinspektion",
    "luftledningsinspektion",
  ],
});

export default function HubPage() {
  return (
    <>
      <JsonLd type="Service" />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[{ name: "Elnätsinspektion med drönare" }]}
      />

      <Hero
        title="Säkrare och mer effektiv inspektion av ert elnät"
        subtitle="Elnätsinspektion med drönare"
        description="Standardiserad drönareinspektion av luftledningar – från översikt till detaljgranskning. Strukturerade dataleveranser som ger er bättre underlag för underhållsplanering."
        primaryCta={{
          label: "Boka genomgång",
          href: "/elnatsinspektion-med-dronare/kontakt",
        }}
        secondaryCta={{
          label: "Se inspektionsprogram",
          href: "/elnatsinspektion-med-dronare/inspektionsprogram",
        }}
      />

      <ProofBar />

      {/* Intro section */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-2">
              Inspektion anpassad för elnätets behov
            </h2>
            <p className="body-text mt-6">
              Drönareinspektion ger er detaljerad dokumentation av
              luftledningar utan klättring, utan driftstopp och med
              konsekvent kvalitet oavsett terräng. Varje stolpe och
              ledningssektion dokumenteras med standardiserade bildvinklar
              och georefererade bilder – redo för ert
              nätförvaltningssystem.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-50">
                <svg className="h-7 w-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                Säkrare arbetsmetod
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Ingen klättring eller arbete på hög höjd. Minskad riskexponering
                för er personal.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-50">
                <svg className="h-7 w-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m10.5-6v4.5m0-4.5h-4.5m4.5 0L15 9m-10.5 6v4.5m0-4.5h4.5m-4.5 0L9 15m10.5 0l-5.25-5.25M19.5 15v4.5m0-4.5h-4.5" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                Repeterbar process
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Standardiserade bildvinklar och dokumentation möjliggör
                jämförelse över tid.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-50">
                <svg className="h-7 w-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                Direkt planeringsunderlag
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Strukturerade rapporter och GIS-lager redo för ert
                nätförvaltningssystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProgramCards />
      <ProcessSteps />
      <DeliverablesModule />
      <ComplianceModule />

      {/* Case stub */}
      <section className="section-padding bg-slate-50">
        <div className="container-section">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-2">Referensuppdrag</h2>
            <p className="body-text mt-4">
              Exempel på genomförda inspektionsuppdrag.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl">
            {sampleCases.map((c) => (
              <CaseCard key={c.slug} data={c} />
            ))}
          </div>
        </div>
      </section>

      <FAQ
        items={faqItems.slice(0, 6)}
        heading="Vanliga frågor"
        subheading="Har ni fler frågor? Se vår fullständiga FAQ eller kontakta oss direkt."
      />

      <div className="bg-white py-4 text-center">
        <Link
          href="/elnatsinspektion-med-dronare/faq"
          className="text-sm font-medium text-primary-600 hover:text-primary-700"
        >
          Se alla vanliga frågor →
        </Link>
      </div>

      <CTABand />
    </>
  );
}
