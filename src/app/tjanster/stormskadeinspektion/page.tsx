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
  title: "Stormskadeinspektion med drönare",
  description:
    "Akut skadekartläggning av elnät och kraftledningar efter storm. Prioritering av skadelägen för snabbast möjliga återuppbyggnad.",
  path: "/tjanster/stormskadeinspektion",
  keywords: [
    "stormskada elnät inspektion",
    "drönare skadekartläggning storm",
    "elnätsinspektion efter storm",
    "akut elnätsinspektion drönare",
  ],
});

const faqItems: FAQItem[] = [
  {
    question: "Hur snabbt kan GridDrone mobilisera efter en storm?",
    answer:
      "Vi har beredskap för snabb mobilisering efter stormlarm. Exakt mobiliseringstid beror på stormens omfattning, väderlägessituation och geografisk placering. Kontakta oss för att diskutera beredskapsavtal.",
  },
  {
    question: "Vad ingår i en stormskadeinspektion?",
    answer:
      "Snabb flyginspektion av drabbade ledningssträckor, identifiering och GPS-märkning av skadelägen (stolpar, isolatorer, ledningslinor, traverser), prioriteringsklassificering efter allvarlighetsgrad, samt en sammanfattande rapport med GIS-data som beslutsunderlag.",
  },
  {
    question: "Kan drönare flyga direkt efter en storm?",
    answer:
      "Flygning sker först när vädret tillåter säker drift — typiskt när vindhastigheten understiger drönarsystemets gränsvärden. Vi bevakar väderdata löpande och startar så snart det är säkert.",
  },
  {
    question: "Vilka typer av stormskador identifieras?",
    answer:
      "Fallna eller lutande stolpar, brutna ledningslinor och topplinor, nedfallna träd på ledningar, krossade isolatorer, deformerade traverser och fästen, samt fundament som påverkats av markrörelse eller rotvältor.",
  },
  {
    question: "Hur levereras data från stormskadeinspektionen?",
    answer:
      "Data levereras som en prioriterad skaderapport med GPS-koordinater för varje skadat objekt, klassificerade bilder och GIS-lager. Formatet anpassas för direktimport i ert nätförvaltningssystem — GeoTIFF, shapefiler eller CSV.",
  },
  {
    question: "Kan stormskadeinspektion kombineras med termografering?",
    answer:
      "Ja, vid stormskadeinspektion kan termografering utföras parallellt för att identifiera varmgångar i skarvar och kontakter som kan ha uppstått av mekanisk påverkan under stormen. Detta ger ett kompletterande underlag för reparationsprioritering.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Larm & mobilisering",
    desc: "Ni larmar GridDrone. Vi bekräftar tillgänglighet och planerar insatsen baserat på drabbat område och väderprognos.",
  },
  {
    step: "2",
    title: "Flyginspektion",
    desc: "Drönare inspekterar drabbade ledningssträckor systematiskt. Alla fynd GPS-märks och fotograferas.",
  },
  {
    step: "3",
    title: "Skadeklassificering",
    desc: "Skador klassificeras efter allvarlighetsgrad och reparationsprioritet — kritiskt, brådskande eller planerat.",
  },
  {
    step: "4",
    title: "Rapport & beslutsunderlag",
    desc: "Prioriterad skadeöversikt levereras som beslutsunderlag för era reparationsteam.",
  },
];

export default function StormskadeinspektionPage() {
  return (
    <>
      <JsonLd type="Service" servicePath="/tjanster/stormskadeinspektion" />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "Stormskadeinspektion" },
        ]}
      />
      <JsonLd type="FAQPage" faqItems={faqItems} />
      <JsonLd
        type="HowTo"
        howToName="Så fungerar stormskadeinspektion med drönare"
        howToDescription="Process för akut skadekartläggning av elnät och kraftledningar efter storm."
        howToSteps={[
          { name: "Larm och mobilisering", text: "Ni larmar GridDrone. Vi bekräftar tillgänglighet och planerar insatsen baserat på drabbat område och väderprognos." },
          { name: "Flyginspektion", text: "Drönare inspekterar drabbade ledningssträckor systematiskt. Alla fynd GPS-märks och fotograferas med högupplöst kamera." },
          { name: "Skadeklassificering", text: "Skador klassificeras efter allvarlighetsgrad och reparationsprioritet — kritiskt, brådskande eller planerat underhåll." },
          { name: "Rapport och beslutsunderlag", text: "Prioriterad skadeöversikt levereras som beslutsunderlag för era reparationsteam." },
        ]}
      />

      <Hero
        title="Stormskadeinspektion med drönare — snabb skadeöversikt"
        subtitle="Akut stormskadeinspektion"
        description="Akut skadekartläggning av elnät och kraftledningar efter storm, orkan eller exceptionella väderförhållanden. Prioritering av skadelägen för snabbast möjliga återuppbyggnad."
        primaryCta={{ label: "Kontakta oss", href: "/kontakt" }}
        secondaryCta={{ label: "Se inspektionsprogram", href: "/tjanster/kraftledningsinspektion/inspektionsprogram" }}
      />

      <Breadcrumbs
        items={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "Stormskadeinspektion" },
        ]}
      />

      {/* AEO Answer-First Block */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-2">Vad är stormskadeinspektion med drönare?</h2>
            <p className="body-text mt-6">
              Stormskadeinspektion med drönare innebär att en utbildad pilot snabbt flyger
              över drabbade elnäts- och kraftledningssträckor efter storm, orkan eller andra
              extremväderförhållanden. Drönaren identifierar och GPS-märker fallna stolpar,
              brutna ledningar, nedfallna träd och skadade isolatorer. Skadorna klassificeras
              efter allvarlighetsgrad och levereras som ett prioriterat beslutsunderlag för
              reparationsteam — utan att personal behöver ta sig ut i farlig terräng.
            </p>
            <div className="mt-8">
              <Link href="/kontakt" className="btn-primary inline-flex items-center">
                Kontakta oss om beredskapsavtal
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Så fungerar stormskadeinspektion</h2>
            <p className="body-text mt-4">
              När stormen har dragit förbi och säkra flygförhållanden råder,
              mobiliserar vi snabbt för att kartlägga skador systematiskt.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
            {processSteps.map((item) => (
              <div key={item.step} className="card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-600">
                  {item.step}
                </div>
                <h3 className="mt-4 text-base font-semibold text-surface-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stormspecifika skadetyper — unique to this page */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <h2 className="heading-2">Typiska stormskador i elnätet</h2>
          <p className="body-text mt-4 max-w-3xl">
            Storm orsakar mekaniska skador på elnätet genom vindlast, nedfallande träd och
            markrörelse. Drönaren kartlägger och GPS-märker skador längs drabbade sträckor
            för prioriterad reparation:
          </p>
          <div className="mx-auto mt-10 max-w-4xl grid gap-4 sm:grid-cols-2">
            {[
              "Fallna eller kraftigt lutande stolpar (vind, rotvältor)",
              "Brutna fasledare och topplinor (mekanisk överbelastning)",
              "Nedfallna träd på eller nära spänningsförande ledning",
              "Krossade isolatorer (fallande grenar, vindburna föremål)",
              "Deformerade traverser och lossnade fästen",
              "Fundament med sättningar, erosion eller rotvälteskador",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-surface-100 bg-white px-5 py-3">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                <span className="text-sm text-surface-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-surface-500">
            Läs mer om{" "}
            <Link href="/guider/feltyper-kraftledningar" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700">
              alla feltyper som identifieras vid drönarinspektion
            </Link>{" "}
            eller{" "}
            <Link href="/guider/komponenter-elnat" className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700">
              vilka komponenter som inspekteras
            </Link>.
          </p>
        </div>
      </section>

      {/* Värde */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Varför drönare vid stormskador?</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              {
                title: "Snabb överblick",
                desc: "Drönare ger en snabb och systematisk översikt av skadeläget över stora områden utan markåtkomst.",
              },
              {
                title: "Säker inspektion",
                desc: "Inga personer behöver ta sig ut i farlig terräng med nedfallna ledningslinor och instabila stolpar.",
              },
              {
                title: "Prioriterat underlag",
                desc: "Klassificerade skador ger era reparationsteam ett tydligt beslutsunderlag med GPS-positioner för varje skadat objekt.",
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
          <div className="mt-10 text-center">
            <Link href="/kontakt" className="btn-primary inline-flex items-center">
              Begär offert för beredskapsavtal
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Målkunder */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Vem anlitar stormskadeinspektion?</h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
            {[
              "Elnätsbolag",
              "Kommuner",
              "Försäkringsbolag",
              "Räddningstjänst & Länsstyrelse",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-surface-100 bg-surface-50 px-5 py-3">
                <div className="h-2 w-2 rounded-full bg-brand-500" />
                <span className="text-sm font-medium text-surface-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relaterade */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Relaterade tjänster</h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Kraftledningsinspektion med drönare",
                desc: "Planerad visuell inspektion av stolpar, isolatorer, ledningslinor och ledningsgata.",
                href: "/tjanster/kraftledningsinspektion",
              },
              {
                title: "BVLOS-inspektion av elnät",
                desc: "Inspektera långa sträckor bortom synhåll — effektivt vid stormskadekartläggning.",
                href: "/tjanster/bvlos-inspektion",
              },
              {
                title: "Underhållsabonnemang",
                desc: "Inkluderar prioriterad stormrespons som del av abonnemanget.",
                href: "/tjanster/underhallsabonnemang",
              },
              {
                title: "Guide: Drönarinspektion av elnät",
                desc: "Komplett guide om hur drönarinspektion fungerar — utrustning, process och leveranser.",
                href: "/guider/dronareinspektion-elnat",
              },
              {
                title: "Termografering av kraftledningar",
                desc: "Termisk analys som identifierar varmgångar och dolda fel efter stormskada.",
                href: "/tjanster/termografering-kraftledning",
              },
              {
                title: "Helikopter vs drönare inspektion",
                desc: "Jämförelse av kostnad, datakvalitet och effektivitet mellan metoderna.",
                href: "/jamforelser/helikopter-vs-dronare-inspektion",
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

      <FAQ items={faqItems} heading="Vanliga frågor om stormskadeinspektion" />

      <CTABand primaryHref="/kontakt" secondaryHref="/kontakt" />
    </>
  );
}
