export default function TrustBar() {
  const logos = [
    "Partner A",
    "Partner B",
    "Partner C",
    "Partner D",
    "Partner E",
  ];

  return (
    <section className="bg-slate-50 py-12 sm:py-14">
      <div className="container-section">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
          Betrodda av anläggningsägare och entreprenörer inom svensk energi
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {logos.map((name) => (
            <div
              key={name}
              className="flex h-8 w-28 items-center justify-center rounded-sm bg-slate-200 text-xs font-mono text-slate-400"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
