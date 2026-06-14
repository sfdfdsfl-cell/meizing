import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SpeedBand from "@/components/SpeedBand";
import ServiceGallery from "@/components/ServiceGallery";
import Benefits from "@/components/Benefits";
import Plans from "@/components/Plans";
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
        <ServiceGallery />
        <Benefits />
        <Plans />
        <FeatureCards />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
