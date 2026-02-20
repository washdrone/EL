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
        <h1 className="text-2xl font-bold text-surface-900">
          Något gick fel
        </h1>
        <p className="mt-2 text-surface-500">
          Ett oväntat fel uppstod. Försök ladda om sidan.
        </p>
        <button
          onClick={() => reset()}
          className="btn-primary mt-6"
        >
          Försök igen
        </button>
      </div>
    </div>
  );
}
