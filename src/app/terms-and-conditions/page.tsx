import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions governing the use of services provided by Mezing Broadband Private Limited — subscription, usage, billing, privacy, termination, liability, and governing law.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />

      <main className="flex flex-1 flex-col bg-white">
        {/* Page header */}
        <section className="w-full bg-linear-to-b from-[#d7dcf3] to-white">
          <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
            <h1 className="text-3xl font-bold tracking-tight text-[#0b0b1a] sm:text-4xl">
              Terms &amp; Conditions
            </h1>
            <p className="mt-3 text-sm text-slate-500">
              Last updated: June 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto w-full max-w-3xl px-6 py-14">
          <p className="leading-relaxed text-slate-600">
            These Terms and Conditions (&quot;Agreement&quot;) govern the use of
            services provided by MEZING BROADBAND PRIVATE LIMITED (&quot;the
            Company&quot;). By using the services provided by the Company, you
            agree to be bound by the terms and conditions outlined below. If you
            do not agree with any part of this Agreement, please refrain from
            using our services.
          </p>

          <section className="mt-10 mb-10">
            <h2 className="text-xl font-bold text-[#0b0b1a]">1. Definitions</h2>

            <h3 className="mt-5 text-base font-semibold text-[#0b0b1a]">
              1.1 &quot;Customer&quot;
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              Refers to any individual or entity who subscribes to the services
              provided by the Company.
            </p>

            <h3 className="mt-6 text-base font-semibold text-[#0b0b1a]">
              1.2 &quot;Services&quot;
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              Refers to the internet access and related services provided by the
              Company.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#0b0b1a]">
              2. Service Subscription
            </h2>

            <h3 className="mt-5 text-base font-semibold text-[#0b0b1a]">
              2.1 Eligibility
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              To subscribe to our services, you must be of legal age and have the
              capacity to enter into a binding contract in your jurisdiction.
            </p>

            <h3 className="mt-6 text-base font-semibold text-[#0b0b1a]">
              2.2 Subscription Process
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              To subscribe to our services, you must complete the CAF process,
              providing accurate and up-to-date information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#0b0b1a]">3. Service Usage</h2>

            <h3 className="mt-5 text-base font-semibold text-[#0b0b1a]">
              3.1 Acceptable Use
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              Customers agree to use the services in compliance with all
              applicable laws and regulations. This includes, but is not limited
              to, refraining from engaging in any illegal activities,
              transmitting malware, or engaging in any form of abuse or
              harassment.
            </p>

            <h3 className="mt-6 text-base font-semibold text-[#0b0b1a]">
              3.2 Bandwidth Usage
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              The Company may monitor and manage bandwidth usage to ensure fair
              access to all customers. Excessive usage may result in reduced
              speeds or temporary suspension of service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#0b0b1a]">
              4. Payment and Billing
            </h2>

            <h3 className="mt-5 text-base font-semibold text-[#0b0b1a]">
              4.1 Fees and Charges
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              Customers agree to pay all applicable fees and charges associated
              with the selected service plan. The Company reserves the right to
              change pricing and fees.
            </p>

            <h3 className="mt-6 text-base font-semibold text-[#0b0b1a]">
              4.2 Billing Cycle
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              Billing cycles are determined by the selected service plan.
              Payments are due on the specified billing date.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
              <li>Month refers to a period of 30 days</li>
              <li>
                OTT recharge is non-refundable, apps are subject to change, and
                rental plans may vary across different platforms
              </li>
            </ul>

            <h3 className="mt-6 text-base font-semibold text-[#0b0b1a]">
              4.3 Data Limit
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              FUP limit is set at 3.3 TB per month, after which speed will be
              reduced.
            </p>

            <h3 className="mt-6 text-base font-semibold text-[#0b0b1a]">
              4.4 Speed Post-FUP
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              Reduces speeds to 1 Mbps after reaching the FUP threshold.
            </p>

            <h3 className="mt-6 text-base font-semibold text-[#0b0b1a]">
              4.5 Late Payments
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              Late payments may result in a suspension of services. The Company
              may charge late fees as outlined in the pricing policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#0b0b1a]">
              5. Privacy and Data Protection
            </h2>

            <h3 className="mt-5 text-base font-semibold text-[#0b0b1a]">
              5.1 Privacy Policy
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              The Company&apos;s privacy policy outlines how customer data is
              collected, used, and protected. By using our services, you agree to
              the terms of our{" "}
              <Link
                href="/privacy-policy"
                className="font-medium text-indigo-600 hover:text-indigo-800"
              >
                privacy policy
              </Link>
              .
            </p>

            <h3 className="mt-6 text-base font-semibold text-[#0b0b1a]">
              5.2 Data Security
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              The Company employs industry-standard security measures to protect
              customer data. However, the Company cannot guarantee the security
              of data transmitted over the internet.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#0b0b1a]">
              6. Termination of Services
            </h2>

            <h3 className="mt-5 text-base font-semibold text-[#0b0b1a]">
              6.1 Termination by Customer
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              Customers may terminate services by providing written notice as
              outlined in the cancellation policy.
            </p>

            <h3 className="mt-6 text-base font-semibold text-[#0b0b1a]">
              6.2 Termination by Company
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              The Company reserves the right to terminate services for violation
              of this Agreement or for any other reason.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#0b0b1a]">
              7. Limitation of Liability
            </h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              The Company shall not be liable for any direct, indirect,
              incidental, special, or consequential damages arising out of the
              use or inability to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0b0b1a]">8. Governing Law</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              This Agreement shall be governed by and construed in accordance
              with the laws of Sagar Jurisdiction. Any disputes arising under
              this Agreement shall be resolved in the courts of Sagar
              Jurisdiction.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
