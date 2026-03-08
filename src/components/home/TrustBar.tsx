export default function TrustBar() {
  const trustItems = [
    "EASA-utbildade piloter",
    "BVLOS-behörighet",
    "Radiometrisk termografi",
    "GIS-kompatibla leveranser",
    "Rikstäckande kapacitet",
  ];

  return (
    <section className="bg-slate-50 py-12 sm:py-14">
      <div className="container-section">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {trustItems.map((item) => (
            <span
              key={item}
              className="text-xs font-semibold uppercase tracking-widest text-slate-500"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
