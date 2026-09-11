import Link from "next/link";
const content = {
  kraftledning: {
    title: "Från ledningssträcka till prioriterat underhåll",
    delivery:
      "Georefererade bilder, klassificerade fynd och åtgärdsunderlag. Bestäm vilka komponenter, bildvinklar och leveransformat som ska ingå innan datainsamlingen börjar.",
    conditions:
      "Stäm av spänningsnivå, sträcka, luftrum, åtkomst och nätägarens säkerhetskrav. Krav på positionering och import i ert förvaltningssystem behöver överenskommas och kontrolleras.",
    need: "Ungefärlig sträcka eller antal stolpar, region, önskad inspektion och tidsram.",
  },
  termografi: {
    title: "Temperaturavvikelser som underlag för vidare bedömning",
    delivery:
      "Termiska bilder och dokumenterade observationer kopplade till berörda komponenter. Kom överens om hur fynd ska klassificeras och vilka kompletterande kontroller som kan behövas.",
    conditions:
      "Belastning, väder, mätvinkel och komponentens yta påverkar tolkningen. Termografi visar temperaturmönster; den fastställer inte ensam orsaken och kan inte utesluta alla interna fel. Drift och säkerhetsavstånd planeras med anläggningsägaren.",
    need: "Anläggningstyp, område, antal objekt, tillgänglig information om belastning och önskad tidsram.",
  },
  vegetation: {
    title: "Underlag för att prioritera röjningen",
    delivery:
      "Kartläggning av vegetation och underlag för prioritering av röjningsinsatser. Bestäm riskkriterier, analysområde och GIS-format utifrån hur ni ska använda resultatet.",
    conditions:
      "Avståndskrav och noggrannhet måste fastställas för uppdraget. Punktmoln och bilder ersätter inte alla bedömningar i fält, exempelvis av ett träds stabilitet. Jämförelser över tid kräver jämförbara mätförhållanden.",
    need: "Ledningsgatans ungefärliga längd, region, analysbehov, tidigare underlag och planerad röjningsperiod.",
  },
};
export default function InspectionScope({
  service,
}: {
  service: keyof typeof content;
}) {
  const item = content[service];
  return (
    <section className="section-padding bg-surface-50">
      <div className="container-section">
        <h2 className="heading-2 max-w-3xl">{item.title}</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {[
            ["Leverans att stämma av", item.delivery],
            ["Förutsättningar och begränsningar", item.conditions],
            ["För att ta fram en offert", item.need],
          ].map(([title, text]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold text-surface-900">
                {title}
              </h3>
              <p className="body-text mt-3">{text}</p>
            </div>
          ))}
        </div>
        <Link className="btn-primary mt-8" href={`/kontakt?tjanst=${service}`}>
          Begär offert
        </Link>
        <Link
          className="ml-0 mt-4 block text-brand-700 underline sm:ml-6 sm:inline-block"
          href="/exempelrapport"
        >
          Se hur fynd kan presenteras
        </Link>
      </div>
    </section>
  );
}
