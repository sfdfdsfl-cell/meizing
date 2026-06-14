import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PlansHero from "@/components/PlansHero";
import PlansIntro from "@/components/PlansIntro";
import PlansPricing from "@/components/PlansPricing";
import PlansFeatures from "@/components/PlansFeatures";
import OttSection from "@/components/OttSection";
import IptvSection from "@/components/IptvSection";
import BusinessCta from "@/components/BusinessCta";
import PlansFaq from "@/components/PlansFaq";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Plans",
  description:
    "Explore Mezing Broadband fiber plans — 1,200 Mbps symmetrical speeds, zero data caps, and next-gen Wi-Fi 6 on a 100% fiber-optic infrastructure.",
  alternates: {
    canonical: "/plans",
  },
};

export default function PlansPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <PlansHero />
        <PlansIntro />
        <PlansPricing />
        <PlansFeatures />
        <OttSection />
        <IptvSection />
        <BusinessCta />
        <PlansFaq />
      </main>
      <Footer />
    </>
  );
}
