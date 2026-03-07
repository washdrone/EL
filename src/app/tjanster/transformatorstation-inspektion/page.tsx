import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Drönarinspektion av transformatorstationer",
  description:
    "Säker inspektion av transformatorstationer med drönare. Visuell och termisk kontroll av isolatorer, kablar och strukturer. Detaljerad inspektionsrapport.",
  path: "/tjanster/transformatorstation-inspektion",
  keywords: [
    "transformatorstation inspektion drönare",
    "inspektion transformator drönare",
    "elnätsinspektion transformator",
  ],
});

const inspectionItems = [
  {
    title: "Isolatorer",
    desc: "Visuell och termisk kontroll av isolatorer för att upptäcka sprickor, förorening och interna fel.",
  },
  {
    title: "Kablar & anslutningar",
    desc: "Kontroll av kabelanslutningar, klämmor och genomföringar med värmekamera för att identifiera varmgångar.",
  },
  {
    title: "Transformatorer",
    desc: "Termografering av transformatorkroppar, kylflänsar och oljefyllda genomföringar.",
  },
  {
    title: "Strukturer & stålkonstruktioner",
    desc: "Visuell inspektion av stålkonstruktioner, korrosionsskador och mekaniskt slitage.",
  },
  {
    title: "Ställverksutrustning",
    desc: "Dokumentation av frånskiljare, brytare och mätinstrument från optimala vinklar.",
  },
  {
    title: "Markplan & inhägnad",
    desc: "Översiktsbild av stationsområdet, inhägnad, vegetation och tillfartsvägar.",
  },
];

const benefits = [
  {
    title: "Ökad säkerhet",
    desc: "Ingen personal behöver arbeta nära spänningsförande delar. Drönaren håller säkerhetsavstånd och dokumenterar med zoom.",
  },
  {
    title: "Snabbare inspektion",
    desc: "Drönarinspektion är snabbare än traditionell manuell inspektion. Tidsåtgången beror på stationens storlek och komplexitet.",
  },
  {
    title: "Kombination av sensorer",
    desc: "Visuell kamera och värmekamera i samma flygning ger en komplett bild av stationens skick.",
  },
  {
    title: "Detaljerad rapport",
    desc: "Strukturerad inspektionsrapport med georefererade bilder, termogrammer och åtgärdsrekommendationer.",
  },
];

export default function TransformatorstationInspektionPage() {
  return (
    <>
      <JsonLd
        type="Service"
        servicePath="/tjanster/transformatorstation-inspektion"
      />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "Transformatorstation inspektion" },
        ]}
      />

      <Hero
        title="Drönarinspektion av transformatorstationer"
        subtitle="Transformatorstation inspektion"
        description="Säker och effektiv inspektion av transformatorstationer med drönare. Visuell och termisk kontroll av isolatorer, kablar, transformatorer och strukturer utan att personal behöver vistas nära spänningsförande delar."
        primaryCta={{ label: "Boka genomgång", href: "/kontakt" }}
        secondaryCta={{ label: "Begär offert", href: "/kontakt" }}
      />

      <Breadcrumbs
        items={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "Transformatorstation inspektion" },
        ]}
      />

      {/* Vad inspekteras */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Vad inspekteras</h2>
            <p className="body-text mt-4">
              Drönaren dokumenterar alla kritiska komponenter på
              transformatorstationen med visuell kamera och värmekamera.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {inspectionItems.map((item) => (
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
              Fördelar med drönarinspektion av stationer
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
