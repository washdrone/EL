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
  title: "BVLOS-inspektion av elnät — guide och regler",
  description:
    "Guide om BVLOS-inspektion av kraftledningar och elnät. Tillstånd, teknik, riskbedömning (SORA/PDRA) och tillämpningar. Inspektion bortom synhåll.",
  path: "/guider/bvlos-inspektion-elnat",
  keywords: [
    "BVLOS inspektion elnät",
    "BVLOS tillstånd Sverige",
    "BVLOS kraftledning",
    "drönare bortom synhåll inspektion",
    "SORA riskbedömning drönare",
    "linjär BVLOS",
  ],
});

const faqItems: FAQItem[] = [
  {
    question: "Vad är BVLOS och varför är det relevant för elnätsinspektion?",
    answer:
      "BVLOS (Beyond Visual Line of Sight) innebär att drönaren flyger bortom pilotens synhåll. Det är relevant för elnätsinspektion eftersom kraftledningar ofta sträcker sig i kilometer — med BVLOS kan långa sträckor inspekteras utan ompositionering av pilot och utrustning.",
  },
  {
    question: "Vilka tillstånd krävs för BVLOS-flygning i Sverige?",
    answer:
      "BVLOS-flygning kräver specifika tillstånd från Transportstyrelsen baserade på EU:s drönarförordning. Det inkluderar godkänd riskbedömning (PDRA eller SORA), redundanta kommunikationssystem, dokumenterade säkerhetsprocedurer och godkänd operativ metodik.",
  },
  {
    question: "Vad är skillnaden mellan PDRA och SORA?",
    answer:
      "PDRA (Pre-Defined Risk Assessment) är standardiserade riskbedömningar för definierade scenarion — snabbare att godkänna. SORA (Specific Operations Risk Assessment) är en detaljerad, uppdragsspecifik riskbedömning för mer komplexa operationer utanför PDRA-scenarierna.",
  },
  {
    question: "Hur långt kan en drönare flyga vid BVLOS-inspektion?",
    answer:
      "Räckvidden beror på drönarsystemets kapacitet, batteritid och godkända operativa begränsningar. Med BVLOS kan betydligt längre sträckor inspekteras per flygpass jämfört med VLOS (visual line of sight).",
  },
  {
    question: "Vilka säkerhetskrav gäller vid BVLOS?",
    answer:
      "Redundant kommunikation mellan pilot och drönare, automatisk retur-till-bas-funktion vid signalförlust, realtidsövervakning av luftrum, dokumenterade nödprocedurer och riskanalys anpassad för arbete nära elektriska anläggningar.",
  },
  {
    question: "Passar BVLOS för alla typer av elnätsinspektion?",
    answer:
      "BVLOS är mest effektivt för inspektion av långa, sammanhängande ledningssträckor i regions- och stamnät. Vid detaljinspektion av enskilda stolpar och stationer används normalt VLOS-flygning för maximal manövrerbarhet nära komponenterna.",
  },
];

export default function BvlosGuidePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pb-24 lg:pb-0">
        <JsonLd
          type="BreadcrumbList"
          breadcrumbs={[
            { name: "Guider" },
            { name: "BVLOS-inspektion av elnät" },
          ]}
        />
        <JsonLd type="FAQPage" faqItems={faqItems} />

        <Hero
          title="BVLOS-inspektion av elnät — guide, regler och teknik"
          subtitle="Guide: BVLOS inspektion elnät"
          description="Hur inspektion av kraftledningar bortom synhåll (BVLOS) fungerar — tillståndskrav, riskbedömning, teknik och tillämpningar för nätägare och energibolag."
          primaryCta={{ label: "Begär offert", href: "/kontakt" }}
          secondaryCta={{ label: "Se BVLOS-tjänst", href: "/tjanster/bvlos-inspektion" }}
          compact
        />

        <Breadcrumbs
          items={[
            { name: "Guider" },
            { name: "BVLOS-inspektion av elnät" },
          ]}
        />

        {/* AEO: Definition */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <div className="mx-auto max-w-3xl">
              <h2 className="heading-2">Vad är BVLOS-inspektion av elnät?</h2>
              <p className="body-text mt-6">
                BVLOS (Beyond Visual Line of Sight) innebär att drönaren flyger bortom pilotens
                synhåll. Vid elnätsinspektion möjliggör BVLOS inspektion av långa
                kraftledningssträckor utan att piloten behöver ompositionera sig längs ledningen.
                Drönaren följer en förprogrammerad flygväg och dokumenterar stolpar, isolatorer,
                ledningslinor, topplinor och traverser med RGB-kamera och värmekamera — precis
                som vid VLOS-flygning, men med längre räckvidd per flygpass.
              </p>
              <p className="body-text mt-4">
                Alla{" "}
                <Link href="/guider/komponenter-elnat" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400">
                  elnätskomponenter
                </Link>{" "}
                som inspekteras vid VLOS dokumenteras även vid BVLOS, och{" "}
                <Link href="/guider/feltyper-kraftledningar" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400">
                  samma feltyper
                </Link>{" "}
                identifieras. BVLOS-flygning kräver specifika tillstånd från Transportstyrelsen,
                inklusive godkänd riskbedömning och redundanta säkerhetssystem. Läs vår{" "}
                <Link href="/blogg/bvlos-tillstand-sverige" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400">
                  artikel om BVLOS-tillstånd i Sverige
                </Link>{" "}
                för mer detaljer om regelverket.
              </p>
            </div>
          </div>
        </section>

        {/* Tillstånd och regelverk */}
        <section className="section-padding bg-surface-50">
          <div className="container-section">
            <h2 className="heading-2">Tillstånd och regelverk för BVLOS i Sverige</h2>
            <p className="body-text mt-4 max-w-3xl">
              BVLOS-flygning regleras av EU:s drönarförordning (EU 2019/947) och administreras i
              Sverige av Transportstyrelsen. Tillståndskrav beror på operationens riskprofil:
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "PDRA (Pre-Defined Risk Assessment)",
                  desc: "Standardiserade riskbedömningar för definierade scenarion. PDRA-S01 och PDRA-S02 täcker linjär inspektion av infrastruktur (kraftledningar, järnväg). Snabbare godkännandeprocess med fastställda villkor och begränsningar.",
                },
                {
                  title: "SORA (Specific Operations Risk Assessment)",
                  desc: "Detaljerad uppdragsspecifik riskbedömning. Krävs för operationer utanför PDRA-scenarierna. Analyserar luftrisker, markrisker och fastställer nödvändiga skyddsåtgärder (mitigations) för den specifika operationen.",
                },
              ].map((item) => (
                <div key={item.title} className="card p-6">
                  <h3 className="text-base font-semibold text-surface-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-4">
              {[
                { title: "Redundant kommunikation", desc: "Drönaren måste ha redundanta kommunikationskanaler — om en kanal bryts ska en alternativ kanal automatiskt ta över för säker flygning." },
                { title: "Automatisk retur-till-bas", desc: "Vid signalförlust eller kritiskt batteriläge ska drönaren automatiskt återvända till utgångspunkten eller landa säkert." },
                { title: "Realtidsövervakning", desc: "Piloten ska ha realtidsövervakning av drönarens position, batterstatus och omgivande luftrum via telemetri och/eller ADS-B." },
                { title: "Dokumenterade nödprocedurer", desc: "Operatören ska ha dokumenterade procedurer för alla förutsebara nödsituationer — signalförlust, motorfel, luftrumsintrång och väderförsämring." },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-brand-500 pl-5">
                  <h3 className="text-base font-semibold text-surface-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-surface-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-content CTA */}
        <section className="bg-brand-50 py-12">
          <div className="container-section text-center">
            <h3 className="text-lg font-semibold text-brand-900">
              Har ni långa ledningssträckor som behöver inspekteras?
            </h3>
            <p className="mx-auto mt-2 max-w-lg text-sm text-brand-700">
              BVLOS kan vara rätt metod för ert nät. Kontakta oss för en teknisk
              genomgång av möjligheterna. Se även vår{" "}
              <Link href="/jamforelser/helikopter-vs-dronare-inspektion" className="text-brand-600 underline hover:text-brand-800">
                jämförelse mellan helikopter och drönare
              </Link>{" "}
              för kostnadsperspektiv.
            </p>
            <div className="mt-6">
              <Link href="/kontakt" className="btn-primary">
                Få rådgivning
              </Link>
            </div>
          </div>
        </section>

        {/* Tillämpningar */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <h2 className="heading-2">När passar BVLOS för elnätsinspektion?</h2>
            <p className="body-text mt-4 max-w-3xl">
              BVLOS-inspektion är mest effektivt vid:
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Långa ledningssträckor",
                  desc: "Region- och stamnät med ledningar som sträcker sig i tiotals kilometer. BVLOS eliminerar ompositionering av pilot längs sträckan.",
                },
                {
                  title: "Svårtillgänglig terräng",
                  desc: "Fjällterräng, skogsmark och våtmarker där markåtkomst för pilotstationer är begränsad eller omöjlig.",
                },
                {
                  title: "Stormskadekartläggning",
                  desc: "Snabb kartläggning av drabbade sträckor efter storm. BVLOS ger snabb överblick av skadeläget över stora områden.",
                },
                {
                  title: "Årlig översiktsinspektion",
                  desc: "Effektiv screening av hela nätets tillstånd för att identifiera sektioner som kräver detaljinspektion.",
                },
                {
                  title: "Vegetationskontroll",
                  desc: "LiDAR-baserad kartläggning av vegetation längs kraftledningsgator kan utföras effektivt med BVLOS över långa sträckor.",
                },
                {
                  title: "Prediktivt underhåll",
                  desc: "Regelbunden inspektion av samma sträckor med sparade flygvägar för trendanalys och jämförelse mellan tillfällen.",
                },
              ].map((item) => (
                <div key={item.title} className="card p-6">
                  <h3 className="text-base font-semibold text-surface-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/kontakt" className="btn-primary inline-flex items-center">
                Diskutera BVLOS för ert nät
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Relaterade */}
        <section className="section-padding bg-surface-50">
          <div className="container-section">
            <h2 className="heading-2">Relaterade tjänster och guider</h2>
            <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-3">
              <Link href="/tjanster/bvlos-inspektion" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">BVLOS-inspektionstjänst</h3>
                <p className="mt-2 text-sm text-surface-500">Beställ BVLOS-inspektion av era kraftledningar och ledningssträckor.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Se tjänsten →</span>
              </Link>
              <Link href="/tjanster/kraftledningsinspektion" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Kraftledningsinspektion med drönare</h3>
                <p className="mt-2 text-sm text-surface-500">Inspektion av stolpar, isolatorer, ledningslinor och traverser.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs mer →</span>
              </Link>
              <Link href="/guider/dronareinspektion-elnat" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Guide: Drönarinspektion av elnät</h3>
                <p className="mt-2 text-sm text-surface-500">Komplett guide om drönarinspektion — utrustning, process och leveranser.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs guiden →</span>
              </Link>
            </div>
          </div>
        </section>

        <FAQ
          items={faqItems}
          heading="Vanliga frågor om BVLOS-inspektion"
          subheading="Har ni fler frågor om BVLOS? Kontakta oss för rådgivning."
        />

        <CTABand
          heading="Vill ni inspektera långa ledningssträckor effektivt?"
          description="BVLOS-inspektion möjliggör inspektion av kraftledningar bortom synhåll — kontakta oss för att diskutera ert behov."
          primaryLabel="Begär offert"
          secondaryLabel="Få rådgivning"
        />
      </main>
      <Footer />
    </>
  );
}
