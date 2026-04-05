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
  title: "Drönarinspektion för energibolag & nätägare",
  description:
    "GridDrone inspekterar kraftledningar och elnät för nätägare och energibolag. GIS-redo leveranser, termografi och BVLOS. Begär offert.",
  path: "/branscher/energibolag",
  keywords: [
    "drönarinspektion energibolag",
    "drönarinspektion nätägare",
    "elnätsinspektion drönare",
    "kraftledningsinspektion elnätsbolag",
    "drönartjänster elnät",
  ],
});

const energiFaqItems: FAQItem[] = [
  {
    question: "Vilka inspektionstjänster erbjuder GridDrone till energibolag?",
    answer:
      "Vi erbjuder kraftledningsinspektion, termografering, vegetationskontroll, transformatorstationsinspektion, BVLOS-inspektion av långa sträckor, stormskadeinspektion och prediktiva underhållsabonnemang. Alla tjänster levereras med GIS-kompatibla data redo för ert nätförvaltningssystem.",
  },
  {
    question: "Hur integreras drönardata med vårt befintliga nätförvaltningssystem?",
    answer:
      "Vi levererar data i standardiserade format — GeoTIFF, shapefiler, CSV och georefererade bilder i SWEREF99 TM — som är kompatibla med de flesta GIS- och nätförvaltningssystem. Vid behov anpassar vi leveransformat efter ert systems krav.",
  },
  {
    question: "Kan GridDrone hantera inspektion av både distributions- och regionnät?",
    answer:
      "Ja, vi inspekterar allt från lokala distributionsnät till regionala ledningssträckor. Inspektionsprocessen skalas efter ert näts omfattning, spänningsnivå och specifika underhållsbehov.",
  },
  {
    question: "Hur fungerar upphandling av drönarinspektion?",
    answer:
      "Vi tillhandahåller fullständig dokumentation för upphandling: metodbeskrivning, leveransformat, QA-process, prissättningsmodell och referensinformation. Vi anpassar efter ert förfrågningsunderlag.",
  },
  {
    question: "Erbjuder ni ramavtal för löpande inspektioner?",
    answer:
      "Ja, vi erbjuder underhållsabonnemang med schemalagda inspektioner, historisk datalagring, trendanalyser, prioriterad stormskaderespons och dedikerad kontaktperson. Kontakta oss för att diskutera ett upplägg anpassat efter ert nät.",
  },
];

export default function EnergibolagPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Branscher", href: "/branscher/energibolag" },
          { name: "Nätägare & energibolag" },
        ]}
      />
      <JsonLd
        type="Service"
        servicePath="/branscher/energibolag"
        serviceName="Drönarinspektion för nätägare & energibolag"
        serviceDescription="Professionell drönarinspektion av kraftledningar och elnät för nätägare och energibolag i Sverige."
      />
      <JsonLd type="FAQPage" faqItems={energiFaqItems} />

      <Hero
        title="Drönarinspektion för energibolag och nätägare"
        subtitle="Drönarinspektion energibolag"
        description="Vi inspekterar ert distributions- och regionnät med standardiserade metoder och levererar strukturerade data direkt till ert nätförvaltningssystem — utan driftstopp och utan klättring."
        primaryCta={{ label: "Begär offert", href: "/kontakt" }}
        secondaryCta={{ label: "Se exempelrapport", href: "/exempelrapport" }}
      />

      <Breadcrumbs
        items={[
          { name: "Branscher" },
          { name: "Nätägare & energibolag" },
        ]}
      />

      {/* AEO Answer-First Block */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-2">Varför väljer energibolag drönarinspektion?</h2>
            <p className="body-text mt-6">
              Energibolag och nätägare i Sverige använder drönarinspektion för att effektivisera
              underhåll av kraftledningar och elnät. Drönare med RGB-kamera och värmekamera dokumenterar
              varje stolpe, isolator och ledningssektion utan klättring och utan driftstopp. Data levereras
              i GIS-kompatibla format direkt till nätförvaltningssystemet, vilket ger ett strukturerat
              underlag för underhållsplanering baserat på faktisk anläggningsstatus.
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

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Inspektionstjänster för ert elnät</h2>
          <p className="body-text mt-4 max-w-3xl">
            Oavsett om ni äger ett regionalt stamnät eller ett lokalt
            distributionsnät, anpassar vi inspektion och leveransformat
            efter era krav på dokumentation, spårbarhet och systemintegration.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Kraftledningsinspektion",
                desc: "Visuell inspektion av stolpar, isolatorer, traverser och ledningsgata. Georefererade bilder med standardiserade bildvinklar.",
                href: "/tjanster/kraftledningsinspektion",
              },
              {
                title: "Termografering",
                desc: "Radiometrisk värmekamera för att identifiera varmgångar, kontaktfel och överbelastade komponenter i drift.",
                href: "/tjanster/termografering-kraftledning",
              },
              {
                title: "Vegetationskontroll",
                desc: "LiDAR-baserad kartläggning av vegetation längs kraftledningsgator för prioritering av röjningsinsatser.",
                href: "/tjanster/vegetationskontroll",
              },
              {
                title: "Transformatorstationer",
                desc: "Visuell och termisk kontroll av transformatorstationer utan att personal exponeras för farlig arbetsmiljö.",
                href: "/tjanster/transformatorstation-inspektion",
              },
              {
                title: "BVLOS-inspektion",
                desc: "Inspektera långa ledningssträckor utan ompositionering. Effektivt för stamnät och svårtillgängliga sträckor.",
                href: "/tjanster/bvlos-inspektion",
              },
              {
                title: "Stormskadeinspektion",
                desc: "Akut skadekartläggning efter storm med prioriterad skadeöversikt som beslutsunderlag för reparation.",
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

      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <h2 className="heading-2">Varför drönare för nätinspektion?</h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-3">
            <div className="text-center">
              <h3 className="text-base font-semibold text-surface-900">Säkrare arbetsmetod</h3>
              <p className="mt-2 text-sm text-surface-500">
                Eliminera klättring och arbete på hög höjd. Minskad riskexponering
                för er personal och underleverantörer.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-base font-semibold text-surface-900">GIS-redo leveranser</h3>
              <p className="mt-2 text-sm text-surface-500">
                Georefererade bilder, avvikelserapporter och kartlager som
                importeras direkt i ert nätförvaltningssystem.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-base font-semibold text-surface-900">Repeterbar process</h3>
              <p className="mt-2 text-sm text-surface-500">
                Standardiserade bildvinklar och dokumentation som möjliggör
                jämförelse och trendanalys mellan inspektionscykler.
              </p>
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
            Vi skräddarsyr inspektionsomfång och leveransformat efter era
            specifika krav. Jämför även{" "}
            <Link href="/jamforelser/helikopter-vs-dronare-inspektion" className="text-brand-600 underline hover:text-brand-800">
              drönare vs helikopter för ert nät
            </Link>.
          </p>
          <div className="mt-6">
            <Link href="/kontakt" className="btn-primary">
              Begär offert
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Från lokalt distributionsnät till regionnät</h2>
          <p className="body-text mt-4 max-w-3xl">
            Vi arbetar med nätägare av alla storlekar — från kommunala
            energibolag med lokala distributionsnät till regionala nätägare med
            omfattande ledningssträckor. Inspektionsprocessen skalas efter
            ert näts omfattning och era specifika underhållsbehov.
          </p>
          <p className="body-text mt-4 max-w-3xl">
            Läs vår{" "}
            <Link href="/guider/upphandling-dronareinspektion" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400">
              guide om upphandling av drönarinspektion
            </Link>{" "}
            för kravspec och utvärderingskriterier, eller se vilka{" "}
            <Link href="/guider/komponenter-elnat" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400">
              elnätskomponenter som inspekteras
            </Link>{" "}
            och vilka{" "}
            <Link href="/guider/feltyper-kraftledningar" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400">
              feltyper som identifieras
            </Link>.
          </p>
          <div className="mt-8">
            <Link
              href="/tjanster/underhallsabonnemang"
              className="text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              Läs om vårt underhållsabonnemang →
            </Link>
          </div>
        </div>
      </section>

      <FAQ
        items={energiFaqItems}
        heading="Vanliga frågor från energibolag"
        subheading="Har ni fler frågor? Kontakta oss för en genomgång anpassad efter ert nät."
      />

      <CTABand />
    </>
  );
}
