import Link from "next/link";

interface CTABandProps {
  heading?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABand({
  heading = "Redo att effektivisera er elnätsinspektion?",
  description = "Kontakta oss för en genomgång av hur drönarinspektion kan anpassas till ert nät och era behov.",
  primaryLabel = "Boka genomgång",
  primaryHref = "/kontakt",
  secondaryLabel = "Begär offert",
  secondaryHref = "/kontakt",
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden gradient-dark-section py-16 sm:py-20">
      {/* Grid pattern */}
      <div className="absolute inset-0" aria-hidden="true">
        <svg className="absolute inset-0 h-full w-full opacity-[0.03]" viewBox="0 0 800 400" fill="none">
          <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="800" height="400" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="container-section relative text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl text-balance">
          {heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          {description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={primaryHref}
            className="btn-primary-dark w-full sm:w-auto"
          >
            {primaryLabel}
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href={secondaryHref}
            className="btn-ghost w-full sm:w-auto"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
