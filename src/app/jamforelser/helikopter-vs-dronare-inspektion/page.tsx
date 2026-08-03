import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import type { FAQItem } from "@/data/faq";

export const metadata: Metadata = createPageMetadata({
  title: "Helikopter vs drönare för elnätsinspektion",
  description:
    "Jämförelse mellan helikopter och drönare för inspektion av kraftledningar och elnät. Kostnad, säkerhet, datakvalitet och effektivitet. Vilken metod passar ert nät?",
  path: "/jamforelser/helikopter-vs-dronare-inspektion",
  ogType: "article",
  keywords: [
    "helikopter vs drönare inspektion",
    "kostnad drönarinspektion",
    "helikopter elnätsinspektion jämförelse",
    "drönare eller helikopter kraftledning",
    "manuell vs drönare elnät",
  ],
});

const comparisonRows = [
  {
    aspect: "Driftkostnad per km",
    drone: "Lägre, särskilt vid korta till medellånga sträckor",
    helicopter: "Högre mobiliserings- och driftkostnad",
    advantage: "drone",
  },
  {
    aspect: "Markåtkomst",
    drone: "Krävs ej — flyger från valfri position",
    helicopter: "Krävs ej — men behöver landningsplats",
    advantage: "drone",
  },
  {
    aspect: "Driftstopp",
    drone: "Kan normalt undvikas vid visuell inspektion",
    helicopter: "Kan normalt undvikas",
    advantage: "neutral",
  },
  {
    aspect: "Detaljnivå nära komponent",
    drone: "Hög — kan flyga nära enskilda komponenter",
    helicopter: "Begränsad — större avstånd till objekt",
    advantage: "drone",
  },
  {
    aspect: "Långa sträckor (>50 km)",
    drone: "Kräver BVLOS eller ompositionering",
    helicopter: "Effektivt vid sammanhängande sträckor",
    advantage: "helicopter",
  },
  {
    aspect: "Termografering",
    drone: "Radiometrisk kamera ger exakt temperaturdata",
    helicopter: "Möjligt men dyrare och lägre detaljnivå",
    advantage: "drone",
  },
  {
    aspect: "Väderberoende",
    drone: "Begränsad av vind och nederbörd",
    helicopter: "Högre vindtolerans",
    advantage: "helicopter",
  },
  {
    aspect: "Georeferering",
    drone: "Automatisk RTK-positionering (cm-noggrannhet)",
    helicopter: "Kräver separat bearbetning",
    advantage: "drone",
  },
  {
    aspect: "Säkerhetsrisk",
    drone: "Inga personer i luften nära ledning",
    helicopter: "Bemannat luftfartyg nära ledning",
    advantage: "drone",
  },
] as const;

const faqItems: FAQItem[] = [
  {
    question: "Är drönare alltid billigare än helikopter för elnätsinspektion?",
    answer:
      "Inte alltid. Drönare har generellt lägre driftkostnad per kilometer, särskilt vid kortare till medellånga sträckor och när detaljnivå krävs. Vid mycket långa, sammanhängande sträckor med fri sikt kan helikopter vara mer kostnadseffektiv. Kontakta oss för en uppskattning baserad på era specifika förutsättningar.",
  },
  {
    question: "Kan drönare ersätta helikopter helt vid elnätsinspektion?",
    answer:
      "I de flesta fall kan drönare ersätta eller komplettera helikopter, särskilt med BVLOS-kapabilitet. Drönare ger högre detaljnivå nära enskilda komponenter och bättre termografisk data. Helikopter kan fortfarande vara motiverat för mycket långa stamnätssträckor i öppen terräng.",
  },
  {
    question: "Hur jämförs datakvaliteten mellan drönare och helikopter?",
    answer:
      "Drönare ger generellt högre bildkvalitet tack vare kortare avstånd till objektet. RTK-positionering ger centimeternoggrann georeferering. Termografiska bilder från drönare har högre upplösning. Helikopter ger snabbare överblick av stora områden men med lägre detaljnivå.",
  },
  {
    question: "Vilken metod är säkrast — drönare eller helikopter?",
    answer:
      "Drönare eliminerar risken att personal befinner sig i bemannade luftfartyg nära kraftledningar. Ingen klättring krävs och ingen personal exponeras på höjd. Helikopterinspektion innebär att pilot och observatör flyger nära spänningsförande ledningar, vilket medför en högre riskprofil.",
  },
  {
    question: "Vad kostar drönarinspektion jämfört med helikopter?",
    answer:
      "Kostnaden beror på ledningslängd, terräng, inspektionstyp och leveranskrav. Drönarinspektion har generellt lägre pris per kilometer vid kortare till medellånga sträckor. Kontakta oss för en kostnadsuppskattning baserad på era specifika parametrar.",
  },
];

export default function ComparisonPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pb-24 lg:pb-0">
        <JsonLd
          type="BreadcrumbList"
          breadcrumbs={[
            { name: "Helikopter vs drönare", href: "/jamforelser/helikopter-vs-dronare-inspektion" },
          ]}
        />
        <JsonLd type="FAQPage" faqItems={faqItems} />
        <JsonLd
          type="Article"
          articleHeadline={"Helikopter vs drönare för elnätsinspektion"}
          articleDescription={
            "Jämförelse mellan helikopter och drönare för inspektion av kraftledningar och elnät. Kostnad, säkerhet, datakvalitet och effektivitet. Vilken metod passar ert nät?"
          }
          articlePath="/jamforelser/helikopter-vs-dronare-inspektion"
          datePublished="2026-04-05"
          dateModified="2026-04-05"
        />

        <Hero
          title="Helikopter vs drönare för elnätsinspektion"
          subtitle="Jämförelse inspektionsmetoder"
          description="Vilken metod passar ert elnät? Jämförelse av kostnad, datakvalitet, säkerhet och effektivitet mellan helikopter- och drönarinspektion av kraftledningar."
          dateLine="Uppdaterad: 5 april 2026"
          primaryCta={{ label: "Begär offert", href: "/kontakt" }}
          secondaryCta={{ label: "Se kostnadskalkylator", href: "/roi-kalkylator" }}
          compact
        />

        <Breadcrumbs
          items={[
            { name: "Jämförelser" },
            { name: "Helikopter vs drönare" },
          ]}
        />

        {/* AEO Answer-First */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <div className="mx-auto max-w-3xl">
              <h2 className="heading-2">Helikopter eller drönare — vilken metod passar ert elnät?</h2>
              <p className="body-text mt-6">
                Drönare och helikopter används båda för inspektion av kraftledningar och elnät,
                men metoderna har olika styrkor. Drönare ger högre detaljnivå nära enskilda
                komponenter, lägre driftkostnad per kilometer vid kortare sträckor och
                automatisk RTK-georeferering. Helikopter är effektivare vid mycket långa,
                sammanhängande sträckor och har högre vindtolerans. Metoderna kompletterar
                varandra — valet beror på ledningslängd, terräng och inspektionskrav.
              </p>
              <div className="mt-8">
                <Link href="/kontakt" className="btn-primary inline-flex items-center">
                  Diskutera vilken metod som passar er
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="section-padding bg-surface-50">
          <div className="container-section">
            <h2 className="heading-2">Detaljerad jämförelse</h2>

            {/* Mobile cards */}
            <div className="mt-10 grid gap-4 md:hidden">
              {comparisonRows.map((row) => (
                <article key={row.aspect} className="card p-0">
                  <div className="border-b border-surface-100 px-4 py-3">
                    <p className="text-sm font-semibold text-surface-800">{row.aspect}</p>
                  </div>
                  <div className="grid grid-cols-1 divide-y divide-surface-100">
                    <div className={`px-4 py-3 ${row.advantage === "drone" ? "bg-brand-50/30" : "bg-white"}`}>
                      <p className="eyebrow">Drönare</p>
                      <span className={`mt-1 inline-flex items-center gap-1.5 text-sm ${row.advantage === "drone" ? "font-medium text-brand-700" : "text-surface-600"}`}>
                        {row.advantage === "drone" && (
                          <svg className="h-3.5 w-3.5 shrink-0 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                        {row.drone}
                      </span>
                    </div>
                    <div className={`px-4 py-3 ${row.advantage === "helicopter" ? "bg-brand-50/30" : "bg-white"}`}>
                      <p className="eyebrow">Helikopter</p>
                      <span className={`mt-1 inline-flex items-center gap-1.5 text-sm ${row.advantage === "helicopter" ? "font-medium text-brand-700" : "text-surface-600"}`}>
                        {row.advantage === "helicopter" && (
                          <svg className="h-3.5 w-3.5 shrink-0 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                        {row.helicopter}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Desktop table */}
            <div className="mx-auto mt-12 hidden max-w-5xl overflow-hidden rounded-2xl border border-surface-200 bg-white shadow-soft md:block">
              <div className="grid grid-cols-[1.2fr,1fr,1fr] border-b border-surface-200 bg-surface-50">
                <div className="p-4 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-surface-500">Aspekt</p>
                </div>
                <div className="border-l border-surface-200 p-4 text-center sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">Drönare</p>
                </div>
                <div className="border-l border-surface-200 p-4 text-center sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-surface-600">Helikopter</p>
                </div>
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={row.aspect}
                  className={`grid grid-cols-[1.2fr,1fr,1fr] ${i % 2 === 0 ? "bg-white" : "bg-surface-50/50"}`}
                >
                  <div className="p-4 sm:p-5">
                    <p className="text-sm font-medium text-surface-800">{row.aspect}</p>
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
                  <div className={`border-l border-surface-100 p-4 text-center sm:p-5 ${row.advantage === "helicopter" ? "bg-brand-50/30" : ""}`}>
                    <span className={`inline-flex items-center gap-1.5 text-sm ${row.advantage === "helicopter" ? "font-medium text-brand-700" : "text-surface-500"}`}>
                      {row.advantage === "helicopter" && (
                        <svg className="h-3.5 w-3.5 shrink-0 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                      {row.helicopter}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-surface-500">
              Jämförelsen avser inspektion av luftledningar i distributions- och regionnät. Förutsättningar varierar.
            </p>
          </div>
        </section>

        {/* När passar vilken metod */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <h2 className="heading-2">När passar vilken metod?</h2>
            <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-2">
              <div className="rounded-xl border-2 border-brand-200 bg-brand-50/30 p-6">
                <h3 className="text-lg font-semibold text-brand-800">Drönare passar bäst när:</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Detaljinspektion av enskilda komponenter behövs",
                    "Termografering krävs för varmgångsdetektion",
                    "Terrängen är svårtillgänglig",
                    "Ledningssträckan är kort till medellång",
                    "Georefererad data med cm-noggrannhet behövs",
                    "Repeterbar dokumentation för trendanalys önskas",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-surface-700">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border-2 border-surface-200 bg-surface-50 p-6">
                <h3 className="text-lg font-semibold text-surface-800">Helikopter passar bäst när:</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Mycket långa, sammanhängande sträckor ska inspekteras",
                    "Stamnät i öppen terräng med fri sikt",
                    "Hårda väderförhållanden (hög vind)",
                    "Snabb översiktsflygning utan detaljkrav",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-surface-700">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-surface-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tabell 2: Use-case */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <h2 className="heading-2">Rekommenderad metod per scenario</h2>
            <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-surface-200 bg-white shadow-soft">
              <div className="grid grid-cols-[1.5fr,1fr] border-b border-surface-200 bg-surface-50">
                <div className="p-4 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-surface-500">Scenario</p>
                </div>
                <div className="border-l border-surface-200 p-4 text-center sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">Rekommendation</p>
                </div>
              </div>
              {[
                { scenario: "Detaljinspektion av isolatorer och skarvar", rec: "Drönare" },
                { scenario: "Termografering av strömförande komponenter", rec: "Drönare" },
                { scenario: "Årlig översiktsinspektion av regionnät (<50 km)", rec: "Drönare" },
                { scenario: "Akut stormskadekartläggning", rec: "Drönare (snabb mobilisering)" },
                { scenario: "Inspektion i svårtillgänglig skog- eller fjällterräng", rec: "Drönare (BVLOS)" },
                { scenario: "Långt stamnät i öppen terräng (>100 km)", rec: "Helikopter eller kombination" },
                { scenario: "Snabb screening av stort nätområde", rec: "Helikopter" },
                { scenario: "Prediktivt underhåll med trendanalys", rec: "Drönare (standardiserade flygprofiler)" },
              ].map((row, i) => (
                <div key={row.scenario} className={`grid grid-cols-[1.5fr,1fr] ${i % 2 === 0 ? "bg-white" : "bg-surface-50/50"}`}>
                  <div className="p-4 sm:p-5">
                    <p className="text-sm text-surface-800">{row.scenario}</p>
                  </div>
                  <div className="border-l border-surface-100 p-4 text-center sm:p-5">
                    <span className={`text-sm font-medium ${row.rec.startsWith("Drönare") ? "text-brand-700" : row.rec.startsWith("Helikopter") ? "text-surface-600" : "text-amber-700"}`}>
                      {row.rec}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tabell 3: Datakvalitet */}
        <section className="section-padding bg-surface-50">
          <div className="container-section">
            <h2 className="heading-2">Datakvalitet och detektionsförmåga</h2>
            <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-surface-200 bg-white shadow-soft">
              <div className="grid grid-cols-[1.2fr,1fr,1fr] border-b border-surface-200 bg-surface-50">
                <div className="p-4 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-surface-500">Datakvalitet</p>
                </div>
                <div className="border-l border-surface-200 p-4 text-center sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">Drönare</p>
                </div>
                <div className="border-l border-surface-200 p-4 text-center sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-surface-600">Helikopter</p>
                </div>
              </div>
              {[
                { aspect: "Bildupplösning", drone: "Hög — kort avstånd till objekt", helicopter: "Lägre — större avstånd", advantage: "drone" },
                { aspect: "Termografisk detaljnivå", drone: "Hög — radiometrisk per komponent", helicopter: "Begränsad — översiktlig", advantage: "drone" },
                { aspect: "Georeferering", drone: "RTK — cm-noggrannhet automatiskt", helicopter: "Kräver efterbearbetning", advantage: "drone" },
                { aspect: "Standardiserade bildvinklar", drone: "Programmerbara, repeterbara", helicopter: "Observatörsberoende", advantage: "drone" },
                { aspect: "Täckning per timme", drone: "Begränsad av batteri och VLOS/BVLOS", helicopter: "Hög — långa sträckor snabbt", advantage: "helicopter" },
              ].map((row, i) => (
                <div key={row.aspect} className={`grid grid-cols-[1.2fr,1fr,1fr] ${i % 2 === 0 ? "bg-white" : "bg-surface-50/50"}`}>
                  <div className="p-4 sm:p-5">
                    <p className="text-sm font-medium text-surface-800">{row.aspect}</p>
                  </div>
                  <div className={`border-l border-surface-100 p-4 text-center sm:p-5 ${row.advantage === "drone" ? "bg-brand-50/30" : ""}`}>
                    <span className={`text-sm ${row.advantage === "drone" ? "font-medium text-brand-700" : "text-surface-500"}`}>{row.drone}</span>
                  </div>
                  <div className={`border-l border-surface-100 p-4 text-center sm:p-5 ${row.advantage === "helicopter" ? "bg-brand-50/30" : ""}`}>
                    <span className={`text-sm ${row.advantage === "helicopter" ? "font-medium text-brand-700" : "text-surface-500"}`}>{row.helicopter}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Slutsats */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <div className="mx-auto max-w-3xl">
              <h2 className="heading-2">Slutsats: vilken metod bör ni välja?</h2>
              <p className="body-text mt-6">
                För de flesta nätägare med distributions- och regionnät är drönarinspektion
                den mest kostnadseffektiva metoden. Drönare ger högre bildkvalitet, bättre
                termografisk detaljnivå och automatisk georeferering — och eliminerar
                riskfyllt arbete på höjd.
              </p>
              <p className="body-text mt-4">
                Helikopter kan fortfarande vara motiverat för mycket långa stamnätssträckor
                i öppen terräng där täckning per timme prioriteras framför detaljnivå.
                Metoderna utesluter inte varandra — många nätägare använder drönare för
                detaljinspektion och helikopter för snabb överblick.
              </p>
              <div className="mt-8">
                <Link href="/kontakt" className="btn-primary inline-flex items-center">
                  Be om kostnadsanalys
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Risk och begränsningar */}
        <section className="section-padding bg-surface-50">
          <div className="container-section">
            <h2 className="heading-2">Risker och begränsningar</h2>
            <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-surface-200 bg-white shadow-soft">
              <div className="grid grid-cols-[1.2fr,1fr,1fr] border-b border-surface-200 bg-surface-50">
                <div className="p-4 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-surface-500">Riskfaktor</p>
                </div>
                <div className="border-l border-surface-200 p-4 text-center sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">Drönare</p>
                </div>
                <div className="border-l border-surface-200 p-4 text-center sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-surface-600">Helikopter</p>
                </div>
              </div>
              {[
                { factor: "Väderkänslighet", drone: "Begränsad av vind och nederbörd", helicopter: "Högre vindtolerans, men kostsamma avbokningar" },
                { factor: "Batterikapacitet", drone: "Kräver batteribyte — begränsar sammanhängande flygtid", helicopter: "Långa flygpass utan avbrott" },
                { factor: "Regelverkskomplexitet", drone: "BVLOS kräver PDRA/SORA-godkännande", helicopter: "Etablerat regelverk med befintliga tillstånd" },
                { factor: "Fysisk åtkomst till komponent", drone: "Ej möjlig — enbart visuell/termisk", helicopter: "Ej möjlig — kräver klättring eller skylift" },
                { factor: "Personrisk i luft", drone: "Ingen — obemannat luftfartyg", helicopter: "Pilot och observatör nära spänningsförande delar" },
              ].map((row, i) => (
                <div key={row.factor} className={`grid grid-cols-[1.2fr,1fr,1fr] ${i % 2 === 0 ? "bg-white" : "bg-surface-50/50"}`}>
                  <div className="p-4 sm:p-5">
                    <p className="text-sm font-medium text-surface-800">{row.factor}</p>
                  </div>
                  <div className="border-l border-surface-100 p-4 text-center sm:p-5">
                    <span className="text-sm text-surface-600">{row.drone}</span>
                  </div>
                  <div className="border-l border-surface-100 p-4 text-center sm:p-5">
                    <span className="text-sm text-surface-600">{row.helicopter}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* När passar drönare INTE */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <div className="mx-auto max-w-3xl">
              <h2 className="heading-2">När ska man inte välja drönare?</h2>
              <p className="body-text mt-6">
                Drönare är inte alltid den optimala metoden. Överväg alternativ i dessa situationer:
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Mycket långa, sammanhängande stamnätssträckor (>100 km) i öppen terräng där snabb screening prioriteras framför detaljnivå",
                  "Förhållanden med ihållande stark vind som överstiger drönarsystemets gränsvärden under lång period",
                  "Situationer där fysisk åtkomst till komponenter krävs (provtagning, utbyte) — då behövs klättring eller skylift",
                  "Områden med permanenta restriktioner i luftrummet som förhindrar drönarflygning",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-surface-700">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-surface-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Beslutsstöd för energibolag */}
        <section className="bg-brand-50 py-12">
          <div className="container-section">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-xl font-bold text-brand-900">Beslutsstöd för nätägare och energibolag</h2>
              <p className="mt-4 text-sm text-brand-700">
                Valet mellan drönare och helikopter beror på ledningslängd, terräng, detaljkrav och budget.
                Vi hjälper er att utvärdera rätt metod baserat på ert specifika nät. Se även vår{" "}
                <Link href="/guider/upphandling-dronareinspektion" className="text-brand-600 underline hover:text-brand-800">
                  upphandlingsguide
                </Link>{" "}
                och{" "}
                <Link href="/roi-kalkylator" className="text-brand-600 underline hover:text-brand-800">
                  kostnadskalkylator
                </Link>.
              </p>
              <div className="mt-6">
                <Link href="/kontakt" className="btn-primary">
                  Be om kostnadsanalys för ert nät
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Relaterade sidor */}
        <section className="section-padding bg-surface-50">
          <div className="container-section">
            <h2 className="heading-2">Relaterade sidor</h2>
            <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-3">
              <Link href="/tjanster/kraftledningsinspektion" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Kraftledningsinspektion</h3>
                <p className="mt-2 text-sm text-surface-500">Vår kärntjänst för inspektion av luftledningar med drönare.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs mer →</span>
              </Link>
              <Link href="/roi-kalkylator" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Kostnadskalkylator</h3>
                <p className="mt-2 text-sm text-surface-500">Beräkna uppskattad kostnad för drönarinspektion av ert nät.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Beräkna →</span>
              </Link>
              <Link href="/guider/dronareinspektion-elnat" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Guide: Drönarinspektion</h3>
                <p className="mt-2 text-sm text-surface-500">Komplett guide till drönarinspektion av elnät — utrustning, process och leveranser.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs guiden →</span>
              </Link>
            </div>
          </div>
        </section>

        <FAQ
          items={faqItems}
          heading="Vanliga frågor om helikopter vs drönare"
          subheading="Kontakta oss för att diskutera vilken metod som passar ert specifika behov."
        />

        <CTABand
          heading="Osäker på vilken metod som passar?"
          description="Vi hjälper er att utvärdera vilken inspektionsmetod som ger bäst resultat för ert specifika nät."
        />
      </main>
      <Footer />
    </>
  );
}
