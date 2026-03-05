import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Drönarinspektion för elnätsägare",
  description:
    "GridDrone erbjuder drönarinspektion av regionala och lokala elnät. Inspektion av luftledningar, stolpar och komponenter för nätägare och distributörer.",
  path: "/branscher/elnat",
  keywords: [
    "drönarinspektion elnätsbolag",
    "elnätsägare inspektion drönare",
    "drönare kommunalt elnät",
    "regional nätinspektion drönare",
  ],
});

export default function ElnatPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Branscher", href: "/branscher/energibolag" },
          { name: "Elnätsägare" },
        ]}
      />
      <JsonLd
        type="Service"
        servicePath="/branscher/elnat"
        serviceName="Drönarinspektion för elnätsägare"
        serviceDescription="Regional och lokal nätinspektion med drönare för elnätsägare och distributörer i Sverige."
      />

      <Hero
        title="Nätinspektion för elnätsägare"
        subtitle="Elnätsägare & distributörer"
        description="Oavsett om ni äger 50 eller 5 000 km ledning hjälper vi er att inspektera ert nät effektivt. Standardiserad process som skalar efter ert behov."
        primaryCta={{ label: "Boka genomgång", href: "/kontakt" }}
        secondaryCta={{ label: "Se inspektionsprogram", href: "/tjanster/kraftledningsinspektion/inspektionsprogram" }}
      />

      <Breadcrumbs
        items={[
          { name: "Branscher" },
          { name: "Elnätsägare" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Anpassat för nätägare</h2>
          <p className="body-text mt-4 max-w-3xl">
            Vi förstår att elnätsägare har specifika krav på dokumentation,
            rapportering och uppföljning. Vår process är utformad för att
            leverera data som passar direkt i era befintliga system.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {[
              {
                title: "Årlig översiktsinspektion",
                desc: "Planerad inspektion av hela eller delar av ert ledningsnät. Standardiserade bildvinklar och georefererade bilder.",
              },
              {
                title: "Detaljerad komponentinspektion",
                desc: "Närinspektion av specifika stolpar, isolatorer eller sektioner där problem identifierats.",
              },
              {
                title: "Storm- och akutinspektion",
                desc: "Snabb mobilisering efter storm eller annan händelse. Dokumentation av skador för åtgärdsplanering.",
              },
              {
                title: "GIS-redo dataleveranser",
                desc: "Kartlager i Shapefile, GeoJSON eller KML. Redo att importera direkt i ert nätförvaltningssystem.",
              },
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="text-base font-semibold text-surface-900">{item.title}</h3>
                <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
