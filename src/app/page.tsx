import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SpeedBand from "@/components/SpeedBand";
import OttMarquee from "@/components/OttMarquee";
import ConnectivitySolutions from "@/components/ConnectivitySolutions";
import Benefits from "@/components/Benefits";
import PlanFinder from "@/components/PlanFinder";
import FeatureCards from "@/components/FeatureCards";
import Faq from "@/components/Faq";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <SpeedBand />
        <OttMarquee />
        <ConnectivitySolutions />
        <Benefits />
        <PlanFinder />
        <FeatureCards />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
