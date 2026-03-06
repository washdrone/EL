import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex min-h-[60vh] items-center justify-center px-5 sm:px-6 md:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            404
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-surface-900 sm:text-3xl md:text-4xl">
            Sidan hittades inte
          </h1>
          <p className="mt-3 text-sm text-surface-500 sm:mt-4 sm:text-base">
            Sidan du letar efter finns inte eller har flyttats.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center">
            <Link href="/tjanster/kraftledningsinspektion" className="btn-primary">
              Till startsidan
            </Link>
            <Link href="/kontakt" className="btn-secondary">
              Kontakta oss
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
