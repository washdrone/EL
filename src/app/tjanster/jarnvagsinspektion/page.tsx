import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import type { FAQItem } from "@/data/faq";

export const metadata: Metadata = createPageMetadata({
  title: "Inspektion av järnvägskontaktledningar",
  description:
    "Drönarinspektion av kontaktledningssystem längs järnväg — hängare, bärlina, kontakttråd, isolatorer och fästanordningar. Utan trafikstörning.",
  path: "/tjanster/jarnvagsinspektion",
  keywords: [
    "järnvägsinspektion drönare",
    "kontaktledning inspektion drönare",
    "Trafikverket drönarinspektion",
    "järnväg kontaktledning inspektion",
  ],
});

const faqItems: FAQItem[] = [
  {
    question: "Hur inspekteras järnvägskontaktledningar med drönare?",
    answer:
      "Drönaren flyger längs spåret och fotograferar kontaktledningssystemets komponenter — hängare, bärlina, kontakttråd, isolatorer och fästanordningar. Inspektionen utförs vid tidsfönster utan tågtrafik, i samordning med trafikledningen.",
  },
  {
    question: "Vilka fördelar har drönare jämfört med manuell järnvägsinspektion?",
    answer:
      "Drönare minskar behovet av personal på spåret, vilket ökar säkerheten. Inspektionen kan utföras snabbare och ger högupplösta, georefererade bilder som kan jämföras över tid för att identifiera försämring.",
  },
  {
    question: "Behövs spåravstängning vid drönarinspektion?",
    answer:
      "Inspektion utförs under trafikfria tidsfönster — typiskt nattetid eller under planerade underhållsfönster. GridDrone samordnar med trafikledningen för att minimera påverkan på tågtrafiken.",
  },
  {
    question: "Vilka typer av fel kan identifieras?",
    answer:
      "Vanliga fynd inkluderar slitage på kontakttråd, skadade isolatorer, lösa hängare, korrosion på fästanordningar, vegetationsintrång i ledningsområdet och strukturella skador efter yttre påverkan.",
  },
];

const inspectionAreas = [
  {
    title: "Kontakttråd & bärlina",
    desc: "Slitage, höjdavvikelser och mekaniska skador på strömförande delar.",
  },
  {
    title: "Hängare & fästanordningar",
    desc: "Lösa, saknade eller korroderade hängare och infästningar i stolpar och bryggor.",
  },
  {
    title: "Isolatorer",
    desc: "Sprickor, kontaminering och åldringsskador på isolatorer i kontaktledningssystemet.",
  },
  {
    title: "Stolpar & fundament",
    desc: "Strukturellt skick på bärande stolpar, fundament och traverser.",
  },
];

const advantages = [
  {
    title: "Säkrare inspektion",
    desc: "Minimerar behovet av personal på spåret — minskad risk vid arbete nära spänningssatta ledningar och tågtrafik.",
  },
  {
    title: "Snabbare genomförande",
    desc: "Drönare täcker långa sträckor effektivt under tillgängliga underhållsfönster.",
  },
  {
    title: "Dokumenterad historik",
    desc: "Georefererade bilder möjliggör jämförelse över tid och identifiering av progressiv försämring.",
  },
];

export default function JarnvagsinspektionPage() {
  return (
    <>
      <JsonLd type="Service" servicePath="/tjanster/jarnvagsinspektion" />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "Järnvägsinspektion", href: "/tjanster/jarnvagsinspektion" },
        ]}
      />
      <JsonLd type="FAQPage" faqItems={faqItems} />

      <Hero
        title="Inspektion av järnvägskontaktledningar med drönare"
        subtitle="Järnväg & kontaktledning"
        description="Inspektion av kontaktledningssystem längs järnväg — hängare, bärlina, kontakttråd, isolatorer och fästanordningar. Utförs utan trafikstörning vid samordnade tidsfönster."
        primaryCta={{ label: "Begär offert", href: "/kontakt?tjanst=jarnvag" }}
        secondaryCta={{ label: "Se exempelrapport", href: "/exempelrapport" }}
      />

      <Breadcrumbs
        items={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "Järnvägsinspektion" },
        ]}
      />

      {/* Vad inspekteras */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Vad inspekteras?</h2>
            <p className="body-text mt-4">
              Kontaktledningssystemet omfattar ett stort antal komponenter som
              alla kräver regelbunden tillsyn. Drönare ger en effektiv överblick
              utan att påverka tågtrafiken.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
            {inspectionAreas.map((item) => (
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
            <h2 className="heading-2">Fördelar med drönarbaserad järnvägsinspektion</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-3">
            {advantages.map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-base font-semibold text-surface-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Målkunder */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Vem anlitar tjänsten?</h2>
            <p className="body-text mt-4">
              Järnvägskontaktledningsinspektion med drönare riktar sig till
              aktörer med ansvar för järnvägsinfrastruktur och underhåll av
              kontaktledningsnät i Sverige.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
            {[
              "Infrastrukturförvaltare",
              "Underhållsentreprenörer",
              "Järnvägsoperatörer",
              "Konsulter inom spårteknik",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-surface-100 bg-surface-50 px-5 py-3">
                <div className="h-2 w-2 rounded-full bg-brand-500" />
                <span className="text-sm font-medium text-surface-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relaterade tjänster */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Relaterade tjänster</h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-3">
            {[
              {
                title: "BVLOS-inspektion",
                desc: "Inspektera långa järnvägssträckor effektivt med lång räckvidd.",
                href: "/tjanster/bvlos-inspektion",
              },
              {
                title: "Termografering",
                desc: "Identifiera varmgångar i kontaktledningssystemets elektriska komponenter.",
                href: "/tjanster/termografering-kraftledning",
              },
              {
                title: "Underhållsabonnemang",
                desc: "Schemalagd inspektion med historisk datalagring och trendanalys.",
                href: "/tjanster/underhallsabonnemang",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">
                  Läs mer →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqItems} heading="Vanliga frågor om järnvägsinspektion" />

      <CTABand primaryHref="/kontakt?tjanst=jarnvag" secondaryHref="/exempelrapport" secondaryLabel="Se exempelrapport" />
    </>
  );
}
