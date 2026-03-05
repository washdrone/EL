import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Vindkraftinspektion Drönare",
  description:
    "Professionell inspektion av vindkraftverk med drönare. Rotorblad, torn, nacelle och åskledare. Snabbare och säkrare än manuell klättring.",
  path: "/tjanster/vindkraftinspektion",
  keywords: [
    "vindkraftinspektion drönare",
    "vindkraftverk inspektion",
    "rotorbladsinspektion",
    "inspektion vindkraftpark drönare",
  ],
});

const inspectionItems = [
  {
    title: "Rotorblad",
    desc: "Erosion på framkant, sprickor, blixtnedslag och delaminering. Högupplösta bilder av hela bladytan.",
  },
  {
    title: "Torn",
    desc: "Korrosion, ytskador, sprickor i svetsar och bultförband. Dokumentation från bas till topp.",
  },
  {
    title: "Nacelle",
    desc: "Tätningar, kablar, kylsystem och utvändig skada. Visuell kontroll utan klättring.",
  },
  {
    title: "Åskledare",
    desc: "Kontroll av åskledarreceptorer på bladspetsar och ledarsystem längs bladen.",
  },
];

const steps = [
  {
    step: "1",
    title: "Planering & riskbedömning",
    desc: "Vi analyserar vindkraftparken, planerar flygvägar och koordinerar med driftansvarig. Väderförhållanden bedöms för optimal bildkvalitet.",
  },
  {
    step: "2",
    title: "Drönarinspektion",
    desc: "Varje turbin inspekteras systematiskt — rotorblad, torn, nacelle och åskledare. Tidsåtgången beror på turbinstorlek och inspektionsomfattning.",
  },
  {
    step: "3",
    title: "Analys & rapport",
    desc: "Bildmaterialet granskas och klassificeras. Ni får en strukturerad inspektionsrapport med skadebedömning och åtgärdsrekommendationer.",
  },
];

export default function VindkraftinspektionPage() {
  return (
    <>
      <JsonLd type="Service" servicePath="/tjanster/vindkraftinspektion" />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "Vindkraftinspektion" },
        ]}
      />

      <Hero
        title="Vindkraftverksinspektion med drönare"
        subtitle="Vindkraftinspektion"
        description="Professionell inspektion av vindkraftverk med drönare. Vi dokumenterar rotorblad, torn, nacelle och åskledare — snabbare och säkrare än manuell klättring."
        primaryCta={{ label: "Boka genomgång", href: "/kontakt" }}
        secondaryCta={{ label: "Begär offert", href: "/kontakt" }}
      />

      <Breadcrumbs
        items={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "Vindkraftinspektion" },
        ]}
      />

      {/* Vad inspekteras */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Vad inspekteras</h2>
            <p className="body-text mt-4">
              Varje vindkraftverk inspekteras systematiskt med fokus på de
              komponenter som är mest utsatta för slitage och skador.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
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

      {/* Så fungerar det */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Så fungerar det</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-3">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-lg font-bold text-brand-600">
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

      <CTABand
        primaryHref="/kontakt"
        secondaryHref="/kontakt"
      />
    </>
  );
}
