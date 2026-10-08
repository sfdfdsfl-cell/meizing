"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp, Info } from "lucide-react";
import Reveal from "@/components/Reveal";

const terms: { title: string; body: string }[] = [
  {
    title: "18% GST Applicable",
    body: "All tariff plan rates are base telecom charges exclusive of 18% Goods & Services Tax (CGST 9% + SGST 9% or IGST 18%), itemized clearly on your official monthly tax invoice.",
  },
  {
    title: "Zero Security Deposit & ONT Ownership",
    body: "The optical network terminal (ONT / Wi-Fi router) is provided on loan without any upfront rental deposit. Hardware remains the property of Mezing Broadband and must be returned in operating condition upon line surrender.",
  },
  {
    title: "Fair Usage Policy (FUP)",
    body: "Residential high-speed unlimited plans come with a generous monthly quota of 3,300 GB (3.3 TB). Upon consumption of FUP, speed adjusts to 2 Mbps unlimited till the next billing cycle.",
  },
  {
    title: "Installation SLA & Support Guarantee",
    body: "Fiber drop cable pulling and patch cord installation is carried out within 24 to 72 hours of slot booking. We guarantee 99.5% network uptime with round-the-clock telephone and in-app technical support.",
  },
  {
    title: "30-Day Billing Cycle",
    body: "The billing period initiates strictly on the day optical signal verification is confirmed and your router connection is green. Pre-activation days are never billed.",
  },
  {
    title: "OTT Subscriptions Delivery",
    body: "Bundled OTT app vouchers (Zee5, Hotstar, Prime Video, SonyLIV) activate within 2 hours of internet activation and link directly to your primary registered mobile number.",
  },
];

export default function BookingTerms() {
  const [open, setOpen] = useState(true);

  return (
    <section aria-labelledby="terms-heading" className="w-full">
      <Reveal>
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <h2 id="terms-heading">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="terms-content"
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
            >
              <span className="flex items-center gap-3 text-base font-bold text-[#0b0b1a] sm:text-lg">
                <Info className="h-5 w-5 shrink-0 text-[#2d2be0]" aria-hidden="true" />
                Broadband Service Terms, Regulatory Notice &amp; Conditions
              </span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-transform duration-300 ${
                  open ? "" : "rotate-180"
                }`}
              >
                <ChevronUp className="h-4 w-4" aria-hidden="true" />
              </span>
            </button>
          </h2>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id="terms-content"
                key="terms"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <ul className="grid grid-cols-1 gap-x-10 gap-y-5 border-t border-slate-100 px-5 pb-6 pt-5 sm:px-6 md:grid-cols-2">
                  {terms.map((term) => (
                    <li
                      key={term.title}
                      className="flex gap-3 text-xs leading-relaxed text-slate-500 sm:text-sm"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2d2be0]"
                      />
                      <span>
                        <strong className="font-semibold text-[#0b0b1a]">
                          {term.title}:
                        </strong>{" "}
                        {term.body}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}
