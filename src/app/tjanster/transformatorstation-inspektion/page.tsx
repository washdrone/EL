import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";
import FAQ from "@/components/FAQ";
import type { FAQItem } from "@/data/faq";

export const metadata: Metadata = createPageMetadata({
  title: "Drönarinspektion av transformatorstationer",
  description:
    "Säker inspektion av transformatorstationer med drönare. Visuell och termisk kontroll av isolatorer, kablar och strukturer. Detaljerad inspektionsrapport.",
  path: "/tjanster/transformatorstation-inspektion",
  keywords: [
    "transformatorstation inspektion drönare",
    "inspektion transformator drönare",
    "elnätsinspektion transformator",
  ],
});

const inspectionItems = [
  {
    title: "Isolatorer",
    desc: "Visuell och termisk kontroll av isolatorer för att upptäcka sprickor, förorening och interna fel.",
  },
  {
    title: "Kablar & anslutningar",
    desc: "Kontroll av kabelanslutningar, klämmor och genomföringar med värmekamera för att identifiera varmgångar.",
  },
  {
    title: "Transformatorer",
    desc: "Termografering av transformatorkroppar, kylflänsar och oljefyllda genomföringar.",
  },
  {
    title: "Strukturer & stålkonstruktioner",
    desc: "Visuell inspektion av stålkonstruktioner, korrosionsskador och mekaniskt slitage.",
  },
  {
    title: "Ställverksutrustning",
    desc: "Dokumentation av frånskiljare, brytare och mätinstrument från optimala vinklar.",
  },
  {
    title: "Markplan & inhägnad",
    desc: "Översiktsbild av stationsområdet, inhägnad, vegetation och tillfartsvägar.",
  },
];

const benefits = [
  {
    title: "Ökad säkerhet",
    desc: "Ingen personal behöver arbeta nära spänningsförande delar. Drönaren håller säkerhetsavstånd och dokumenterar med zoom.",
  },
  {
    title: "Snabbare inspektion",
    desc: "Drönarinspektion är snabbare än traditionell manuell inspektion. Tidsåtgången beror på stationens storlek och komplexitet.",
  },
  {
    title: "Kombination av sensorer",
    desc: "Visuell kamera och värmekamera i samma flygning ger en komplett bild av stationens skick.",
  },
  {
    title: "Detaljerad rapport",
    desc: "Strukturerad inspektionsrapport med georefererade bilder, termogrammer och åtgärdsrekommendationer.",
  },
];

const stationFaqItems: FAQItem[] = [
  {
    question: "Kan transformatorstationer inspekteras utan driftstopp?",
    answer:
      "Ja, drönarinspektion genomförs normalt utan driftstopp. Drönaren håller säkert avstånd till spänningsförande delar och dokumenterar med zoomoptik, så att ingen personal behöver vistas nära anläggningens riskområden. För termografering behöver komponenterna vara strömförande — belastad drift är alltså en fördel vid mätningen.",
  },
  {
    question: "Vad upptäcker termografering i en transformatorstation?",
    answer:
      "Värmekameran identifierar temperaturavvikelser som indikerar varmgångar i kabelanslutningar, klämmor och genomföringar, överbelastade transformatorer, defekta isolatorer med interna fel samt kontaktmotstånd i kopplingsanordningar — fel som ofta inte syns vid visuell kontroll.",
  },
  {
    question: "Vilka delar av stationen inspekteras?",
    answer:
      "Isolatorer, kabelanslutningar och genomföringar, transformatorkroppar med kylflänsar, stålkonstruktioner, ställverksutrustning som frånskiljare och brytare, samt stationsområdets markplan, inhägnad och vegetation.",
  },
  {
    question: "Vad ingår i inspektionsrapporten?",
    answer:
      "En strukturerad inspektionsrapport med georefererade bilder, termogram och åtgärdsrekommendationer. Fynd klassificeras så att ni kan prioritera underhållsinsatser. Leveransformat anpassas efter ert förvaltningssystem.",
  },
  {
    question: "Vad styr priset för en stationsinspektion?",
    answer:
      "Priset beror på stationens storlek och komplexitet, antal stationer i uppdraget, vilken kombination av visuell och termisk inspektion som önskas samt mobiliseringsavstånd. Kontakta GridDrone för en offert.",
  },
];

export default function TransformatorstationInspektionPage() {
  return (
    <>
      <JsonLd
        type="Service"
        servicePath="/tjanster/transformatorstation-inspektion"
      />
      <JsonLd type="FAQPage" faqItems={stationFaqItems} />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "Transformatorstation inspektion", href: "/tjanster/transformatorstation-inspektion" },
        ]}
      />

      <Hero
        title="Drönarinspektion av transformatorstationer"
        subtitle="Transformatorstation inspektion"
        description="Säker och effektiv inspektion av transformatorstationer med drönare. Visuell och termisk kontroll av isolatorer, kablar, transformatorer och strukturer utan att personal behöver vistas nära spänningsförande delar."
        primaryCta={{ label: "Begär offert", href: "/kontakt?tjanst=station" }}
        secondaryCta={{ label: "Se exempelrapport", href: "/exempelrapport" }}
      />

      <Breadcrumbs
        items={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "Transformatorstation inspektion" },
        ]}
      />

      {/* Vad inspekteras */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Vad inspekteras</h2>
            <p className="body-text mt-4">
              Drönaren dokumenterar alla kritiska komponenter på
              transformatorstationen med visuell kamera och värmekamera.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {inspectionItems.map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="text-base font-semibold text-surface-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fördelar */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">
              Fördelar med drönarinspektion av stationer
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
            {benefits.map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="text-base font-semibold text-surface-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        items={stationFaqItems}
        heading="Vanliga frågor om stationsinspektion"
      />

      {/* Relaterat innehåll */}
      <section className="border-t border-surface-100 bg-surface-50 py-10">
        <div className="container-section text-center">
          <p className="text-sm text-surface-600">
            Fördjupning: läs vår guide om <Link href="/guider/termografering-kraftledningar" className="text-brand-600 underline hover:text-brand-700">termografering av kraftledningar och stationer</Link>.
          </p>
        </div>
      </section>

      <CTABand primaryHref="/kontakt?tjanst=station" secondaryHref="/exempelrapport" secondaryLabel="Se exempelrapport" />
    </>
  );
}
