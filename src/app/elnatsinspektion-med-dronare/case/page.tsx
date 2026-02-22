import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import { CaseCard, sampleCases } from "@/components/CaseCard";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = createPageMetadata({
  title: "Referensuppdrag – drönareinspektion av elnät",
  description:
    "Exempel på genomförda drönareinspektion av elnät och luftledningar. Se hur vi har hjälpt elnätsbolag med standardiserad inspektion.",
  path: "/elnatsinspektion-med-dronare/case",
  keywords: [
    "referensuppdrag drönareinspektion",
    "case elnätsinspektion",
    "exempel drönareinspektion elnät",
  ],
});

export default function CasePage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          {
            name: "Elnätsinspektion med drönare",
            href: "/elnatsinspektion-med-dronare",
          },
          { name: "Referensuppdrag" },
        ]}
      />

      <Breadcrumbs
        items={[
          {
            name: "Elnätsinspektion med drönare",
            href: "/elnatsinspektion-med-dronare",
          },
          { name: "Referensuppdrag" },
        ]}
      />

      <Hero
        title="Referensuppdrag"
        subtitle="Case"
        description="Exempel på genomförda inspektionsuppdrag. Kontakta oss för detaljerade referensuppgifter vid upphandling."
      />

      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="mx-auto max-w-2xl space-y-6">
            {sampleCases.map((c) => (
              <CaseCard key={c.slug} data={c} />
            ))}

            <div className="rounded-2xl border border-dashed border-surface-300 bg-surface-50 p-8 text-center">
              <p className="text-sm text-surface-400">
                Fler referensuppdrag publiceras löpande. Kontakta oss för
                detaljerade referensuppgifter anpassade efter er
                upphandling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        heading="Vill ni veta mer om ett specifikt uppdrag?"
        description="Vi tillhandahåller detaljerade referensuppgifter vid upphandling och avtalsdiskussion."
      />
    </>
  );
}
