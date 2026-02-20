import Link from "next/link";

export interface CaseData {
  slug: string;
  title: string;
  client: string;
  scope: string;
  summary: string;
}

interface CaseCardProps {
  data: CaseData;
}

export function CaseCard({ data }: CaseCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-primary-50 text-primary-600">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-slate-900">
            {data.title}
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            {data.client} · {data.scope}
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {data.summary}
          </p>
          <Link
            href={`/elnatsinspektion-med-dronare/case/${data.slug}`}
            className="mt-4 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            Läs mer
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

export const sampleCases: CaseData[] = [
  {
    slug: "regionnat-inspektion-mellansverige",
    title: "Översiktsinspektion av regionnät",
    client: "Elnätsbolag, Mellansverige",
    scope: "120 km luftledning, 340 stolpar",
    summary:
      "Årlig översiktsinspektion av regionnät med standardiserad dokumentation per stolpe. Leverans av georefererade bilder, avvikelserapport och GIS-kartlager inom avtalad tid.",
  },
];
