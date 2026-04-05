import { Map, Camera, BarChart3, FileCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Map,
    title: "Planering",
    text: "Vi integrerar med era nätkartor och sätter parametrar för inspektionen.",
  },
  {
    number: "02",
    icon: Camera,
    title: "Datainsamling",
    text: "Våra certifierade piloter samlar in RGB, termisk och spatial data.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Analys & Klassning",
    text: "Fynd granskas, klassificeras utifrån allvarlighetsgrad och georefereras.",
  },
  {
    number: "04",
    icon: FileCheck,
    title: "Leverans",
    text: "Färdig rapport och åtgärdsunderlag redo att importeras i era underhållssystem.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding gradient-dark-section">
      <div className="container-section">
        <div className="section-intro mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-brand-400" />
            <span className="eyebrow-cyan">Process</span>
            <div className="h-px w-8 bg-brand-400" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Från flygning till åtgärdsplan.
          </h2>
        </div>

        <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="group bg-navy-900/80 p-8 transition-colors hover:bg-navy-800/80">
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5">
                  <step.icon className="h-5 w-5 text-brand-300" strokeWidth={1.5} />
                </div>
                <span className="text-2xl font-bold text-brand-400/40">
                  {step.number}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
