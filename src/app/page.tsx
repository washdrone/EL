import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ProblemSection from "@/components/home/ProblemSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import ProofSection from "@/components/home/ProofSection";
import PreFooterCTA from "@/components/home/PreFooterCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <TrustBar />
        <ProblemSection />
        <ServicesSection />
        <ProcessSection />
        <ProofSection />
        <PreFooterCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
