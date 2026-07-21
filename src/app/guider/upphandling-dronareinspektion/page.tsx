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
  title: "Upphandla drönarinspektion av elnät — guide",
  description:
    "Guide för upphandling av drönarinspektion av kraftledningar och elnät. Kravspec, utvärderingskriterier, leveransformat och avtalsupplägg.",
  path: "/guider/upphandling-dronareinspektion",
  ogType: "article",
  keywords: [
    "upphandla drönarinspektion",
    "offert drönarinspektion",
    "leverantör drönarinspektion elnät",
    "kravspec drönarinspektion",
    "upphandling elnätsinspektion",
  ],
});

const faqItems: FAQItem[] = [
  {
    question: "Vad bör ingå i en kravspec för drönarinspektion?",
    answer:
      "En kravspec bör specificera: inspektionstyp (översikt eller detaljerad), vilka komponenter som ska inspekteras (stolpar, isolatorer, ledningslinor, traverser), leveransformat (GIS-format, rapportstruktur), koordinatsystem (SWEREF99 TM), QA-krav, tidsplan och eventuella BVLOS-krav.",
  },
  {
    question: "Vilka utvärderingskriterier är viktiga vid upphandling?",
    answer:
      "Piloternas utbildning och certifiering (EASA), erfarenhet av arbete nära elektriska anläggningar, utrustning (RGB, termografi, RTK, LiDAR), leveransformat och GIS-integration, QA-process, säkerhetsrutiner (HSE) och referensuppdrag inom elnätsbranschen.",
  },
  {
    question: "Vad behöver leverantören veta för att ge en offert?",
    answer:
      "Ungefärlig sträcka (km ledning) eller antal stolpar, nättyp och spänningsnivå, GIS-underlag, önskad inspektionstyp och leveransformat, eventuella krav på termografering eller LiDAR, samt tidsplan och geografisk placering.",
  },
  {
    question: "Ska man välja ramavtal eller enskild beställning?",
    answer:
      "Ramavtal med schemalagda inspektioner ger lägre pris per inspektion, möjlighet till trendanalys över tid och prioriterad respons vid akutbehov. Enskild beställning passar för engångsinspektion eller utvärdering av en ny leverantör.",
  },
  {
    question: "Hur ska leveransformat specificeras i förfrågningsunderlaget?",
    answer:
      "Specificera: filformat (shapefiler, GeoTIFF, CSV, GeoPackage), koordinatsystem (SWEREF99 TM), rapportstruktur (fyndkort, sammanfattning, GPS-karta), klassificeringssystem för avvikelser, och krav på metadata och QA-redovisning.",
  },
  {
    question: "Vilka säkerhetskrav bör ställas?",
    answer:
      "EASA-utbildade piloter med dokumenterad erfarenhet nära elektriska anläggningar, ansvarsförsäkring, riskbedömning anpassad för arbete vid elnät, följsamhet med nätägarens säkerhetsföreskrifter och rutiner för samordning med nätdriftcentral.",
  },
  {
    question: "Hur jämför man leverantörer av drönarinspektion?",
    answer:
      "Jämför: piloternas utbildning och erfarenhet, utrustningens kapacitet (kamera, RTK, termografi), leveransformat och GIS-integration, QA-process och metodbeskrivning, referensuppdrag, pris per km eller stolpe, och responstid vid akutinspektion.",
  },
];

export default function UpphandlingGuidePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pb-24 lg:pb-0">
        <JsonLd
          type="BreadcrumbList"
          breadcrumbs={[
            { name: "Guider" },
            { name: "Upphandla drönarinspektion" },
          ]}
        />
        <JsonLd type="FAQPage" faqItems={faqItems} />
        <JsonLd
          type="Article"
          articleHeadline={"Upphandla drönarinspektion av elnät — guide"}
          articleDescription={
            "Guide för upphandling av drönarinspektion av kraftledningar och elnät. Kravspec, utvärderingskriterier, leveransformat och avtalsupplägg."
          }
          articlePath="/guider/upphandling-dronareinspektion"
          datePublished="2026-04-05"
          dateModified="2026-04-05"
        />

        <Hero
          title="Upphandla drönarinspektion av elnät — guide för nätägare"
          subtitle="Guide: upphandling drönarinspektion"
          description="Vad ni bör tänka på vid upphandling av drönarinspektion av kraftledningar — kravspec, utvärderingskriterier, leveransformat och avtalsupplägg."
          dateLine="Uppdaterad: 5 april 2026"
          primaryCta={{ label: "Begär offert", href: "/kontakt" }}
          secondaryCta={{ label: "Se kostnadskalkylator", href: "/roi-kalkylator" }}
          compact
        />

        <Breadcrumbs
          items={[
            { name: "Guider" },
            { name: "Upphandla drönarinspektion" },
          ]}
        />

        {/* AEO: Definition */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <div className="mx-auto max-w-3xl">
              <h2 className="heading-2">Hur upphandlar man drönarinspektion av elnät?</h2>
              <p className="body-text mt-6">
                Upphandling av drönarinspektion av elnät kräver en tydlig kravspecifikation som
                beskriver vilka komponenter som ska inspekteras (stolpar, isolatorer, ledningslinor,
                traverser, fästen), vilka sensorer som behövs (RGB-kamera, termografi, LiDAR),
                vilket leveransformat som krävs (GIS-format, koordinatsystem, rapportstruktur)
                och vilka kvalitets- och säkerhetskrav som gäller. En strukturerad upphandling
                säkerställer att ni får jämförbara offerter och rätt leverantör.
              </p>
              <p className="body-text mt-4">
                Denna guide hjälper er att formulera kravspec, välja utvärderingskriterier
                och strukturera ert förfrågningsunderlag. Se vår{" "}
                <Link href="/guider/komponenter-elnat" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400">
                  guide om elnätskomponenter
                </Link>{" "}
                för detaljerad information om vilka komponenter som bör inkluderas, och{" "}
                <Link href="/guider/feltyper-kraftledningar" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400">
                  vår feltypguide
                </Link>{" "}
                för att förstå vilka avvikelser inspektionen ska identifiera.
              </p>
            </div>
          </div>
        </section>

        {/* Kravspec */}
        <section className="section-padding bg-surface-50">
          <div className="container-section">
            <h2 className="heading-2">Vad bör ingå i en kravspec för drönarinspektion?</h2>
            <p className="body-text mt-4 max-w-3xl">
              En komplett kravspecifikation för upphandling av drönarinspektion bör innehålla:
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Inspektionsobjekt",
                  desc: "Specificera vilka komponenter som ska inspekteras: stolpar och fundament, isolatorer, ledningslinor och topplinor, traverser och fästen, skarvar och kopplingar, ledningsgata och vegetation.",
                },
                {
                  title: "Sensorkrav",
                  desc: "Ange vilka sensorer som krävs: RGB-kamera (upplösning), radiometrisk värmekamera (termografering), RTK-positionering (noggrannhet), LiDAR (tillval för vegetationskontroll).",
                },
                {
                  title: "Leveransformat",
                  desc: "Specificera GIS-format (shapefiler, GeoTIFF, GeoPackage, CSV), koordinatsystem (SWEREF99 TM), rapportstruktur (fyndkort, sammanfattning, GPS-karta) och metadata-krav.",
                },
                {
                  title: "Kvalitetskrav (QA)",
                  desc: "Krav på standardiserade bildvinklar, kvalitetskontroll av bilder, komplettering av saknade bilder, och klassificeringssystem för avvikelser.",
                },
                {
                  title: "Säkerhetskrav (HSE)",
                  desc: "EASA-utbildning, erfarenhet nära elektriska anläggningar, ansvarsförsäkring, riskbedömning, samordning med nätdriftcentral och följsamhet med nätägarens säkerhetsföreskrifter.",
                },
                {
                  title: "Omfattning och tidsplan",
                  desc: "Sträcka (km), antal stolpar, spänningsnivå, nättyp, geografisk placering, önskad tidsperiod och leveranstid efter inspektion.",
                },
              ].map((item) => (
                <div key={item.title} className="card p-6">
                  <h3 className="text-base font-semibold text-surface-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Utvärderingskriterier */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <div className="mx-auto max-w-3xl">
              <h2 className="heading-2">Utvärderingskriterier vid val av leverantör</h2>
              <p className="body-text mt-6">
                Vid utvärdering av leverantörer bör ni vikta följande kriterier:
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { title: "Piloternas kompetens", desc: "EASA-utbildning, BVLOS-behörighet, erfarenhet av arbete nära spänningsförande anläggningar och dokumenterade referensuppdrag inom elnätsbranschen." },
                  { title: "Utrustningens kapacitet", desc: "Drönarsystemets prestanda, kameraupplösning (RGB och termografi), RTK-noggrannhet, batterikapacitet och eventuell LiDAR-kapabilitet." },
                  { title: "Leveransformat och GIS-integration", desc: "Förmåga att leverera i ert önskade GIS-format, integration med ert nätförvaltningssystem och flexibilitet att anpassa leveransen." },
                  { title: "QA-process och metodik", desc: "Dokumenterad kvalitetskontrollprocess, standardiserade bildvinklar, kompletteringsrutiner och klassificeringssystem för avvikelser." },
                  { title: "Säkerhet och försäkring", desc: "Ansvarsförsäkring, riskbedömningsmetodik, HSE-rutiner och förmåga att följa nätägarens säkerhetsföreskrifter." },
                  { title: "Pris och avtalsmodell", desc: "Jämför pris per km eller per stolpe, ramavtalsmöjligheter, volymrabatter och kostnadsstruktur för tillval som termografering och LiDAR." },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-brand-500 pl-5">
                    <h3 className="text-base font-semibold text-surface-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-surface-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mid-content CTA */}
        <section className="bg-brand-50 py-12">
          <div className="container-section text-center">
            <h3 className="text-lg font-semibold text-brand-900">
              Planerar ni en upphandling av drönarinspektion?
            </h3>
            <p className="mx-auto mt-2 max-w-lg text-sm text-brand-700">
              Vi tillhandahåller information för er upphandlingsprocess — metodbeskrivning,
              leveransformat och prissättningsmodell. Se även vår{" "}
              <Link href="/guider/termografering-kraftledningar" className="text-brand-600 underline hover:text-brand-800">
                guide om termografering
              </Link>{" "}
              om ni överväger termisk inspektion som tillval.
            </p>
            <div className="mt-6">
              <Link href="/kontakt" className="btn-primary">
                Be om kostnadsanalys
              </Link>
            </div>
          </div>
        </section>

        {/* Ramavtal vs enskild */}
        <section className="section-padding bg-surface-50">
          <div className="container-section">
            <h2 className="heading-2">Ramavtal eller enskild beställning?</h2>
            <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-2">
              <div className="rounded-xl border-2 border-brand-200 bg-brand-50/30 p-6">
                <h3 className="text-lg font-semibold text-brand-800">Ramavtal / abonnemang</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Lägre pris per inspektion genom volymupplägg",
                    "Schemalagda inspektioner med avtalad frekvens",
                    "Historisk datalagring och trendanalys",
                    "Prioriterad respons vid stormskada",
                    "Dedikerad kontaktperson",
                    "Konsekvent metodik mellan tillfällen",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-surface-700">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href="/tjanster/underhallsabonnemang" className="text-sm font-medium text-brand-600 hover:text-brand-700">
                    Läs om underhållsabonnemang →
                  </Link>
                </div>
              </div>
              <div className="rounded-xl border-2 border-surface-200 bg-surface-50 p-6">
                <h3 className="text-lg font-semibold text-surface-800">Enskild beställning</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Ingen långsiktig bindning",
                    "Bra vid utvärdering av ny leverantör",
                    "Flexibelt vid engångsinspektion",
                    "Kan konverteras till ramavtal",
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

        {/* Relaterade */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <h2 className="heading-2">Relaterade resurser</h2>
            <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-3">
              <Link href="/roi-kalkylator" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Kostnadskalkylator</h3>
                <p className="mt-2 text-sm text-surface-500">Beräkna uppskattad kostnad för drönarinspektion baserat på era parametrar.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Beräkna →</span>
              </Link>
              <Link href="/jamforelser/helikopter-vs-dronare-inspektion" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Helikopter vs drönare</h3>
                <p className="mt-2 text-sm text-surface-500">Jämför kostnad, säkerhet och datakvalitet mellan inspektionsmetoderna.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Se jämförelsen →</span>
              </Link>
              <Link href="/guider/dataleverans-gis-elnat" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Guide: Dataleverans och GIS</h3>
                <p className="mt-2 text-sm text-surface-500">Detaljer om leveransformat, GIS-integration och rapportstruktur.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs guiden →</span>
              </Link>
            </div>
          </div>
        </section>

        <FAQ
          items={faqItems}
          heading="Vanliga frågor om upphandling av drönarinspektion"
          subheading="Behöver ni hjälp med ert förfrågningsunderlag? Kontakta oss."
        />

        {/* Relaterat innehåll */}
      <section className="border-t border-surface-100 bg-surface-50 py-10">
        <div className="container-section text-center">
          <p className="text-sm text-surface-600">
            Se även vår tjänst <Link href="/tjanster/kraftledningsinspektion" className="text-brand-600 underline hover:text-brand-700">kraftledningsinspektion med drönare</Link> och våra <Link href="/tjanster/kraftledningsinspektion/dataleveranser" className="text-brand-600 underline hover:text-brand-700">dataleveranser för elnätsinspektion</Link>.
          </p>
        </div>
      </section>

      <CTABand
          heading="Planerar ni att upphandla drönarinspektion?"
          description="Vi tillhandahåller information för upphandling — metodbeskrivning, leveransformat, QA-process och prissättningsmodell."
          primaryLabel="Begär offert"
          secondaryLabel="Be om kostnadsanalys"
        />
      </main>
      <Footer />
    </>
  );
}
