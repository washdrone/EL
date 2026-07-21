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
  title: "Komponenter i elnät — vad inspekteras med drönare?",
  description:
    "Vilka komponenter inspekteras vid drönarinspektion av elnät? Stolpar, isolatorer, ledningslinor, traverser, fästen, topplinor och ledningsgata.",
  path: "/guider/komponenter-elnat",
  ogType: "article",
  keywords: [
    "stolpinspektion drönare",
    "isolatorinspektion",
    "lininspektion",
    "elnätskomponenter inspektion",
    "traverser elnät",
    "kraftledningskomponenter",
  ],
});

const faqItems: FAQItem[] = [
  {
    question: "Vilka komponenter inspekteras vid drönarinspektion av elnät?",
    answer:
      "Stolpar och fundament, isolatorer, fasledare och topplinor, traverser och konsoler, fästen och klämdon, skarvar och kopplingar, samt ledningsgata och vegetation. Varje komponent dokumenteras med standardiserade bildvinklar.",
  },
  {
    question: "Hur många bildvinklar tas per stolpe?",
    answer:
      "Antalet standardiserade bildvinklar per stolpe anpassas efter inspektionsprogram — från översiktsbilder vid årlig screening till detaljbilder av varje komponent vid fördjupad inspektion. Bildvinklarna definieras i förväg för repeterbarhet.",
  },
  {
    question: "Inspekteras komponenterna visuellt eller termiskt?",
    answer:
      "Både och. RGB-kamera ger visuell dokumentation av alla komponenter. Radiometrisk värmekamera (termografering) används parallellt för att detektera termiska avvikelser i strömförande komponenter som skarvar, isolatorer och kopplingar.",
  },
  {
    question: "Kan enstaka komponenter inspekteras, eller krävs hela sträckan?",
    answer:
      "Båda alternativen är möjliga. Vi kan inspektera enstaka stolpar eller sektioner vid riktade insatser, eller hela ledningssträckor vid schemalagd inspektion. Omfattningen definieras i beställningen.",
  },
  {
    question: "Hur dokumenteras varje komponent?",
    answer:
      "Varje komponent dokumenteras med georefererade bilder (GPS-koordinat i SWEREF99 TM), klassificering av eventuella avvikelser, och åtgärdsrekommendation. Data levereras som strukturerade fyndkort i GIS-kompatibelt format.",
  },
];

export default function KomponenterGuidePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pb-24 lg:pb-0">
        <JsonLd
          type="BreadcrumbList"
          breadcrumbs={[
            { name: "Guider" },
            { name: "Komponenter i elnät" },
          ]}
        />
        <JsonLd type="FAQPage" faqItems={faqItems} />
        <JsonLd
          type="Article"
          articleHeadline={"Komponenter i elnät — vad inspekteras med drönare?"}
          articleDescription={
            "Vilka komponenter inspekteras vid drönarinspektion av elnät? Stolpar, isolatorer, ledningslinor, traverser, fästen, topplinor och ledningsgata."
          }
          articlePath="/guider/komponenter-elnat"
          datePublished="2026-04-05"
          dateModified="2026-04-05"
        />

        <Hero
          title="Komponenter i elnät — vad inspekteras med drönare?"
          subtitle="Guide: elnätskomponenter"
          description="Detaljerad genomgång av alla komponenter i kraftledningar som dokumenteras vid drönarinspektion — från stolptopp till fundament."
          dateLine="Uppdaterad: 5 april 2026"
          primaryCta={{ label: "Få rådgivning", href: "/kontakt" }}
          secondaryCta={{ label: "Se inspektionsprogram", href: "/tjanster/kraftledningsinspektion/inspektionsprogram" }}
          compact
        />

        <Breadcrumbs
          items={[
            { name: "Guider" },
            { name: "Komponenter i elnät" },
          ]}
        />

        {/* AEO Answer-First */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <div className="mx-auto max-w-3xl">
              <h2 className="heading-2">Vilka komponenter inspekteras vid drönarinspektion?</h2>
              <p className="body-text mt-6">
                Vid drönarinspektion av kraftledningar dokumenteras sju huvudkategorier av
                komponenter: stolpar och fundament, isolatorer, fasledare och topplinor,
                traverser och konsoler, fästen och klämdon, skarvar och kopplingar, samt
                ledningsgata och vegetation. Varje kategori har specifika bildvinklar och
                inspektionskriterier som säkerställer repeterbar och jämförbar dokumentation.
              </p>
            </div>
          </div>
        </section>

        {/* Stolpar */}
        <section className="section-padding bg-surface-50">
          <div className="container-section">
            <h2 className="heading-2">Stolpar och fundament</h2>
            <div className="mx-auto max-w-3xl">
              <p className="body-text mt-4">
                Stolpen är den bärande konstruktionen i luftledningsnätet. Vid inspektion
                dokumenteras stolptyp, skick och fundamentstatus:
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {[
                  {
                    title: "Trästolpar",
                    desc: "Kontrolleras för röta (särskilt vid marknivå och i toppen), sprickor, insektsangrepp och kvarvarande kreosotskydd. Lutning utöver tolerans dokumenteras.",
                  },
                  {
                    title: "Betongstolpar",
                    desc: "Sprickbildning, armeringsblottning, frostsprängning och spjälkning. Infästningspunkter för traverser och stag kontrolleras för skador.",
                  },
                  {
                    title: "Stålstolpar och master",
                    desc: "Korrosion i knutpunkter, bultförband och svetsfogar. Deformation av fackverk och stagning. Fundament kontrolleras för sättningar och erosion.",
                  },
                ].map((item) => (
                  <div key={item.title} className="card p-5">
                    <h3 className="text-sm font-semibold text-surface-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Isolatorer */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <h2 className="heading-2">Isolatorer</h2>
            <div className="mx-auto max-w-3xl">
              <p className="body-text mt-4">
                Isolatorer elektriskt separerar spänningsförande ledare från jordad konstruktion.
                Isolatorfel kan orsaka jordfel, överslag och driftstörningar. Tre isolatortyper
                förekommer i det svenska elnätet:
              </p>
              <div className="mt-8 space-y-4">
                {[
                  {
                    title: "Glasisolatorer",
                    desc: "Sprickor och krossade skålar identifieras visuellt. Fördelen med glas är att skador ofta är synliga — en krossad skål syns tydligt i RGB-bilder. Termisk avvikelse kan indikera kontaminering.",
                  },
                  {
                    title: "Porslinsisolatorer",
                    desc: "Svårare att bedöma visuellt — interna sprickor och fuktinträngning syns inte utifrån. Termografering är särskilt viktigt för att identifiera defekta porslinsenheter genom karaktäristisk värmesignatur.",
                  },
                  {
                    title: "Kompositisolatorer (polymer)",
                    desc: "UV-degradering, tracking (ytgångsströmmar), materialförlust och svällning. Kompositisolatorer kräver visuell bedömning av manteln och termisk kontroll av ändbeslag.",
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

        {/* Mid-content CTA */}
        <section className="bg-brand-50 py-12">
          <div className="container-section text-center">
            <h3 className="text-lg font-semibold text-brand-900">
              Vill ni inspektera alla komponenter i ert elnät?
            </h3>
            <p className="mx-auto mt-2 max-w-lg text-sm text-brand-700">
              Vi dokumenterar varje komponent med standardiserade bildvinklar och
              georefererade bilder. Se även{" "}
              <Link href="/jamforelser/helikopter-vs-dronare-inspektion" className="text-brand-600 underline hover:text-brand-800">
                hur drönare jämförs med helikopter
              </Link>{" "}
              för komponentinspektion.
            </p>
            <div className="mt-6">
              <Link href="/kontakt" className="btn-primary">
                Få rådgivning
              </Link>
            </div>
          </div>
        </section>

        {/* Ledningslinor */}
        <section className="section-padding bg-surface-50">
          <div className="container-section">
            <h2 className="heading-2">Fasledare, topplinor och jordledare</h2>
            <div className="mx-auto max-w-3xl">
              <p className="body-text mt-4">
                Ledningslinor transporterar elström (fasledare) och ger åskskydd (topplinor).
                Inspektionen fokuserar på:
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "Trådbrott i yttre lager",
                    desc: "Enskilda trådar som brustit av vibrationsutmattning, iserosion eller korrosion. Synligt i högupplösta RGB-bilder, särskilt vid skarvar och klämfästen.",
                  },
                  {
                    title: "Korrosion och åldring",
                    desc: "Aluminiumoxidering och stålkorrosion som försvagar ledningens bärförmåga. Bedöms visuellt genom ytförändring och missfärgning.",
                  },
                  {
                    title: "Galloppering och vibrationsslitage",
                    desc: "Mekaniskt slitage orsakat av vindvibrationer (aeolisk vibration). Koncentreras vid upphängningspunkter och dämparanordningar.",
                  },
                  {
                    title: "Nedhäng och avståndsöverskridande",
                    desc: "Dokumentation av ledningens nedhäng (sag) vid aktuella förhållanden. Används för att beräkna marknärmeavstånd och verifiering mot specifikation.",
                  },
                ].map((item) => (
                  <div key={item.title} className="card p-5">
                    <h3 className="text-sm font-semibold text-surface-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Traverser, fästen, skarvar */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <h2 className="heading-2">Traverser, fästen och skarvar</h2>
            <div className="mx-auto max-w-3xl">
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-surface-900">Traverser och konsoler</h3>
                  <p className="mt-2 text-sm text-surface-500">
                    Horisontella bärare som håller isolatorer och ledare på avstånd från stolpen.
                    Inspekteras för korrosion (särskilt vid infästning och traversfot), deformation
                    och lösa bultförband. Ståltraverser i äldre nät är ofta kritiska punkter för
                    korrosionsrelaterade fel.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-900">Fästen och klämdon</h3>
                  <p className="mt-2 text-sm text-surface-500">
                    Upphängningsklämmor, avspänningsklämmor, stagfästen och konsoler som förbinder
                    ledningslina med isolator och travers. Vibrationsslitage och korrosion är
                    vanliga skadeorsaker. Termografering avslöjar kontaktmotstånd som utvecklas
                    i slitna fästytor.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-900">Skarvar och kopplingar</h3>
                  <p className="mt-2 text-sm text-surface-500">
                    Mekaniska och elektriska skarvställen i ledningslinor. Kritiska punkter
                    för varmgångar — kontaktmotstånd i skarvar detekteras med termografi och
                    syns som temperaturförhöjning jämfört med omgivande ledare.
                    Läs mer om termisk detektion i vår{" "}
                    <Link href="/guider/termografering-kraftledningar" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400">
                      guide om termografering
                    </Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ledningsgata */}
        <section className="section-padding bg-surface-50">
          <div className="container-section">
            <div className="mx-auto max-w-3xl">
              <h2 className="heading-2">Ledningsgata och vegetation</h2>
              <p className="body-text mt-4">
                Ledningsgatan är det röjda området kring kraftledningen. Vegetationens avstånd
                till ledningen dokumenteras vid inspektion och prioriteras för röjningsinsatser.
                Kombineras vid behov med{" "}
                <Link href="/tjanster/vegetationskontroll" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400">
                  LiDAR-baserad vegetationskontroll
                </Link>{" "}
                som ger exakta avståndsmätningar i 3D.
              </p>
            </div>
          </div>
        </section>

        {/* Relaterat */}
        <section className="section-padding bg-white">
          <div className="container-section">
            <h2 className="heading-2">Relaterat</h2>
            <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-3">
              <Link href="/guider/feltyper-kraftledningar" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Feltyper i kraftledningar</h3>
                <p className="mt-2 text-sm text-surface-500">Vilka skador och avvikelser identifieras vid inspektion.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs guiden →</span>
              </Link>
              <Link href="/tjanster/kraftledningsinspektion" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Kraftledningsinspektion</h3>
                <p className="mt-2 text-sm text-surface-500">Beställ inspektion av ert elnät.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Se tjänsten →</span>
              </Link>
              <Link href="/guider/upphandling-dronareinspektion" className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md">
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">Upphandla drönarinspektion</h3>
                <p className="mt-2 text-sm text-surface-500">Kravspec och utvärderingskriterier för upphandling.</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">Läs guiden →</span>
              </Link>
            </div>
          </div>
        </section>

        <FAQ
          items={faqItems}
          heading="Vanliga frågor om elnätskomponenter"
          subheading="Vill ni veta mer om inspektionsomfång? Kontakta oss."
        />

        <CTABand
          heading="Vill ni inspektera ert elnäts komponenter?"
          description="Vi dokumenterar alla kritiska komponenter med standardiserade bildvinklar och georefererade bilder."
          primaryLabel="Få rådgivning"
          secondaryLabel="Se inspektionsprogram"
          secondaryHref="/tjanster/kraftledningsinspektion/inspektionsprogram"
        />
      </main>
      <Footer />
    </>
  );
}
