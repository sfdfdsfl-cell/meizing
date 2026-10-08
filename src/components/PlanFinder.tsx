"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

const deviceOptions = [
  { label: "1 - 3", base: 30 },
  { label: "3 - 5", base: 50 },
  { label: "5+", base: 100 },
];

const usageOptions = [
  { label: "General Browsing", extra: 0 },
  { label: "HD/4K Streaming", extra: 25 },
  { label: "Work from Home", extra: 25 },
  { label: "Online Gaming", extra: 50 },
  { label: "Smart Home Devices", extra: 25 },
];

/** Speeds (Mbps) we actually sell, ascending. */
const availableSpeeds = [30, 50, 100, 200, 300, 500, 1000, 1200];

function recommendSpeed(deviceIndex: number, usage: string[]) {
  const needed =
    deviceOptions[deviceIndex].base +
    usageOptions
      .filter((option) => usage.includes(option.label))
      .reduce((sum, option) => sum + option.extra, 0);
  return (
    availableSpeeds.find((speed) => speed >= needed) ??
    availableSpeeds[availableSpeeds.length - 1]
  );
}

function OptionButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`w-full rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
        selected
          ? "border-indigo-700 bg-white text-indigo-700"
          : "border-slate-300 text-slate-400 hover:border-slate-400 hover:text-slate-600"
      }`}
    >
      {label}
    </button>
  );
}

function StepCard({
  step,
  question,
  hint,
  children,
}: {
  step: number;
  question: string;
  hint: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-xl border-t border-indigo-300 bg-[#f2f2f4] px-5 py-6 text-center">
      <span className="mx-auto rounded-lg border border-indigo-600 bg-indigo-50 px-4 py-1 text-sm text-indigo-700">
        Step {step}
      </span>
      <h3 className="mt-4 text-base font-semibold leading-snug text-[#0b0b1a]">
        {question}
      </h3>
      <p className="mt-3 text-xs leading-relaxed text-slate-500">{hint}</p>
      <div className="mt-8 flex flex-col gap-3">{children}</div>
    </div>
  );
}

export default function PlanFinder() {
  const reduceMotion = useReducedMotion();
  const [devices, setDevices] = useState(1);
  const [usage, setUsage] = useState<string[]>([
    "HD/4K Streaming",
    "Work from Home",
  ]);
  const [ott, setOtt] = useState(true);

  const speed = recommendSpeed(devices, usage);
  const speedLabel = speed >= 1000 ? `${speed / 1000} Gbps` : `${speed} Mbps`;

  const toggleUsage = (label: string) =>
    setUsage((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label],
    );

  return (
    <section aria-labelledby="plan-finder-heading" className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal className="text-center">
          <span className="inline-block rounded-full border border-indigo-600 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            Plan Customization
          </span>
          <h2
            id="plan-finder-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-[#0b0b1a] sm:text-4xl"
          >
            Find Your Perfect Plan
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Configure your digital lifestyle requirements, and our intelligent
            system will recommend the optimal bandwidth and bundle for your
            home.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-medium text-emerald-800 sm:text-sm">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            transparent pricing: no hidden add-ons or security deposit.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0} className="h-full">
            <StepCard
              step={1}
              question="How many devices will connect to your Wi-Fi?"
              hint="(laptops, TVs, mobiles, smart gadgets)"
            >
              {deviceOptions.map((option, i) => (
                <OptionButton
                  key={option.label}
                  label={option.label}
                  selected={devices === i}
                  onClick={() => setDevices(i)}
                />
              ))}
            </StepCard>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <StepCard
              step={2}
              question="What do you use the internet for?"
              hint="(Select all that apply)"
            >
              {usageOptions.map((option) => (
                <OptionButton
                  key={option.label}
                  label={option.label}
                  selected={usage.includes(option.label)}
                  onClick={() => toggleUsage(option.label)}
                />
              ))}
            </StepCard>
          </Reveal>

          <Reveal delay={0.16} className="h-full">
            <StepCard
              step={3}
              question="Do you want OTT plans included?"
              hint="(Amazon Prime, Zee5, JioHotstar)"
            >
              <OptionButton
                label="Yes, include OTT bundle"
                selected={ott}
                onClick={() => setOtt(true)}
              />
              <OptionButton
                label="No, I'll go without OTT"
                selected={!ott}
                onClick={() => setOtt(false)}
              />
            </StepCard>
          </Reveal>

          <Reveal delay={0.24} className="h-full">
            <div className="flex h-full flex-col rounded-xl border-t border-indigo-300 bg-[#f1f2fc] px-5 py-6 text-center">
              <span className="mx-auto rounded-lg border border-emerald-700 bg-emerald-50 px-4 py-1 text-sm text-emerald-800">
                Your best match
              </span>
              <h3 className="mt-4 text-base font-semibold text-[#0b0b1a]">
                The best plan for you is
              </h3>

              <div aria-live="polite" className="mt-3">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.p
                    key={speedLabel}
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
                    transition={{ duration: 0.2 }}
                    className="text-2xl font-bold leading-tight text-indigo-700"
                  >
                    <span className="text-lg font-semibold">
                      {speedLabel.split(" ")[0]}
                    </span>
                    <br />
                    {speedLabel.split(" ")[1]}
                  </motion.p>
                </AnimatePresence>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-slate-500">
                Based on your selections, we recommend a plan with at least{" "}
                {speedLabel}
                {ott ? " plus an OTT bundle" : ""} to support your household&apos;s
                devices and streaming needs seamlessly.
              </p>

              <div className="mt-auto flex flex-col gap-3 pt-8">
                <Link
                  href={`/booking?${new URLSearchParams({
                    plan: `Recommended ${speedLabel}${ott ? " + OTT bundle" : ""}`,
                    from: "home",
                  })}`}
                  className="rounded-full bg-indigo-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-800"
                >
                  Get Started
                </Link>
                <Link
                  href="/home-plans"
                  className="rounded-full border border-indigo-700 bg-white px-4 py-2.5 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-50"
                >
                  View All Plans
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
