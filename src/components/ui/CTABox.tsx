import Link from "next/link";

interface CTABoxProps {
  heading: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "dark" | "light" | "bordered";
}

export default function CTABox({
  heading,
  description,
  primaryLabel = "Boka genomgång",
  primaryHref = "/kontakt",
  secondaryLabel,
  secondaryHref,
  variant = "dark",
}: CTABoxProps) {
  if (variant === "bordered") {
    return (
      <div className="border border-slate-200 bg-surface-50 p-8 sm:p-10 lg:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="heading-2">{heading}</h3>
          {description && (
            <p className="body-text mt-4">{description}</p>
          )}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={primaryHref} className="btn-primary w-full sm:w-auto">
              {primaryLabel}
              <ArrowIcon />
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link href={secondaryHref} className="btn-secondary w-full sm:w-auto">
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "light") {
    return (
      <div className="bg-surface-50 p-8 sm:p-10 lg:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="heading-2">{heading}</h3>
          {description && (
            <p className="body-text mt-4">{description}</p>
          )}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={primaryHref} className="btn-primary w-full sm:w-auto">
              {primaryLabel}
              <ArrowIcon />
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link href={secondaryHref} className="btn-secondary w-full sm:w-auto">
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Dark variant (default)
  return (
    <div className="gradient-dark-section p-8 sm:p-10 lg:p-12">
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {heading}
        </h3>
        {description && (
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={primaryHref} className="btn-primary-dark w-full sm:w-auto">
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link href={secondaryHref} className="btn-ghost w-full sm:w-auto">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
