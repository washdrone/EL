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
  title: "Termografering av kraftledningar med drönare",
  description:
    "Guide om termografering av kraftledningar och elnät med drönare. Identifiera varmgångar, kontaktmotstånd och dolda fel. Radiometrisk värmekamera.",
  path: "/guider/termografering-kraftledningar",
  ogType: "article",
  keywords: [
    "termografering kraftledningar",
    "termografering elnät drönare",
    "värmekamera kraftledning",
    "varmgångar elnät",
    "termisk inspektion elnät",
    "radiometrisk termografi",
  ],
});

const faqItems: FAQItem[] = [
  {
    question: "Vad är termografering av kraftledningar?",
    answer:
      "Termografering av kraftledningar innebär att en radiometrisk värmekamera monterad på en drönare mäter temperaturfördelningen i elnätskomponenter. Metoden identifierar termiska avvikelser som indikerar kontaktmotstånd, överbelastning och andra elektriska fel som inte syns vid visuell inspektion.",
  },
  {
    question: "Vilka fel upptäcks vid termografering av elnät?",
    answer:
      "Varmgångar i skarvar och kopplingar, överbelastade transformatorkomponenter, defekta isolatorer med interna fel, kontaktmotstånd i frånskiljare och brytare, samt asymmetrisk lastfördelning mellan faser.",
  },
  {
    question: "Kan termografering utföras utan driftstopp?",
    answer:
      "Ja, termografering utförs under drift — det är en förutsättning. Komponenter måste vara strömförande för att termiska avvikelser ska kunna detekteras. Drönaren flyger i säkert avstånd från spänningsförande delar.",
  },
  {
    question: "Vilken typ av värmekamera används?",
    answer:
      "Vi använder radiometriska värmekameror som mäter faktisk temperatur (inte bara relativ temperaturskillnad). Bilderna sparas med temperaturdata per pixel, vilket möjliggör exakt analys och dokumentation av avvikelser.",
  },
  {
    question: "Hur kombineras termografering med visuell inspektion?",
    answer:
      "Termografering utförs parallellt med RGB-kamerainspektion. Varje termisk avvikelse dokumenteras med både termisk bild och visuellt foto, georefererade med samma koordinat. Detta ger ett komplett beslutsunderlag för underhållsplanering.",
  },
  {
    question: "Hur ofta bör termografering genomföras?",
    answer:
      "Frekvensen beror på nätets ålder, belastningssituation och historik. Många nätägare genomför termografering årligen som del av den ordinarie inspektionscykeln, med extra insatser vid misstanke om termiska problem.",
  },
  {
    question: "Vilka komponenter termograferas?",
    answer:
      "Skarvar och kopplingar på fasledare och topplinor, isolatorer, transformatorkopplingar, frånskiljare, brytare, kabelavslutningar och anslutningspunkter. Alla komponenter som kan utveckla kontaktmotstånd under drift.",
  },
];

export default function TermograferingGuidePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pb-24 lg:pb-0">
        <JsonLd
          type="BreadcrumbList"
          breadcrumbs={[
            { name: "Termografering av kraftledningar", href: "/guider/termografering-kraftledningar" },
          ]}
        />
        <JsonLd type="FAQPage" faqItems={faqItems} />
        <JsonLd
          type="HowTo"
          howToName="Så fungerar termografering av kraftledningar med drönare"
          howToDescription="Steg-för-steg-process för termisk inspektion av elnätskomponenter med drönare och radiometrisk värmekamera."
          howToSteps={[
            { name: "Planering och belastningskontroll", text: "Inspektionen planeras utifrån nätets belastningssituation. Komponenter måste vara strömförande för att termiska avvikelser ska synas. GIS-underlag integreras för flygvägsplanering." },
            { name: "Termisk datainsamling", text: "Drönare med radiometrisk värmekamera flyger längs kraftledningen och registrerar temperaturfördelningen i skarvar, isolatorer, kopplingar och anslutningspunkter." },
            { name: "Analys av termiska avvikelser", text: "Temperaturdata analyseras. Avvikelser klassificeras efter allvarlighetsgrad baserat på temperaturskillnad mot referenskomponenter och gällande standarder." },
            { name: "Rapportering med termiska bilder", text: "Varje termisk avvikelse dokumenteras med termisk bild, visuellt foto, GPS-koordinat och åtgärdsrekommendation. Data levereras i GIS-kompatibelt format." },
          ]}
        />
        <JsonLd
          type="Article"
          articleHeadline={"Termografering av kraftledningar med drönare"}
          articleDescription={
            "Guide om termografering av kraftledningar och elnät med drönare. Identifiera varmgångar, kontaktmotstånd och dolda fel. Radiometrisk värmekamera."
          }
          articlePath="/guider/termografering-kraftledningar"
          datePublished="2026-04-05"
          dateModified="2026-04-05"
        />

        <Hero
          title="Termografering av kraftledningar med drönare"
          subtitle="Guide: termografering elnät"
          description="Hur radiometrisk värmekamera på drönare identifierar varmgångar, kontaktmotstånd och dolda fel i kraftledningar och elnätskomponenter — under drift, utan driftstopp."
          dateLine="Uppdaterad: 5 april 2026"
          primaryCta={{ label: "Begär offert", href: "/kontakt" }}
          secondaryCta={{ label: "Se termograferingstjänst", href: "/tjanster/termografering-kraftledning" }}
          compact
        />

        <Breadcrumbs
          items={[
            { name: "Guider" },
            { name: "Termografering av kraftledningar" },
          ]}
        />

        {/* AEO: Definition */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <div className="mx-auto max-w-3xl">
              <h2 className="heading-2">Vad är termografering av kraftledningar?</h2>
              <p className="body-text mt-6">
                Termografering av kraftledningar innebär att en radiometrisk värmekamera monterad
                på en drönare mäter temperaturfördelningen i elnätskomponenter under drift.
                Metoden identifierar varmgångar — termiska avvikelser som indikerar kontaktmotstånd,
                överbelastning och interna fel i isolatorer, skarvar och kopplingar. Termografering
                utförs utan driftstopp och kompletterar visuell inspektion med data som inte syns
                för blotta ögat.
              </p>
              <p className="body-text mt-4">
                Till skillnad från enklare värmekameror ger radiometrisk termografi exakta
                temperaturvärden per pixel, vilket möjliggör kvantitativ analys och klassificering
                enligt gällande standarder. För en fullständig översikt av alla fel som
                identifieras med visuell kamera och termografi, se vår{" "}
                <Link href="/guider/feltyper-kraftledningar" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400">
                  guide om feltyper i kraftledningar
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Vilka fel upptäcks */}
        <section className="section-padding bg-surface-50">
          <div className="container-section">
            <h2 className="heading-2">Vilka fel upptäcks vid termografering av elnät?</h2>
            <p className="body-text mt-4 max-w-3xl">
              Termografering identifierar termiska avvikelser i elnätskomponenter som indikerar
              elektriska eller mekaniska fel:
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Varmgångar i skarvar",
                  desc: "Förhöjd temperatur i skarvar och kopplingar på fasledare och topplinor indikerar kontaktmotstånd som kan leda till avbrott.",
                },
                {
                  title: "Defekta isolatorer",
                  desc: "Interna fel i glas-, porslins- och kompositisolatorer som inte syns visuellt men ger termisk avvikelse.",
                },
                {
                  title: "Kontaktmotstånd i fästen",
                  desc: "Lösa eller korroderade fästen, traverskopplingar och klämfästen som utvecklar kontaktmotstånd under belastning.",
                },
                {
                  title: "Överbelastade komponenter",
                  desc: "Transformatorkopplingar, frånskiljare och brytare som överhettas av asymmetrisk lastfördelning.",
                },
                {
                  title: "Kabelavslutningar",
                  desc: "Termiska avvikelser i kabelavslutningar och övergångar mellan luft- och kabelledning.",
                },
                {
                  title: "Asymmetrisk fasbelastning",
                  desc: "Temperaturskillnader mellan faser som indikerar obalanserad lastfördelning i nätet.",
                },
              ].map((item) => (
                <div key={item.title} className="card p-6">
                  <h3 className="text-base font-semibold text-surface-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-surface-500">
              Detaljerad information om vilka{" "}
              <Link href="/guider/komponenter-elnat" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700">
                elnätskomponenter som inspekteras
              </Link>{" "}
              och hur{" "}
              <Link href="/guider/dataleverans-gis-elnat" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700">
                termiska data levereras i GIS-format
              </Link>.
            </p>
          </div>
        </section>

        {/* Mid-content CTA */}
        <section className="bg-brand-50 py-12">
          <div className="container-section text-center">
            <h3 className="text-lg font-semibold text-brand-900">
              Vill ni identifiera dolda termiska fel i ert elnät?
            </h3>
            <p className="mx-auto mt-2 max-w-lg text-sm text-brand-700">
              Vi genomför termografering parallellt med visuell inspektion — kontakta oss
              för en teknisk genomgång av ert inspektionsbehov.
            </p>
            <div className="mt-6">
              <Link href="/kontakt" className="btn-primary">
                Få rådgivning
              </Link>
            </div>
          </div>
        </section>

        {/* Utrustning */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <div className="mx-auto max-w-3xl">
              <h2 className="heading-2">Utrustning för termografering med drönare</h2>
              <div className="mt-8 space-y-6">
                {[
                  {
                    title: "Radiometrisk värmekamera",
                    desc: "Kamera som mäter faktisk temperatur per pixel (inte bara relativ skillnad). Varje bild sparas med fullständig temperaturmatris för exakt analys och dokumentation.",
                  },
                  {
                    title: "RGB-kamera (parallell)",
                    desc: "Högupplöst visuell kamera körs parallellt med värmekameran. Varje termisk avvikelse dokumenteras med både termisk bild och visuellt foto för entydig identifiering.",
                  },
                  {
                    title: "RTK-positionering",
                    desc: "GPS med centimeternoggrannhet i SWEREF99 TM för exakt georeferering. Möjliggör återbesök av exakt samma punkt vid uppföljande termografering.",
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
            <h2 className="heading-2">Hur genomförs termografering av kraftledningar?</h2>
            <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
              {[
                { step: "1", title: "Belastningsplanering", desc: "Inspektionen planeras utifrån nätets belastningssituation. Termografering kräver att komponenter är strömförande — helst vid normal till hög belastning." },
                { step: "2", title: "Termisk flygning", desc: "Drönare med radiometrisk värmekamera flyger längs ledningen och registrerar temperatur i skarvar, isolatorer, fästen och kopplingar." },
                { step: "3", title: "Avvikelseanalys", desc: "Temperaturdata analyseras. Avvikelser jämförs mot referenskomponenter och klassificeras efter allvarlighetsgrad." },
                { step: "4", title: "Rapportering", desc: "Varje avvikelse dokumenteras med termisk bild, RGB-foto, GPS-koordinat och åtgärdsrekommendation i GIS-kompatibelt format." },
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
            <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/tjanster/termografering-kraftledning" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Termograferingstjänst</h3>
                <p className="mt-2 text-sm text-surface-500">Beställ termografering av era kraftledningar och stationer.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Se tjänsten →</span>
              </Link>
              <Link href="/tjanster/kraftledningsinspektion" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Kraftledningsinspektion med drönare</h3>
                <p className="mt-2 text-sm text-surface-500">Kombinera termografering med visuell inspektion av stolpar, isolatorer och ledningslinor.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs mer →</span>
              </Link>
              <Link href="/guider/dronareinspektion-elnat" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Guide: Drönarinspektion av elnät</h3>
                <p className="mt-2 text-sm text-surface-500">Komplett guide om drönarinspektion — utrustning, process och leveranser.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs guiden →</span>
              </Link>
              <Link href="/jamforelser/helikopter-vs-dronare-inspektion" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Helikopter vs drönare</h3>
                <p className="mt-2 text-sm text-surface-500">Jämför termografisk detaljnivå och kostnad mellan metoderna.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Se jämförelsen →</span>
              </Link>
            </div>
          </div>
        </section>

        <FAQ
          items={faqItems}
          heading="Vanliga frågor om termografering av elnät"
          subheading="Har ni fler frågor? Kontakta oss så berättar vi mer om termografering."
        />

        <CTABand
          heading="Vill ni identifiera dolda fel i ert elnät?"
          description="Termografering avslöjar kontaktmotstånd, varmgångar och interna isolatorfel som inte syns vid visuell inspektion."
          primaryLabel="Begär offert"
          secondaryLabel="Se exempelrapport"
          secondaryHref="/exempelrapport"
        />
      </main>
      <Footer />
    </>
  );
}
