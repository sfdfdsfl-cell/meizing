import Link from "next/link";
import {
  CircleCheck,
  Gauge,
  Heart,
  Hotel,
  Router,
  Server,
  Users,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";

type Industry = {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
  tag: string;
  tagClass: string;
};

const green = "text-emerald-700";
const blue = "text-[#2d2be0]";

const industries: Industry[] = [
  {
    icon: Router,
    iconClass: "bg-indigo-50 text-indigo-700",
    title: "Educational Institutions",
    description:
      "Campus-wide high-density Wi-Fi with low-latency virtual classrooms and isolated academic subnets.",
    tag: "SLA: 99.9% Uptime",
    tagClass: green,
  },
  {
    icon: Users,
    iconClass: "bg-emerald-50 text-emerald-700",
    title: "Co-working Spaces",
    description:
      "Multi-tenant client subnets with dynamic bandwidth allocation and automated multi-link failover.",
    tag: "Dynamic Subnet VLANs",
    tagClass: green,
  },
  {
    icon: Hotel,
    iconClass: "bg-indigo-50 text-indigo-700",
    title: "Hospitality & Hotels",
    description:
      "Seamless captive portal with PMS integration, conference live-streaming, and guest VLAN isolation.",
    tag: "Burst-Buffer Ready",
    tagClass: blue,
  },
  {
    icon: Heart,
    iconClass: "bg-rose-50 text-rose-600",
    title: "Healthcare & Hospitals",
    description:
      "Zero-downtime EHR, 4K telemedicine streaming, and fast high-throughput DICOM scan transfers.",
    tag: "Priority 1 NOC Routing",
    tagClass: blue,
  },
  {
    icon: Gauge,
    iconClass: "bg-emerald-50 text-emerald-700",
    title: "Manufacturing & Units",
    description:
      "Real-time smart factory IoT telemetry, cloud SCADA synchronization, and ERP replication.",
    tag: "Low-Jitter 1:1 Pipe",
    tagClass: green,
  },
];

const staticIpFeatures = [
  { label: "24/7 Remote NVR & CCTV stream access", className: "border-emerald-200 bg-emerald-50/70" },
  { label: "Zero IP drift & secure biometric syncing", className: "border-indigo-100 bg-indigo-50/70" },
  { label: "IPv4 & IPv6 Available", className: "border-emerald-200 bg-emerald-50/70" },
];

function IndustryCard({ industry }: { industry: Industry }) {
  const Icon = industry.icon;
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 transition-shadow duration-300 hover:shadow-md">
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-lg ${industry.iconClass}`}
      >
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-base font-bold text-[#0b0b1a]">
        {industry.title}
      </h3>
      <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
        {industry.description}
      </p>
      <p className={`mt-4 text-xs font-semibold ${industry.tagClass}`}>
        {industry.tag}
      </p>
    </div>
  );
}

function StaticIpCard() {
  return (
    <div className="rounded-xl border border-indigo-200 bg-linear-to-b from-[#eceefd] to-[#f6f7fe] p-5 shadow-lg shadow-indigo-500/10">
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
          <Server className="h-4 w-4" aria-hidden="true" />
        </span>
        <span className="rounded-full border border-indigo-400 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase text-indigo-700">
          Static IP Addon
        </span>
      </div>
      <h3 className="mt-4 text-base font-bold text-[#0b0b1a]">
        Static IP Infrastructure
      </h3>
      <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
        Permanent fixed IP for NVR camera feeds, encrypted IPSec VPN tunnels &amp;
        zero DNS drift.
      </p>
      <ul className="mt-4 space-y-2">
        {staticIpFeatures.map((feature) => (
          <li
            key={feature.label}
            className={`flex items-center gap-2 rounded-md border px-3 py-2 text-xs text-slate-700 ${feature.className}`}
          >
            <CircleCheck
              className="h-3.5 w-3.5 shrink-0 text-emerald-600"
              aria-hidden="true"
            />
            {feature.label}
          </li>
        ))}
      </ul>
      <Link
        href="/booking?plan=Static+IP+Addon+%E2%80%93+%E2%82%B92499%2Fyear&from=business"
        className="mt-5 flex w-full items-center justify-center rounded-full bg-[#2d2be0] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-colors hover:bg-[#2018c4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0]"
      >
        Starting price ₹2499 / Yearly
      </Link>
    </div>
  );
}

export default function BusinessIndustries() {
  // Static IP card sits third, at the end of the first row (as in the design).
  const cards = [
    <IndustryCard key="edu" industry={industries[0]} />,
    <IndustryCard key="cowork" industry={industries[1]} />,
    <StaticIpCard key="static-ip" />,
    ...industries.slice(2).map((industry) => (
      <IndustryCard key={industry.title} industry={industry} />
    )),
  ];

  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="w-full scroll-mt-20 bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal className="text-center">
          <span className="inline-flex items-center rounded-full border border-indigo-400 bg-indigo-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-indigo-700">
            Sector solutions
          </span>
          <h2
            id="industries-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-[#0b0b1a] sm:text-4xl"
          >
            Tailored for Every Industry
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-500">
            Engineered specifically to solve bandwidth, latency, and compliance
            demands across sectors.
          </p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal as="li" key={card.key} delay={(i % 3) * 0.08}>
              {card}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
