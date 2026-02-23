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
  primaryHref = "/elnatsinspektion-med-dronare/kontakt",
  secondaryLabel = "Begär offert",
  secondaryHref = "/elnatsinspektion-med-dronare/kontakt",
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden gradient-hero py-16 sm:py-20">
      {/* Decorative */}
      <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-accent-500/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-10 -left-10 h-[200px] w-[200px] rounded-full bg-brand-400/10 blur-3xl" aria-hidden="true" />

      <div className="container-section relative text-center">
        <h2 className="heading-2 text-white text-balance">
          {heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
          {description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
