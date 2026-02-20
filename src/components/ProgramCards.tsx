import Link from "next/link";
import { inspectionPrograms, optionalAddons } from "@/data/programs";

export default function ProgramCards() {
  return (
    <section className="section-padding bg-white" id="program">
      <div className="container-section">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="heading-2">Inspektionsprogram</h2>
          <p className="body-text mt-4">
            Vi erbjuder tre huvudtyper av inspektion, anpassade efter ert behov
            och underhållsplan. Tillval som termografi och LiDAR kan
            diskuteras vid offertförfrågan.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {inspectionPrograms.map((program) => (
            <article
              key={program.id}
              className="flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex-1">
                <h3 className="heading-3">{program.title}</h3>
                <p className="mt-1 text-sm font-medium text-accent-600">
                  {program.subtitle}
                </p>
                <p className="body-text mt-4 text-sm">{program.description}</p>

                <h4 className="mt-6 text-sm font-semibold text-slate-900">
                  Innehåll
                </h4>
                <ul className="mt-2 space-y-2">
                  {program.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <h4 className="mt-6 text-sm font-semibold text-slate-900">
                  Leveranser
                </h4>
                <ul className="mt-2 space-y-1">
                  {program.deliverables.map((del) => (
                    <li
                      key={del}
                      className="text-sm text-slate-600"
                    >
                      — {del}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-xs text-slate-500">
                  Frekvens: {program.frequency}
                </p>
              </div>

              <Link
                href="/elnatsinspektion-med-dronare/kontakt"
                className="btn-primary mt-6 w-full text-center text-sm"
              >
                {program.cta}
              </Link>
            </article>
          ))}
        </div>

        {/* Optional addons */}
        <div className="mt-12 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6">
          <h3 className="text-base font-semibold text-slate-900">
            Valbara tillägg
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {optionalAddons.map((addon) => (
              <div key={addon.id} className="rounded-md bg-white p-4 shadow-sm">
                <h4 className="text-sm font-semibold text-slate-900">
                  {addon.title}
                </h4>
                <p className="mt-1 text-sm text-slate-600">
                  {addon.description}
                </p>
                <p className="mt-2 text-xs italic text-slate-500">
                  {addon.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
