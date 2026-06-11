import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Refund Policy for Mezing Broadband Private Limited — eligibility, refund process, exclusions, timelines, and how to contact us about refunds.",
  alternates: {
    canonical: "/refund-policy",
  },
};

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="flex flex-1 flex-col bg-white">
        {/* Page header */}
        <section className="w-full bg-linear-to-b from-[#d7dcf3] to-white">
          <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
            <h1 className="text-3xl font-bold tracking-tight text-[#0b0b1a] sm:text-4xl">
              Refund Policy
            </h1>
            <p className="mt-3 text-sm text-slate-500">
              Last updated: June 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto w-full max-w-3xl px-6 py-14">
          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#0b0b1a]">
              1. Introduction
            </h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              Welcome to MEZING BROADBAND PRIVATE LIMITED (&quot;the
              Company&quot;). This Refund Policy outlines our guidelines
              regarding refunds for our services. By using our services, you
              agree to adhere to the refund policy outlined below.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#0b0b1a]">
              2. Eligibility for Refund
            </h2>

            <h3 className="mt-5 text-base font-semibold text-[#0b0b1a]">
              2.1 Service Cancellation
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              Customers may be eligible for a refund in the following
              situations:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
              <li>
                The customer cancels the service within 1 week of initial
                activation, as specified in the terms and conditions.
              </li>
            </ul>

            <h3 className="mt-6 text-base font-semibold text-[#0b0b1a]">
              2.2 Service Disruption
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              If the Company is unable to provide the services due to reasons
              beyond the customer&apos;s control, the customer may be eligible
              for a refund for the unused portion of their service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#0b0b1a]">
              3. Refund Process
            </h2>

            <h3 className="mt-5 text-base font-semibold text-[#0b0b1a]">
              3.1 Notification
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              To request a refund, customers must contact our customer support
              team. The request must include relevant details, including the
              reason for the refund.
            </p>

            <h3 className="mt-6 text-base font-semibold text-[#0b0b1a]">
              3.2 Evaluation
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              Each refund request will be evaluated on a case-by-case basis. The
              Company reserves the right to determine eligibility based on the
              circumstances.
            </p>

            <h3 className="mt-6 text-base font-semibold text-[#0b0b1a]">
              3.3 Refund Method
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              Refunds, if approved, will be processed using the original payment
              method used for the purchase.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#0b0b1a]">4. Exclusions</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              The following situations are not eligible for a refund:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
              <li>
                Failure to adhere to the terms and conditions outlined in the
                service agreement.
              </li>
              <li>
                Service disruption or performance issues caused by factors
                outside the Company&apos;s control (e.g., acts of nature,
                network outages).
              </li>
              <li>
                Refund requests made after 6 months from the expiration date
                will not be considered or processed. No device collections will
                be initiated.
              </li>
              <li>OTT recharge is non-refundable; apps are subject to change.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#0b0b1a]">5. Timelines</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              Refund processing times may vary and are subject to the payment
              processor&apos;s policies. Customers will be notified of the
              estimated processing time upon approval of the refund.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0b0b1a]">6. Contact Us</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              If you have any questions or concerns about our refund policy,
              please contact us at:
            </p>
            <p className="mt-3">
              <a
                href="tel:+917389692807"
                className="text-lg font-semibold text-indigo-600 hover:text-indigo-800"
              >
                73896 92807
              </a>
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
