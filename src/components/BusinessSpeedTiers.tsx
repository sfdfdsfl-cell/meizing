import Link from "next/link";
import { CircleCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

type Tier = {
  audience: string;
  speed: number;
  price: string;
  description: string;
  features: string[];
  /** "popular" = blue outlined highlight, "enterprise" = lavender premium card */
  variant?: "popular" | "enterprise";
};

const tiers: Tier[] = [
  {
    audience: "Micro-Offices",
    speed: 10,
    price: "999",
    description:
      "Ideal for micro-offices, retail storefronts, basic email, web operations, and billing POS.",
    features: [
      "Unlimited uncapped commercial data",
      "Wi-Fi router included & free installation",
      "Standard business hours support desk",
    ],
  },
  {
    audience: "Small Studios & Startups",
    speed: 20,
    price: "1,999",
    description:
      "Designed for boutique agencies and startups needing seamless VoIP calls & everyday SaaS tools.",
    features: [
      "Low-jitter VoIP & crystal voice priority",
      "Dual-band Gigabit Wi-Fi 6 hardware",
      "24x7 active network monitoring",
    ],
  },
  {
    audience: "Growing SMBs",
    speed: 50,
    price: "3,999",
    description:
      "Multi-user sync, HD Zoom/Teams video conferencing, and uninterrupted hybrid team workflows.",
    features: [
      "Simultaneous multi-stream HD conferencing",
      "Static IP compatibility & VPN pass-through",
      "Priority ticket resolution (< 6 hr SLA)",
    ],
    variant: "popular",
  },
  {
    audience: "Medium Offices",
    speed: 100,
    price: "7,999",
    description:
      "Engineered for medium enterprise branch offices, heavy cloud backups, ERP, and CRM sync.",
    features: [
      "High-speed offsite cloud file sync & NAS",
      "Dedicated enterprise account representative",
      "99.7% guaranteed network availability",
    ],
  },
  {
    audience: "High-Demand Branches",
    speed: 200,
    price: "14,999",
    description:
      "Fast heavy uploads, continuous remote desktop streams, media production, and multi-VLAN offices.",
    features: [
      "Symmetrical burst throughput & low latency",
      "1 Free Static IP (/32) included on request",
      "MTTR < 4 hr priority dispatch SLA",
    ],
  },
  {
    audience: "Enterprise Workplaces",
    speed: 300,
    price: "19,999",
    description:
      "Enterprise multi-floor campuses requiring zero throttle, deterministic QoS, and Level-3 NOC routing.",
    features: [
      "Deterministic QoS with zero traffic policing",
      "Level-3 Enterprise NOC direct routing link",
      "99.9% financially backed availability SLA",
    ],
    variant: "enterprise",
  },
];

const cardStyles = {
  default: "border border-slate-200 bg-white hover:shadow-lg",
  popular:
    "border-2 border-[#2d2be0] bg-white shadow-xl shadow-indigo-500/15",
  enterprise:
    "border border-indigo-200 bg-linear-to-b from-[#eef0fd] to-[#f7f8fe] shadow-lg shadow-indigo-500/10",
};

function TierCard({ tier }: { tier: Tier }) {
  const highlighted = tier.variant !== undefined;

  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl p-6 transition-shadow duration-300 ${
        cardStyles[tier.variant ?? "default"]
      }`}
    >
      {tier.variant === "popular" && (
        <span className="absolute right-3 top-3 rounded-md bg-[#2d2be0] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          Most Popular SMB
        </span>
      )}

      <span
        className={`self-start rounded-md px-2.5 py-1 text-[10px] font-medium ${
          highlighted
            ? "bg-indigo-100 text-indigo-700"
            : "bg-slate-100 text-slate-600"
        }`}
      >
        {tier.audience}
      </span>

      <p className="mt-3 flex items-baseline gap-2">
        <span className="text-3xl font-bold text-[#0b0b1a]">{tier.speed}</span>
        <span className="text-sm text-slate-600">Mbps</span>
      </p>

      <p className="mt-1 flex items-baseline gap-1.5">
        <span
          className={`text-2xl font-bold ${
            tier.variant === "popular" ? "text-[#2d2be0]" : "text-[#0b0b1a]"
          }`}
        >
          ₹{tier.price}
        </span>
        <span className="text-xs text-slate-500">/month + GST</span>
      </p>

      <p className="mt-3 text-xs leading-relaxed text-slate-500 sm:text-sm">
        {tier.description}
      </p>

      <hr className="my-4 border-slate-200" />

      <ul className="space-y-2.5">
        {tier.features.map((feature) => (
          <li key={feature} className="flex gap-2.5 text-xs text-slate-700 sm:text-sm">
            <CircleCheck
              className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        <Link
          href={`/booking?${new URLSearchParams({
            plan: `Business ${tier.speed} Mbps – ₹${tier.price}/month`,
            from: "business",
          })}`}
          className={`flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0] ${
            highlighted
              ? "bg-[#2d2be0] text-white shadow-lg shadow-indigo-500/30 hover:bg-[#2018c4]"
              : "border border-[#2d2be0] text-[#2d2be0] hover:bg-indigo-50"
          }`}
        >
          Choose {tier.speed} Mbps Plan
        </Link>
      </div>
    </div>
  );
}

export default function BusinessSpeedTiers() {
  return (
    <section
      aria-labelledby="speed-tiers-heading"
      className="w-full bg-[#f6f7fb]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex items-center rounded-full border border-indigo-400 bg-indigo-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-indigo-700">
              SME &amp; Corporate Broadband
            </span>
            <h2
              id="speed-tiers-heading"
              className="mt-4 text-2xl font-bold tracking-tight text-[#0b0b1a] sm:text-3xl"
            >
              Affordable High-Performance Speed Tiers
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-500">
              Fixed commercial rates with zero throttling, symmetrical fiber
              peering, and 24x7 enterprise NOC support.
            </p>
          </div>
          <span className="self-start rounded-md border border-indigo-400 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 lg:self-auto">
            No Hidden Charges • Free Dual-Band Wi-Fi 6 Router
          </span>
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal
              as="li"
              key={tier.speed}
              delay={(i % 3) * 0.08}
              className="h-full"
            >
              <TierCard tier={tier} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
