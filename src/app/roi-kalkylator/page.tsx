import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";
import ROICalculator from "./ROICalculator";

export const metadata: Metadata = createPageMetadata({
  title: "ROI-kalkylator — Helikopter vs Drönare Kostnad",
  description:
    "Beräkna kostnadsbesparingen med drönarinspektion jämfört med helikopter eller manuell inspektion. Interaktiv kalkylator för kraftledningsinspektion.",
  path: "/roi-kalkylator",
  keywords: [
    "kostnad kraftledningsinspektion",
    "helikopter vs drönare kostnad",
    "ROI drönarinspektion",
    "kostnadsberäkning elnätsinspektion",
  ],
});

export default function ROIKalkylatorPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[{ name: "ROI-kalkylator" }]}
      />

      <section className="gradient-hero py-16 sm:py-20">
        <div className="container-section text-center">
          <p className="eyebrow text-brand-200">Kostnadskalkylator</p>
          <h1 className="heading-1 mt-3 text-white">
            ROI-kalkylator — helikopter vs drönare
          </h1>
          <p className="body-text mx-auto mt-4 max-w-2xl text-blue-100">
            Beräkna den uppskattade kostnadsbesparingen med drönarinspektion
            jämfört med traditionella metoder. Alla beräkningar sker i din
            webbläsare — ingen data skickas.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ name: "ROI-kalkylator" }]} />

      <ROICalculator />

      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-2">Om beräkningen</h2>
            <p className="body-text mt-4">
              Kalkylatorn ger en uppskattning baserad på generella branschdata.
              Faktisk kostnad och besparing varierar beroende på uppdragets
              specifika förutsättningar — terräng, tillgänglighet, krav på
              dokumentation och andra faktorer.
            </p>
            <p className="body-text mt-4">
              Kontakta oss för en offert baserad på era faktiska förutsättningar.
            </p>
          </div>
        </div>
      </section>

      <CTABand primaryHref="/kontakt" secondaryHref="/kontakt" />
    </>
  );
}
