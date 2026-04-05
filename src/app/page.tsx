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
    "GridDrone utför drönarinspektion av elnät och kraftledningar i hela Sverige. Termografi, BVLOS, GIS-redo leveranser. EASA-utbildade piloter. Begär offert.",
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
    question: "Hur fungerar kraftledningsinspektion med drönare?",
    answer:
      "Drönaren flyger systematiskt längs kraftledningen och fotograferar varje stolpe, isolator, traverser och ledningsgata med standardiserade bildvinklar. Bilderna georefereras automatiskt via RTK-positionering och levereras i en strukturerad rapport med klassificerade fynd och åtgärdsrekommendationer.",
  },
  {
    question: "Vilka fel kan upptäckas vid drönarinspektion av elnät?",
    answer:
      "Drönareinspektion med visuell kamera och termografi identifierar skadade isolatorer, korrosion på traverser, varmgångar i skarvar och kontakter, fågelbon, vegetationsröjningsbehov, deformerade stolpar och ledningsskador. Termisk analys avslöjar även dolda fel som kontaktmotstånd och överbelastade komponenter.",
  },
  {
    question: "Hur levereras data från en drönarinspektion?",
    answer:
      "Data levereras digitalt i GIS-kompatibla format (GeoTIFF, shapefiler, CSV) redo för direktimport i nätförvaltningssystem. Leveransen inkluderar georefererade bilder, avvikelserapport med klassificering, GPS-karta med fyndmarkeringar och åtgärdsrekommendationer per komponent.",
  },
  {
    question: "Vad kostar drönarinspektion av kraftledningar?",
    answer:
      "Kostnaden beror på ledningslängd, terräng, inspektionstyp och krav på leveranser. Drönarinspektion har generellt lägre driftkostnad per kilometer jämfört med helikopter, särskilt vid kortare till medellånga sträckor. Kontakta oss för en offert baserad på era specifika förutsättningar.",
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

        {/* Entity depth: Vilka komponenter inspekteras */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <h2 className="heading-2">Vilka elnätskomponenter inspekteras med drönare?</h2>
            <p className="body-text mt-4 max-w-3xl">
              Drönareinspektion dokumenterar alla kritiska komponenter i ert elnät systematiskt
              med standardiserade bildvinklar, georefererade bilder och termisk analys:
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Stolpar och fundament",
                  desc: "Trä-, betong- och stålstolpar inspekteras för sprickor, lutning, röta och fundamentskador.",
                },
                {
                  title: "Isolatorer",
                  desc: "Glas-, porslins- och kompositisolatorer granskas visuellt och termiskt för sprickor, brännskador och interna fel.",
                },
                {
                  title: "Ledningslinor och topplinor",
                  desc: "Fasledare, topplinor och jordlinor inspekteras för trådbrott, korrosion och slitage vid klämfästen.",
                },
                {
                  title: "Traverser och fästen",
                  desc: "Traverser, konsoler och fästjärn kontrolleras för korrosion, deformation och bristande infästningar.",
                },
                {
                  title: "Skarvar och kopplingar",
                  desc: "Skarvar och kopplingar inspekteras termiskt för varmgångar som indikerar kontaktmotstånd.",
                },
                {
                  title: "Ledningsgata och vegetation",
                  desc: "Vegetationsavstånd dokumenteras och kombineras med LiDAR-baserad vegetationskontroll.",
                },
              ].map((item) => (
                <div key={item.title} className="card p-6">
                  <h3 className="text-base font-semibold text-surface-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/tjanster/kraftledningsinspektion" className="text-sm font-medium text-brand-600 hover:text-brand-700">
                Läs mer om kraftledningsinspektion med drönare →
              </Link>
            </div>
          </div>
        </section>

        {/* Guider och resurser */}
        <section className="section-padding bg-surface-50">
          <div className="container-section">
            <h2 className="heading-2">Guider och resurser</h2>
            <p className="body-text mt-4 max-w-3xl">
              Fördjupa er i drönarinspektion av elnät — utrustning, process, leveranser och upphandling.
            </p>
            <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/guider/dronareinspektion-elnat" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Vad är drönarinspektion av elnät?</h3>
                <p className="mt-2 text-sm text-surface-500">Komplett guide om hur drönarinspektion fungerar.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs guiden →</span>
              </Link>
              <Link href="/guider/termografering-kraftledningar" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Termografering av kraftledningar</h3>
                <p className="mt-2 text-sm text-surface-500">Hur värmekamera identifierar varmgångar och dolda fel.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs guiden →</span>
              </Link>
              <Link href="/jamforelser/helikopter-vs-dronare-inspektion" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Helikopter vs drönare</h3>
                <p className="mt-2 text-sm text-surface-500">Jämförelse av kostnad, datakvalitet och säkerhet.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Se jämförelsen →</span>
              </Link>
              <Link href="/guider/dataleverans-gis-elnat" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Dataleverans och GIS</h3>
                <p className="mt-2 text-sm text-surface-500">Leveransformat, GIS-integration och rapportstruktur.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs guiden →</span>
              </Link>
              <Link href="/guider/bvlos-inspektion-elnat" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">BVLOS-inspektion av elnät</h3>
                <p className="mt-2 text-sm text-surface-500">Inspektion bortom synhåll — regler, teknik och tillämpningar.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs guiden →</span>
              </Link>
              <Link href="/guider/upphandling-dronareinspektion" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Upphandla drönarinspektion</h3>
                <p className="mt-2 text-sm text-surface-500">Kravspec, utvärderingskriterier och avtalsupplägg.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs guiden →</span>
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
