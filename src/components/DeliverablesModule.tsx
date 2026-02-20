const deliverables = [
  {
    title: "Georefererade bilder",
    description:
      "Högupplösta bilder med GPS-position, tagna från standardiserade vinklar. Möjliggör jämförelse över tid och enkel koppling till GIS-system.",
    format: "JPEG/TIFF med EXIF-data",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
      </svg>
    ),
  },
  {
    title: "Strukturerad rapport",
    description:
      "Avvikelser dokumenteras per stolpe/sektion med bildbevis, klassificering och rekommenderad åtgärd. Spårbart och sökbart.",
    format: "PDF och/eller CSV/Excel",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Kartlager (GIS)",
    description:
      "Inspektionsdata som kartlager för import i era GIS- och nätförvaltningssystem. Punkter, linjer och attribut i standardformat.",
    format: "Shapefile, GeoJSON eller KML",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    title: "Avvikelserapport med prioritering",
    description:
      "Identifierade avvikelser klassificeras efter allvarlighetsgrad och brådskande. Ger ett direkt planeringsunderlag för underhållsorganisationen.",
    format: "PDF + strukturerad data",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
];

export default function DeliverablesModule() {
  return (
    <section className="section-padding bg-white" id="leveranser">
      <div className="container-section">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="heading-2">Vad ni får</h2>
          <p className="body-text mt-4">
            Standardiserade dataleveranser som passar direkt in i ert
            nätförvaltningssystem och er underhållsplanering.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {deliverables.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-slate-200 p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary-50 text-primary-600">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                  <p className="mt-3 text-xs font-medium text-slate-500">
                    Format: {item.format}
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
