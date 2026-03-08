import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProofSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-section">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="aspect-[4/3] w-full rounded-sm overflow-hidden">
            <Image
              src="/images/Termiskvanlig.png"
              alt="Jämförelse mellan standardfoto och termisk bild av en skadad isolator med markerad avvikelse"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-sm"
            />
          </div>

          {/* Text content */}
          <div>
            <h2 className="heading-2 mb-5">
              Rätt åtgärd. På rätt plats. I rätt tid.
            </h2>
            <p className="text-base leading-7 text-slate-600 mb-4">
              Våra inspektionsrapporter ger er klassificerade avvikelser med
              exakt position, fotodokumentation och rekommenderad åtgärd — redo
              att importeras direkt i ert nätförvaltningssystem.
            </p>
            <p className="text-base leading-7 text-slate-600 mb-8">
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
