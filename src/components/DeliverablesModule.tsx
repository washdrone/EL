const deliverables = [
  {
    title: "Georefererade bilder",
    description:
      "Högupplösta bilder med GPS-position, tagna från standardiserade vinklar. Möjliggör jämförelse över tid och enkel koppling till GIS-system.",
    format: "JPEG/TIFF med EXIF-data",
  },
  {
    title: "Strukturerad rapport",
    description:
      "Avvikelser dokumenteras per stolpe/sektion med bildbevis, klassificering och rekommenderad åtgärd. Spårbart och sökbart.",
    format: "PDF och/eller CSV/Excel",
  },
  {
    title: "Kartlager (GIS)",
    description:
      "Inspektionsdata som kartlager för import i era GIS- och nätförvaltningssystem. Punkter, linjer och attribut i standardformat.",
    format: "Shapefile, GeoJSON eller KML",
  },
  {
    title: "Avvikelserapport med prioritering",
    description:
      "Identifierade avvikelser klassificeras efter allvarlighetsgrad. Ger ett direkt planeringsunderlag för underhållsorganisationen.",
    format: "PDF + strukturerad data",
  },
];

export default function DeliverablesModule() {
  return (
    <section className="section-padding bg-white" id="leveranser">
      <div className="container-section">
        <div className="section-intro">
          <h2 className="heading-2">Vad ni får</h2>
          <p className="body-text mt-5">
            Standardiserade dataleveranser som passar direkt in i ert
            nätförvaltningssystem och er underhållsplanering.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2">
          {deliverables.map((item, i) => (
            <div key={item.title} className="card group">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                  <span className="text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-surface-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-surface-500">
                    {item.description}
                  </p>
                  <p className="mt-3 inline-flex rounded-full bg-surface-50 px-3 py-1 text-xs font-medium text-surface-500">
                    {item.format}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
