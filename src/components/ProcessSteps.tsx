const steps = [
  {
    number: "01",
    title: "Planering",
    description:
      "Vi tar emot era GIS-underlag och specifikationer. Tillsammans definierar vi inspektionsomfång, bildkrav och leveransformat. Riskanalys och tillstånd hanteras.",
  },
  {
    number: "02",
    title: "Datainsamling",
    description:
      "Våra piloter genomför inspektionen med standardiserade flygprofiler och bildvinklar. Varje stolpe och sektion dokumenteras systematiskt.",
  },
  {
    number: "03",
    title: "Kvalitetskontroll",
    description:
      "Alla bilder och data genomgår intern QA. Saknade eller otillräckliga bilder identifieras och kompletteras innan leverans.",
  },
  {
    number: "04",
    title: "Leverans",
    description:
      "Strukturerade data levereras i överenskommet format: bildprotokoll, avvikelserapport och GIS-kompatibla kartlager. Allt spårbart och sökbart.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="section-padding bg-surface-50" id="process">
      <div className="container-section">
        <div className="section-intro">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-brand-500" />
            <span className="eyebrow-brand">Process</span>
            <div className="h-px w-8 bg-brand-500" />
          </div>
          <h2 className="heading-2">Så går det till</h2>
          <p className="body-text mt-5">
            Från planering till leverans &ndash; en strukturerad process som
            säkerställer kvalitet och spårbarhet i varje steg.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-slate-200 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="bg-white p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center border border-brand-200 bg-brand-50">
                <span className="text-lg font-bold text-brand-600">
                  {step.number}
                </span>
              </div>

              <h3 className="mt-5 text-base font-semibold text-surface-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-surface-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
