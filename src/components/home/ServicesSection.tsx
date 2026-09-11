"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Cable,
  CircuitBoard,
  Thermometer,
  TreePine,
  AlertTriangle,
} from "lucide-react";

const services = [
  {
    icon: Cable,
    title: "Kraftledningar",
    text: "Års- och detaljinspektion av stolpar, linor, stag och isolatorer.",
    image: "/images/kraftledningar.png",
  },
  {
    icon: CircuitBoard,
    title: "Stationer & Komponenter",
    text: "Detaljerad statuskontroll av transformatorer, brytare och frånskiljare under drift.",
    image: "/images/stationer-komponenter.png",
  },
  {
    icon: Thermometer,
    title: "Termografi",
    text: "Dokumentation av temperaturavvikelser som underlag för vidare bedömning och underhåll.",
    image: "/images/termografi.png",
  },
  {
    icon: TreePine,
    title: "Vegetationskontroll",
    text: "LiDAR-baserad kartläggning av ledningsgator för prioritering av röjningsinsatser.",
    image: "/images/vegetationskontroll.png",
  },
  {
    icon: AlertTriangle,
    title: "Stormskadeinspektion",
    text: "Akut skadekartläggning efter storm för prioriterad återuppbyggnad av ert elnät.",
    image: "/images/stormskadeanalys.png",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-padding bg-surface-50">
      <div className="container-section">
        <div className="section-intro mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-brand-500" />
            <span className="eyebrow-brand">Tjänster</span>
            <div className="h-px w-8 bg-brand-500" />
          </div>
          <h2 className="heading-2">
            Heltäckande inspektion för elnät och stationer.
          </h2>
        </div>

        {/* Desktop: grid layout */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-10">
          {/* Left: service list */}
          <div className="lg:col-span-5 space-y-px bg-slate-200">
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                className={`flex w-full items-start gap-4 px-6 py-5 text-left transition-all duration-150 ${
                  activeIndex === index
                    ? "bg-white"
                    : "bg-surface-50 hover:bg-white/80"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div
                  className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center transition-colors ${
                    activeIndex === index
                      ? "bg-brand-600 text-white"
                      : "border border-slate-200 bg-white text-slate-400"
                  }`}
                >
                  <service.icon className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <div>
                  <span
                    className={`text-sm font-semibold transition-colors ${
                      activeIndex === index
                        ? "text-slate-900"
                        : "text-slate-600"
                    }`}
                  >
                    {service.title}
                  </span>
                  {activeIndex === index && (
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                      {service.text}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Right: image */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={services[activeIndex].image}
                alt={`${services[activeIndex].title} – drönarperspektiv`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
              {/* Image overlay label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/80 to-transparent p-6 pt-16">
                <p className="text-sm font-semibold text-white">{services[activeIndex].title}</p>
                <p className="mt-1 text-xs text-slate-300">{services[activeIndex].text}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: card grid */}
        <div className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:hidden">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center bg-brand-600 text-white">
                <service.icon className="h-4 w-4" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
