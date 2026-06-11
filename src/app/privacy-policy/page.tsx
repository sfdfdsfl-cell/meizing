import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Mezing Broadband Private Limited — how we collect, use, disclose, and protect your personal information, data retention, your rights, and how to contact us.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="flex flex-1 flex-col bg-white">
        {/* Page header */}
        <section className="w-full bg-linear-to-b from-[#d7dcf3] to-white">
          <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
            <h1 className="text-3xl font-bold tracking-tight text-[#0b0b1a] sm:text-4xl">
              Privacy Policy
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
              Company&quot;). This Privacy Policy outlines how we collect, use,
              disclose, and protect your personal information. By using our
              services, you consent to the practices described in this policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#0b0b1a]">
              2. Information We Collect
            </h2>

            <h3 className="mt-5 text-base font-semibold text-[#0b0b1a]">
              2.1 Personal Information
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              We may collect the following types of personal information:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
              <li>Name</li>
              <li>Contact Information (e.g., address, email, phone number)</li>
              <li>Billing Information (e.g., payment details)</li>
              <li>Usage Data (e.g., browsing history, data usage)</li>
              <li>Technical Information (e.g., IP address, device information)</li>
            </ul>

            <h3 className="mt-6 text-base font-semibold text-[#0b0b1a]">
              2.2 Cookies and Tracking Technologies
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              We may use cookies and similar tracking technologies to enhance
              your experience on our website and improve our services.
            </p>

            <h3 className="mt-6 text-base font-semibold text-[#0b0b1a]">
              2.3 Location Access (Mezing Broadband One App - Employees Only)
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              This section applies solely to employees of Mezing Broadband who
              use the Mezing Broadband mobile application.
            </p>
            <p className="mt-2 leading-relaxed text-slate-600">
              To ensure the proper functioning of internal systems and features,
              the Mezing Broadband app requires access to your device&apos;s
              foreground and background location. This access is necessary for:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
              <li>Facilitating location-based attendance or check-ins.</li>
              <li>
                Verifying employee presence for task assignments or
                proximity-based coordination.
              </li>
              <li>
                Ensuring secure access to location-restricted features or zones
                within the application.
              </li>
            </ul>
            <p className="mt-4 font-semibold text-[#0b0b1a]">Important Notes:</p>
            <ul className="mt-2 list-disc space-y-2 pl-6 text-slate-600">
              <li>
                Location access is used strictly for internal operational
                purposes.
              </li>
              <li>
                Your exact location is not shared with any third parties, and is
                visible only to authorized Mezing Broadband personnel.
              </li>
              <li>
                Location data is retained for a limited duration, in accordance
                with Mezing Broadband&apos;s internal data retention and security
                policies.
              </li>
              <li>
                Mezing Broadband does not access or use your location for
                marketing, advertising, or tracking outside the scope of
                internal employee operations.
              </li>
            </ul>
            <p className="mt-4 leading-relaxed text-slate-600">
              If you have any concerns regarding location access, please contact
              your internal HR or IT administrator for further assistance.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#0b0b1a]">
              3. How We Use Your Information
            </h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              We use your personal information for the following purposes:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
              <li>Provide, maintain, and improve our services</li>
              <li>Process payments and send billing notifications</li>
              <li>Communicate with you about your account and updates</li>
              <li>Monitor and analyze usage patterns for service optimization</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#0b0b1a]">
              4. Information Sharing and Disclosure
            </h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              We may share your personal information with:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
              <li>Third-party service providers for operational purposes</li>
              <li>
                Legal and regulatory authorities to comply with legal
                obligations
              </li>
              <li>Affiliates and subsidiaries for business purposes</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#0b0b1a]">5. Data Security</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              We implement appropriate security measures to protect your personal
              information from unauthorized access, disclosure, alteration, or
              destruction.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#0b0b1a]">
              6. Data Retention
            </h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              We retain personal information only for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, including
              providing services, complying with legal obligations, resolving
              disputes, and enforcing agreements.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
              <li>
                Account and contact information is retained for the duration of
                the user relationship and up to 24 months after account
                inactivity or termination.
              </li>
              <li>
                Billing and transaction data may be retained for up to 5 years to
                comply with legal and financial regulations.
              </li>
              <li>
                Usage and technical data are retained for a limited period for
                analysis and service improvement.
              </li>
              <li>
                Location data (for Mezing Broadband One employees) is retained
                only for as long as necessary for operational purposes and in
                accordance with internal company policies.
              </li>
            </ul>
            <p className="mt-4 leading-relaxed text-slate-600">
              After the retention period expires, your data will be securely
              deleted or anonymized.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#0b0b1a]">
              7. Data Deletion and User Rights
            </h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              You have the right to request deletion of your personal data at any
              time.
            </p>

            <h3 className="mt-5 text-base font-semibold text-[#0b0b1a]">
              How to Request Deletion
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              You can request deletion of your data by:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
              <li>
                Emailing us at:{" "}
                <a
                  href="mailto:mezingconsultants@gmail.com"
                  className="font-medium text-indigo-600 hover:text-indigo-800"
                >
                  mezingconsultants@gmail.com
                </a>
              </li>
            </ul>

            <h3 className="mt-6 text-base font-semibold text-[#0b0b1a]">
              What Happens Next
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
              <li>
                We will process verified deletion requests within 7-30 business
                days.
              </li>
              <li>
                Once processed, your personal data will be deleted from our
                active systems.
              </li>
              <li>
                Some data may be retained if required for legal, regulatory,
                fraud prevention, or security purposes.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#0b0b1a]">
              8. Changes to this Policy
            </h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              We may update this Privacy Policy to reflect changes in our
              practices or legal requirements. The revised policy will be
              effective upon posting on our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0b0b1a]">9. Contact Us</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              If you have any questions or concerns about this Privacy Policy,
              please contact us via:
            </p>
            <p className="mt-3 leading-relaxed text-slate-600">
              Call us at:{" "}
              <a
                href="tel:+917389692807"
                className="font-semibold text-indigo-600 hover:text-indigo-800"
              >
                7389692807
              </a>
            </p>
            <p className="mt-1 leading-relaxed text-slate-600">
              Email us at:{" "}
              <a
                href="mailto:mezingconsultants@gmail.com"
                className="font-semibold text-indigo-600 hover:text-indigo-800"
              >
                mezingconsultants@gmail.com
              </a>
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
