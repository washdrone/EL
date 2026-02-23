import Link from "next/link";

const complianceItems = [
  {
    title: "Arbetsmiljö och säkerhet (HSE)",
    description:
      "Inspektioner genomförs utan behov av klättring eller arbete på hög höjd. Drönare minskar riskexponeringen för personal avsevärt jämfört med traditionella metoder.",
  },
  {
    title: "Regelefterlevnad",
    description:
      "Alla flygningar genomförs i enlighet med gällande luftfartsregler och med nödvändiga tillstånd. Riskanalys utförs inför varje uppdrag.",
  },
  {
    title: "Standardiserad datainsamling",
    description:
      "Samma bildvinklar, kontrollpunkter och dokumentationsrutin vid varje inspektion. Möjliggör tillförlitlig jämförelse och trendanalys över tid.",
  },
  {
    title: "Konfidentialitet",
    description:
      "All insamlad data hanteras konfidentiellt. Åtkomst begränsas till behörig personal och data delas aldrig med tredje part utan uppdragsgivarens godkännande.",
  },
];

export default function ComplianceModule() {
  return (
    <section className="section-padding gradient-hero relative overflow-hidden" id="compliance">
      {/* Decorative */}
      <div className="absolute -right-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-accent-500/5 blur-3xl" aria-hidden="true" />

      <div className="container-section relative">
        <div className="section-intro">
          <h2 className="heading-2 text-white">
            Säkerhet, kvalitet och regelefterlevnad
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
            Vi arbetar strukturerat med HSE, standardisering och datasäkerhet
            för att möta kraven från elnätsbolag och upphandlande
            organisationer.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {complianceItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <h3 className="text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/elnatsinspektion-med-dronare/datasakerhet"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Läs mer om vår datasäkerhetspolicy
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
