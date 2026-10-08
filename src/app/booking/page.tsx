import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";
import BookingKycChecklist from "@/components/BookingKycChecklist";
import BookingTerms from "@/components/BookingTerms";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Connection Booking",
  description:
    "Book your Mezing Broadband fiber connection in 3 minutes — no upfront payment. Our local team verifies feasibility, schedules installation, and completes paperless e-KYC.",
  alternates: {
    canonical: "/booking",
  },
};

const backLinks: Record<string, string> = {
  home: "/home-plans",
  business: "/business-plans",
};

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { plan, from } = await searchParams;
  const selectedPlan = typeof plan === "string" ? plan.slice(0, 120) : "";
  const backHref =
    (typeof from === "string" && backLinks[from]) || "/home-plans";

  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col bg-[#f7f8fb]">
        <BookingForm plan={selectedPlan} backHref={backHref}>
          <div className="mx-auto w-full max-w-3xl space-y-10 px-6 pb-20 sm:pb-24">
            <BookingKycChecklist
              initialTab={from === "business" ? "business" : "residential"}
            />
            <BookingTerms />
          </div>
        </BookingForm>
      </main>
      <Footer />
    </>
  );
}
