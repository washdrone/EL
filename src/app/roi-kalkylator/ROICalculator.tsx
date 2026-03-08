"use client";

import { useState } from "react";
import Link from "next/link";
import {
  METHODS,
  DRONE_COST_PER_KM,
  FREQUENCY_OPTIONS,
  KM_PRESETS,
  KM_MIN,
  KM_MAX,
  KM_DEFAULT,
  COST_FACTORS,
} from "./calculator-config";

type MethodKey = keyof typeof METHODS;

function formatSEK(value: number): string {
  return new Intl.NumberFormat("sv-SE", {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatRange(low: number, high: number): string {
  return `${formatSEK(low)}–${formatSEK(high)} kr`;
}

export default function ROICalculator() {
  const [km, setKm] = useState<number>(KM_DEFAULT);
  const [method, setMethod] = useState<MethodKey>("helikopter");
  const [frequency, setFrequency] = useState<number>(1);
  const [showAssumptions, setShowAssumptions] = useState(false);

  const methodConfig = METHODS[method];

  // Beräkning med typvärden
  const traditionalCost = km * methodConfig.costPerKm.typical * frequency;
  const droneCost = km * DRONE_COST_PER_KM.typical * frequency;
  const savings = traditionalCost - droneCost;
  const savingsPercent =
    traditionalCost > 0
      ? Math.round((savings / traditionalCost) * 100)
      : 0;

  // Beräkning med intervall
  const traditionalLow = km * methodConfig.costPerKm.low * frequency;
  const traditionalHigh = km * methodConfig.costPerKm.high * frequency;
  const droneLow = km * DRONE_COST_PER_KM.low * frequency;
  const droneHigh = km * DRONE_COST_PER_KM.high * frequency;
  const savingsLow = traditionalLow - droneHigh;
  const savingsHigh = traditionalHigh - droneLow;

  // 3-årsprojektion
  const savings3yr = savings * 3;

  const handleKmChange = (value: number) => {
    setKm(Math.max(KM_MIN, Math.min(KM_MAX, value)));
  };

  const inputClasses =
    "w-full rounded-lg border border-surface-200 px-4 py-2.5 text-sm transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";

  return (
    <section id="kalkylator" className="section-padding bg-white">
      <div className="container-section">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
            {/* --- INPUT PANEL --- */}
            <div>
              <h2 className="heading-2">Era förutsättningar</h2>
              <p className="body-text mt-2 text-sm">
                Ange parametrar för att se en uppskattad kostnadsjämförelse.
                Kalkylatorn uppdateras direkt.
              </p>

              <div className="mt-8 space-y-7">
                {/* Km input + slider + chips */}
                <div>
                  <label
                    htmlFor="km"
                    className="block text-sm font-medium text-surface-700"
                  >
                    Km kraftledning att inspektera
                  </label>

                  {/* Quick-select chips */}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {KM_PRESETS.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => handleKmChange(preset)}
                        className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                          km === preset
                            ? "border-brand-500 bg-brand-50 text-brand-700"
                            : "border-surface-200 bg-white text-surface-600 hover:border-surface-300 hover:bg-surface-50"
                        }`}
                      >
                        {preset} km
                      </button>
                    ))}
                  </div>

                  {/* Slider */}
                  <input
                    type="range"
                    min={KM_MIN}
                    max={KM_MAX}
                    step={KM_MAX <= 500 ? 5 : 10}
                    value={km}
                    onChange={(e) => handleKmChange(Number(e.target.value))}
                    className="mt-3 w-full accent-brand-600"
                    aria-label="Km kraftledning"
                  />

                  {/* Numeric input */}
                  <div className="mt-2 flex items-center gap-2">
                    <input
                      type="number"
                      id="km"
                      min={KM_MIN}
                      max={KM_MAX}
                      value={km}
                      onChange={(e) => handleKmChange(Number(e.target.value))}
                      className={`${inputClasses} max-w-[120px]`}
                    />
                    <span className="text-sm text-surface-500">km</span>
                  </div>
                </div>

                {/* Method */}
                <div>
                  <label
                    htmlFor="method"
                    className="block text-sm font-medium text-surface-700"
                  >
                    Nuvarande inspektionsmetod
                  </label>
                  <select
                    id="method"
                    value={method}
                    onChange={(e) => setMethod(e.target.value as MethodKey)}
                    className={`mt-1.5 ${inputClasses}`}
                  >
                    {Object.entries(METHODS).map(([key, cfg]) => (
                      <option key={key} value={key}>
                        {cfg.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Frequency */}
                <div>
                  <label
                    htmlFor="frequency"
                    className="block text-sm font-medium text-surface-700"
                  >
                    Inspektionsfrekvens per år
                  </label>
                  <select
                    id="frequency"
                    value={frequency}
                    onChange={(e) => setFrequency(Number(e.target.value))}
                    className={`mt-1.5 ${inputClasses}`}
                  >
                    {FREQUENCY_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* --- RESULTS PANEL --- */}
            <div>
              <h2 className="heading-2">Uppskattad jämförelse</h2>
              <p className="body-text mt-2 text-sm">
                Baserat på generella branschuppskattningar — ej
                leverantörsspecifika priser.
              </p>

              <div className="mt-8 space-y-4">
                {/* Traditional cost */}
                <div className="rounded-xl border border-surface-200 bg-surface-50 p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-surface-500">
                    Uppskattad kostnad — {methodConfig.shortLabel}
                  </p>
                  <p className="mt-1 text-2xl font-bold text-surface-900">
                    ~{formatSEK(traditionalCost)} kr
                  </p>
                  <p className="mt-1 text-xs text-surface-500">
                    Typvärde {formatSEK(methodConfig.costPerKm.typical)} kr/km
                    &times; {km} km &times; {frequency} ggr/år
                  </p>
                  <p className="mt-0.5 text-xs text-surface-400">
                    Uppskattat intervall:{" "}
                    {formatRange(traditionalLow, traditionalHigh)}
                  </p>
                </div>

                {/* Drone cost */}
                <div className="rounded-xl border border-surface-200 bg-surface-50 p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-surface-500">
                    Uppskattad kostnad — drönarinspektion
                  </p>
                  <p className="mt-1 text-2xl font-bold text-surface-900">
                    ~{formatSEK(droneCost)} kr
                  </p>
                  <p className="mt-1 text-xs text-surface-500">
                    Typvärde {formatSEK(DRONE_COST_PER_KM.typical)} kr/km
                    &times; {km} km &times; {frequency} ggr/år
                  </p>
                  <p className="mt-0.5 text-xs text-surface-400">
                    Uppskattat intervall: {formatRange(droneLow, droneHigh)}
                  </p>
                </div>

                {/* Savings highlight */}
                {savings > 0 && (
                  <div className="rounded-xl border-2 border-brand-200 bg-brand-50 p-5">
                    <p className="text-xs font-medium uppercase tracking-wide text-brand-600">
                      Uppskattad årlig besparing
                    </p>
                    <p className="mt-1 text-3xl font-bold text-brand-700">
                      ~{formatSEK(savings)} kr/år
                    </p>
                    <p className="mt-1 text-sm font-medium text-brand-600">
                      ca {savingsPercent}% lägre kostnad med drönare
                    </p>
                    {savingsLow > 0 && (
                      <p className="mt-0.5 text-xs text-brand-500">
                        Uppskattat intervall:{" "}
                        {formatRange(savingsLow, savingsHigh)}/år
                      </p>
                    )}
                  </div>
                )}

                {/* 3-year projection */}
                {savings3yr > 0 && (
                  <div className="rounded-xl border border-surface-200 bg-white p-5">
                    <p className="text-xs font-medium uppercase tracking-wide text-surface-500">
                      Uppskattad besparing över 3 år
                    </p>
                    <p className="mt-1 text-xl font-bold text-surface-900">
                      ~{formatSEK(savings3yr)} kr
                    </p>
                  </div>
                )}

                {/* Inline summary */}
                <div className="rounded-lg bg-surface-50 p-4 text-sm leading-relaxed text-surface-600">
                  Vid {km} km och {frequency}{" "}
                  {frequency === 1 ? "inspektion" : "inspektioner"} per år
                  uppskattas kostnaden med drönare vara lägre än med{" "}
                  {methodConfig.shortLabel}, baserat på generella
                  branschuppskattningar. Exakt besparing beror på
                  projektspecifika förutsättningar.
                </div>

                {/* Disclaimer */}
                <p className="text-xs text-surface-400">
                  * Alla belopp är uppskattningar baserade på generella
                  branschdata och utgör inte prisgaranti. Faktisk kostnad
                  varierar beroende på ledningstyp, terräng, datakrav,
                  mobilisering och geografiskt område.
                </p>

                {/* CTA */}
                <Link
                  href="/kontakt"
                  className="btn-primary mt-2 inline-flex w-full justify-center"
                >
                  Få en projektspecifik kalkyl för ert nät
                </Link>
              </div>
            </div>
          </div>

          {/* --- ASSUMPTIONS / TRANSPARENCY --- */}
          <div className="mt-14 border-t border-surface-200 pt-10">
            <button
              type="button"
              onClick={() => setShowAssumptions(!showAssumptions)}
              className="group flex w-full items-center justify-between text-left"
              aria-expanded={showAssumptions}
            >
              <h3 className="text-lg font-semibold text-surface-900 group-hover:text-brand-600 transition-colors">
                Metod och antaganden
              </h3>
              <svg
                className={`h-5 w-5 text-surface-400 transition-transform duration-200 ${
                  showAssumptions ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {showAssumptions && (
              <div className="mt-6 space-y-6 text-sm leading-relaxed text-surface-600">
                <div>
                  <h4 className="font-semibold text-surface-800">
                    Vad kalkylatorn beräknar
                  </h4>
                  <p className="mt-1">
                    Kalkylatorn jämför den uppskattade årskostnaden för
                    kraftledningsinspektion med en traditionell metod
                    (helikopter eller markbaserad) mot drönarinspektion.
                    Beräkningen multiplicerar ett uppskattat km-pris med
                    angiven sträcka och frekvens.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-surface-800">
                    Antaganden i beräkningen
                  </h4>
                  <p className="mt-1">
                    Samtliga km-priser är generella schabloner för planerad
                    kraftledningsinspektion i Sverige. De representerar inte
                    specifika leverantörspriser.
                  </p>
                  <div className="mt-3 overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-surface-200">
                          <th className="pb-2 pr-4 font-semibold text-surface-700">
                            Metod
                          </th>
                          <th className="pb-2 pr-4 font-semibold text-surface-700">
                            Lågt
                          </th>
                          <th className="pb-2 pr-4 font-semibold text-surface-700">
                            Typvärde
                          </th>
                          <th className="pb-2 font-semibold text-surface-700">
                            Högt
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-surface-100">
                        {Object.entries(METHODS).map(([key, cfg]) => (
                          <tr key={key}>
                            <td className="py-2 pr-4">{cfg.label}</td>
                            <td className="py-2 pr-4">
                              {formatSEK(cfg.costPerKm.low)} kr/km
                            </td>
                            <td className="py-2 pr-4">
                              {formatSEK(cfg.costPerKm.typical)} kr/km
                            </td>
                            <td className="py-2">
                              {formatSEK(cfg.costPerKm.high)} kr/km
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <td className="py-2 pr-4">Drönare</td>
                          <td className="py-2 pr-4">
                            {formatSEK(DRONE_COST_PER_KM.low)} kr/km
                          </td>
                          <td className="py-2 pr-4">
                            {formatSEK(DRONE_COST_PER_KM.typical)} kr/km
                          </td>
                          <td className="py-2">
                            {formatSEK(DRONE_COST_PER_KM.high)} kr/km
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-surface-800">
                    Faktorer som påverkar den faktiska kostnaden
                  </h4>
                  <ul className="mt-2 list-inside list-disc space-y-1">
                    {COST_FACTORS.map((factor) => (
                      <li key={factor}>{factor}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-surface-800">
                    Exakt offert
                  </h4>
                  <p className="mt-1">
                    Kalkylatorn ger en grov uppskattning. För en exakt kostnadsbild
                    krävs projektspecifik information om ledningens längd, typ,
                    terräng, datakrav och önskad leverans.{" "}
                    <Link
                      href="/kontakt"
                      className="font-medium text-brand-600 underline underline-offset-2 hover:text-brand-700"
                    >
                      Kontakta oss för en offert
                    </Link>
                    .
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
