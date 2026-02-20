"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-slate-900">
          Något gick fel
        </h1>
        <p className="mt-2 text-slate-600">
          Ett oväntat fel uppstod. Försök ladda om sidan.
        </p>
        <button
          onClick={() => reset()}
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary-700"
        >
          Försök igen
        </button>
      </div>
    </div>
  );
}
