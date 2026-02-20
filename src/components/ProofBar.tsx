const stats = [
  { value: "100+", label: "km inspekterade" },
  { value: "24h", label: "mobiliseringstid (akut)" },
  { value: "100%", label: "QA-kontrollerade leveranser" },
];

const proofPoints = [
  "Standardiserad insamling",
  "Snabb mobilisering",
  "Spårbar leverans",
  "HSE-fokuserad metodik",
];

export default function ProofBar() {
  return (
    <section className="border-b border-surface-100 bg-white py-10">
      <div className="container-section">
        {/* Stats row */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-brand-700 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-surface-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Proof points */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-surface-100 pt-8">
          {proofPoints.map((point) => (
            <div key={point} className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-100">
                <svg className="h-3 w-3 text-accent-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium text-surface-600">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
