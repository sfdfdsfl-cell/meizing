import Link from "next/link";
import { CircleCheck, Info } from "lucide-react";
import Reveal from "@/components/Reveal";

const corporateFeatures = [
  ["Bandwidth Range", "10 Mbps up to 1,000 Mbps"],
  ["Uncapped Data", "Zero FUP throttling or data caps"],
  ["Hardware", "Managed Wi-Fi 6 Gigabit router included"],
  ["Support", "24x7 dedicated client service desk"],
  ["Turnaround", "Standard 48-hour site installation"],
  ["GST Input Credit", "18% GST Input Tax Credit (ITC) claimable for registered businesses"],
];

const illFeatures = [
  ["Dedicated 1:1 Contention", "Never shared"],
  ["99.9% Uptime Guarantee", "Legally enforceable credit SLA"],
  ["MTTR < 4 Hours", "Priority Level-3 field engineer dispatch"],
  ["Protocols & Static IP", "BGP v4/v6 routing & subnet included"],
  ["Account Manager", "Direct designated enterprise TAM"],
  ["GST Compliant Invoicing", "Save 18% via eligible Input Tax Credit claim"],
];

function FeatureList({ items }: { items: string[][] }) {
  return (
    <ul className="space-y-2.5">
      {items.map(([label, value]) => (
        <li key={label} className="flex gap-2.5 text-xs leading-relaxed text-slate-700 sm:text-sm">
          <CircleCheck
            className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
            aria-hidden="true"
          />
          <span>
            {label}: {value}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function BusinessPlansPricing() {
  return (
    <section
      id="business-plans"
      aria-labelledby="business-pricing-heading"
      className="w-full scroll-mt-28 bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal className="text-center">
          <span className="inline-flex items-center rounded-full border border-indigo-400 bg-indigo-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-indigo-700 sm:text-xs">
            Carrier bandwidth tiers
          </span>
          <h2
            id="business-pricing-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-[#0b0b1a] sm:text-4xl lg:text-[2.75rem]"
          >
            Transparent Business Pricing Plans
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500">
            Affordable commercial broadband for offices or 1:1 uncontended
            dedicated fiber leased lines for mission-critical infrastructure.
          </p>
          <p className="mx-auto mt-5 inline-flex items-start gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-left text-xs font-medium text-emerald-800 sm:items-center">
            <CircleCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
            100% B2B Tax Advantage: Claim 18% GST Input Tax Credit (ITC) on all
            business plans &amp; lease lines with valid GSTIN.
          </p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Corporate Broadband */}
          <Reveal as="li" delay={0.1} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-shadow duration-300 hover:shadow-lg sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-md bg-slate-100 px-2.5 py-1 text-[10px] font-medium text-slate-600 sm:text-xs">
                  SMBs &amp; Growing Offices
                </span>
                <span className="rounded-md bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold text-indigo-700 sm:text-xs">
                  10M – 1G Speed
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-[#0b0b1a]">
                Corporate Broadband
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
                High-speed reliable connectivity optimized for SaaS, cloud
                tools, and multi-user teams.
              </p>

              <div className="mt-5 rounded-xl bg-slate-50 px-4 py-4">
                <p className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold text-[#0b0b1a]">₹999</span>
                  <span className="text-xs text-slate-500">/month + GST</span>
                </p>
              </div>

              <div className="mt-5">
                <FeatureList items={corporateFeatures} />
              </div>

              <div className="mt-auto pt-8">
                <Link
                  href="/booking?plan=Corporate+Broadband+%E2%80%93+%E2%82%B9999%2Fmonth&from=business"
                  className="flex w-full items-center justify-center rounded-full border border-[#2d2be0] px-4 py-2.5 text-sm font-semibold text-[#2d2be0] transition-colors hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0]"
                >
                  Choose Corporate Broadband
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Internet Leased Line */}
          <Reveal as="li" delay={0.18} className="h-full">
            <div className="relative flex h-full flex-col rounded-2xl border-2 border-[#2d2be0] bg-white p-6 shadow-xl shadow-indigo-500/15 sm:p-7">
              <span className="absolute -top-3 right-4 rounded-full bg-[#2d2be0] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                • Most Popular • Flagship
              </span>

              <span className="self-start rounded-md bg-indigo-50 px-2.5 py-1 text-[10px] font-medium text-indigo-700 sm:text-xs">
                Enterprises &amp; Data Centers
              </span>
              <h3 className="mt-4 text-xl font-bold text-[#0b0b1a]">
                Internet Leased Line (ILL)
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
                1:1 uncontended symmetrical optical fiber drop directly linked
                to Tier-1 Internet Exchanges.
              </p>

              <div className="mt-5 rounded-xl border border-indigo-100 bg-[#f1f3fd] px-4 py-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold text-[#0b0b1a]">
                      ₹4,999
                    </span>
                    <span className="text-xs text-slate-500">/month + GST</span>
                  </p>
                  <span className="rounded-md bg-indigo-100 px-2 py-1 text-[10px] font-semibold uppercase text-indigo-700">
                    Custom Quote
                  </span>
                </div>
                <p className="mt-3 flex gap-2 rounded-lg border border-indigo-100 bg-white px-3 py-2.5 text-[11px] leading-relaxed text-slate-600">
                  <Info
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-600"
                    aria-hidden="true"
                  />
                  Note: The Internet Leased Line plan is not available on the
                  site; it is customized to develop as per your requirements.
                  Kindly contact the sales team for the best price proposal.
                </p>
              </div>

              <div className="mt-5">
                <FeatureList items={illFeatures} />
              </div>

              <div className="mt-auto pt-8">
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center rounded-full bg-[#2d2be0] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-colors hover:bg-[#2018c4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0]"
                >
                  Contact Team for Price Proposal
                </Link>
              </div>
            </div>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
