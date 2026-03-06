import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import DeliverablesModule from "@/components/DeliverablesModule";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = createPageMetadata({
  title: "Dataleveranser vid drönareinspektion av elnät",
  description:
    "Georefererade bilder, strukturerade rapporter, avvikelseklassificering och GIS-kompatibla kartlager. Se vad ni får vid en drönareinspektion av ert elnät.",
  path: "/tjanster/kraftledningsinspektion/dataleveranser",
  keywords: [
    "dataleverans elnätsinspektion",
    "inspektionsrapport elnät",
    "GIS kartlager elnät",
    "georefererade bilder elnät",
    "inspektionsdata elnät",
  ],
});

export default function DataleveranserPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          {
            name: "Elnätsinspektion med drönare",
            href: "/tjanster/kraftledningsinspektion",
          },
          { name: "Dataleveranser" },
        ]}
      />

      <Breadcrumbs
        items={[
          {
            name: "Elnätsinspektion med drönare",
            href: "/tjanster/kraftledningsinspektion",
          },
          { name: "Dataleveranser" },
        ]}
      />

      <Hero
        title="Strukturerade data – redo för ert nätförvaltningssystem"
        subtitle="Dataleveranser"
        description="Varje inspektion resulterar i georefererade bilder, strukturerade rapporter och kartlager som passar direkt in i er befintliga nätdokumentation."
      />

      <DeliverablesModule />

      {/* Delivery details */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-2">Leveransformat och anpassning</h2>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="heading-3">Bildmaterial</h3>
                <p className="body-text mt-2">
                  Alla bilder levereras i hög upplösning med GPS-koordinater
                  (EXIF). Bilderna tas från standardiserade vinklar per stolpe
                  och sektion, vilket möjliggör konsekvent jämförelse mellan
                  inspektionstillfällen.
                </p>
                <p className="mt-2 text-sm text-surface-500">
                  Format: JPEG eller TIFF. Namnkonvention anpassas efter er
                  specifikation.
                </p>
              </div>

              <div>
                <h3 className="heading-3">Rapporter</h3>
                <p className="body-text mt-2">
                  Avvikelser dokumenteras per stolpe med bildbevis,
                  klassificering och rekommenderad åtgärd. Rapporten
                  struktureras efter er nätstruktur och kan filtreras
                  på avvikelstyp och prioritet.
                </p>
                <p className="mt-2 text-sm text-surface-500">
                  Format: PDF och/eller CSV/Excel. Strukturen anpassas efter
                  ert behov.
                </p>
              </div>

              <div>
                <h3 className="heading-3">Kartlager (GIS)</h3>
                <p className="body-text mt-2">
                  Inspektionsdata levereras som kartlager för import i ert
                  GIS-system. Punkter (stolpar), linjer (sektioner) och
                  attribut (status, avvikelse, bildlänk) i standardformat.
                </p>
                <p className="mt-2 text-sm text-surface-500">
                  Format: Shapefile, GeoJSON eller KML. Koordinatsystem
                  enligt överenskommelse (SWEREF 99 TM eller annat).
                </p>
              </div>

              <div>
                <h3 className="heading-3">Anpassade leveranser</h3>
                <p className="body-text mt-2">
                  Behöver ni ett specifikt format eller struktur som matchar
                  ert nätförvaltningssystem? Vi anpassar leveransformatet
                  efter ert förfrågningsunderlag.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-2">Relaterat</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Link
                href="/tjanster/kraftledningsinspektion/metodik-kvalitet"
                className="nav-card group"
              >
                <h3 className="font-semibold text-brand-600 group-hover:text-brand-700">
                  Metodik & kvalitet →
                </h3>
                <p className="mt-1 text-sm text-surface-500">
                  Hur vi säkerställer kvalitet och spårbarhet i varje leverans.
                </p>
              </Link>
              <Link
                href="/tjanster/kraftledningsinspektion/inspektionsprogram"
                className="nav-card group"
              >
                <h3 className="font-semibold text-brand-600 group-hover:text-brand-700">
                  Inspektionsprogram →
                </h3>
                <p className="mt-1 text-sm text-surface-500">
                  Årlig, detaljerad och akutinspektion – se vad som passar er.
                </p>
              </Link>
              <Link
                href="/tjanster/kraftledningsinspektion/datasakerhet"
                className="nav-card group"
              >
                <h3 className="font-semibold text-brand-600 group-hover:text-brand-700">
                  Datasäkerhet →
                </h3>
                <p className="mt-1 text-sm text-surface-500">
                  Hur vi hanterar er inspektionsdata konfidentiellt.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
