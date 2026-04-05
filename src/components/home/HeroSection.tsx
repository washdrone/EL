import Link from "next/link";
import { ArrowRight } from "lucide-react";

const infoCards = [
  { title: "RGB + Termografi", subtitle: "Visuell & termisk analys" },
  { title: "RTK-positionering", subtitle: "Centimeternoggrannhet" },
  { title: "SWEREF99 TM", subtitle: "Rikstäckande koordinater" },
  { title: "GIS-redo", subtitle: "Direktimport i era system" },
];

export default function HeroSection() {
  return (
    <section className="relative bg-navy-950 overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/video/Drone_inspection_power_lines_summer_322cb98d5e.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-navy-950/70" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0" aria-hidden="true">
        <svg className="absolute inset-0 h-full w-full opacity-[0.03]" viewBox="0 0 800 600" fill="none">
          <pattern id="home-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="800" height="600" fill="url(#home-hero-grid)" />
        </svg>
      </div>

      <div className="container-section relative z-10 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-brand-400" />
            <p className="eyebrow-cyan">
              DRÖNARINSPEKTION AV ELNÄT & KRAFTLEDNINGAR
            </p>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-[3.25rem] xl:leading-[1.15]">
            Drönarinspektion av elnät och kraftledningar — utan klättring, utan driftstopp
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Georefererade bilder, termografisk analys och klassificerade åtgärdsunderlag
            — direkt in i ert nätförvaltningssystem.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/kontakt" className="btn-primary-dark">
              Diskutera ert inspektionsbehov
            </Link>
            <Link
              href="/exempelrapport"
              className="btn-ghost"
            >
              Se en exempelrapport
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Info cards — sharp, industrial style */}
        <div className="mt-16 grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="bg-navy-950/80 p-5 backdrop-blur-sm transition-colors duration-200 hover:bg-navy-900/80"
            >
              <h3 className="text-sm font-semibold text-white">
                {card.title}
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                {card.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-600" />
    </section>
  );
}
