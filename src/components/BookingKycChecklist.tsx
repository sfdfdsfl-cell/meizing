"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import {
  Check,
  CircleCheck,
  FileText,
  Info,
  ShieldCheck,
} from "lucide-react";
import Reveal from "@/components/Reveal";

type Tab = "residential" | "business";

const tabs: { id: Tab; label: string }[] = [
  { id: "residential", label: "Residential (Home Connection)" },
  { id: "business", label: "Business & Commercial" },
];

const proofGroups = [
  {
    title: "1. Proof of Identity (PoI) - Any One",
    tag: "Instant Booking",
    intro: "Must carry your photograph and match applicant full name:",
    items: [
      "Aadhaar Card / e-Aadhaar PDF",
      "Voter Identity Card (EPIC)",
      "Indian Passport (Current & Valid)",
      "Valid Driving License (Smart Card)",
    ],
  },
  {
    title: "2. Proof of Address (PoA) - Any One",
    tag: "Installation Location",
    intro:
      "Address on document must correspond to the requested fiber drop location:",
    items: [
      "Aadhaar Card (with current address)",
      "Electricity / Water Utility Bill (< 3 mos)",
      "Registered Rent Agreement / Lease Deed",
      "Property Tax / Municipal Khata Receipt",
    ],
  },
];

const businessDocs = [
  {
    title: "Goods & Services Tax (GST) Registration",
    description:
      "Mandatory for 18% Input Tax Credit (ITC) billing and commercial SLA terms.",
  },
  {
    title: "Certificate of Incorporation / MSME Udyam / Shop Act",
    description:
      "Document confirming the legal entity registration and registered operating address.",
  },
  {
    title: "Company PAN Card & Authorized Signatory Letter",
    description:
      "Letter of Authorization on company letterhead accompanied by government ID of the authorized signer.",
  },
];

const trustPoints = [
  { icon: CircleCheck, label: "100% Free Optical Installation" },
  { icon: ShieldCheck, label: "100% Secure" },
  { icon: CircleCheck, label: "Zero Security Deposit" },
];

function ResidentialPanel() {
  return (
    <div className="space-y-4">
      {proofGroups.map((group) => (
        <div
          key={group.title}
          className="rounded-xl border border-indigo-100 bg-[#f5f6fd] p-4 sm:p-5"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-[#0b0b1a]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2d2be0]" />
              {group.title}
            </h3>
            <span className="rounded-md border border-indigo-100 bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-[#2d2be0]">
              {group.tag}
            </span>
          </div>
          <p className="mt-3 text-xs text-slate-500">{group.intro}</p>
          <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-xs text-slate-700 sm:text-sm"
              >
                <Check
                  className="h-3.5 w-3.5 shrink-0 text-[#2d2be0]"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <p className="flex gap-3 rounded-xl border border-indigo-200 bg-[#e9edfd] px-4 py-3.5 text-xs font-semibold leading-relaxed text-[#2d2be0] sm:text-sm">
        <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        Photograph Requirement: Keep 1 recent passport-size photograph handy,
        or our field executive will capture a live geo-tagged digital
        photograph during doorstep installation.
      </p>
    </div>
  );
}

function BusinessPanel() {
  return (
    <div className="rounded-xl bg-[#f3f4fb] p-5 sm:p-6">
      <h3 className="text-base font-bold text-[#0b0b1a] sm:text-lg">
        Commercial &amp; Enterprise Documentation Checklist
      </h3>
      <p className="mt-1 text-xs text-slate-500">
        For commercial premises, SME offices, and enterprises requiring
        tax-deductible input invoices:
      </p>
      <ol className="mt-5 space-y-4">
        {businessDocs.map((doc, i) => (
          <li key={doc.title} className="flex gap-3">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-indigo-100 text-[11px] font-bold text-[#2d2be0]">
              {i + 1}
            </span>
            <div>
              <p className="text-sm font-semibold text-[#0b0b1a]">{doc.title}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                {doc.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function BookingKycChecklist({
  initialTab = "residential",
}: {
  initialTab?: Tab;
}) {
  const [active, setActive] = useState<Tab>(initialTab);
  const tabRefs = useRef<Record<Tab, HTMLButtonElement | null>>({
    residential: null,
    business: null,
  });

  // Arrow keys move between tabs (WAI-ARIA tabs pattern).
  const onTabKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const next = active === "residential" ? "business" : "residential";
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section aria-labelledby="kyc-heading" className="w-full">
      <Reveal>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-[#2d2be0] sm:text-xs">
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            TRAI &amp; DoT Mandatory KYC Guidelines
          </span>
          <h2
            id="kyc-heading"
            className="mt-4 text-xl font-bold text-[#0b0b1a] sm:text-2xl"
          >
            Required Documents Checklist
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            As mandated under Department of Telecommunications (DoT) guidelines
            for high-speed broadband lines, keep valid government proof ready.
            Verification is 100% digital and can be completed via Aadhaar OTP
            in under 5 minutes.
          </p>

          <hr className="my-5 border-slate-200" />

          <div
            role="tablist"
            aria-label="Connection type"
            className="grid grid-cols-2 gap-1 rounded-xl bg-slate-100 p-1"
          >
            {tabs.map((tab) => {
              const selected = active === tab.id;
              return (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[tab.id] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`kyc-tab-${tab.id}`}
                  aria-selected={selected}
                  aria-controls={`kyc-panel-${tab.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(tab.id)}
                  onKeyDown={onTabKeyDown}
                  className={`rounded-lg px-3 py-2.5 text-xs font-semibold transition-colors sm:text-sm ${
                    selected
                      ? "bg-[#2d2be0] text-white shadow-md shadow-indigo-500/30"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`kyc-panel-${active}`}
            aria-labelledby={`kyc-tab-${active}`}
            className="mt-5"
          >
            {active === "residential" ? <ResidentialPanel /> : <BusinessPanel />}
          </div>

          <p className="mt-5 flex gap-3 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-500">
            <CircleCheck
              className="mt-0.5 h-4 w-4 shrink-0 text-[#2d2be0]"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold text-[#0b0b1a]">
                Fast-Track Instant Aadhaar e-KYC:
              </strong>{" "}
              If your mobile number is linked to your Aadhaar card, verification
              happens instantly through a secure OTP with zero physical
              paperwork, enabling connection provisioning within 15 minutes of
              physical drop completion.
            </span>
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <ul className="mt-6 flex flex-col items-center gap-3 rounded-xl border border-indigo-100 bg-[#eef1fc] px-5 py-3.5 sm:flex-row sm:justify-between">
          {trustPoints.map(({ icon: Icon, label }, i) => (
            <li
              key={label}
              className="flex items-center gap-2 text-xs font-semibold text-[#2d2be0] sm:text-sm"
            >
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="mr-3 hidden h-1 w-1 rounded-full bg-indigo-300 sm:mr-6 sm:inline-block lg:mr-12"
                />
              )}
              <Icon className="h-4 w-4" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
