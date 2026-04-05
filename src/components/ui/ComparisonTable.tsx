"use client";

interface ComparisonColumn {
  label: string;
  recommended?: boolean;
}

interface ComparisonRow {
  feature: string;
  values: string[];
}

interface ComparisonTableProps {
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  caption?: string;
}

export default function ComparisonTable({
  columns,
  rows,
  caption,
}: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
      <table className="w-full min-w-[540px] border-collapse text-left">
        {caption && (
          <caption className="sr-only">{caption}</caption>
        )}
        <thead>
          <tr>
            <th className="border-b-2 border-slate-200 pb-4 pr-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
              &nbsp;
            </th>
            {columns.map((col) => (
              <th
                key={col.label}
                className={`border-b-2 pb-4 px-4 text-center text-sm font-bold ${
                  col.recommended
                    ? "border-brand-500 text-brand-700 bg-brand-50/50"
                    : "border-slate-200 text-slate-900"
                }`}
              >
                {col.recommended && (
                  <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-brand-500">
                    Rekommenderat
                  </span>
                )}
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={row.feature}
              className={idx % 2 === 0 ? "bg-white" : "bg-surface-50/50"}
            >
              <td className="border-b border-slate-100 py-4 pr-6 text-sm font-medium text-slate-700">
                {row.feature}
              </td>
              {row.values.map((value, colIdx) => (
                <td
                  key={colIdx}
                  className={`border-b border-slate-100 px-4 py-4 text-center text-sm ${
                    columns[colIdx]?.recommended
                      ? "bg-brand-50/30 font-medium text-slate-900"
                      : "text-slate-600"
                  }`}
                >
                  {value === "✓" ? (
                    <span className="inline-flex h-5 w-5 items-center justify-center text-brand-600">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  ) : value === "✗" ? (
                    <span className="inline-flex h-5 w-5 items-center justify-center text-slate-300">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
