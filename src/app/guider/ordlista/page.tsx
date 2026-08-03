import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Ordlista — drönarinspektion av elnät & kraftledningar",
  description:
    "Teknisk ordlista för drönarinspektion av elnät: BVLOS, LiDAR, punktmoln, fotogrammetri, termografi, RTK, GIS, transmissionsnät, ställverk, isolatorer med mera.",
  path: "/guider/ordlista",
  keywords: [
    "ordlista drönarinspektion",
    "termer elnätsinspektion",
    "vad är BVLOS LiDAR punktmoln",
  ],
});

interface GlossaryTerm {
  name: string;
  description: string;
}

interface GlossaryCategory {
  heading: string;
  terms: GlossaryTerm[];
}

const glossary: GlossaryCategory[] = [
  {
    heading: "Drönarteknik och flygoperationer",
    terms: [
      {
        name: "Drönarinspektion",
        description:
          "Inspektionsmetod där en fjärrstyrd eller automatiserad drönare med kamera och sensorer dokumenterar en anläggnings skick från luften. För elnät innebär det att stolpar, ledningar och komponenter fotograferas och analyseras utan klättring och normalt utan driftstopp.",
      },
      {
        name: "BVLOS (Beyond Visual Line of Sight)",
        description:
          "Drönarflygning bortom pilotens synhåll. BVLOS kräver särskilt tillstånd från luftfartsmyndigheten och möjliggör inspektion av långa ledningssträckor utan att piloten behöver förflytta sig längs hela sträckan.",
      },
      {
        name: "VLOS (Visual Line of Sight)",
        description:
          "Drönarflygning inom pilotens synhåll — grundregeln för drönaroperationer inom EU:s regelverk. Flygning utanför synhåll kräver tillstånd för BVLOS.",
      },
      {
        name: "SORA (Specific Operations Risk Assessment)",
        description:
          "EU-gemensam riskbedömningsmetodik för drönaroperationer i den specifika kategorin, till exempel BVLOS-flygningar. Operatören analyserar mark- och luftrisker och visar hur riskerna hanteras för att få operationstillstånd.",
      },
      {
        name: "PDRA (Pre-Defined Risk Assessment)",
        description:
          "Fördefinierad riskbedömning publicerad av EASA för vanligt förekommande operationstyper. Ett förenklat alternativ till en fullständig SORA-analys när operationen matchar ett fördefinierat scenario.",
      },
      {
        name: "EASA",
        description:
          "Europeiska unionens byrå för luftfartssäkerhet. EASA fastställer det gemensamma EU-regelverket för drönaroperationer, inklusive kategorier, utbildningskrav och riskbedömningsmetoder.",
      },
      {
        name: "RTK-positionering (Real Time Kinematic)",
        description:
          "Satellitpositionering med korrektionsdata i realtid som ger positionsnoggrannhet på centimeternivå, jämfört med meternivå för vanlig GPS. Används för att georeferera inspektionsbilder och mätdata med hög precision.",
      },
    ],
  },
  {
    heading: "Sensorer och datainsamling",
    terms: [
      {
        name: "RGB-inspektion",
        description:
          "Visuell inspektion med vanlig högupplöst kamera (rött-grönt-blått färgspektrum). Grundmetoden för att dokumentera synliga skador som korrosion, sprickor, trådbrott och mekaniska skador.",
      },
      {
        name: "Termografi",
        description:
          "Beröringsfri mätning av värmestrålning med värmekamera. I elnät används termografi för att hitta varmgångar — onormalt varma punkter i skarvar, kopplingar och komponenter som kan indikera begynnande fel.",
      },
      {
        name: "Radiometrisk värmekamera",
        description:
          "Värmekamera som lagrar ett temperaturvärde i varje pixel, vilket gör att temperaturer kan mätas och jämföras i efterhand i bildmaterialet — inte bara betraktas som färgskala vid inspektionstillfället.",
      },
      {
        name: "Varmgång",
        description:
          "Onormal temperaturhöjning i en elektrisk komponent, ofta orsakad av ökat kontaktmotstånd i skarvar eller anslutningar. Varmgångar syns i termografi innan de utvecklas till driftstörningar eller haverier.",
      },
      {
        name: "LiDAR (Light Detection and Ranging)",
        description:
          "Laserbaserad avståndsmätning som skapar tredimensionella punktmoln av terräng, vegetation och anläggningar. Används bland annat för vegetationskontroll längs ledningsgator, där avstånd mellan träd och ledning kan mätas ur modellen.",
      },
      {
        name: "Punktmoln",
        description:
          "En stor mängd tredimensionella mätpunkter som tillsammans beskriver en yta eller anläggning i 3D. Skapas med LiDAR eller fotogrammetri och används för avståndsmätning, volymberäkning och 3D-modellering.",
      },
      {
        name: "Fotogrammetri",
        description:
          "Metod för att skapa 3D-modeller och skalriktiga ortofoton ur överlappande fotografier. Ett kamerabaserat alternativ eller komplement till LiDAR för tredimensionell dokumentation.",
      },
      {
        name: "Ortofoto",
        description:
          "Ett geometriskt korrigerat flygfoto med enhetlig skala, som kan användas som kartunderlag och kombineras med andra geodata i GIS-system.",
      },
    ],
  },
  {
    heading: "Geodata och leveranser",
    terms: [
      {
        name: "GIS (Geografiskt informationssystem)",
        description:
          "Programvara och datastruktur för att lagra, analysera och visualisera geografiskt kopplad information. Nätägare förvaltar normalt sina anläggningsdata i GIS- eller nätinformationssystem, och inspektionsdata levereras därför i GIS-kompatibla format.",
      },
      {
        name: "Georeferering",
        description:
          "Koppling av data — till exempel en inspektionsbild eller ett fynd — till en exakt geografisk position i ett bestämt koordinatsystem, så att informationen kan placeras på karta och återfinnas i fält.",
      },
      {
        name: "SWEREF99 TM",
        description:
          "Sveriges nationella referenssystem för plana koordinater, förvaltat av Lantmäteriet. Standardkoordinatsystemet för svenska kart- och GIS-data.",
      },
      {
        name: "GeoTIFF",
        description:
          "Bildformat (TIFF) med inbäddad geografisk information, vilket gör att bilden automatiskt hamnar rätt placerad i GIS-program. Vanligt leveransformat för ortofoton och kartlager.",
      },
      {
        name: "Shapefile",
        description:
          "Ett utbrett filformat för vektordata i GIS — punkter, linjer och ytor med tillhörande attribut. Används till exempel för att leverera inspektionsfynd som punktlager med skadeklassning.",
      },
      {
        name: "Digital tvilling",
        description:
          "En digital representation av en fysisk anläggning, uppbyggd av till exempel 3D-modeller, punktmoln, bilder och anläggningsdata. Gör det möjligt att analysera, planera och följa upp anläggningens skick digitalt över tid.",
      },
    ],
  },
  {
    heading: "Elnätets uppbyggnad",
    terms: [
      {
        name: "Transmissionsnät (stamnät)",
        description:
          "Det rikstäckande nät som transporterar el över långa avstånd mellan produktionsanläggningar och regionala nät. I Sverige förvaltas transmissionsnätet av Svenska kraftnät och drivs enligt myndigheten med spänningsnivåerna 400 kV och 220 kV.",
      },
      {
        name: "Regionnät",
        description:
          "Näten som binder samman transmissionsnätet med lokalnäten och matar större uttagspunkter som industrier och städer. Regionnäten ägs och drivs av regionala nätbolag.",
      },
      {
        name: "Lokalnät (distributionsnät)",
        description:
          "Näten som distribuerar el den sista sträckan fram till hushåll och verksamheter. Lokalnäten omfattar både luftledningar och markkabel samt nätstationer som transformerar ned spänningen till användarnivå.",
      },
      {
        name: "Luftledning",
        description:
          "Elledning upphängd i stolpar eller fackverkstorn ovan mark. Luftledningar är exponerade för väder, vegetation och mekanisk påverkan och är därför ett centralt inspektionsobjekt i elnätsunderhåll.",
      },
      {
        name: "Ledningsgata",
        description:
          "Det röjda markområde längs en kraftledning där vegetation hålls nere för att skydda ledningen. Ledningsgatans skick och inväxande vegetation kontrolleras återkommande, ofta med LiDAR.",
      },
      {
        name: "Transformatorstation",
        description:
          "Anläggning där el transformeras mellan olika spänningsnivåer. Innehåller bland annat transformatorer, ställverk, frånskiljare och skyddsutrustning — komponenter som kan inspekteras både visuellt och termiskt.",
      },
      {
        name: "Ställverk",
        description:
          "Den del av en station som kopplar, skyddar och fördelar elkraft — med brytare, frånskiljare, samlingsskenor och mätutrustning. Ställverk finns både utomhus och inomhus och i luft- eller gasisolerat utförande.",
      },
      {
        name: "Isolator",
        description:
          "Komponent av porslin, glas eller komposit som bär upp ledaren och isolerar den elektriskt från stolpe eller travers. Skadade eller förorenade isolatorer är en vanlig felkälla som identifieras vid visuell inspektion.",
      },
      {
        name: "Travers (regel)",
        description:
          "Det tvärgående bärverk på en stolpe eller ett torn som isolatorer och ledare hänger i. Traversens infästningar och skick kontrolleras vid stolpinspektion.",
      },
      {
        name: "Topplina",
        description:
          "Lina monterad överst i en kraftledning som skyddar faslinorna mot blixtnedslag och ofta innehåller optofiber för kommunikation.",
      },
    ],
  },
  {
    heading: "Underhållsstrategier",
    terms: [
      {
        name: "Förebyggande underhåll",
        description:
          "Underhåll som utförs planerat innan fel uppstår, till exempel med fasta intervall. Syftet är att minska risken för oplanerade driftstopp.",
      },
      {
        name: "Tillståndsbaserat underhåll",
        description:
          "Underhållsstrategi där åtgärder prioriteras utifrån anläggningens faktiskt uppmätta skick i stället för fasta intervall. Återkommande inspektionsdata gör det möjligt att följa skicket över tid och sätta in åtgärder där de gör störst nytta.",
      },
      {
        name: "Skadeklassning",
        description:
          "Systematisk klassificering av inspektionsfynd efter typ och allvarlighetsgrad, så att åtgärder kan prioriteras. Klassningen följer den skala som avtalas med beställaren eller beställarens egna riktlinjer.",
      },
      {
        name: "Besiktning enligt starkströmsföreskrifterna",
        description:
          "Innehavare av starkströmsanläggningar är enligt svenska elsäkerhetsregler skyldiga att fortlöpande kontrollera sina anläggningar. Drönarinspektion kan användas som underlag i sådan kontroll, men ersätter inte innehavarens ansvar enligt föreskrifterna.",
      },
    ],
  },
];

const allTerms = glossary.flatMap((category) => category.terms);

export default function OrdlistaPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pb-24 lg:pb-0">
        <JsonLd
          type="BreadcrumbList"
          breadcrumbs={[
            { name: "Guider", href: "/guider" },
            { name: "Ordlista", href: "/guider/ordlista" },
          ]}
        />
        <JsonLd
          type="DefinedTermSet"
          definedTermSetName="Ordlista: drönarinspektion av elnät och kraftledningar"
          definedTermSetPath="/guider/ordlista"
          definedTerms={allTerms}
        />

        <Hero
          title="Ordlista — drönarinspektion av elnät"
          subtitle="Ordlista"
          description="Tekniska termer inom drönarbaserad inspektion av elnät och kraftledningar — från BVLOS och LiDAR till ställverk och tillståndsbaserat underhåll. Kort förklarade, utan förkunskapskrav."
          primaryCta={{ label: "Begär offert", href: "/kontakt" }}
          secondaryCta={{ label: "Alla guider", href: "/guider" }}
          compact
        />

        <Breadcrumbs
          items={[
            { name: "Guider", href: "/guider" },
            { name: "Ordlista" },
          ]}
        />

        <section className="section-padding bg-white">
          <div className="container-section">
            <div className="mx-auto max-w-3xl">
              {glossary.map((category) => (
                <div key={category.heading} className="mb-12">
                  <h2 className="heading-2">{category.heading}</h2>
                  <dl className="mt-6 space-y-6">
                    {category.terms.map((term) => (
                      <div key={term.name} className="border-b border-surface-100 pb-6">
                        <dt className="text-base font-semibold text-surface-900">
                          {term.name}
                        </dt>
                        <dd className="mt-2 text-sm leading-7 text-surface-500">
                          {term.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}

              <p className="body-text mt-4">
                Vill ni se hur termerna hänger ihop i praktiken? Läs guiden{" "}
                <Link
                  href="/guider/dronareinspektion-elnat"
                  className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400"
                >
                  Vad är drönarinspektion av elnät?
                </Link>{" "}
                eller fördjupa er i{" "}
                <Link
                  href="/guider/dataleverans-gis-elnat"
                  className="text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400"
                >
                  hur data levereras i GIS-format
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
