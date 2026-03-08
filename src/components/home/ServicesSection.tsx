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
    text: "Säker identifiering av överhettning och obalans i nätet för att förhindra haverier.",
    image: "/images/termografi.png",
  },
  {
    icon: TreePine,
    title: "Vegetationskontroll",
    text: "LiDAR-baserad kartläggning av ledningsgator för exakt prioritering av röjningsinsatser.",
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
    <section className="section-padding bg-slate-50">
      <div className="container-section">
        <div className="section-intro mb-14">
          <h2 className="heading-2">
            Heltäckande inspektion för elnät och stationer.
          </h2>
        </div>

        {/* Desktop: grid layout */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Left: service list */}
          <div className="lg:col-span-5 space-y-1">
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                className={`flex w-full items-start gap-4 rounded-sm px-5 py-4 text-left transition-all duration-150 ${
                  activeIndex === index
                    ? "bg-white border border-slate-200 shadow-sm"
                    : "border border-transparent hover:bg-white/60"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div
                  className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm transition-colors ${
                    activeIndex === index
                      ? "bg-cyan-600 text-white"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  <service.icon className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <div>
                  <span
                    className={`text-sm font-semibold transition-colors ${
                      activeIndex === index
                        ? "text-slate-900"
                        : "text-slate-700"
                    }`}
                  >
                    {service.title}
                  </span>
                  {activeIndex === index && (
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {service.text}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Right: image */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
              <Image
                src={services[activeIndex].image}
                alt={`${services[activeIndex].title} – drönarperspektiv`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: card grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
          {services.map((service) => (
            <div key={service.title} className="card">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-cyan-600 text-white">
                <service.icon className="h-4 w-4" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
