import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  compact?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  compact = false,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* Decorative elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-accent-500/10 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.03]" viewBox="0 0 800 600" fill="none">
          <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="800" height="600" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className={`container-section relative ${compact ? "py-16 sm:py-20" : "py-20 sm:py-28 lg:py-36"}`}>
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-accent-400/30 bg-accent-500/10 px-4 py-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-300">
              {subtitle}
            </span>
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[3.25rem] lg:leading-[1.15] text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              {primaryCta && (
                <Link href={primaryCta.href} className="btn-primary">
                  {primaryCta.label}
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn-ghost">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
