const stats = [
  { value: "100+", label: "km inspekterade" },
  { value: "24h", label: "mobilisering (akut)" },
  { value: "100%", label: "QA-kontrollerade" },
  { value: "0", label: "driftstopp" },
];

const trustBadges = [
  "Transportstyrelsens godkännande",
  "Ansvarsförsäkrad",
  "GDPR-compliant datahantering",
  "HSE-certifierad metodik",
];

export default function ProofBar() {
  return (
    <section className="border-b border-surface-100 bg-white">
      {/* Stats row */}
      <div className="container-section py-10">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-brand-700 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-surface-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust badges */}
      <div className="border-t border-surface-100 bg-surface-50/50">
        <div className="container-section py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <svg className="h-4 w-4 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                <span className="text-xs font-medium text-surface-600">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
