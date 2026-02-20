"use client";

import { useState, useRef } from "react";
import { events } from "@/lib/analytics";

interface FormData {
  company: string;
  contact: string;
  email: string;
  phone: string;
  region: string;
  inspectionType: string;
  scope: string;
  timeframe: string;
  message: string;
}

const initialForm: FormData = {
  company: "",
  contact: "",
  email: "",
  phone: "",
  region: "",
  inspectionType: "",
  scope: "",
  timeframe: "",
  message: "",
};

const inputClass =
  "mt-1.5 block w-full rounded-xl border border-surface-200 bg-white px-4 py-2.5 text-sm text-surface-900 shadow-soft transition-colors placeholder:text-surface-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100";

export default function LeadForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const hasTrackedStart = useRef(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    if (!hasTrackedStart.current) {
      events.formStart();
      hasTrackedStart.current = true;
    }
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Något gick fel. Försök igen eller kontakta oss direkt.");
      }

      events.formSubmit();
      setStatus("success");
      setForm(initialForm);
      hasTrackedStart.current = false;
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Något gick fel. Försök igen."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent-200 bg-accent-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-100">
          <svg className="h-7 w-7 text-accent-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-5 text-lg font-semibold text-surface-900">
          Tack för er förfrågan
        </h3>
        <p className="mt-2 text-sm text-surface-600">
          Vi har tagit emot ert meddelande och återkommer inom två arbetsdagar.
        </p>
        <div className="mt-6 rounded-xl bg-white p-5 text-left text-sm">
          <p className="font-medium text-surface-900">Nästa steg:</p>
          <ul className="mt-3 space-y-2 text-surface-500">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent-500" />
              Vi granskar er förfrågan och eventuella GIS-underlag
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent-500" />
              Vi kontaktar er för en genomgång av behov och omfattning
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent-500" />
              Ni får en offert anpassad efter ert specifika uppdrag
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="btn-secondary mt-6"
          onClick={() => setStatus("idle")}
        >
          Skicka en ny förfrågan
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {status === "error" && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700" role="alert">
          {errorMsg}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-surface-700">
            Företag <span className="text-red-500">*</span>
          </label>
          <input type="text" id="company" name="company" required value={form.company} onChange={handleChange} className={inputClass} placeholder="Företagsnamn" />
        </div>
        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-surface-700">
            Kontaktperson <span className="text-red-500">*</span>
          </label>
          <input type="text" id="contact" name="contact" required value={form.contact} onChange={handleChange} className={inputClass} placeholder="Namn" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-surface-700">
            E-post <span className="text-red-500">*</span>
          </label>
          <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="namn@foretag.se" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-surface-700">
            Telefon
          </label>
          <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} className={inputClass} placeholder="+46 70 000 00 00" />
        </div>
      </div>

      <div>
        <label htmlFor="region" className="block text-sm font-medium text-surface-700">
          Nätområde / Region
        </label>
        <input type="text" id="region" name="region" value={form.region} onChange={handleChange} className={inputClass} placeholder="Kommun, region eller nätområde" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="inspectionType" className="block text-sm font-medium text-surface-700">
            Typ av inspektion
          </label>
          <select id="inspectionType" name="inspectionType" value={form.inspectionType} onChange={handleChange} className={inputClass}>
            <option value="">Välj typ</option>
            <option value="arlig">Årlig översiktsinspektion</option>
            <option value="detaljerad">Detaljerad komponentinspektion</option>
            <option value="storm">Storm- / akutinspektion</option>
            <option value="lidar">LiDAR / kartläggning (tillägg)</option>
            <option value="annan">Annat / vet ej</option>
          </select>
        </div>
        <div>
          <label htmlFor="scope" className="block text-sm font-medium text-surface-700">
            Omfattning
          </label>
          <input type="text" id="scope" name="scope" value={form.scope} onChange={handleChange} className={inputClass} placeholder="km ledning / stolpar, eller 'vet ej'" />
        </div>
      </div>

      <div>
        <label htmlFor="timeframe" className="block text-sm font-medium text-surface-700">
          Önskad tidsram
        </label>
        <select id="timeframe" name="timeframe" value={form.timeframe} onChange={handleChange} className={inputClass}>
          <option value="">Välj tidsram</option>
          <option value="akut">Akut (inom dagar)</option>
          <option value="1-4veckor">1–4 veckor</option>
          <option value="1-3manader">1–3 månader</option>
          <option value="planering">Under planering</option>
          <option value="upphandling">Inför upphandling</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-surface-700">
          Meddelande
        </label>
        <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} className={inputClass} placeholder="Beskriv ert behov, bifoga gärna länk till GIS-underlag eller specifikation." />
      </div>

      <p className="text-xs text-surface-400">
        Genom att skicka detta formulär godkänner ni att vi behandlar era
        uppgifter för att hantera er förfrågan.{" "}
        Vi sparar era uppgifter i enlighet med vår{" "}
        <a href="/integritetspolicy" className="text-brand-600 underline hover:text-brand-700">
          integritetspolicy
        </a>
        .
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Skickar..." : "Skicka förfrågan"}
      </button>
    </form>
  );
}
