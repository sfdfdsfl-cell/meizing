import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactHero from "@/components/ContactHero";
import ContactInfo from "@/components/ContactInfo";
import SupportArea from "@/components/SupportArea";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Mezing Broadband. Book a new fiber connection and get installed within 48 hours, or refer friends and family to earn rewards.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <ContactHero />
        <ContactInfo />
        <SupportArea />
      </main>
      <Footer />
    </>
  );
}
