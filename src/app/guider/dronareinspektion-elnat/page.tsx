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
  title: "Vad är drönarinspektion av elnät? Komplett guide",
  description:
    "Lär dig hur drönarinspektion av elnät fungerar, vilka fel som upptäcks, vilken utrustning som används och hur data levereras. Guide för nätägare och energibolag.",
  path: "/guider/dronareinspektion-elnat",
  ogType: "article",
  keywords: [
    "vad är drönarinspektion av elnät",
    "hur fungerar drönarinspektion",
    "drönarinspektion elnät guide",
    "vad ingår i en drönarinspektion",
    "vilka fel upptäcks i elnät",
  ],
});

const guideFaqItems: FAQItem[] = [
  {
    question: "Vad ingår i en drönarinspektion av elnät?",
    answer:
      "Systematisk flygning längs kraftledningar, dokumentation av varje stolpe och sektion, georeferering av bilder, kvalitetskontroll, klassificering av fynd och leverans av strukturerad rapport med GIS-lager. Inspektionsomfång definieras i förväg mellan beställare och utförare.",
  },
  {
    question: "Påverkar drönarinspektion driften av elnätet?",
    answer:
      "Nej, drönarinspektion genomförs normalt utan driftstopp. Drönaren flyger i säkert avstånd från spänningsförande delar och inspektionen koordineras med nätägaren för att minimera eventuell påverkan.",
  },
  {
    question: "Hur skiljer sig drönarinspektion från traditionell stolpklättring?",
    answer:
      "Drönare eliminerar arbete på höjd, kräver ingen markåtkomst och ger automatiskt georefererade bilder. Klättring ger dock direkt fysisk åtkomst till komponenter för provtagning och byte — metoderna kompletterar varandra.",
  },
  {
    question: "Hur ofta bör elnätet inspekteras med drönare?",
    answer:
      "Inspektionsfrekvensen beror på nätets ålder, belastning och miljöförhållanden. Många nätägare genomför en årlig översiktsinspektion kompletterad med detaljinspektion vid behov.",
  },
  {
    question: "Kan drönarinspektion användas i alla väderförhållanden?",
    answer:
      "Flygning kräver acceptabla väderförhållanden — begränsad av vind, nederbörd och sikt. Termografering kräver dessutom att komponenter är strömförande. Inspektioner planeras efter väderprognos.",
  },
];

export default function DroneInspectionGuidePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pb-24 lg:pb-0">
        <JsonLd
          type="BreadcrumbList"
          breadcrumbs={[
            { name: "Guider", href: "/guider/dronareinspektion-elnat" },
            { name: "Drönarinspektion av elnät" },
          ]}
        />
        <JsonLd type="FAQPage" faqItems={guideFaqItems} />
        <JsonLd
          type="HowTo"
          howToName="Så fungerar drönarinspektion av elnät — steg för steg"
          howToDescription="Komplett guide till hur professionell drönarinspektion av kraftledningar och elnät genomförs."
          howToSteps={[
            { name: "Behovsanalys och planering", text: "Nätägaren specificerar sträcka, spänningsnivå och inspektionstyp. GIS-underlag integreras för flygvägsplanering." },
            { name: "Riskbedömning och tillstånd", text: "Riskanalys genomförs för arbete nära elektriska anläggningar. Flygplan, säkerhetszon och eventuella BVLOS-tillstånd säkerställs." },
            { name: "Datainsamling i fält", text: "EASA-utbildad pilot flyger drönare med RGB-kamera, värmekamera och RTK-positionering längs ledningen. Varje stolpe och sektion dokumenteras." },
            { name: "Kvalitetskontroll (QA)", text: "Alla bilder granskas. Saknade eller otillräckliga bilder kompletteras. Standardiserade bildvinklar verifieras." },
            { name: "Analys och klassificering", text: "Fynd identifieras, klassificeras efter allvarlighetsgrad och georefereras med exakta koordinater." },
            { name: "Leverans", text: "Strukturerad rapport, GIS-lager och åtgärdsrekommendationer levereras digitalt i överenskommet format." },
          ]}
        />
        <JsonLd
          type="Article"
          articleHeadline={"Vad är drönarinspektion av elnät? Komplett guide"}
          articleDescription={
            "Lär dig hur drönarinspektion av elnät fungerar, vilka fel som upptäcks, vilken utrustning som används och hur data levereras. Guide för nätägare och energibolag."
          }
          articlePath="/guider/dronareinspektion-elnat"
          datePublished="2026-04-05"
          dateModified="2026-04-05"
        />

        <Hero
          title="Vad är drönarinspektion av elnät? Komplett guide"
          subtitle="Guide: drönarinspektion elnät"
          description="Allt du behöver veta om hur drönarinspektion av kraftledningar och elnät fungerar — utrustning, process, leveranser och vanliga frågor."
          dateLine="Uppdaterad: 5 april 2026"
          primaryCta={{ label: "Begär offert", href: "/kontakt" }}
          secondaryCta={{ label: "Se exempelrapport", href: "/exempelrapport" }}
          compact
        />

        <Breadcrumbs
          items={[
            { name: "Guider" },
            { name: "Drönarinspektion av elnät" },
          ]}
        />

        {/* AEO Answer-First: Definition */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <div className="mx-auto max-w-3xl">
              <h2 className="heading-2">Vad är drönarinspektion av elnät?</h2>
              <p className="body-text mt-6">
                Drönarinspektion av elnät är en metod där en fjärrstyrd drönare utrustad med kameror
                flyger längs kraftledningar och elnätskomponenter för att systematiskt dokumentera deras
                tillstånd. Metoden ersätter eller kompletterar traditionella inspektionsmetoder som
                stolpklättring och helikopterflygning, och ger nätägare ett strukturerat underlag
                för underhållsplanering — utan klättring och normalt utan driftstopp.
              </p>
              <p className="body-text mt-4">
                Inspektionen utförs av EASA-utbildade piloter och kombinerar visuell dokumentation
                med RGB-kamera och termisk analys med radiometrisk värmekamera. Alla bilder
                georefereras med RTK-positionering för centimeternoggrannhet.
              </p>
            </div>
          </div>
        </section>

        {/* Vad inspekteras och vilka fel hittas — links to dedicated pages */}
        <section className="section-padding bg-surface-50">
          <div className="container-section">
            <div className="mx-auto max-w-3xl">
              <h2 className="heading-2">Vad inspekteras och vilka fel hittas?</h2>
              <p className="body-text mt-6">
                Drönarinspektion täcker alla kritiska komponenter i kraftledningsnätet.
                Visuell kamera identifierar mekaniska skador medan termografi avslöjar
                dolda elektriska fel under drift. Fynd klassificeras som kritiskt,
                brådskande eller planerat underhåll.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Link href="/guider/komponenter-elnat" className="card group p-5 transition-all hover:border-brand-200 hover:shadow-md">
                  <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Vilka komponenter inspekteras?</h3>
                  <p className="mt-1 text-sm text-surface-500">Stolpar, isolatorer, ledningslinor, traverser, fästen, skarvar — alla komponenter i detalj.</p>
                  <span className="mt-3 inline-block text-sm font-medium text-brand-600">Se komponentguiden →</span>
                </Link>
                <Link href="/guider/feltyper-kraftledningar" className="card group p-5 transition-all hover:border-brand-200 hover:shadow-md">
                  <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Vilka feltyper identifieras?</h3>
                  <p className="mt-1 text-sm text-surface-500">Visuella och termiska fel — isolatorskador, korrosion, varmgångar, trådbrott.</p>
                  <span className="mt-3 inline-block text-sm font-medium text-brand-600">Se feltypguiden →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-content CTA */}
        <section className="bg-brand-50 py-12">
          <div className="container-section text-center">
            <h3 className="text-lg font-semibold text-brand-900">
              Vill ni veta om drönarinspektion passar ert elnät?
            </h3>
            <p className="mx-auto mt-2 max-w-lg text-sm text-brand-700">
              Kontakta oss för en kostnadsfri genomgång av era inspektionsbehov.
            </p>
            <div className="mt-6">
              <Link href="/kontakt" className="btn-primary">
                Få rådgivning
              </Link>
            </div>
          </div>
        </section>

        {/* Sensorteknik — brief overview, links to thermography guide */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <div className="mx-auto max-w-3xl">
              <h2 className="heading-2">Vilka sensorer används?</h2>
              <p className="body-text mt-6">
                En inspektionsdrönare bär typiskt tre typer av sensorer: högupplöst RGB-kamera
                för visuell dokumentation, radiometrisk värmekamera för termisk analys av
                strömförande komponenter, och RTK-GPS för centimeternoggrann georeferering
                av alla bilder i SWEREF99 TM. LiDAR finns som tillval för 3D-kartläggning.
              </p>
              <p className="body-text mt-4">
                Fördjupa er i termisk sensorik i vår{" "}
                <Link href="/guider/termografering-kraftledningar" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400">
                  guide om termografering av kraftledningar
                </Link>{" "}
                eller läs om{" "}
                <Link href="/guider/dataleverans-gis-elnat" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400">
                  hur inspektionsdata levereras i GIS-format
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-surface-50">
          <div className="container-section">
            <h2 className="heading-2">Hur genomförs drönarinspektion av elnät?</h2>
            <p className="body-text mt-4 max-w-3xl">
              En professionell drönarinspektion av elnät följer en standardiserad process i sex steg:
            </p>
            <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { step: "1", title: "Behovsanalys", desc: "Nätägaren specificerar sträcka, spänningsnivå, inspektionstyp och leveransformat." },
                { step: "2", title: "Planering", desc: "GIS-underlag integreras, flygvägar planeras och riskbedömning genomförs." },
                { step: "3", title: "Datainsamling", desc: "Drönare flyger längs ledningen med RGB, termisk kamera och RTK-positionering." },
                { step: "4", title: "QA-kontroll", desc: "Alla bilder kvalitetsgranskas. Saknade bilder kompletteras." },
                { step: "5", title: "Klassificering", desc: "Fynd identifieras, klassificeras och georefereras med åtgärdsrekommendation." },
                { step: "6", title: "Leverans", desc: "Rapport och GIS-lager levereras digitalt i överenskommet format." },
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

        {/* Fördjupande guider */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <h2 className="heading-2">Fördjupande guider</h2>
            <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/jamforelser/helikopter-vs-dronare-inspektion" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Helikopter vs drönare</h3>
                <p className="mt-2 text-sm text-surface-500">Detaljerad jämförelse av kostnad, datakvalitet och säkerhet.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Se jämförelsen →</span>
              </Link>
              <Link href="/guider/bvlos-inspektion-elnat" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">BVLOS-inspektion</h3>
                <p className="mt-2 text-sm text-surface-500">Regler, teknik och tillämpningar för inspektion bortom synhåll.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs guiden →</span>
              </Link>
              <Link href="/guider/upphandling-dronareinspektion" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Upphandla drönarinspektion</h3>
                <p className="mt-2 text-sm text-surface-500">Kravspec, utvärderingskriterier och avtalsmodeller.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs guiden →</span>
              </Link>
            </div>
          </div>
        </section>

        <FAQ
          items={guideFaqItems}
          heading="Vanliga frågor om drönarinspektion av elnät"
          subheading="Har ni fler frågor? Kontakta oss direkt så berättar vi mer."
        />

        {/* Relaterat innehåll */}
      <section className="border-t border-surface-100 bg-surface-50 py-10">
        <div className="container-section text-center">
          <p className="text-sm text-surface-600">
            Redo att gå vidare? Se vår tjänst <Link href="/tjanster/kraftledningsinspektion" className="text-brand-600 underline hover:text-brand-700">kraftledningsinspektion med drönare</Link> eller jämför metoder i <Link href="/jamforelser/helikopter-vs-dronare-inspektion" className="text-brand-600 underline hover:text-brand-700">helikopter vs drönare för elnätsinspektion</Link>.
          </p>
        </div>
      </section>

      <CTABand
          heading="Vill ni veta mer om drönarinspektion?"
          description="Kontakta oss för en genomgång av hur drönarinspektion kan effektivisera ert elnätsunderhåll."
        />
      </main>
      <Footer />
    </>
  );
}
