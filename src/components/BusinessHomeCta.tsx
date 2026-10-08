import Link from "next/link";
import { Gamepad2, Gauge, Router, Wifi, type LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

const perks: { icon: LucideIcon; iconClass: string; title: string; description: string }[] = [
  {
    icon: Gauge,
    iconClass: "bg-indigo-100 text-indigo-700",
    title: "100% Symmetrical",
    description: "Equal upload & download speeds with zero throttling.",
  },
  {
    icon: Router,
    iconClass: "bg-emerald-100 text-emerald-700",
    title: "Free Wi-Fi 6 Router",
    description: "Dual-band router with free home installation.",
  },
  {
    icon: Gamepad2,
    iconClass: "bg-indigo-100 text-indigo-700",
    title: "Gaming Fastpath",
    description: "Sub-4ms ping with direct gaming server peering.",
  },
  {
    icon: Wifi,
    iconClass: "bg-emerald-100 text-emerald-700",
    title: "16+ OTT Apps",
    description: "All leading subscriptions unified in one plan.",
  },
];

export default function BusinessHomeCta() {
  return (
    <section
      aria-labelledby="home-cta-heading"
      className="w-full bg-linear-to-b from-[#f3f3f5] to-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center sm:px-10">
            {/* Soft colour glows */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-indigo-200/50 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl"
            />

            <div className="relative">
              <span className="inline-flex items-center rounded-full border border-indigo-400 bg-indigo-50 px-3 py-1 text-[10px] font-medium text-indigo-700">
                Residential Fiber &amp; Entertainment
              </span>
              <h2
                id="home-cta-heading"
                className="mt-4 text-2xl font-bold tracking-tight text-[#0b0b1a] sm:text-4xl"
              >
                Need a Home &amp; Entertainment Plan?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-xs leading-relaxed text-slate-500 sm:text-sm">
                Blazing symmetrical fiber with zero data caps, lag-free gaming,
                and 16+ 4K OTT apps for your whole household.
              </p>

              <ul className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 text-left sm:grid-cols-2 lg:grid-cols-4">
                {perks.map((perk) => {
                  const Icon = perk.icon;
                  return (
                    <li
                      key={perk.title}
                      className="rounded-xl border border-slate-200 bg-slate-50/80 p-3 backdrop-blur-sm"
                    >
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-md ${perk.iconClass}`}
                      >
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <p className="mt-3 text-xs font-semibold text-[#0b0b1a]">
                        {perk.title}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                        {perk.description}
                      </p>
                    </li>
                  );
                })}
              </ul>

              <Link
                href="/home-plans"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#2d2be0] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-colors hover:bg-[#2018c4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0]"
              >
                Go to Home Plan Page
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
