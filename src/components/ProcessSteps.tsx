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
    <section className="section-padding gradient-subtle" id="process">
      <div className="container-section">
        <div className="section-intro">
          <h2 className="heading-2">Så går det till</h2>
          <p className="body-text mt-5">
            Från planering till leverans &ndash; en strukturerad process som
            säkerställer kvalitet och spårbarhet i varje steg.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="grid gap-10 lg:grid-cols-4 lg:gap-0">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {/* Horizontal connector on desktop */}
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-px w-full bg-surface-200 lg:block" aria-hidden="true" />
                )}

                {/* Step number circle */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl gradient-hero shadow-elevated">
                  <span className="text-lg font-bold text-accent-400">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-semibold text-surface-900">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[240px] text-sm leading-6 text-surface-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
