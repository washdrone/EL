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
        <div className="absolute right-1/4 top-1/3 h-[200px] w-[200px] rounded-full bg-accent-400/5 blur-2xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.03]" viewBox="0 0 800 600" fill="none">
          <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="800" height="600" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className={`container-section relative ${compact ? "py-16 sm:py-20" : "py-20 sm:py-28 lg:py-36"}`}>
        <div className="grid items-center gap-12 lg:grid-cols-5">
          {/* Text content */}
          <div className={compact ? "" : "lg:col-span-3"}>
            <div className="inline-flex items-center rounded-full border border-accent-400/30 bg-accent-500/10 px-4 py-1.5">
              <div className="mr-2 h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-300">
                {subtitle}
              </span>
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[3.25rem] lg:leading-[1.15] text-balance">
              {title}
            </h1>
            {description && (
              <p className="mt-6 text-base leading-7 text-white/70 sm:text-lg sm:leading-8 max-w-xl">
                {description}
              </p>
            )}
            {(primaryCta || secondaryCta) && (
              <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                {primaryCta && (
                  <Link href={primaryCta.href} className="btn-primary w-full sm:w-auto">
                    {primaryCta.label}
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                )}
                {secondaryCta && (
                  <Link href={secondaryCta.href} className="btn-ghost w-full sm:w-auto">
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Visual element - service overview card */}
          {!compact && (
            <div className="hidden lg:col-span-2 lg:block">
              <div className="relative">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/20">
                        <svg className="h-5 w-5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white/90">Strukturerad leverans</p>
                        <p className="text-xs text-white/50">GIS, bilder, rapporter</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/20">
                        <svg className="h-5 w-5 text-brand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white/90">Kvalitetssäkrad</p>
                        <p className="text-xs text-white/50">Intern QA före leverans</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20">
                        <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white/90">Spårbar process</p>
                        <p className="text-xs text-white/50">Dokumenterat varje steg</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <div className="flex items-center gap-3">
                      <svg className="h-5 w-5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m10.5-6v4.5m0-4.5h-4.5m4.5 0L15 9m-10.5 6v4.5m0-4.5h4.5m-4.5 0L9 15m10.5 0l-5.25-5.25M19.5 15v4.5m0-4.5h-4.5" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-white/80">Standardiserade flygprofiler</p>
                        <p className="text-xs text-white/40">Jämförbar data mellan inspektionstillfällen</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 rounded-xl border border-white/10 bg-navy-900/80 px-4 py-2.5 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent-400" />
                    <span className="text-xs font-medium text-white/80">Standardiserad metodik</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
