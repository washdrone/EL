import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProofSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-section">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/Termiskvanlig.png"
              alt="Jämförelse mellan standardfoto och termisk bild av en skadad isolator med markerad avvikelse"
              width={800}
              height={600}
              sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 100vw"
              className="w-full h-full object-cover"
            />
            {/* Left accent */}
            <div className="absolute left-0 top-0 h-full w-[3px] bg-brand-500" />
          </div>

          {/* Text content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-brand-500" />
              <span className="eyebrow-brand">Resultat</span>
            </div>
            <h2 className="heading-2 mb-5">
              Rätt åtgärd. På rätt plats. I rätt tid.
            </h2>
            <p className="text-base leading-7 text-slate-500 mb-4">
              Våra inspektionsrapporter ger er klassificerade avvikelser med
              exakt position, fotodokumentation och rekommenderad åtgärd — redo
              att importeras direkt i ert nätförvaltningssystem.
            </p>
            <p className="text-base leading-7 text-slate-500 mb-8">
              Resultatet: underhållsbeslut baserade på faktisk anläggningsstatus
              istället för schablonintervall.
            </p>
            <Link
              href="/exempelrapport"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Se en exempelrapport
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
