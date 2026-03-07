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
    <section className="relative bg-slate-900 overflow-hidden">
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
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      <div className="container-section relative z-10 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="eyebrow-cyan mb-5">
            DRÖNARINSPEKTION AV ELNÄT & KRAFTLEDNINGAR
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-[3.25rem] xl:leading-[1.15]">
            Strukturerad inspektion av kraftledningar och elnät — utan klättring, utan driftstopp.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-slate-200">
            Georefererade bilder, termografisk analys och klassificerade åtgärdsunderlag
            — direkt in i ert nätförvaltningssystem.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/kontakt" className="btn-primary-dark">
              Diskutera ert inspektionsbehov
            </Link>
            <Link
              href="/exempelrapport"
              className="inline-flex items-center gap-2 rounded-md border border-white bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-slate-900"
            >
              Se en exempelrapport
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Glassmorphism info cards */}
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="rounded-lg border border-white/15 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
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

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
    </section>
  );
}
