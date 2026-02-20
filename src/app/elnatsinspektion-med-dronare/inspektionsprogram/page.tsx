import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import ProgramCards from "@/components/ProgramCards";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = createPageMetadata({
  title: "Inspektionsprogram för elnät med drönare",
  description:
    "Tre inspektionstyper anpassade efter ert behov: årlig översiktsinspektion, detaljerad komponentinspektion och storm-/akutinspektion av luftledningar.",
  path: "/elnatsinspektion-med-dronare/inspektionsprogram",
  keywords: [
    "inspektionsprogram elnät",
    "årlig elnätsinspektion",
    "detaljerad ledningsinspektion drönare",
    "storminspektion elnät drönare",
    "akutinspektion elnät",
  ],
});

export default function InspektionsprogramPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          {
            name: "Elnätsinspektion med drönare",
            href: "/elnatsinspektion-med-dronare",
          },
          { name: "Inspektionsprogram" },
        ]}
      />

      <Breadcrumbs
        items={[
          {
            name: "Elnätsinspektion med drönare",
            href: "/elnatsinspektion-med-dronare",
          },
          { name: "Inspektionsprogram" },
        ]}
      />

      <Hero
        title="Välj rätt inspektionsprogram för ert nät"
        subtitle="Inspektionsprogram"
        description="Från årlig översikt till detaljerad komponentgranskning och akutinspektion – vi anpassar insatsen efter er underhållsplan och era prioriteringar."
        primaryCta={{
          label: "Begär offert",
          href: "/elnatsinspektion-med-dronare/kontakt",
        }}
      />

      <ProgramCards />

      {/* Comparison help */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-2">Vilket program passar er?</h2>
            <div className="mt-8 space-y-6">
              <div className="rounded-2xl border-l-4 border-brand-500 bg-surface-50 p-5">
                <h3 className="font-semibold text-surface-900">
                  Ni vill ha en regelbunden lägesbild av ert nät
                </h3>
                <p className="mt-2 text-sm text-surface-500">
                  → <strong>Årlig översiktsinspektion</strong> ger er en
                  systematisk genomgång med standardiserad dokumentation.
                  Perfekt som grund för underhållsplanering.
                </p>
              </div>

              <div className="rounded-2xl border-l-4 border-brand-500 bg-surface-50 p-5">
                <h3 className="font-semibold text-surface-900">
                  Ni behöver granska specifika komponenter eller följa upp avvikelser
                </h3>
                <p className="mt-2 text-sm text-surface-500">
                  → <strong>Detaljerad komponentinspektion</strong> ger er
                  närbilder och statusklassificering av enskilda
                  komponenter. Används för punktinspektion eller uppföljning.
                </p>
              </div>

              <div className="rounded-2xl border-l-4 border-accent-500 bg-accent-50 p-5">
                <h3 className="font-semibold text-surface-900">
                  Det har hänt något – storm, åska, trädfällning
                </h3>
                <p className="mt-2 text-sm text-surface-500">
                  → <strong>Storm- och akutinspektion</strong> ger er snabb
                  överblick av skadeläget. Prioriteringsunderlag för
                  reparation och dokumentation.
                </p>
              </div>
            </div>

            <p className="body-text mt-8">
              Osäker på vad som passar? Kontakta oss för en genomgång av ert
              behov. Vi hjälper er att välja rätt inspektionstyp och omfattning.
            </p>
          </div>
        </div>
      </section>

      <CTABand
        heading="Behöver ni hjälp att välja?"
        description="Kontakta oss för en kostnadsfri genomgång av hur vi kan anpassa inspektionen till ert nät."
      />
    </>
  );
}
