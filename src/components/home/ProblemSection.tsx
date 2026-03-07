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
          <h2 className="heading-2">
            Sluta gissa statusen på nätet.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((item) => (
            <div
              key={item.title}
              className="card group"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-sm bg-slate-100 text-cyan-600 transition-colors group-hover:bg-cyan-50">
                <item.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="heading-3 mb-2">{item.title}</h3>
              <p className="text-sm leading-6 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
