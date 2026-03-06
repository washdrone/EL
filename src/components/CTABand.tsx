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
  description = "Kontakta oss för en genomgång av hur drönareinspektion kan anpassas till ert nät och era behov.",
  primaryLabel = "Boka genomgång",
  primaryHref = "/kontakt",
  secondaryLabel = "Begär offert",
  secondaryHref = "/kontakt",
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden gradient-hero py-12 sm:py-16 md:py-20">
      {/* Decorative */}
      <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-accent-500/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-10 -left-10 h-[200px] w-[200px] rounded-full bg-brand-400/10 blur-3xl" aria-hidden="true" />

      <div className="container-section relative text-center">
        <h2 className="heading-2 text-white text-balance">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-blue-100 sm:mt-5 sm:text-base sm:leading-7 md:text-lg md:leading-8">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row">
          <Link
            href={primaryHref}
            className="btn-primary w-full sm:w-auto"
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
