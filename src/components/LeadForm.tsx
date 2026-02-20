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
      <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <svg
          className="mx-auto h-12 w-12 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="mt-4 text-lg font-semibold text-green-900">
          Tack för er förfrågan
        </h3>
        <p className="mt-2 text-sm text-green-700">
          Vi har tagit emot ert meddelande och återkommer inom två arbetsdagar.
        </p>
        <div className="mt-6 rounded-md bg-white p-4 text-left text-sm text-slate-700">
          <p className="font-medium">Nästa steg:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-slate-600">
            <li>Vi granskar er förfrågan och eventuella GIS-underlag</li>
            <li>Vi kontaktar er för en genomgång av behov och omfattning</li>
            <li>Ni får en offert anpassad efter ert specifika uppdrag</li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">
            Tips: Har ni GIS-data eller kartunderlag att dela? Skicka gärna till
            oss så kan vi ge en mer träffsäker offert.
          </p>
        </div>
        <button
          type="button"
          className="btn-secondary mt-6 text-sm"
          onClick={() => setStatus("idle")}
        >
          Skicka en ny förfrågan
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {status === "error" && (
        <div
          className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700"
          role="alert"
        >
          {errorMsg}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Företag */}
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-slate-700"
          >
            Företag <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={form.company}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            placeholder="Företagsnamn"
          />
        </div>

        {/* Kontaktperson */}
        <div>
          <label
            htmlFor="contact"
            className="block text-sm font-medium text-slate-700"
          >
            Kontaktperson <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            required
            value={form.contact}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            placeholder="Namn"
          />
        </div>

        {/* E-post */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700"
          >
            E-post <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            placeholder="namn@foretag.se"
          />
        </div>

        {/* Telefon */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-slate-700"
          >
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            placeholder="+46 70 000 00 00"
          />
        </div>
      </div>

      {/* Region */}
      <div>
        <label
          htmlFor="region"
          className="block text-sm font-medium text-slate-700"
        >
          Nätområde / Region
        </label>
        <input
          type="text"
          id="region"
          name="region"
          value={form.region}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          placeholder="Kommun, region eller nätområde"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Typ av inspektion */}
        <div>
          <label
            htmlFor="inspectionType"
            className="block text-sm font-medium text-slate-700"
          >
            Typ av inspektion
          </label>
          <select
            id="inspectionType"
            name="inspectionType"
            value={form.inspectionType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          >
            <option value="">Välj typ</option>
            <option value="arlig">Årlig översiktsinspektion</option>
            <option value="detaljerad">Detaljerad komponentinspektion</option>
            <option value="storm">Storm- / akutinspektion</option>
            <option value="lidar">LiDAR / kartläggning (tillägg)</option>
            <option value="annan">Annat / vet ej</option>
          </select>
        </div>

        {/* Omfattning */}
        <div>
          <label
            htmlFor="scope"
            className="block text-sm font-medium text-slate-700"
          >
            Omfattning
          </label>
          <input
            type="text"
            id="scope"
            name="scope"
            value={form.scope}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            placeholder="Antal km ledning / stolpar, eller 'vet ej'"
          />
        </div>
      </div>

      {/* Tidsram */}
      <div>
        <label
          htmlFor="timeframe"
          className="block text-sm font-medium text-slate-700"
        >
          Önskad tidsram
        </label>
        <select
          id="timeframe"
          name="timeframe"
          value={form.timeframe}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        >
          <option value="">Välj tidsram</option>
          <option value="akut">Akut (inom dagar)</option>
          <option value="1-4veckor">1–4 veckor</option>
          <option value="1-3manader">1–3 månader</option>
          <option value="planering">Under planering</option>
          <option value="upphandling">Inför upphandling</option>
        </select>
      </div>

      {/* Meddelande */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700"
        >
          Meddelande
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          placeholder="Beskriv ert behov, bifoga gärna länk till GIS-underlag eller specifikation."
        />
      </div>

      {/* GDPR */}
      <p className="text-xs text-slate-500">
        Genom att skicka detta formulär godkänner ni att vi behandlar era
        uppgifter för att hantera er förfrågan.{" "}
        Vi sparar era uppgifter i enlighet med vår{" "}
        <a
          href="/integritetspolicy"
          className="text-primary-600 underline hover:text-primary-700"
        >
          integritetspolicy
        </a>
        .
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Skickar..." : "Skicka förfrågan"}
      </button>
    </form>
  );
}
