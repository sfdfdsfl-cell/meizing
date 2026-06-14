"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Mail,
  MonitorSmartphone,
  Video,
  MonitorPlay,
  Briefcase,
  Tv,
  Gamepad2,
  Wifi,
  ArrowLeftRight,
  Box,
  Network,
  Zap,
  type LucideIcon,
} from "lucide-react";

type Feature = { icon: LucideIcon; label: string };

const plans: {
  name: string;
  speed: string;
  features: Feature[];
  price: string;
}[] = [
  {
    name: "Starter",
    speed: "30",
    features: [
      { icon: Mail, label: "Email & Browsing" },
      { icon: MonitorSmartphone, label: "1-2 Devices" },
    ],
    price: "399.00",
  },
  {
    name: "Essential",
    speed: "50",
    features: [
      { icon: Video, label: "Video Calls" },
      { icon: MonitorSmartphone, label: "Up to 4 Devices" },
    ],
    price: "599.00",
  },
  {
    name: "Standard",
    speed: "100",
    features: [
      { icon: MonitorPlay, label: "Full HD Streaming" },
      { icon: MonitorSmartphone, label: "Up to 6 Devices" },
    ],
    price: "799.00",
  },
  {
    name: "Plus",
    speed: "200",
    features: [
      { icon: Briefcase, label: "Remote Work Pro" },
      { icon: MonitorSmartphone, label: "Up to 10 Devices" },
    ],
    price: "1199.00",
  },
  {
    name: "Streamer",
    speed: "300",
    features: [
      { icon: Tv, label: "4K UHD Content" },
      { icon: MonitorSmartphone, label: "12+ Devices" },
    ],
    price: "1499.00",
  },
  {
    name: "Best Value Ultra",
    speed: "500",
    features: [
      { icon: Gamepad2, label: "Low-Latency Gaming" },
      { icon: Wifi, label: "Whole-Home Coverage" },
    ],
    price: "2499.00",
  },
  {
    name: "Gigabit Elite",
    speed: "1000",
    features: [
      { icon: ArrowLeftRight, label: "Infinite Symmetrical" },
      { icon: Box, label: "8K & Meta Ready" },
    ],
    price: "3999.00",
  },
  {
    name: "Extreme Elite",
    speed: "1200",
    features: [
      { icon: Network, label: "50+ Smart Devices" },
      { icon: Zap, label: "Network Priority" },
    ],
    price: "4999.00",
  },
];

export default function PlansPricing() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section
      id="plans"
      aria-labelledby="pricing-heading"
      className="w-full scroll-mt-24 bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center"
        >
          <span className="inline-flex items-center rounded-full border border-indigo-300 bg-white px-4 py-1.5 text-xs font-semibold text-indigo-600">
            Our Plans
          </span>
          <h2
            id="pricing-heading"
            className="mt-6 text-3xl font-bold tracking-tight text-[#0b0b1a] sm:text-4xl"
          >
            Transparent pricing for every digital lifestyle.
          </h2>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {plans.map((plan) => (
            <motion.li
              key={plan.name}
              variants={item}
              className="flex flex-col rounded-2xl bg-[#eef1fb] p-6 transition-shadow hover:shadow-md"
            >
              <p className="text-sm text-slate-500">{plan.name}</p>
              <p className="mt-1 text-2xl font-bold text-[#0b0b1a]">
                {plan.speed}
                <span className="ml-1.5 text-sm font-medium text-slate-400">
                  Mbps
                </span>
              </p>

              <ul className="mt-4 space-y-2.5 border-b border-slate-200 pb-5">
                {plan.features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <li
                      key={feature.label}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <Icon
                        className="h-4 w-4 shrink-0 text-indigo-600"
                        strokeWidth={2}
                      />
                      {feature.label}
                    </li>
                  );
                })}
              </ul>

              <p className="mt-5 text-base font-bold text-[#0b0b1a]">
                {plan.price}
                <span className="font-medium text-slate-400">/Month</span>
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
