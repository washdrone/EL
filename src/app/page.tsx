import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ProblemSection from "@/components/home/ProblemSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import ProofSection from "@/components/home/ProofSection";
import PreFooterCTA from "@/components/home/PreFooterCTA";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import type { FAQItem } from "@/data/faq";

export const metadata: Metadata = {
  title: "Drönarinspektion av Elnät & Kraftledningar | GridDrone",
  description:
    "Drönarinspektion av elnät för nätägare och energibolag. Visuell dokumentation, termografi och vegetationskontroll som underlag för underhåll. Begär offert.",
  keywords: [
    "drönarinspektion elnät",
    "kraftledningsinspektion drönare",
    "drönarinspektion kraftledningar",
    "elnätsinspektion drönare",
    "drönartjänster elnät",
    "termografering kraftledningar",
  ],
};

const homepageFaqItems: FAQItem[] = [
  {
    question: "Vad är drönarinspektion av elnät?",
    answer:
      "Drönarinspektion av elnät innebär att en EASA-utbildad pilot flyger en drönare utrustad med högupplöst RGB-kamera och radiometrisk värmekamera längs kraftledningar och elnätskomponenter. Varje stolpe, isolator och ledningssektion dokumenteras med georefererade bilder som levereras strukturerat till nätägarens förvaltningssystem — utan klättring och normalt utan driftstopp.",
  },
  {
    question: "Vilka fördelar har drönare jämfört med traditionell inspektion?",
    answer:
      "Drönare kan dokumentera komponenter utan stolpklättring. Åtkomst för start och landning, luftrum och driftförutsättningar behöver planeras. Positioneringskrav och GIS-format fastställs för uppdraget; importen behöver kontrolleras i mottagande system.",
  },
  {
    question: "Vilka tjänster erbjuder GridDrone?",
    answer:
      "Vi erbjuder kraftledningsinspektion, termografering, vegetationskontroll, transformatorstationsinspektion, BVLOS-inspektion av långa sträckor, stormskadeinspektion, vindkraftinspektion och prediktiva underhållsabonnemang.",
  },
  {
    question: "Hur begär man en offert från GridDrone?",
    answer:
      "Kontakta oss med ungefärlig sträcka (km ledning), nättyp, spänningsnivå och önskad inspektionstyp. Vi återkommer med en offert baserad på era specifika förutsättningar. Eventuella GIS-underlag underlättar planeringen.",
  },
  {
    question: "Var i Sverige utför GridDrone inspektioner?",
    answer:
      "Vi utför drönarinspektion av kraftledningar och elnät i hela Sverige — från Skåne till Norrland. Vi har kapacitet för rikstäckande uppdrag och kan anpassa logistik efter ert näts geografiska placering.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="pb-24 lg:pb-0">
        <JsonLd type="FAQPage" faqItems={homepageFaqItems} />
        <JsonLd
          type="HowTo"
          howToName="Så fungerar drönarinspektion av elnät"
          howToDescription="Steg-för-steg-process för professionell drönarinspektion av kraftledningar och elnät."
          howToSteps={[
            { name: "Planering", text: "Vi integrerar med era nätkartor (GIS-underlag) och sätter inspektionsparametrar — sträcka, spänningsnivå, bildkrav och leveransformat." },
            { name: "Datainsamling", text: "EASA-utbildade piloter flyger drönare med RGB-kamera, värmekamera och RTK-positionering längs kraftledningen. Varje stolpe och ledningssektion dokumenteras med standardiserade bildvinklar." },
            { name: "Analys och klassificering", text: "Insamlad data granskas. Fynd klassificeras efter allvarlighetsgrad, georefereras och sammanställs med åtgärdsrekommendationer." },
            { name: "Leverans", text: "Färdig rapport och GIS-lager levereras digitalt i överenskommet format — redo att importeras i ert nätförvaltningssystem." },
          ]}
        />

        <HeroSection />
        <TrustBar />

        {/* AEO Answer-First Block */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-brand-500" />
                <span className="eyebrow-brand">Introduktion</span>
              </div>
              <h2 className="heading-2">Vad är drönarinspektion av elnät?</h2>
              <p className="body-text mt-6">
                Drönarinspektion av elnät innebär att en utbildad pilot flyger en drönare utrustad med
                högupplöst kamera och radiometrisk värmekamera längs kraftledningar och elnätskomponenter.
                Varje stolpe, isolator och ledningssektion dokumenteras med georefererade bilder som levereras
                strukturerat till nätägarens förvaltningssystem — utan klättring och normalt utan driftstopp.
              </p>
              <p className="body-text mt-4">
                Metoden ger nätägare och energibolag ett effektivare sätt att inventera och planera
                underhåll baserat på faktisk anläggningsstatus istället för schablonintervall.
                Inspektionen kan kombineras med{" "}
                <Link href="/tjanster/termografering-kraftledning" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400">
                  termografering
                </Link>,{" "}
                <Link href="/tjanster/vegetationskontroll" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400">
                  vegetationskontroll
                </Link>{" "}
                och{" "}
                <Link href="/tjanster/bvlos-inspektion" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400">
                  BVLOS-flygning
                </Link>{" "}
                för inspektion av långa ledningssträckor.
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

        <ProblemSection />
        <ServicesSection />
        <ProcessSection />
        <ProofSection />

        {/* Vad inspekteras — brief hub with links (details on dedicated pages) */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-brand-500" />
                <span className="eyebrow-brand">Omfattning</span>
              </div>
              <h2 className="heading-2">Heltäckande inspektion av alla elnätskomponenter</h2>
              <p className="body-text mt-6">
                Vid drönarinspektion dokumenteras alla kritiska delar i ert elnät — från stolptopp
                till fundament. Visuell kamera och termografi avslöjar både synliga skador och dolda
                termiska avvikelser i{" "}
                <Link href="/guider/komponenter-elnat" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400">
                  isolatorer, ledningslinor, traverser och fästen
                </Link>.
              </p>
              <p className="body-text mt-4">
                Varje fynd GPS-märks, fotograferas och klassificeras med åtgärdsrekommendation.
                Läs mer om{" "}
                <Link href="/guider/feltyper-kraftledningar" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400">
                  vilka feltyper som identifieras
                </Link>{" "}
                eller{" "}
                <Link href="/guider/dataleverans-gis-elnat" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400">
                  hur data levereras i GIS-format
                </Link>.
              </p>
              <div className="mt-8">
                <Link href="/tjanster/kraftledningsinspektion" className="btn-primary inline-flex items-center">
                  Begär offert
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Guider och resurser */}
        <section className="section-padding bg-surface-50">
          <div className="container-section">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-brand-500" />
              <span className="eyebrow-brand">Resurser</span>
            </div>
            <h2 className="heading-2">Guider och resurser</h2>
            <p className="body-text mt-4 max-w-3xl">
              Fördjupa er i drönarinspektion av elnät — utrustning, process, leveranser och upphandling.
            </p>
            <div className="mx-auto mt-10 grid max-w-5xl gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/guider/dronareinspektion-elnat" className="group bg-white p-6 transition-colors hover:bg-surface-50">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Vad är drönarinspektion av elnät?</h3>
                <p className="mt-2 text-sm text-surface-500">Komplett guide om hur drönarinspektion fungerar.</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600">Läs guiden <span aria-hidden="true">→</span></span>
              </Link>
              <Link href="/guider/termografering-kraftledningar" className="group bg-white p-6 transition-colors hover:bg-surface-50">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Termografering av kraftledningar</h3>
                <p className="mt-2 text-sm text-surface-500">Hur värmekamera identifierar varmgångar och dolda fel.</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600">Läs guiden <span aria-hidden="true">→</span></span>
              </Link>
              <Link href="/jamforelser/helikopter-vs-dronare-inspektion" className="group bg-white p-6 transition-colors hover:bg-surface-50">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Helikopter vs drönare</h3>
                <p className="mt-2 text-sm text-surface-500">Jämförelse av kostnad, datakvalitet och säkerhet.</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600">Se jämförelsen <span aria-hidden="true">→</span></span>
              </Link>
              <Link href="/guider/dataleverans-gis-elnat" className="group bg-white p-6 transition-colors hover:bg-surface-50">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Dataleverans och GIS</h3>
                <p className="mt-2 text-sm text-surface-500">Leveransformat, GIS-integration och rapportstruktur.</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600">Läs guiden <span aria-hidden="true">→</span></span>
              </Link>
              <Link href="/guider/bvlos-inspektion-elnat" className="group bg-white p-6 transition-colors hover:bg-surface-50">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">BVLOS-inspektion av elnät</h3>
                <p className="mt-2 text-sm text-surface-500">Inspektion bortom synhåll — regler, teknik och tillämpningar.</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600">Läs guiden <span aria-hidden="true">→</span></span>
              </Link>
              <Link href="/guider/upphandling-dronareinspektion" className="group bg-white p-6 transition-colors hover:bg-surface-50">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Upphandla drönarinspektion</h3>
                <p className="mt-2 text-sm text-surface-500">Kravspec, utvärderingskriterier och avtalsupplägg.</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600">Läs guiden <span aria-hidden="true">→</span></span>
              </Link>
            </div>
          </div>
        </section>

        <FAQ
          items={homepageFaqItems}
          heading="Vanliga frågor om drönarinspektion av elnät"
          subheading="Har ni fler frågor? Kontakta oss direkt så berättar vi mer."
        />

        <PreFooterCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
