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
  title: "Feltyper i kraftledningar vid drönarinspektion",
  description:
    "Vilka fel och skador upptäcks vid drönarinspektion av kraftledningar? Varmgångar, isolatorfel, korrosion, trådbrott och vegetationsröjningsbehov.",
  path: "/guider/feltyper-kraftledningar",
  ogType: "article",
  keywords: [
    "vilka fel upptäcks i elnät",
    "feltyper kraftledning",
    "isolatorfel elnät",
    "varmgångar kraftledning",
    "korrosion elnät",
    "trådbrott ledningslina",
  ],
});

const faqItems: FAQItem[] = [
  {
    question: "Vilka är de vanligaste felen i kraftledningar?",
    answer:
      "De vanligaste felen är korrosion på traverser och fästen, sprickbildning i isolatorer, vegetationsröjningsbehov i ledningsgatan, varmgångar i skarvar (identifieras med termografi) och mekaniskt slitage på klämfästen och upphängningsdon.",
  },
  {
    question: "Kan dolda fel i isolatorer hittas med drönare?",
    answer:
      "Ja. Visuell kamera identifierar yttre skador som sprickor och avflagning. Radiometrisk värmekamera avslöjar interna fel genom termisk avvikelse — defekta isolatorer utvecklar värme som inte syns för ögat.",
  },
  {
    question: "Hur klassificeras fel vid drönarinspektion?",
    answer:
      "Fynd klassificeras efter allvarlighetsgrad: kritiskt (omedelbar åtgärd), brådskande (åtgärd inom definierad tidsram) och planerat (åtgärd vid nästa underhållscykel). Klassificeringen inkluderar åtgärdsrekommendation och GPS-position.",
  },
  {
    question: "Vilka fel kräver termografering för att upptäckas?",
    answer:
      "Interna isolatorfel, kontaktmotstånd i skarvar, överbelastade kopplingar, varmgångar i klämfästen och asymmetrisk fasbelastning. Dessa termiska avvikelser syns inte vid visuell inspektion men detekteras av radiometrisk värmekamera.",
  },
  {
    question: "Kan drönare identifiera trådbrott i ledningslinor?",
    answer:
      "Ja. Högupplöst RGB-kamera kan identifiera trådbrott och lindningsskador i fasledare och topplinor, särskilt vid skarvar och klämfästen där mekanisk påfrestning är störst.",
  },
  {
    question: "Hur dokumenteras fel som hittas vid inspektion?",
    answer:
      "Varje fynd dokumenteras med högupplöst foto, GPS-koordinat, klassificering och åtgärdsrekommendation i ett strukturerat fyndkort. Alla fynd samlas i en avvikelserapport med GIS-lager för import i nätförvaltningssystem.",
  },
];

export default function FeltyperGuidePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pb-24 lg:pb-0">
        <JsonLd
          type="BreadcrumbList"
          breadcrumbs={[
            { name: "Guider", href: "/guider" },
            { name: "Feltyper i kraftledningar", href: "/guider/feltyper-kraftledningar" },
          ]}
        />
        <JsonLd type="FAQPage" faqItems={faqItems} />
        <JsonLd
          type="Article"
          articleHeadline={"Feltyper i kraftledningar vid drönarinspektion"}
          articleDescription={
            "Vilka fel och skador upptäcks vid drönarinspektion av kraftledningar? Varmgångar, isolatorfel, korrosion, trådbrott och vegetationsröjningsbehov."
          }
          articlePath="/guider/feltyper-kraftledningar"
          datePublished="2026-04-05"
          dateModified="2026-04-05"
        />

        <Hero
          title="Feltyper i kraftledningar — vad drönarinspektion hittar"
          subtitle="Guide: feltyper kraftledning"
          description="Systematisk genomgång av alla fel- och skadetyper som identifieras vid drönarinspektion av kraftledningar — visuellt och termiskt."
          dateLine="Uppdaterad: 5 april 2026"
          primaryCta={{ label: "Få rådgivning", href: "/kontakt" }}
          secondaryCta={{ label: "Se exempelrapport", href: "/exempelrapport" }}
          compact
        />

        <Breadcrumbs
          items={[
            { name: "Guider", href: "/guider" },
            { name: "Feltyper i kraftledningar" },
          ]}
        />

        {/* AEO Answer-First */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <div className="mx-auto max-w-3xl">
              <h2 className="heading-2">Vilka fel upptäcks vid drönarinspektion av kraftledningar?</h2>
              <p className="body-text mt-6">
                Drönarinspektion med visuell RGB-kamera och radiometrisk värmekamera identifierar
                ett brett spektrum av fel i kraftledningars komponenter — från synliga mekaniska
                skador till dolda termiska avvikelser. Felen delas in i visuella fel (synliga
                för kameran) och termiska fel (synliga enbart med värmekamera under drift).
                Varje identifierat fel GPS-märks, fotograferas och klassificeras med åtgärdsrekommendation.
              </p>
            </div>
          </div>
        </section>

        {/* Visuella fel */}
        <section className="section-padding bg-surface-50">
          <div className="container-section">
            <h2 className="heading-2">Visuella fel — identifieras med RGB-kamera</h2>
            <p className="body-text mt-4 max-w-3xl">
              Följande skadetyper upptäcks genom högupplösta bilder tagna med visuell kamera:
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Isolatorskador",
                  desc: "Sprickor, avflagning och brännskador på glas-, porslins- och kompositisolatorer. Kontaminering av saltbeläggning eller industriutsläpp som försämrar isoleringsförmågan.",
                },
                {
                  title: "Korrosion på traverser",
                  desc: "Rostangrepp och materialförlust på ståltraverser, konsoler och fästjärn. Traversfötter är särskilt utsatta för korrosion vid vattensamling.",
                },
                {
                  title: "Trådbrott i fasledare",
                  desc: "Enskilda eller multipla trådar i ledningslinans yttre lager som brustit av mekanisk utmattning, iserosion eller gnagskador. Koncentreras ofta vid skarvar och klämfästen.",
                },
                {
                  title: "Stolpskador",
                  desc: "Sprickor i betongstolpar, röta i trästolpar, lutning utöver tolerans och deformerade stålstolpar. Fundament med synliga sättningar eller erosionsskador.",
                },
                {
                  title: "Fågelbon och djurskador",
                  desc: "Fågelbon på stolpar och traverser som ökar risken för jordfel och kortslutning. Hackspettskador på trästolpar som försvagar konstruktionen.",
                },
                {
                  title: "Vegetationsröjningsbehov",
                  desc: "Träd och grenar som vuxit in i ledningsgatan och minskar säkerhetsavståndet till spänningsförande ledningar. Prioriteras efter närhet och tillväxthastighet.",
                },
                {
                  title: "Slitage på klämfästen",
                  desc: "Mekaniskt slitage på upphängningsdon, avspänningsklämmor och skarvhylsor. Vibration från vind orsakar nötning och utmattning av fästmaterial.",
                },
                {
                  title: "Ledningsrörelse och nedhäng",
                  desc: "Ledningslinor som hänger lägre än specificerat (sag) vid höga temperaturer eller isbelastning. Dokumenteras för beräkning av marknärmeavstånd.",
                },
                {
                  title: "Skador på topplinor",
                  desc: "Topplinor (jordledare) som brustit eller lossnat från sin infästning. Påverkar åskskyddet och kan orsaka inducerade spänningar.",
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

        {/* Mid-content CTA */}
        <section className="bg-brand-50 py-12">
          <div className="container-section text-center">
            <h3 className="text-lg font-semibold text-brand-900">
              Vill ni kartlägga vilka fel som finns i ert elnät?
            </h3>
            <p className="mx-auto mt-2 max-w-lg text-sm text-brand-700">
              Vi identifierar och klassificerar alla typer av avvikelser med visuell
              och termisk inspektion. Se även hur{" "}
              <Link href="/guider/termografering-kraftledningar" className="text-brand-600 underline hover:text-brand-800">
                termografering avslöjar dolda termiska fel
              </Link>.
            </p>
            <div className="mt-6">
              <Link href="/kontakt" className="btn-primary">
                Få rådgivning
              </Link>
            </div>
          </div>
        </section>

        {/* Termiska fel */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <h2 className="heading-2">Termiska fel — identifieras med värmekamera</h2>
            <p className="body-text mt-4 max-w-3xl">
              Följande fel syns enbart med radiometrisk värmekamera och kräver att komponenter
              är strömförande vid inspektionen. Läs mer i vår{" "}
              <Link href="/guider/termografering-kraftledningar" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400">
                guide om termografering av kraftledningar
              </Link>.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Varmgångar i skarvar",
                  desc: "Förhöjd temperatur i ledningsskarvar som indikerar kontaktmotstånd. Kan bero på korrosion, mekanisk förskjutning eller undermåligt skarvarbete. Progressivt fel som förvärras över tid.",
                },
                {
                  title: "Defekta isolatorer (interna)",
                  desc: "Isolatorer med interna sprickor eller fuktinträngning som inte syns visuellt. Ger karaktäristisk termisk signatur som skiljer sig från friska isolatorer i samma kedja.",
                },
                {
                  title: "Kontaktmotstånd i kopplingar",
                  desc: "Förhöjd temperatur i bultförband, klämkopplingar och anslutningspunkter. Ofta orsakat av lösa förband, korrosion eller materialutmattning i kontaktytan.",
                },
                {
                  title: "Asymmetrisk fasbelastning",
                  desc: "Temperaturskillnader mellan faser som indikerar obalanserad lastfördelning i nätet. Systematiskt fel som kan tyda på nätproblem uppströms.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border-l-4 border-amber-500 bg-amber-50/30 p-5">
                  <h3 className="text-base font-semibold text-surface-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Klassificering */}
        <section className="section-padding bg-surface-50">
          <div className="container-section">
            <div className="mx-auto max-w-3xl">
              <h2 className="heading-2">Hur klassificeras fel vid inspektion?</h2>
              <p className="body-text mt-6">
                Alla identifierade fel klassificeras efter allvarlighetsgrad:
              </p>
              <div className="mt-8 space-y-4">
                <div className="rounded-lg border-l-4 border-red-500 bg-red-50/30 p-5">
                  <h3 className="text-base font-semibold text-red-800">Kritiskt</h3>
                  <p className="mt-1 text-sm text-surface-600">
                    Fel som kräver omedelbar åtgärd — risk för driftstörning, personskada eller
                    materiell skada. Exempel: bruten fasledare, kraftigt lutande stolpe, aktiv varmgång i skarv.
                  </p>
                </div>
                <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50/30 p-5">
                  <h3 className="text-base font-semibold text-amber-800">Brådskande</h3>
                  <p className="mt-1 text-sm text-surface-600">
                    Fel som bör åtgärdas inom definierad tidsram — risk för progression om
                    ej åtgärdat. Exempel: sprickbildning i isolator, avancerad korrosion på travers.
                  </p>
                </div>
                <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50/30 p-5">
                  <h3 className="text-base font-semibold text-blue-800">Planerat</h3>
                  <p className="mt-1 text-sm text-surface-600">
                    Fel som kan åtgärdas vid nästa planerade underhållscykel — låg akut risk
                    men bör dokumenteras för uppföljning. Exempel: lindrigt slitage, fågelbo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Relaterat */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <h2 className="heading-2">Relaterade guider</h2>
            <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-3">
              <Link href="/guider/komponenter-elnat" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Komponenter i elnät</h3>
                <p className="mt-2 text-sm text-surface-500">Detaljerad genomgång av alla komponenter som inspekteras.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs guiden →</span>
              </Link>
              <Link href="/tjanster/kraftledningsinspektion" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Kraftledningsinspektion</h3>
                <p className="mt-2 text-sm text-surface-500">Beställ inspektion av ert elnät.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Se tjänsten →</span>
              </Link>
              <Link href="/jamforelser/helikopter-vs-dronare-inspektion" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Helikopter vs drönare</h3>
                <p className="mt-2 text-sm text-surface-500">Jämför detektionsförmåga mellan metoderna.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Se jämförelsen →</span>
              </Link>
            </div>
          </div>
        </section>

        <FAQ
          items={faqItems}
          heading="Vanliga frågor om feltyper i kraftledningar"
          subheading="Vill ni veta vilka fel som finns i ert nät? Kontakta oss."
        />

        <CTABand
          heading="Vill ni identifiera fel i ert elnät?"
          description="Vi utför drönarinspektion med visuell kamera och termografi för att kartlägga alla typer av avvikelser."
          primaryLabel="Få rådgivning"
          secondaryLabel="Se exempelrapport"
          secondaryHref="/exempelrapport"
        />
      </main>
      <Footer />
    </>
  );
}
