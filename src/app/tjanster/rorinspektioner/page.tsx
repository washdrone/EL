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
  title: "Inspektion av Olje- & Gasledningar med Drönare",
  description:
    "Visuell och termisk inspektion av rörledningar ovan mark, korsningar och tryckstationer. Identifiering av korrosion, läckageindikatorer och konstruktionsskador.",
  path: "/tjanster/rorinspektioner",
  keywords: [
    "rörledningsinspektion drönare",
    "gasledning inspektion drönare Sverige",
    "pipeline inspektion drönare",
    "olje gasledning inspektion",
  ],
});

const faqItems: FAQItem[] = [
  {
    question: "Vilka typer av rörledningar inspekteras?",
    answer:
      "Vi inspekterar rörledningar ovan mark — inklusive olje- och gasledningar, processledningar vid industrianläggningar, fjärrvärmerör och andra ledningssystem där visuell och termisk inspektion är tillämpbar.",
  },
  {
    question: "Vad kan drönaren upptäcka på en rörledning?",
    answer:
      "Korrosion och ytskador, deformationer, läckageindikatorer (temperaturavvikelser vid termografi), skador på isolering och ytbeläggning, vegetationsintrång och markrörelser nära ledningen.",
  },
  {
    question: "Kan termografi användas för att hitta läckor?",
    answer:
      "Termografi kan identifiera temperaturavvikelser som kan indikera läckage i rörledningar. Det är ett kompletterande verktyg — inte ett substitut för tryckprovning eller andra specialiserade läcksökningsmetoder.",
  },
  {
    question: "Hur lång sträcka kan inspekteras per dag?",
    answer:
      "Inspektionskapaciteten beror på ledningens tillgänglighet, terräng och krav på detaljnivå. Med BVLOS-kapacitet kan längre sträckor täckas effektivt. Kontakta oss för en bedömning baserad på ert specifika behov.",
  },
];

const inspectionTypes = [
  {
    title: "Visuell inspektion",
    desc: "Högupplöst kameradokumentation av rörledningens yttre skick, stöd, upphängningar och omgivande terräng.",
  },
  {
    title: "Termografisk inspektion",
    desc: "Värmekamera identifierar temperaturavvikelser som kan indikera isoleringsfel, läckage eller driftsproblem.",
  },
  {
    title: "Korsningar & ventilstationer",
    desc: "Detaljerad inspektion av kritiska punkter — vägkorsningar, ventilstationer och tryckstationer.",
  },
  {
    title: "Korrosions- & skadedokumentation",
    desc: "Identifiering och GPS-märkning av synlig korrosion, mekaniska skador och ytbeläggningsdefekter.",
  },
];

export default function RorinspektionerPage() {
  return (
    <>
      <JsonLd type="Service" servicePath="/tjanster/rorinspektioner" />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "Rörinspektioner" },
        ]}
      />
      <JsonLd type="FAQPage" faqItems={faqItems} />

      <Hero
        title="Inspektion av olje- & gasledningar med drönare"
        subtitle="Rörledningsinspektion"
        description="Visuell och termisk inspektion av rörledningar ovan mark, korsningar och tryckstationer. Identifiering av korrosion, läckageindikatorer och konstruktionsskador."
        primaryCta={{ label: "Boka genomgång", href: "/kontakt" }}
        secondaryCta={{ label: "Begär offert", href: "/kontakt" }}
      />

      <Breadcrumbs
        items={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "Rörinspektioner" },
        ]}
      />

      {/* Inspektionstyper */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Hur inspekteras rörledningar?</h2>
            <p className="body-text mt-4">
              Drönare ger en effektiv och säker metod för att inspektera
              rörledningar ovan mark. Vi kombinerar visuell och termisk
              inspektion för en komplett bild av ledningens tillstånd.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
            {inspectionTypes.map((item) => (
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
            <h2 className="heading-2">Fördelar med drönarbaserad rörledningsinspektion</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              {
                title: "Svårtillgänglig terräng",
                desc: "Inspektera ledningar i skog, våtmark och bergspass utan tunga maskiner.",
              },
              {
                title: "Ingen driftstörning",
                desc: "Inspektion utförs utan att påverka produktionsflödet i ledningen.",
              },
              {
                title: "Kombinerad data",
                desc: "Visuella bilder och termografisk data i samma georefererade rapport.",
              },
            ].map((item) => (
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

      {/* Relaterade */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Relaterade tjänster</h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-3">
            {[
              {
                title: "Termografering",
                desc: "Komplettera med detaljerad termisk analys av kritiska komponenter.",
                href: "/tjanster/termografering-kraftledning",
              },
              {
                title: "BVLOS-inspektion",
                desc: "Inspektera långa ledningssträckor effektivt med lång räckvidd.",
                href: "/tjanster/bvlos-inspektion",
              },
              {
                title: "Underhållsabonnemang",
                desc: "Löpande inspektion med trendanalys och historisk jämförelsedata.",
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

      <FAQ items={faqItems} heading="Vanliga frågor om rörledningsinspektion" />

      <CTABand primaryHref="/kontakt" secondaryHref="/kontakt" />
    </>
  );
}
