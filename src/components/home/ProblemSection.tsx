import { Activity, Layers, ShieldCheck } from "lucide-react";

const problems = [
  {
    icon: Activity,
    title: "Från reaktivt till proaktivt",
    text: "Upptäck hotspots, mikrosprickor och röjningsbehov innan de orsakar driftavbrott.",
  },
  {
    icon: Layers,
    title: "Data, inte bara bilder",
    text: "Ni behöver inte tusentals ostrukturerade foton. Vi levererar exakta, georefererade fynd direkt in i ert NIS/GIS-system.",
  },
  {
    icon: ShieldCheck,
    title: "Säkerhet i fält",
    text: "Eliminera riskfyllda stolpklättringar och helikopterflygningar där de inte är strikt nödvändiga.",
  },
];

export default function ProblemSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-section">
        <div className="section-intro mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-brand-500" />
            <span className="eyebrow-brand">Utmaningar</span>
            <div className="h-px w-8 bg-brand-500" />
          </div>
          <h2 className="heading-2">
            Sluta gissa statusen på nätet.
          </h2>
        </div>

        <div className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((item) => (
            <div
              key={item.title}
              className="group bg-white p-8 transition-colors hover:bg-surface-50"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center border border-slate-200 bg-surface-50 text-brand-600 transition-colors group-hover:border-brand-200 group-hover:bg-brand-50">
                <item.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="heading-3 mb-3">{item.title}</h3>
              <p className="text-sm leading-6 text-slate-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
