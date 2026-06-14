import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import AboutPartners from "@/components/AboutPartners";
import AboutJourney from "@/components/AboutJourney";
import Timeline from "@/components/Timeline";
import AboutDifference from "@/components/AboutDifference";
import AboutCta from "@/components/AboutCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "7+ years of excellence in optical fiber services. Mezing Broadband empowers homes and businesses with ultra-high-speed connectivity and unmatched reliability.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <AboutHero />
        <AboutPartners />
        <AboutJourney />
        <Timeline />
        <AboutDifference />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}
