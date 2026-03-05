import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Vegetationskontroll Kraftledning med Drönare",
  description:
    "LiDAR-baserad vegetationskontroll längs kraftledningsgator. Identifiera träd och grenar som hotar ledningen. Avståndsmätning med hög noggrannhet.",
  path: "/tjanster/vegetationskontroll",
  keywords: [
    "vegetationskontroll kraftledning drönare",
    "LiDAR kraftledning",
    "vegetationskartläggning elnät",
  ],
});

const detectionItems = [
  {
    title: "Träd inom riskzon",
    desc: "Identifiera träd som växer in i eller riskerar att falla mot ledningsgatan. Exakt avståndsmätning med LiDAR.",
  },
  {
    title: "Höjdtillväxt",
    desc: "Kartlägg vegetationens höjd längs hela ledningssträckan och jämför med tillåtna säkerhetsavstånd.",
  },
  {
    title: "Rotationsträd",
    desc: "Upptäck lutande eller skadade träd utanför ledningsgatan som kan falla mot ledningen vid storm.",
  },
  {
    title: "Sly & uppväxande vegetation",
    desc: "Dokumentera uppväxande vegetation i ledningsgatan som behöver röjas för att upprätthålla säkerhetsavstånden.",
  },
];

const benefits = [
  {
    title: "Hög noggrannhet med LiDAR",
    desc: "Centimeternoggrann avståndsmätning mellan vegetation och ledning. Punktmoln ger en exakt 3D-modell av ledningsgatan.",
  },
  {
    title: "Stor yttäckning per dag",
    desc: "LiDAR-drönare kartlägger kilometer av ledningsgata per dag — oavsett terräng och tillgänglighet.",
  },
  {
    title: "Prioriterat röjningsunderlag",
    desc: "Data sorteras efter risk och avstånd. Ni får ett färdigt underlag för att prioritera röjningsinsatser.",
  },
  {
    title: "Jämförelse över tid",
    desc: "Georefererad data möjliggör jämförelse mellan mättillfällen. Följ vegetationens tillväxt och planera proaktivt.",
  },
];

export default function VegetationskontrollPage() {
  return (
    <>
      <JsonLd type="Service" servicePath="/tjanster/vegetationskontroll" />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "Vegetationskontroll" },
        ]}
      />

      <Hero
        title="Vegetationskontroll & LiDAR kartläggning"
        subtitle="Vegetationskontroll"
        description="LiDAR-baserad vegetationskontroll längs kraftledningsgator med drönare. Identifiera träd och grenar som hotar ledningen, mät säkerhetsavstånd och få prioriterat röjningsunderlag."
        primaryCta={{ label: "Boka genomgång", href: "/kontakt" }}
        secondaryCta={{ label: "Begär offert", href: "/kontakt" }}
      />

      <Breadcrumbs
        items={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "Vegetationskontroll" },
        ]}
      />

      {/* Vad upptäcker LiDAR */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Vad upptäcker LiDAR?</h2>
            <p className="body-text mt-4">
              LiDAR-sensorn skapar ett detaljerat punktmoln av ledningsgatan och
              identifierar vegetation som hotar säkerhetsavstånden.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
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
              Fördelar med drönarbaserad vegetationskontroll
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
