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
  title: "Prediktivt Underhållsabonnemang — Schemalagd Inspektion & Trendanalys",
  description:
    "Årsbaserat inspektionsavtal med garanterad frekvens, historisk datalagring och trendanalys. Identifiera försämring innan fel uppstår.",
  path: "/tjanster/underhallsabonnemang",
  keywords: [
    "underhållsavtal drönare elnät",
    "löpande kraftledningsinspektion",
    "prediktivt underhåll elnät drönare",
    "inspektionsabonnemang elnät",
  ],
});

const faqItems: FAQItem[] = [
  {
    question: "Vad ingår i ett prediktivt underhållsabonnemang?",
    answer:
      "Schemalagda inspektioner med överenskommen frekvens, historisk datalagring med trendanalyser, prioriterad respons vid stormskada, dedikerad kontaktperson och årlig sammanfattningsrapport med rekommendationer.",
  },
  {
    question: "Hur ofta genomförs inspektioner?",
    answer:
      "Inspektionsfrekvensen anpassas efter ert behov — kvartalsvis eller halvårsvis är de vanligaste upplägen. Frekvensen kan variera för olika delar av ert nät beroende på kritikalitet och ålder.",
  },
  {
    question: "Vad innebär trendanalys?",
    answer:
      "Genom att jämföra inspektionsdata över tid identifierar vi progressiv försämring — till exempel ökande korrosion, isolatornedbrytning eller vegetationstillväxt. Detta möjliggör planerade åtgärder innan akuta fel uppstår.",
  },
  {
    question: "Vilken typ av infrastruktur passar abonnemanget för?",
    answer:
      "Abonnemanget är utformat för elnätsinfrastruktur — kraftledningar, transformatorstationer, vindkraftparker och solcellsparker. Upplägget anpassas efter vilken typ av infrastruktur ni behöver inspektera.",
  },
];

const included = [
  {
    title: "Schemalagda inspektioner",
    desc: "Planerade flyginspektioner med överenskommen frekvens — kvartals- eller halvårsvis.",
  },
  {
    title: "Historisk datalagring",
    desc: "All inspektionsdata lagras strukturerat och kan jämföras mellan inspektionstillfällen.",
  },
  {
    title: "Trendanalys & rapporter",
    desc: "Identifiering av progressiv försämring med visualiserade trender och åtgärdsrekommendationer.",
  },
  {
    title: "Prioriterad stormrespons",
    desc: "Vid stormskada prioriteras abonnemangskunder för snabb inspektion och skadekartläggning.",
  },
  {
    title: "Dedikerad kontaktperson",
    desc: "En fast kontaktperson som känner ert nät och era krav. Enkel kommunikation och planering.",
  },
  {
    title: "Årlig sammanfattningsrapport",
    desc: "Övergripande rapport med tillståndsöversikt, trender och rekommendationer för kommande period.",
  },
];

export default function UnderhallsabonnemangPage() {
  return (
    <>
      <JsonLd type="Service" servicePath="/tjanster/underhallsabonnemang" />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "Underhållsabonnemang" },
        ]}
      />
      <JsonLd type="FAQPage" faqItems={faqItems} />

      <Hero
        title="Prediktivt underhållsabonnemang — schemalagd inspektion & trendanalys"
        subtitle="Löpande inspektion"
        description="Årsbaserat inspektionsavtal med garanterad frekvens. GridDrone lagrar historisk inspektionsdata och levererar trendanalys — identifiera försämring innan fel uppstår."
        primaryCta={{ label: "Boka genomgång", href: "/kontakt" }}
        secondaryCta={{ label: "Begär offert", href: "/kontakt" }}
      />

      <Breadcrumbs
        items={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "Underhållsabonnemang" },
        ]}
      />

      {/* Vad ingår */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Vad ingår i abonnemanget?</h2>
            <p className="body-text mt-4">
              Underhållsabonnemanget är utformat för att ge er löpande insyn i
              infrastrukturens tillstånd och möjliggöra planerade åtgärder
              istället för akuta reparationer.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
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

      {/* Varför abonnemang */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Varför abonnemang istället för engångsinspektion?</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-base font-semibold text-surface-900">Engångsinspektion</h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Ögonblicksbild av tillståndet",
                  "Ingen jämförelsedata",
                  "Reaktivt underhåll",
                  "Ny upphandling varje gång",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-surface-500">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-surface-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold text-brand-700">Underhållsabonnemang</h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Trendanalys över tid",
                  "Historisk jämförelsedata",
                  "Prediktivt underhåll",
                  "Fast kontaktperson & planering",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-surface-700">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Passar för */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Passar för</h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-3">
            {[
              {
                title: "Elnätsbolag",
                desc: "Löpande tillsyn av distributions- och regionnät med krav på dokumenterad inspektionshistorik.",
              },
              {
                title: "Vindkraftoperatörer",
                desc: "Planerade inspektioner av rotorblad och torn med trenduppföljning.",
              },
              {
                title: "Industrianläggningar",
                desc: "Regelbunden kontroll av rörledningar, elanläggningar och tak/fasad.",
              },
            ].map((item) => (
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

      {/* Relaterade */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Tjänster som ingår i abonnemanget</h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-3">
            {[
              {
                title: "Kraftledningsinspektion",
                desc: "Visuell inspektion av stolpar, isolatorer och ledningsgata.",
                href: "/tjanster/kraftledningsinspektion",
              },
              {
                title: "Termografering",
                desc: "Värmekamerainspektion för att identifiera varmgångar och kontaktfel.",
                href: "/tjanster/termografering-kraftledning",
              },
              {
                title: "Stormskadeinspektion",
                desc: "Prioriterad akutinspektion vid stormskada för abonnemangskunder.",
                href: "/tjanster/stormskadeinspektion",
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

      <FAQ items={faqItems} heading="Vanliga frågor om underhållsabonnemang" />

      <CTABand primaryHref="/kontakt" secondaryHref="/kontakt" />
    </>
  );
}
