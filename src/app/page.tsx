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
