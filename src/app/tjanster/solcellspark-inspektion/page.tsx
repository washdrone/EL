import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Solcellspark Inspektion Drönare",
  description:
    "Drönarinspektion av solcellsparker med termografi. Identifiera hotspots, defekta moduler och anslutningsfel. Inspektera MW-skaliga anläggningar på timmar.",
  path: "/tjanster/solcellspark-inspektion",
  keywords: [
    "solcellspark inspektion drönare",
    "solcellspark termografi",
    "solpanel inspektion drönare",
  ],
});

const detectionItems = [
  {
    title: "Hotspots & cellfel",
    desc: "Värmekameran identifierar överhettade celler som kan leda till brandfarliga situationer och minskad produktion.",
  },
  {
    title: "Defekta moduler",
    desc: "Upptäck moduler med interna kortslutningar, sprickor i celler eller delaminering som påverkar effektiviteten.",
  },
  {
    title: "Anslutningsfel",
    desc: "Termografin avslöjar dåliga kontakter, lösa kablar och överhettade kopplingsboxar.",
  },
  {
    title: "Skuggning & nedsmutsning",
    desc: "Identifiera moduler som underpresterar på grund av skuggning, smuts eller fågelspillning.",
  },
  {
    title: "PID-effekt",
    desc: "Upptäck mönster som indikerar potentialinducerad degradering (PID) i modulfältet.",
  },
  {
    title: "Mekaniska skador",
    desc: "Visuell dokumentation av hagelskador, sprickor i glas och ramskador.",
  },
];

const benefits = [
  {
    title: "Effektiv storskalig inspektion",
    desc: "En drönare inspekterar stora modulfält betydligt snabbare än manuell inspektion. Tidsåtgången beror på anläggningens storlek.",
  },
  {
    title: "Exakt felisolering",
    desc: "Varje defekt modul positioneras med GPS-koordinater, redo att exportera till ert underhållssystem.",
  },
  {
    title: "Radiometrisk termografi",
    desc: "Radiometriska värmekameror ger temperaturvärden per pixel. Möjliggör analys mot tröskelvärden och trenduppföljning. Noggrannhet beror på kameramodell och förhållanden.",
  },
  {
    title: "Minimal driftpåverkan",
    desc: "Inspektionen utförs under drift utan att moduler behöver kopplas bort.",
  },
];

export default function SolcellsparkInspektionPage() {
  return (
    <>
      <JsonLd
        type="Service"
        servicePath="/tjanster/solcellspark-inspektion"
      />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "Solcellspark inspektion" },
        ]}
      />

      <Hero
        title="Solcellspark inspektion med drönare"
        subtitle="Solcellspark inspektion"
        description="Effektiv termografisk inspektion av solcellsparker med drönare. Identifiera hotspots, defekta moduler och anslutningsfel — inspektera MW-skaliga anläggningar på timmar istället för veckor."
        primaryCta={{ label: "Boka genomgång", href: "/kontakt" }}
        secondaryCta={{ label: "Begär offert", href: "/kontakt" }}
      />

      <Breadcrumbs
        items={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "Solcellspark inspektion" },
        ]}
      />

      {/* Vad upptäcks */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Vad upptäcker inspektionen?</h2>
            <p className="body-text mt-4">
              Med termografi och visuell kamera identifierar vi fel som påverkar
              produktion, säkerhet och livslängd.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {detectionItems.map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="text-base font-semibold text-surface-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fördelar */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">
              Fördelar med drönarinspektion av solcellsparker
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
            {benefits.map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="text-base font-semibold text-surface-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand primaryHref="/kontakt" secondaryHref="/kontakt" />
    </>
  );
}
