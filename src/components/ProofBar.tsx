const capabilities = [
  {
    title: "Utan klättring",
    desc: "Inspektion utan personal på hög höjd",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    ),
  },
  {
    title: "Utan driftstopp",
    desc: "Normalt ingen frånkoppling krävs",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    ),
  },
  {
    title: "Standardiserat",
    desc: "Samma metodik vid varje inspektion",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m10.5-6v4.5m0-4.5h-4.5m4.5 0L15 9m-10.5 6v4.5m0-4.5h4.5m-4.5 0L9 15m10.5 0l-5.25-5.25M19.5 15v4.5m0-4.5h-4.5" />
    ),
  },
  {
    title: "GIS-redo",
    desc: "Data direkt till ert nätförvaltningssystem",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    ),
  },
];

const trustBadges = [
  "EASA-utbildade piloter",
  "BVLOS-behörighet",
  "Ansvarsförsäkrad",
  "HSE-fokuserat arbetssätt",
];

export default function ProofBar() {
  return (
    <section className="border-b border-surface-100 bg-white">
      {/* Capabilities row */}
      <div className="container-section py-10">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          {capabilities.map((cap) => (
            <div key={cap.title} className="flex flex-col items-center text-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
                <svg className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  {cap.icon}
                </svg>
              </div>
              <p className="mt-3 text-sm font-semibold text-surface-900">
                {cap.title}
              </p>
              <p className="mt-1 text-xs text-surface-500">
                {cap.desc}
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
