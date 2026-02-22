import Link from "next/link";
import { inspectionPrograms, optionalAddons } from "@/data/programs";

const cardAccents = [
  "border-t-brand-500",
  "border-t-accent-500",
  "border-t-amber-500",
];

export default function ProgramCards() {
  return (
    <section className="section-padding bg-white" id="program">
      <div className="container-section">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="heading-2">Inspektionsprogram</h2>
          <p className="body-text mt-5">
            Tre huvudtyper av inspektion, anpassade efter ert behov
            och underhållsplan. Tillval som termografi och LiDAR kan
            diskuteras vid offertförfrågan.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {inspectionPrograms.map((program, i) => (
            <article
              key={program.id}
              className={`card flex flex-col border-t-2 ${cardAccents[i]}`}
            >
              {/* Variable height — absorbs differences so sections below align */}
              <div className="flex-1">
                <h3 className="heading-3">{program.title}</h3>
                <p className="mt-1 text-sm font-medium text-accent-700">
                  {program.subtitle}
                </p>
                <p className="mt-4 text-sm leading-6 text-surface-500">
                  {program.description}
                </p>
              </div>

              {/* Fixed content — aligned across cards */}
              <div>
                <h4 className="mt-6 text-xs font-semibold uppercase tracking-wider text-surface-400">
                  Innehåll
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {program.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-surface-600"
                    >
                      <div className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-accent-100">
                        <svg className="h-2.5 w-2.5 text-accent-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <h4 className="mt-6 text-xs font-semibold uppercase tracking-wider text-surface-400">
                  Leveranser
                </h4>
                <ul className="mt-3 space-y-1.5">
                  {program.deliverables.map((del) => (
                    <li key={del} className="text-sm text-surface-500">
                      <span className="mr-2 text-surface-300">&mdash;</span>
                      {del}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-xs text-surface-400">
                  Frekvens: {program.frequency}
                </p>
              </div>

              <Link
                href="/elnatsinspektion-med-dronare/kontakt"
                className="btn-primary mt-6 w-full justify-center"
              >
                {program.cta}
              </Link>
            </article>
          ))}
        </div>

        {/* Optional addons */}
        <div className="mt-14 rounded-2xl border border-dashed border-surface-200 bg-surface-50 p-8">
          <h3 className="text-sm font-semibold text-surface-900">
            Valbara tillägg
          </h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {optionalAddons.map((addon) => (
              <div key={addon.id} className="rounded-xl bg-white p-5 shadow-soft">
                <h4 className="text-sm font-semibold text-surface-900">
                  {addon.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-surface-500">
                  {addon.description}
                </p>
                <p className="mt-3 text-xs text-surface-400 italic">
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
