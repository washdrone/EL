import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProofBar from "@/components/ProofBar";
import ProgramCards from "@/components/ProgramCards";
import ProcessSteps from "@/components/ProcessSteps";
import DeliverablesModule from "@/components/DeliverablesModule";
import ComplianceModule from "@/components/ComplianceModule";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";
import Image from "next/image";
import { CaseCard, sampleCases } from "@/components/CaseCard";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = createPageMetadata({
  title: "Kraftledningsinspektion med Drönare",
  description:
    "Professionell inspektion av kraftledningar med drönare. Högupplöst RGB-kamera, radiometrisk värmekamera och LiDAR. RTK-positionering. Begär offert.",
  path: "/tjanster/kraftledningsinspektion",
  keywords: [
    "kraftledningsinspektion drönare",
    "drönarinspektion elledning",
    "elnätsinspektion drönare",
    "kraftledningsinspektion",
    "inspektion luftledningar",
    "drönare elnät",
    "elnätsinspektion",
    "luftledningsinspektion",
  ],
});

const comparisonRows = [
  {
    label: "Arbete på höjd",
    drone: "Krävs ej",
    traditional: "Klättring eller skylift",
    advantage: "drone",
  },
  {
    label: "Frånkoppling",
    drone: "Kan ofta undvikas vid visuell inspektion",
    traditional: "Krävs vid närinspektion",
    advantage: "drone",
  },
  {
    label: "Markåtkomst",
    drone: "Ej nödvändig",
    traditional: "Krävs för fordon och personal",
    advantage: "drone",
  },
  {
    label: "Georeferering av bilder",
    drone: "Automatisk via GPS/EXIF",
    traditional: "Manuell registrering",
    advantage: "drone",
  },
  {
    label: "Återbesök samma punkt",
    drone: "Sparade flygvägar",
    traditional: "Beroende av inspektörens rutin",
    advantage: "drone",
  },
  {
    label: "Fysisk komponentkontroll",
    drone: "Ej möjlig",
    traditional: "Direkt åtkomst och provtagning",
    advantage: "traditional",
  },
] as const;

export default function HubPage() {
  return (
    <>
      <JsonLd type="Service" servicePath="/tjanster/kraftledningsinspektion" />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[{ name: "Elnätsinspektion med drönare" }]}
      />

      <JsonLd type="FAQPage" faqItems={faqItems.slice(0, 6)} />
      <JsonLd
        type="HowTo"
        howToName="Så fungerar kraftledningsinspektion med drönare"
        howToDescription="Steg-för-steg-process för drönarinspektion av kraftledningar och elnät."
        howToSteps={[
          { name: "Planering och GIS-integration", text: "Vi tar emot era nätkartor och GIS-underlag, sätter inspektionsparametrar och planerar flygvägar baserat på ledningens sträckning, spänningsnivå och terräng." },
          { name: "Systematisk datainsamling", text: "Drönare med RGB-kamera, radiometrisk värmekamera och RTK-positionering flyger längs ledningen. Varje stolpe dokumenteras med standardiserade bildvinklar." },
          { name: "Kvalitetskontroll och klassificering", text: "Bilder genomgår QA-kontroll. Fynd klassificeras efter allvarlighetsgrad, georefereras och sammanställs med åtgärdsrekommendationer." },
          { name: "Leverans i GIS-format", text: "Strukturerad rapport, georefererade bilder och GIS-lager levereras digitalt — redo för import i ert nätförvaltningssystem." },
        ]}
      />

      <Hero
        title="Kraftledningsinspektion med drönare — säkrare, mer effektiv"
        subtitle="Kraftledningsinspektion drönare"
        description="Standardiserad drönarinspektion av luftledningar – från översikt till detaljgranskning. Strukturerade dataleveranser direkt till ert nätförvaltningssystem."
        primaryCta={{
          label: "Begär offert",
          href: "/kontakt",
        }}
        secondaryCta={{
          label: "Se inspektionsprogram",
          href: "/tjanster/kraftledningsinspektion/inspektionsprogram",
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "Kraftledningsinspektion" },
        ]}
      />

      <ProofBar />

      {/* AEO Answer-First Block */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-2">Hur fungerar kraftledningsinspektion med drönare?</h2>
            <p className="body-text mt-6">
              Kraftledningsinspektion med drönare innebär att en EASA-utbildad pilot flyger en
              drönare utrustad med högupplöst RGB-kamera och radiometrisk värmekamera längs
              kraftledningen. Varje stolpe, isolator, traverser och ledningsgata fotograferas
              med standardiserade bildvinklar. Bilderna georefereras automatiskt via
              RTK-positionering (centimeternoggrannhet) och levereras i en strukturerad
              rapport med klassificerade fynd och åtgärdsrekommendationer — redo för
              ert nätförvaltningssystem.
            </p>
            <p className="body-text mt-4">
              Inspektionen utförs normalt utan driftstopp och utan att personal behöver
              klättra. Metoden möjliggör repeterbar dokumentation som kan jämföras mellan
              inspektionstillfällen för trendanalys och prediktivt underhåll. Läs vår{" "}
              <Link href="/guider/dronareinspektion-elnat" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400">
                kompletta guide om drönarinspektion av elnät
              </Link>{" "}
              eller jämför{" "}
              <Link href="/jamforelser/helikopter-vs-dronare-inspektion" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400">
                helikopter vs drönare för elnätsinspektion
              </Link>.
            </p>
            <div className="mt-8">
              <Link href="/kontakt" className="btn-primary inline-flex items-center">
                Begär offert
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inspektionsomfång — brief, links to dedicated pages */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-2">Vad inspekteras vid kraftledningsinspektion?</h2>
            <p className="body-text mt-6">
              Inspektionen omfattar alla bärande och elektriska komponenter i luftledningsnätet —
              stolpar, isolatorer, fasledare, topplinor, traverser, fästen, skarvar och ledningsgata.
              Varje komponent dokumenteras med standardiserade bildvinklar och georefererade bilder.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/guider/komponenter-elnat" className="text-sm font-medium text-brand-600 hover:text-brand-700 underline decoration-brand-200 underline-offset-2">
                Se alla inspekterade komponenter →
              </Link>
              <span className="text-surface-300">|</span>
              <Link href="/guider/feltyper-kraftledningar" className="text-sm font-medium text-brand-600 hover:text-brand-700 underline decoration-brand-200 underline-offset-2">
                Se vilka feltyper som identifieras →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="heading-2">
                Inspektion anpassad för elnätets behov
              </h2>
              <p className="body-text mt-6">
                Drönarinspektion ger er detaljerad dokumentation av{" "}
                <Link
                  href="/tjanster/kraftledningsinspektion/luftledningar"
                  className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400"
                >
                  luftledningar
                </Link>{" "}
                utan klättring, utan driftstopp och med
                konsekvent kvalitet oavsett terräng. Varje stolpe och
                ledningssektion dokumenteras med standardiserade bildvinklar
                och georefererade bilder – redo för ert
                nätförvaltningssystem.
              </p>
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src="/images/kraftledningar.png"
                alt="Drönarvy av kraftledningsstolpe och ledningsgata"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              {
                title: "Säkrare arbetsmetod",
                desc: "Ingen klättring eller arbete på hög höjd. Minskad riskexponering för er personal.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                ),
              },
              {
                title: "Repeterbar process",
                desc: "Standardiserade bildvinklar och dokumentation möjliggör jämförelse över tid.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m10.5-6v4.5m0-4.5h-4.5m4.5 0L15 9m-10.5 6v4.5m0-4.5h4.5m-4.5 0L9 15m10.5 0l-5.25-5.25M19.5 15v4.5m0-4.5h-4.5" />
                ),
              },
              {
                title: "Direkt planeringsunderlag",
                desc: "Strukturerade rapporter och GIS-lager redo för ert nätförvaltningssystem.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                ),
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50">
                  <svg className="h-7 w-7 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-semibold text-surface-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-surface-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: Drones vs Traditional */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <div className="section-intro-wide">
            <h2 className="heading-2">Drönare vs. traditionell inspektion</h2>
            <p className="body-text mt-4">
              Metoderna kompletterar varandra. Här är de viktigaste skillnaderna.
            </p>
          </div>

          {/* Mobile cards */}
          <div className="mt-10 grid gap-4 md:hidden">
            {comparisonRows.map((row) => (
              <article key={row.label} className="card p-0">
                <div className="border-b border-surface-100 px-4 py-3">
                  <p className="text-sm font-semibold text-surface-800">{row.label}</p>
                </div>
                <div className="grid grid-cols-1 divide-y divide-surface-100">
                  <div
                    className={`px-4 py-3 ${
                      row.advantage === "drone" ? "bg-brand-50/30" : "bg-white"
                    }`}
                  >
                    <p className="eyebrow">Drönare</p>
                    <span
                      className={`mt-1 inline-flex items-center gap-1.5 text-sm ${
                        row.advantage === "drone"
                          ? "font-medium text-brand-700"
                          : "text-surface-600"
                      }`}
                    >
                      {row.advantage === "drone" && (
                        <svg
                          className="h-3.5 w-3.5 shrink-0 text-accent-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                      {row.drone}
                    </span>
                  </div>
                  <div
                    className={`px-4 py-3 ${
                      row.advantage === "traditional" ? "bg-brand-50/30" : "bg-white"
                    }`}
                  >
                    <p className="eyebrow">Traditionell</p>
                    <span
                      className={`mt-1 inline-flex items-center gap-1.5 text-sm ${
                        row.advantage === "traditional"
                          ? "font-medium text-brand-700"
                          : "text-surface-600"
                      }`}
                    >
                      {row.advantage === "traditional" && (
                        <svg
                          className="h-3.5 w-3.5 shrink-0 text-accent-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                      {row.traditional}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Tablet/Desktop comparison table */}
          <div className="mx-auto mt-12 hidden max-w-4xl overflow-hidden rounded-2xl border border-surface-200 bg-white shadow-soft md:block">
            {/* Header */}
            <div className="grid grid-cols-[1.2fr,1fr,1fr] border-b border-surface-200 bg-surface-50">
              <div className="p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-surface-500">Aspekt</p>
              </div>
              <div className="border-l border-surface-200 p-4 text-center sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">Drönare</p>
              </div>
              <div className="border-l border-surface-200 p-4 text-center sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-surface-600">Traditionell</p>
              </div>
            </div>

            {/* Rows */}
            {comparisonRows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1.2fr,1fr,1fr] ${i % 2 === 0 ? "bg-white" : "bg-surface-50/50"}`}
              >
                <div className="p-4 sm:p-5">
                  <p className="text-sm font-medium text-surface-800">{row.label}</p>
                </div>
                <div className={`border-l border-surface-100 p-4 text-center sm:p-5 ${row.advantage === "drone" ? "bg-brand-50/30" : ""}`}>
                  <span className={`inline-flex items-center gap-1.5 text-sm ${row.advantage === "drone" ? "font-medium text-brand-700" : "text-surface-500"}`}>
                    {row.advantage === "drone" && (
                      <svg className="h-3.5 w-3.5 shrink-0 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {row.drone}
                  </span>
                </div>
                <div className={`border-l border-surface-100 p-4 text-center sm:p-5 ${row.advantage === "traditional" ? "bg-brand-50/30" : ""}`}>
                  <span className={`inline-flex items-center gap-1.5 text-sm ${row.advantage === "traditional" ? "font-medium text-brand-700" : "text-surface-500"}`}>
                    {row.advantage === "traditional" && (
                      <svg className="h-3.5 w-3.5 shrink-0 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {row.traditional}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-surface-500">
            Jämförelsen avser visuell inspektion av luftledningar. Förutsättningar varierar beroende på spänningsnivå, terräng och inspektionstyp.
          </p>
        </div>
      </section>

      {/* Hur GridDrone arbetar */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-2">Hur GridDrone arbetar</h2>
            <p className="body-text mt-6">
              Vår inspektionsmetodik bygger på tre principer: standardiserade flygprofiler
              för repeterbar datainsamling, systematisk dokumentation av varje komponent
              med definierade bildvinklar, och strukturerad leverans i GIS-kompatibla
              format redo för ert nätförvaltningssystem.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m10.5-6v4.5m0-4.5h-4.5m4.5 0L15 9m-10.5 6v4.5m0-4.5h4.5m-4.5 0L9 15m10.5 0l-5.25-5.25M19.5 15v4.5m0-4.5h-4.5" />
                  </svg>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-surface-900">Standardiserade flygprofiler</h3>
                <p className="mt-1 text-xs text-surface-500">Sparade flygvägar och bildvinklar möjliggör exakt jämförelse mellan inspektionstillfällen.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-surface-900">Intern QA före leverans</h3>
                <p className="mt-1 text-xs text-surface-500">Alla bilder genomgår kvalitetskontroll. Saknade eller otillräckliga bilder kompletteras.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-surface-900">GIS-redo leverans</h3>
                <p className="mt-1 text-xs text-surface-500">Strukturerade rapporter och kartlager i SWEREF99 TM redo för direktimport.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-content CTA */}
      <section className="bg-brand-50 py-12">
        <div className="container-section text-center">
          <h3 className="text-lg font-semibold text-brand-900">
            Vill ni se hur inspektionen kan anpassas till ert nät?
          </h3>
          <p className="mx-auto mt-2 max-w-lg text-sm text-brand-700">
            Kontakta oss för en teknisk genomgång av ert inspektionsbehov och ett
            kostnadsestimat baserat på er nätstruktur.
          </p>
          <div className="mt-6">
            <Link href="/kontakt" className="btn-primary">
              Begär offert
            </Link>
          </div>
        </div>
      </section>

      <ProgramCards />
      <ProcessSteps />
      <DeliverablesModule />
      <ComplianceModule />

      {/* Case stub – visas bara om det finns verifierade referensuppdrag */}
      {sampleCases.length > 0 && (
        <section className="section-padding bg-surface-50">
          <div className="container-section">
            <div className="section-intro">
              <h2 className="heading-2">Referensuppdrag</h2>
              <p className="body-text mt-4">
                Exempel på genomförda inspektionsuppdrag.
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-2xl space-y-4">
              {sampleCases.map((c) => (
                <CaseCard key={c.slug} data={c} />
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQ
        items={faqItems.slice(0, 6)}
        heading="Vanliga frågor"
        subheading="Har ni fler frågor? Se vår fullständiga FAQ eller kontakta oss direkt."
      />

      <div className="bg-white py-6 text-center">
        <Link
          href="/tjanster/kraftledningsinspektion/faq"
          className="text-sm font-medium text-brand-600 hover:text-brand-700"
        >
          Se alla vanliga frågor →
        </Link>
      </div>

      {/* Relaterat & intern länkning */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <h2 className="heading-2">Fördjupa er i drönarinspektion</h2>
          <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/guider/dronareinspektion-elnat" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
              <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Guide: Drönarinspektion av elnät</h3>
              <p className="mt-2 text-sm text-surface-500">Komplett guide om hur drönarinspektion fungerar — utrustning, process och leveranser.</p>
              <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs guiden →</span>
            </Link>
            <Link href="/guider/termografering-kraftledningar" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
              <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Guide: Termografering av kraftledningar</h3>
              <p className="mt-2 text-sm text-surface-500">Hur termisk analys identifierar varmgångar, kontaktmotstånd och dolda fel i elnätet.</p>
              <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs guiden →</span>
            </Link>
            <Link href="/jamforelser/helikopter-vs-dronare-inspektion" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
              <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Helikopter vs drönare</h3>
              <p className="mt-2 text-sm text-surface-500">Jämförelse av kostnad, datakvalitet och säkerhet mellan helikopter och drönare.</p>
              <span className="mt-3 inline-block text-sm font-medium text-brand-600">Se jämförelsen →</span>
            </Link>
            <Link href="/guider/dataleverans-gis-elnat" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
              <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Guide: Dataleverans och GIS</h3>
              <p className="mt-2 text-sm text-surface-500">Så levereras inspektionsdata i GIS-kompatibla format till ert nätförvaltningssystem.</p>
              <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs guiden →</span>
            </Link>
            <Link href="/guider/bvlos-inspektion-elnat" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
              <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Guide: BVLOS-inspektion</h3>
              <p className="mt-2 text-sm text-surface-500">Inspektion bortom synhåll — regler, teknik och tillämpningar för elnät.</p>
              <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs guiden →</span>
            </Link>
            <Link href="/guider/upphandling-dronareinspektion" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
              <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Guide: Upphandling</h3>
              <p className="mt-2 text-sm text-surface-500">Vad ni bör tänka på vid upphandling av drönarinspektion — kravspec, metodik och leveransformat.</p>
              <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs guiden →</span>
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
