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
      "En drönarinspektion av elnät omfattar systematisk flygning längs kraftledningar med RGB-kamera och värmekamera, georeferering av alla bilder med RTK-positionering, kvalitetskontroll och klassificering av fynd, samt leverans av strukturerad rapport med GIS-lager och åtgärdsrekommendationer.",
  },
  {
    question: "Vilka fel upptäcks vid drönarinspektion?",
    answer:
      "Drönareinspektion identifierar skadade isolatorer, korrosion på traverser och stag, varmgångar i skarvar och kontakter (via termografi), fågelbon på stolpar, vegetationsröjningsbehov, deformerade stolpar, ledningsskador och fundament som påverkats av markrörelse.",
  },
  {
    question: "Vilken utrustning används vid drönarinspektion av elnät?",
    answer:
      "Branschledande multirotordrönare med högupplöst RGB-kamera för visuell inspektion, radiometrisk värmekamera för termografering, RTK-positionering för centimeternoggrann georeferering i SWEREF99 TM. LiDAR finns som tillval för 3D-kartläggning och vegetationskontroll.",
  },
  {
    question: "Påverkar drönarinspektion driften av elnätet?",
    answer:
      "Nej, drönareinspektion genomförs normalt utan driftstopp. Drönaren flyger i säkert avstånd från spänningsförande delar och inspektionen koordineras med nätägaren för att minimera eventuell påverkan.",
  },
  {
    question: "Hur levereras data från drönarinspektion?",
    answer:
      "Data levereras digitalt i GIS-kompatibla format — GeoTIFF, shapefiler, CSV och georefererade bilder. Leveransen inkluderar strukturerad rapport med klassificerade fynd, GPS-karta och åtgärdsrekommendationer. Leveransformat anpassas efter nätägarens system.",
  },
  {
    question: "Krävs BVLOS-tillstånd för elnätsinspektion?",
    answer:
      "För inspektion inom synhåll (VLOS) krävs inget särskilt BVLOS-tillstånd. För inspektion av långa ledningssträckor bortom pilotens synhåll krävs BVLOS-tillstånd från Transportstyrelsen, inklusive godkänd riskbedömning och redundanta kommunikationssystem.",
  },
  {
    question: "Hur ofta bör elnätet inspekteras med drönare?",
    answer:
      "Inspektionsfrekvensen beror på nätets ålder, belastning och miljöförhållanden. Många nätägare genomför en årlig översiktsinspektion kompletterad med detaljinspektion vid behov. Prediktiva underhållsabonnemang med schemalagda inspektioner möjliggör trendanalys över tid.",
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

        <Hero
          title="Vad är drönarinspektion av elnät? Komplett guide"
          subtitle="Guide: drönarinspektion elnät"
          description="Allt du behöver veta om hur drönarinspektion av kraftledningar och elnät fungerar — utrustning, process, leveranser och vanliga frågor."
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

        {/* Vilka fel upptäcks */}
        <section className="section-padding bg-surface-50">
          <div className="container-section">
            <h2 className="heading-2">Vilka fel upptäcks vid drönarinspektion av elnät?</h2>
            <p className="body-text mt-4 max-w-3xl">
              Drönareinspektion med visuell kamera och termografi identifierar ett brett spektrum
              av fel och avvikelser i elnätskomponenter:
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Skadade isolatorer",
                  desc: "Sprickor, avflagning, brännskador och interna fel som syns termiskt.",
                },
                {
                  title: "Korrosion och slitage",
                  desc: "Korrosion på traverser, stag, bärlinor och traversfötter.",
                },
                {
                  title: "Varmgångar",
                  desc: "Termisk avvikelse i skarvar, kontakter och anslutningar som indikerar kontaktmotstånd.",
                },
                {
                  title: "Fågelbon och djurskador",
                  desc: "Fågelbon på stolpar och traverser som ökar risk för jordfel och kortslutning.",
                },
                {
                  title: "Vegetationsröjningsbehov",
                  desc: "Träd och grenar som växer in i ledningsgatan och hotar driftsäkerheten.",
                },
                {
                  title: "Stolp- och fundamentskador",
                  desc: "Lutande stolpar, deformerade fundament och markrörelse vid stolpfot.",
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

        {/* Utrustning */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <div className="mx-auto max-w-3xl">
              <h2 className="heading-2">Vilken utrustning används vid drönarinspektion?</h2>
              <p className="body-text mt-6">
                Professionell drönarinspektion av elnät utförs med branschledande
                multirotordrönare utrustade med följande sensorer:
              </p>
              <div className="mt-8 space-y-6">
                {[
                  {
                    title: "RGB-kamera (visuell)",
                    desc: "Högupplöst kamera för detaljerad visuell dokumentation av stolpar, isolatorer, traverser och ledningsgata. Bilderna används för att identifiera synliga skador och avvikelser.",
                  },
                  {
                    title: "Radiometrisk värmekamera",
                    desc: "Termisk sensor som mäter temperaturfördelning i elnätskomponenter. Identifierar varmgångar, kontaktmotstånd och överbelastade komponenter som inte syns visuellt.",
                  },
                  {
                    title: "RTK-positionering",
                    desc: "GPS-system med centimeternoggrannhet för exakt georeferering av alla bilder i SWEREF99 TM. Möjliggör precis kartläggning och återbesök av exakt samma punkter.",
                  },
                  {
                    title: "LiDAR (tillval)",
                    desc: "Laserscanner för 3D-kartläggning av ledningsgator. Används främst för vegetationskontroll och avståndsmätning mellan vegetation och ledning.",
                  },
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

        {/* Drönarinspektion vs traditionella metoder */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <div className="mx-auto max-w-3xl">
              <h2 className="heading-2">Drönarinspektion vs. traditionella metoder</h2>
              <p className="body-text mt-6">
                Drönarinspektion kompletterar traditionella inspektionsmetoder och har specifika
                fördelar beroende på förutsättningar:
              </p>
              <div className="mt-8 space-y-4">
                <div className="rounded-lg border border-surface-200 bg-surface-50 p-5">
                  <h3 className="text-base font-semibold text-surface-900">Vs. stolpklättring</h3>
                  <p className="mt-2 text-sm text-surface-500">
                    Drönare eliminerar arbete på höjd och minskar riskexponeringen för personal.
                    Klättring ger dock direkt fysisk åtkomst för provtagning och komponentbyte.
                  </p>
                </div>
                <div className="rounded-lg border border-surface-200 bg-surface-50 p-5">
                  <h3 className="text-base font-semibold text-surface-900">Vs. helikopter</h3>
                  <p className="mt-2 text-sm text-surface-500">
                    Drönare har generellt lägre driftkostnad per kilometer, särskilt vid kortare
                    sträckor. Helikopter är effektivare vid mycket långa, sammanhängande sträckor
                    med fri sikt. Läs vår{" "}
                    <Link href="/blogg/helikopter-vs-dronare" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700">
                      jämförelse mellan helikopter och drönare
                    </Link>.
                  </p>
                </div>
                <div className="rounded-lg border border-surface-200 bg-surface-50 p-5">
                  <h3 className="text-base font-semibold text-surface-900">Vs. markbaserad inspektion</h3>
                  <p className="mt-2 text-sm text-surface-500">
                    Drönare kräver ingen markåtkomst eller fordon och når komponenter i otillgänglig
                    terräng. Markbaserad inspektion ger kompletterande perspektiv på fundament och markförhållanden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Relaterade tjänster */}
        <section className="section-padding bg-surface-50">
          <div className="container-section">
            <h2 className="heading-2">Relaterade tjänster</h2>
            <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Kraftledningsinspektion",
                  desc: "Vår kärntjänst — systematisk inspektion av stolpar, isolatorer och ledningsgata.",
                  href: "/tjanster/kraftledningsinspektion",
                },
                {
                  title: "Termografering",
                  desc: "Radiometrisk värmekamera för identifiering av varmgångar och kontaktfel.",
                  href: "/tjanster/termografering-kraftledning",
                },
                {
                  title: "BVLOS-inspektion",
                  desc: "Inspektion av långa ledningssträckor bortom pilotens synhåll.",
                  href: "/tjanster/bvlos-inspektion",
                },
                {
                  title: "Vegetationskontroll",
                  desc: "LiDAR-baserad kartläggning av vegetation längs kraftledningsgator.",
                  href: "/tjanster/vegetationskontroll",
                },
                {
                  title: "Stormskadeinspektion",
                  desc: "Akut skadekartläggning efter storm med prioriterad beslutsunderlag.",
                  href: "/tjanster/stormskadeinspektion",
                },
                {
                  title: "Underhållsabonnemang",
                  desc: "Schemalagda inspektioner med trendanalys och prioriterad stormrespons.",
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

        <FAQ
          items={guideFaqItems}
          heading="Vanliga frågor om drönarinspektion av elnät"
          subheading="Har ni fler frågor? Kontakta oss direkt så berättar vi mer."
        />

        <CTABand
          heading="Vill ni veta mer om drönarinspektion?"
          description="Kontakta oss för en genomgång av hur drönarinspektion kan effektivisera ert elnätsunderhåll."
        />
      </main>
      <Footer />
    </>
  );
}
