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
  title: "Dataleverans och GIS vid drönarinspektion av elnät",
  description:
    "Hur inspektionsdata från drönarinspektion levereras i GIS-format. GeoTIFF, shapefiler, SWEREF99 TM och integration med nätförvaltningssystem.",
  path: "/guider/dataleverans-gis-elnat",
  keywords: [
    "GIS data drönarinspektion",
    "dataleverans elnätsinspektion",
    "GeoTIFF elnät",
    "shapefiler kraftledning",
    "nätförvaltningssystem drönardata",
    "SWEREF99 TM drönarinspektion",
  ],
});

const faqItems: FAQItem[] = [
  {
    question: "Hur levereras data från drönarinspektion av elnät?",
    answer:
      "Data levereras digitalt i GIS-kompatibla format — GeoTIFF, shapefiler, CSV och georefererade bilder — redo för direktimport i ert nätförvaltningssystem. Leveransen inkluderar strukturerad rapport, GPS-karta med fyndmarkeringar och åtgärdsrekommendationer per komponent.",
  },
  {
    question: "Vilka GIS-format stödjer GridDrone?",
    answer:
      "Vi levererar i GeoTIFF, shapefiler (.shp), GeoPackage (.gpkg), CSV med koordinater och georefererade bilder med EXIF-data. Alla koordinater anges i SWEREF99 TM (EPSG:3006). Leveransformatet anpassas efter ert systems krav.",
  },
  {
    question: "Kan datan importeras direkt i vårt nätförvaltningssystem?",
    answer:
      "Ja, vi levererar i standardiserade format som är kompatibla med de flesta NIS- och GIS-system. Vid behov anpassar vi leveransformatet enligt er specifikation för att möjliggöra direktimport utan manuell bearbetning.",
  },
  {
    question: "Vilken koordinatstandard används?",
    answer:
      "Alla bilder och GIS-data georefereras i SWEREF99 TM (EPSG:3006) — det rikstäckande koordinatsystemet i Sverige. RTK-positionering ger centimeternoggrannhet vid georefereringen.",
  },
  {
    question: "Vad ingår i en strukturerad inspektionsrapport?",
    answer:
      "Försättsblad med uppdragsdata, sammanfattningstabell med fynd per klassificering, GPS-karta med fyndmarkeringar, detaljerade fyndkort med foto, koordinat och åtgärdsrekommendation, samt teknisk bilaga med metadata och kvalitetsredovisning.",
  },
  {
    question: "Hur snabbt levereras data efter inspektionen?",
    answer:
      "Leveranstiden beror på uppdragets omfattning och avtalas vid beställning. Standardleverans sker inom avtalad tid. Akutinspektion (stormskador) har kortare leveranstid med prioriterad bearbetning.",
  },
  {
    question: "Hur säkerställs datakvaliteten?",
    answer:
      "Alla bilder genomgår en kvalitetskontroll (QA) innan leverans. Saknade eller otillräckliga bilder kompletteras. Standardiserade bildvinklar och kontrollpunkter säkerställer konsekvent kvalitet oavsett pilot och tillfälle.",
  },
];

export default function DataleveransGuidePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pb-24 lg:pb-0">
        <JsonLd
          type="BreadcrumbList"
          breadcrumbs={[
            { name: "Guider" },
            { name: "Dataleverans och GIS" },
          ]}
        />
        <JsonLd type="FAQPage" faqItems={faqItems} />

        <Hero
          title="Dataleverans och GIS vid drönarinspektion av elnät"
          subtitle="Guide: dataleverans GIS elnät"
          description="Hur inspektionsdata levereras i GIS-kompatibla format redo för ert nätförvaltningssystem — GeoTIFF, shapefiler, SWEREF99 TM och strukturerade rapporter."
          primaryCta={{ label: "Begär offert", href: "/kontakt" }}
          secondaryCta={{ label: "Se exempelrapport", href: "/exempelrapport" }}
          compact
        />

        <Breadcrumbs
          items={[
            { name: "Guider" },
            { name: "Dataleverans och GIS" },
          ]}
        />

        {/* AEO: Definition */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <div className="mx-auto max-w-3xl">
              <h2 className="heading-2">Hur levereras data från drönarinspektion av elnät?</h2>
              <p className="body-text mt-6">
                Data från drönarinspektion av elnät levereras digitalt i GIS-kompatibla format
                — GeoTIFF, shapefiler och CSV med koordinater i SWEREF99 TM. Leveransen inkluderar
                georefererade högupplösta bilder, strukturerad avvikelserapport med klassificerade
                fynd och åtgärdsrekommendationer, samt GIS-lager redo för direktimport i ert
                nätförvaltningssystem. All data kvalitetskontrolleras (QA) innan leverans.
              </p>
              <p className="body-text mt-4">
                Leveransformatet anpassas efter nätägarens system och specifikation. Målet
                är att inspektionsdata ska kunna användas direkt i er underhållsplanering
                utan manuell bearbetning. Data inkluderar klassificerade fynd baserat på vår{" "}
                <Link href="/guider/feltyper-kraftledningar" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400">
                  systematiska feltypklassificering
                </Link>{" "}
                av alla inspekterade{" "}
                <Link href="/guider/komponenter-elnat" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400">
                  elnätskomponenter
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Leveransformat */}
        <section className="section-padding bg-surface-50">
          <div className="container-section">
            <h2 className="heading-2">Leveransformat och GIS-integration</h2>
            <p className="body-text mt-4 max-w-3xl">
              Vi levererar inspektionsdata i standardiserade format som är kompatibla med
              de flesta NIS- och GIS-system:
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Georefererade bilder",
                  desc: "Högupplösta RGB- och termiska bilder med GPS-koordinater inbäddade i EXIF-data. Alla bilder i SWEREF99 TM med centimeternoggrannhet via RTK.",
                },
                {
                  title: "Shapefiler (.shp)",
                  desc: "Punktlager med fyndpositioner, attributdata (klassificering, åtgärdsrekommendation, bildlänk) och metadata. Redo för import i ArcGIS, QGIS och liknande.",
                },
                {
                  title: "GeoTIFF",
                  desc: "Georefererade rasterfiler för ortofotomosaik och termiska kartor. Används för överlagringsanalys i GIS-miljö.",
                },
                {
                  title: "CSV med koordinater",
                  desc: "Tabulär data med koordinater, klassificering och attribut. Enkelt att importera i kalkylprogram, databaser och nätförvaltningssystem.",
                },
                {
                  title: "GeoPackage (.gpkg)",
                  desc: "Modernt öppet format som samlar vektor- och rasterdata i en fil. Stöds av de flesta GIS-plattformar.",
                },
                {
                  title: "Strukturerad PDF-rapport",
                  desc: "Försättsblad, sammanfattning, GPS-karta, fyndkort med foto och åtgärdsrekommendation. Redo för beslutsfattare.",
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

        {/* Rapportinnehåll */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <div className="mx-auto max-w-3xl">
              <h2 className="heading-2">Vad ingår i en inspektionsrapport?</h2>
              <p className="body-text mt-6">
                En komplett inspektionsrapport från GridDrone innehåller följande delar:
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { title: "Försättsblad", desc: "Uppdragsdata — beställare, inspekterad sträcka, datum, pilot, utrustning och väderförhållanden." },
                  { title: "Sammanfattningstabell", desc: "Översikt av alla fynd per klassificering (kritiskt, brådskande, planerat). Ger snabb överblick av inspektionsresultatet." },
                  { title: "GPS-karta med fyndmarkeringar", desc: "Kartvy med positioner för alla identifierade avvikelser. Klickbara markeringar med länk till detaljerade fyndkort." },
                  { title: "Fyndkort per avvikelse", desc: "Detaljerat kort med högupplöst foto, GPS-koordinat, klassificering, beskrivning och åtgärdsrekommendation per identifierat fynd." },
                  { title: "Termiska bilder (vid termografering)", desc: "Radiometriska bilder med temperaturdata, referensmätpunkter och analys av termiska avvikelser i skarvar, isolatorer och kopplingar." },
                  { title: "Teknisk bilaga", desc: "Metadata — flygparametrar, kamerainställningar, QA-redovisning och koordinatreferenssystem (SWEREF99 TM)." },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-brand-500 pl-5">
                    <h3 className="text-base font-semibold text-surface-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-surface-500">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/exempelrapport" className="btn-primary inline-flex items-center">
                  Se exempelrapport
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-content CTA */}
        <section className="bg-brand-50 py-12">
          <div className="container-section text-center">
            <h3 className="text-lg font-semibold text-brand-900">
              Behöver ni inspektionsdata anpassat för ert system?
            </h3>
            <p className="mx-auto mt-2 max-w-lg text-sm text-brand-700">
              Vi anpassar leveransformat efter er specifikation. Kontakta oss för att
              diskutera integration med ert nätförvaltningssystem.
            </p>
            <div className="mt-6">
              <Link href="/kontakt" className="btn-primary">
                Få rådgivning
              </Link>
            </div>
          </div>
        </section>

        {/* QA-process */}
        <section className="section-padding bg-surface-50">
          <div className="container-section">
            <h2 className="heading-2">Kvalitetssäkring av inspektionsdata</h2>
            <p className="body-text mt-4 max-w-3xl">
              Alla inspektionsdata genomgår en intern kvalitetskontroll (QA) innan leverans:
            </p>
            <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
              {[
                { step: "1", title: "Bildkontroll", desc: "Varje stolpe och komponent verifieras — alla standardiserade bildvinklar ska finnas. Saknade bilder kompletteras." },
                { step: "2", title: "Georefereringskontroll", desc: "RTK-positioner verifieras mot kända referenspunkter. Avvikelser utanför tolerans korrigeras." },
                { step: "3", title: "Klassificeringsgranskning", desc: "Alla fynd granskas av erfaren analytiker. Klassificering och åtgärdsrekommendation kontrolleras." },
                { step: "4", title: "Formatverifiering", desc: "Leveransfiler valideras i GIS-miljö innan leverans. Attributdata, koordinatsystem och metadata kontrolleras." },
              ].map((item) => (
                <div key={item.step} className="card p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-600">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-surface-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Relaterade */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <h2 className="heading-2">Relaterade tjänster och guider</h2>
            <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-3">
              <Link href="/tjanster/kraftledningsinspektion/dataleveranser" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Dataleveranser</h3>
                <p className="mt-2 text-sm text-surface-500">Detaljerad information om våra leveransformat och systemintegration.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs mer →</span>
              </Link>
              <Link href="/guider/dronareinspektion-elnat" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Guide: Drönarinspektion av elnät</h3>
                <p className="mt-2 text-sm text-surface-500">Komplett guide om hur drönarinspektion av kraftledningar fungerar.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs guiden →</span>
              </Link>
              <Link href="/tjanster/kraftledningsinspektion" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Kraftledningsinspektion med drönare</h3>
                <p className="mt-2 text-sm text-surface-500">Systematisk inspektion som genererar den data som levereras.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs mer →</span>
              </Link>
              <Link href="/guider/termografering-kraftledningar" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Termografering av kraftledningar</h3>
                <p className="mt-2 text-sm text-surface-500">Termiska data — hur värmekameran levererar radiometriska bilder.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs guiden →</span>
              </Link>
              <Link href="/jamforelser/helikopter-vs-dronare-inspektion" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Helikopter vs drönare</h3>
                <p className="mt-2 text-sm text-surface-500">Jämför datakvalitet och georefereringsnoggrannhet mellan metoderna.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Se jämförelsen →</span>
              </Link>
            </div>
          </div>
        </section>

        <FAQ
          items={faqItems}
          heading="Vanliga frågor om dataleverans och GIS"
          subheading="Har ni fler frågor om leveransformat? Kontakta oss."
        />

        <CTABand
          heading="Vill ni se hur inspektionsdata ser ut?"
          description="Ladda ner vår exempelrapport eller kontakta oss för att diskutera leveransformat anpassat för ert system."
          primaryLabel="Begär offert"
          secondaryLabel="Se exempelrapport"
          secondaryHref="/exempelrapport"
        />
      </main>
      <Footer />
    </>
  );
}
