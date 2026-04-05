export default function TrustBar() {
  const trustItems = [
    "EASA-utbildade piloter",
    "BVLOS-behörighet",
    "Radiometrisk termografi",
    "GIS-kompatibla leveranser",
    "Rikstäckande kapacitet",
  ];

  return (
    <section className="border-b border-slate-100 bg-white py-6 sm:py-7">
      <div className="container-section">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:gap-x-4 md:flex-nowrap md:justify-between">
          {trustItems.map((item, index) => (
            <span key={item} className="flex items-center gap-3">
              <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">
                {item}
              </span>
              {index < trustItems.length - 1 && (
                <span className="hidden h-3 w-px bg-slate-200 md:block" aria-hidden="true" />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
