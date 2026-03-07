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
    <section className="section-padding bg-slate-900">
      <div className="container-section">
        <div className="section-intro mb-14">
          <h2 className="heading-2 text-white">
            Från flygning till åtgärdsplan.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="absolute top-6 left-[calc(50%+2rem)] right-0 hidden h-px bg-slate-700 lg:block" />
              )}

              <div className="flex flex-col items-start lg:items-center lg:text-center">
                <div className="mb-4 flex items-center gap-3 lg:flex-col lg:gap-3">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-sm border border-slate-700 bg-slate-800">
                    <step.icon className="h-5 w-5 text-cyan-400" strokeWidth={1.5} />
                    <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500 text-[10px] font-bold text-slate-900">
                      {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5 lg:mb-2">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
