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
    <section className="bg-accent-500 py-12 sm:py-16">
      <div className="container-section text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl text-balance">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/90">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-accent-600 shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center rounded-md border-2 border-white/40 bg-transparent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
