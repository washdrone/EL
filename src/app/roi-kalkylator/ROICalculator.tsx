"use client";
import { useState } from "react";
import {
  calculateInspectionCosts,
  type InspectionCosts,
} from "@/lib/inspection-cost";

export default function ROICalculator() {
  const [values, setValues] = useState({
    distance: "",
    frequency: "1",
    current: "",
    drone: "",
    currentFixed: "0",
    droneFixed: "0",
  });
  const fields = [
    ["distance", "Ledningssträcka (km)", "0.1"],
    ["frequency", "Inspektioner per år", "1"],
    ["current", "Nuvarande metod (kr/km)", "0.01"],
    ["drone", "Drönaralternativ (kr/km)", "0.01"],
    [
      "currentFixed",
      "Övrig kostnad per inspektion, nuvarande metod (kr)",
      "0.01",
    ],
    ["droneFixed", "Övrig kostnad per inspektion, drönare (kr)", "0.01"],
  ] as const;
  const n = Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, Number(value)]),
  );
  const result = Object.values(values).every((v) => v.trim() !== "")
    ? calculateInspectionCosts(n as unknown as InspectionCosts)
    : null;
  const valid = result !== null;
  const current = result?.current ?? 0;
  const drone = result?.drone ?? 0;
  const money = (value: number) =>
    new Intl.NumberFormat("sv-SE", {
      style: "currency",
      currency: "SEK",
      maximumFractionDigits: 0,
    }).format(value);
  return (
    <section className="section-padding bg-white">
      <div className="container-section max-w-4xl">
        <h2 className="heading-2">Jämför med era egna kostnader</h2>
        <p className="body-text mt-4" id="calculation-help">
          Använd offerter eller egna budgetuppgifter. Inga marknadspriser är
          förifyllda. Jämför samma omfattning, analys och leveransformat samt
          samma momsgrund. Ta med mobilisering och andra fasta kostnader en gång
          per inspektion.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {fields.map(([key, label, step]) => (
            <div key={key}>
              <label
                htmlFor={`cost-${key}`}
                className="block text-sm font-medium text-surface-800"
              >
                {label}
              </label>
              <input
                id={`cost-${key}`}
                type="number"
                inputMode="decimal"
                min={
                  key === "distance" ? "0.1" : key === "frequency" ? "1" : "0"
                }
                step={step}
                value={values[key]}
                onChange={(e) =>
                  setValues({ ...values, [key]: e.target.value })
                }
                aria-describedby="calculation-help"
                className="mt-2 w-full min-h-[44px] border border-slate-300 p-3 text-surface-900 focus:ring-2 focus:ring-brand-500"
              />
            </div>
          ))}
        </div>
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="mt-8 border border-brand-200 bg-brand-50 p-6"
        >
          {valid ? (
            <>
              <h3 className="text-lg font-semibold">Beräknad årskostnad</h3>
              <dl className="mt-4 space-y-3">
                <div>
                  <dt>Nuvarande metod</dt>
                  <dd className="font-semibold">{money(current)}</dd>
                </div>
                <div>
                  <dt>Drönaralternativ</dt>
                  <dd className="font-semibold">{money(drone)}</dd>
                </div>
                <div>
                  <dt>
                    {current >= drone
                      ? "Lägre kostnad med drönaralternativet"
                      : "Högre kostnad med drönaralternativet"}
                  </dt>
                  <dd className="text-xl font-bold">
                    {money(Math.abs(current - drone))}
                  </dd>
                </div>
              </dl>
              <p className="mt-4 text-sm">
                Resultatet bygger enbart på era inmatningar. Det är ingen offert
                eller garanti för besparing.
              </p>
            </>
          ) : (
            <p>
              Fyll i sträcka, antal inspektioner och båda alternativen med
              giltiga, icke-negativa kostnader. Antalet inspektioner ska vara
              ett positivt heltal.
            </p>
          )}
        </div>
        <p className="mt-4 text-sm text-surface-600">
          Årskostnad = (sträcka × pris per km + övrig kostnad per inspektion) ×
          inspektioner per år. Beräkningen görs i webbläsaren; inmatningarna
          skickas inte till oss.
        </p>
      </div>
    </section>
  );
}
