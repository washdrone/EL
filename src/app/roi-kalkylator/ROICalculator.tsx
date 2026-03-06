"use client";

import { useState } from "react";
import Link from "next/link";

type InspectionMethod = "helikopter" | "manuell";

export default function ROICalculator() {
  const [km, setKm] = useState<number>(50);
  const [method, setMethod] = useState<InspectionMethod>("helikopter");
  const [frequency, setFrequency] = useState<number>(1);

  // Generella branschuppskattningar — ej GridDrone-specifika
  const costPerKm: Record<InspectionMethod, number> = {
    helikopter: 3500,
    manuell: 5000,
  };

  // Drönarinspektion uppskattad kostnad per km — generell branschdata
  const droneCostPerKm = 1200;

  const traditionalCost = km * costPerKm[method] * frequency;
  const droneCost = km * droneCostPerKm * frequency;
  const savings = traditionalCost - droneCost;
  const savingsPercent = traditionalCost > 0 ? Math.round((savings / traditionalCost) * 100) : 0;

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("sv-SE", { style: "currency", currency: "SEK", maximumFractionDigits: 0 }).format(value);

  return (
    <section className="section-padding bg-white">
      <div className="container-section">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:gap-10 lg:grid-cols-2">
            {/* Input */}
            <div>
              <h2 className="heading-2">Dina parametrar</h2>
              <p className="body-text mt-2 text-sm">
                Ange era förutsättningar för att se en uppskattad kostnadsjämförelse.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <label htmlFor="km" className="block text-sm font-medium text-surface-700">
                    Km kraftledning att inspektera
                  </label>
                  <input
                    type="number"
                    id="km"
                    min={1}
                    max={10000}
                    value={km}
                    onChange={(e) => setKm(Math.max(1, Number(e.target.value)))}
                    className="mt-1.5 w-full rounded-xl border border-surface-200 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>

                <div>
                  <label htmlFor="method" className="block text-sm font-medium text-surface-700">
                    Nuvarande inspektionsmetod
                  </label>
                  <select
                    id="method"
                    value={method}
                    onChange={(e) => setMethod(e.target.value as InspectionMethod)}
                    className="mt-1.5 w-full rounded-xl border border-surface-200 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  >
                    <option value="helikopter">Helikopter</option>
                    <option value="manuell">Manuell / markbaserad</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="frequency" className="block text-sm font-medium text-surface-700">
                    Inspektionsfrekvens per år
                  </label>
                  <select
                    id="frequency"
                    value={frequency}
                    onChange={(e) => setFrequency(Number(e.target.value))}
                    className="mt-1.5 w-full rounded-xl border border-surface-200 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  >
                    <option value={1}>1 gång per år</option>
                    <option value={2}>2 gånger per år</option>
                    <option value={4}>4 gånger per år (kvartalsvis)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <h2 className="heading-2">Uppskattad besparing</h2>
              <p className="body-text mt-2 text-sm">
                Baserat på generella branschuppskattningar.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-xl border border-surface-200 bg-surface-50 p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-surface-500">
                    Kostnad {method === "helikopter" ? "helikopter" : "manuell inspektion"}
                  </p>
                  <p className="mt-1 text-2xl font-bold text-surface-900">
                    {formatCurrency(traditionalCost)}
                  </p>
                  <p className="mt-1 text-xs text-surface-500">
                    {formatCurrency(costPerKm[method])}/km × {km} km × {frequency} ggr/år
                  </p>
                </div>

                <div className="rounded-xl border border-surface-200 bg-surface-50 p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-surface-500">
                    Uppskattad kostnad drönare
                  </p>
                  <p className="mt-1 text-2xl font-bold text-surface-900">
                    {formatCurrency(droneCost)}
                  </p>
                  <p className="mt-1 text-xs text-surface-500">
                    {formatCurrency(droneCostPerKm)}/km × {km} km × {frequency} ggr/år
                  </p>
                </div>

                <div className="rounded-xl border-2 border-brand-200 bg-brand-50 p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-brand-600">
                    Uppskattad årlig besparing
                  </p>
                  <p className="mt-1 text-3xl font-bold text-brand-700">
                    {formatCurrency(savings)}
                  </p>
                  <p className="mt-1 text-sm font-medium text-brand-600">
                    ca {savingsPercent}% lägre kostnad
                  </p>
                </div>

                <p className="text-xs text-surface-500">
                  * Uppskattning baserad på generella branschdata. Faktisk kostnad
                  beror på uppdragets specifika förutsättningar.
                </p>

                <Link
                  href="/kontakt"
                  className="btn-primary mt-4 inline-flex w-full justify-center"
                >
                  Begär offert baserad på era förutsättningar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
