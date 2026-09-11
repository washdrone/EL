import { createPageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABand from "@/components/CTABand";
import ROICalculator from "./ROICalculator";
export const metadata = createPageMetadata({
  title: "Kostnadskalkylator för kraftledningsinspektion",
  description:
    "Jämför årskostnaden för drönarinspektion och er nuvarande metod med egna offerter. Ta hänsyn till sträcka, frekvens, mobilisering och analys.",
  path: "/roi-kalkylator",
});
export default function CalculatorPage() {
  return (
    <>
      <section className="gradient-hero py-16">
        <div className="container-section">
          <h1 className="heading-1 text-white">
            Vad kostar inspektionen med olika metoder?
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-200">
            Jämför drönare med helikopter eller markbaserad inspektion utifrån
            era egna underlag.
          </p>
        </div>
      </section>
      <Breadcrumbs items={[{ name: "Kostnadskalkylator" }]} />
      <ROICalculator />
      <section className="section-padding bg-surface-50">
        <div className="container-section max-w-3xl">
          <h2 className="heading-2">Vad behöver ingå i en jämförbar offert?</h2>
          <p className="body-text mt-4">
            Stäm av ledningssträcka, terräng, antal objekt, datainsamling,
            analys, leveransformat, mobilisering och eventuella kompletteringar.
            Ett lägre pris per kilometer innebär inte automatiskt en lägre
            totalkostnad eller samma resultat.
          </p>
          <h2 className="heading-2 mt-8">Vilken metod passar ert nät?</h2>
          <p className="body-text mt-4">
            Valet beror på åtkomst, luftrum, säkerhetskrav och vilken
            dokumentation som behövs. Kalkylatorn jämför kostnader; metodens
            lämplighet behöver bedömas separat för uppdraget.
          </p>
        </div>
      </section>
      <CTABand
        heading="Få en offert för ert inspektionsbehov"
        description="Beskriv området, omfattningen och den dokumentation ni behöver så kan vi diskutera upplägg och pris."
        primaryHref="/kontakt?tjanst=kraftledning"
      />
    </>
  );
}
