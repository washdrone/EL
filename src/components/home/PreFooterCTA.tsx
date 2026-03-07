import Link from "next/link";
import { Download } from "lucide-react";

export default function PreFooterCTA() {
  return (
    <section className="bg-slate-900 py-20 sm:py-24 lg:py-28">
      <div className="container-section text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Vill ni framtidssäkra ert underhåll?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
          Låt oss titta på hur våra inspektionsmetoder kan integreras i er
          befintliga underhållsplanering för ökad driftsäkerhet.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/kontakt" className="btn-primary-dark">
            Boka ett inledande möte
          </Link>
          <Link
            href="/exempelrapport"
            className="btn-ghost inline-flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Ladda ner exempelrapport (PDF)
          </Link>
        </div>
      </div>
    </section>
  );
}
