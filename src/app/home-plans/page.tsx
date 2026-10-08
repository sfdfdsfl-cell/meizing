import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HomePlansHero from "@/components/HomePlansHero";
import HomePlansPricing from "@/components/HomePlansPricing";
import HomePlansWhyFast from "@/components/HomePlansWhyFast";
import HomePlansEntertainment from "@/components/HomePlansEntertainment";
import HomePlansBusinessCta from "@/components/HomePlansBusinessCta";
import PlansFaq from "@/components/PlansFaq";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home Plans",
  description:
    "Residential fiber internet and all-in-one OTT entertainment from Mezing Broadband — symmetrical speeds, unlimited data, and transparent pricing from ₹399/month.",
  alternates: {
    canonical: "/home-plans",
  },
};

export default function HomePlansPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <HomePlansHero />
        <HomePlansPricing />
        <HomePlansWhyFast />
        <HomePlansEntertainment />
        <HomePlansBusinessCta />
        <PlansFaq tone="indigo" />
      </main>
      <Footer />
    </>
  );
}
