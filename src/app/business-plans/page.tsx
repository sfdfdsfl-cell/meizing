import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BusinessPlansHero from "@/components/BusinessPlansHero";
import BusinessPlansPricing from "@/components/BusinessPlansPricing";
import BusinessSpeedTiers from "@/components/BusinessSpeedTiers";
import BusinessIndustries from "@/components/BusinessIndustries";
import BusinessComparison from "@/components/BusinessComparison";
import BusinessHomeCta from "@/components/BusinessHomeCta";
import PlansFaq from "@/components/PlansFaq";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Business Plans",
  description:
    "Business internet and Internet Leased Lines (ILL) from Mezing Broadband — guaranteed 99.9% uptime, symmetrical speeds, direct IX peering and GST input tax credit.",
  alternates: {
    canonical: "/business-plans",
  },
};

export default function BusinessPlansPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <BusinessPlansHero />
        <BusinessPlansPricing />
        <BusinessSpeedTiers />
        <BusinessIndustries />
        <BusinessComparison />
        <BusinessHomeCta />
        <PlansFaq />
      </main>
      <Footer />
    </>
  );
}
