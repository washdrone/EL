import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PreFooterCTA() {
  return (
    <section className="gradient-dark-section py-20 sm:py-24 lg:py-28">
      {/* Grid pattern */}
      <div className="relative">
        <div className="absolute inset-0" aria-hidden="true">
          <svg className="absolute inset-0 h-full w-full opacity-[0.03]" viewBox="0 0 800 400" fill="none">
            <pattern id="prefooter-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="800" height="400" fill="url(#prefooter-grid)" />
          </svg>
        </div>

        <div className="container-section relative text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Vill ni framtidssäkra ert underhåll?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
            Låt oss titta på hur våra inspektionsmetoder kan integreras i er
            befintliga underhållsplanering för ökad driftsäkerhet.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/kontakt" className="btn-primary-dark">
              Begär offert
            </Link>
            <Link
              href="/exempelrapport"
              className="btn-ghost inline-flex items-center gap-2"
            >
              <ArrowRight className="h-4 w-4" />
              Se exempelrapport
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
