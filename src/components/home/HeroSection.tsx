import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-slate-900 overflow-hidden">
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <div className="absolute inset-0 flex items-center justify-center text-slate-700 text-sm font-mono">
          [Background Video: High voltage pylon in nordic winter landscape with thermal overlay]
        </div>
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      <div className="container-section relative z-10 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="eyebrow-cyan mb-5">
            BESLUTSUNDERLAG FÖR KRITISK INFRASTRUKTUR
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-[3.25rem] xl:leading-[1.15]">
            Vi digitaliserar inspektion och underhåll av elnät.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Från högupplöst fältdata till klassificerade åtgärdsunderlag
            – snabbare, säkrare och med absolut precision.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/kontakt" className="btn-primary-dark">
              Diskutera ert inspektionsbehov
            </Link>
            <Link
              href="/plattform"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
            >
              Se hur vi strukturerar leveransdata
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
    </section>
  );
}
