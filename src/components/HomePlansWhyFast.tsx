import {
  ArrowUpDown,
  Gamepad2,
  Globe,
  Monitor,
  ShieldCheck,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const features: {
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
}[] = [
  {
    icon: Gamepad2,
    tag: "<15ms Ultra-Low Ping",
    title: "Low Latency Gaming",
    description:
      "Direct peering with major game servers ensures ping times under 15ms for competitive play.",
  },
  {
    icon: Monitor,
    tag: "Zero Buffering",
    title: "4K/8K Streaming",
    description:
      "Buffer-free streaming on multiple devices simultaneously, even during peak hours.",
  },
  {
    icon: ShieldCheck,
    tag: "DNS & Threat Shield",
    title: "Advanced Security",
    description:
      "Network-level threat protection blocks malware and phishing attempts before they reach your devices.",
  },
  {
    icon: Wifi,
    tag: "WiFi 6E Ready",
    title: "Whole-Home Mesh",
    description:
      "Optional mesh WiFi 6E system eliminates dead zones in homes up to 5,000 sq ft.",
  },
  {
    icon: Globe,
    tag: "Instant Resolution",
    title: "24/7 Local Support",
    description:
      "Our support team is based locally, ensuring you speak to someone who understands your area.",
  },
  {
    icon: ArrowUpDown,
    tag: "Equal Up & Down",
    title: "Symmetrical Speeds",
    description:
      "Upload as fast as you download. Perfect for content creators, cloud backups, and video calls.",
  },
];

export default function HomePlansWhyFast() {
  return (
    <section aria-labelledby="home-why-fast-heading" className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 pb-20 sm:pb-24">
        <Reveal className="text-center">
          <span className="inline-flex items-center rounded-full border border-indigo-400 bg-indigo-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-indigo-700 sm:text-xs">
            Engineered for performance
          </span>
          <h2
            id="home-why-fast-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-[#0b0b1a] sm:text-5xl"
          >
            Why we are so FAST?
          </h2>
          <p className="mt-4 text-sm text-slate-500 sm:text-base">
            Engineered for the modern digital lifestyle
          </p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal as="li" key={feature.title} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition-shadow duration-300 hover:shadow-md">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-indigo-100 bg-indigo-50 text-indigo-700">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="rounded-full bg-indigo-50 px-3 py-1 text-[10px] font-medium text-indigo-700 sm:text-xs">
                      {feature.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#0b0b1a]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
