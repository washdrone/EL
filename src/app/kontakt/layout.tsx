import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main-content" className="pb-24 lg:pb-0">
        {children}
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
