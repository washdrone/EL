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
    <article className="card group">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-surface-900">
            {data.title}
          </h3>
          <p className="mt-1 text-sm text-surface-400">
            {data.client} · {data.scope}
          </p>
          <p className="mt-3 text-sm leading-6 text-surface-500">
            {data.summary}
          </p>
        </div>
      </div>
    </article>
  );
}

/**
 * Anonymiserade case-exempel som illustrerar typiska uppdrag.
 * Klientnamn är anonymiserade. Uppdatera med verkliga detaljer
 * när specifika kunder ger tillåtelse att namnges.
 */
export const sampleCases: CaseData[] = [
  {
    slug: "regionnat-oversiktsinspektion",
    title: "Översiktsinspektion av regionnät",
    client: "Elnätsbolag, Mellansverige",
    scope: "Regionnät, luftledningar",
    summary:
      "Årlig översiktsinspektion av regionnät med standardiserad dokumentation per stolpe. Leverans av georefererade bilder, avvikelserapport och GIS-kartlager.",
  },
  {
    slug: "termografering-stationsinspektion",
    title: "Termografering av transformatorstationer",
    client: "Energibolag, Södra Sverige",
    scope: "Transformatorstationer, termografi",
    summary:
      "Drönarbaserad termografering av transformatorstationer för att identifiera varmgångar och kontaktfel. Radiometrisk data levererad med analysrapport.",
  },
];
