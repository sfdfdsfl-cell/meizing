"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Gamepad2,
  Clapperboard,
  Lock,
  Network,
  Headphones,
  Gauge,
  type LucideIcon,
} from "lucide-react";

const features: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Gamepad2,
    title: "Low Latency Gaming",
    description:
      "Direct peering with major game servers ensures ping times under 15ms for competitive play.",
  },
  {
    icon: Clapperboard,
    title: "4K/8K Streaming",
    description:
      "Buffer-free streaming on multiple devices simultaneously, even during peak hours.",
  },
  {
    icon: Lock,
    title: "Advanced Security",
    description:
      "Network-level threat protection blocks malware and phishing attempts before they reach your devices.",
  },
  {
    icon: Network,
    title: "Whole-Home Mesh",
    description:
      "Optional mesh WiFi 6E system eliminates dead zones in homes up to 5,000 sq ft",
  },
  {
    icon: Headphones,
    title: "24/7 Local Support",
    description:
      "Our support team is based locally, ensuring you speak to someone who understands your area.",
  },
  {
    icon: Gauge,
    title: "Symmetrical Speeds",
    description:
      "Upload as fast as you download. Perfect for content creators, cloud backups, and video calls.",
  },
];

export default function PlansFeatures() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
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
    <section aria-labelledby="why-fast-heading" className="w-full bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center"
        >
          <span className="inline-flex items-center rounded-full border border-indigo-300 bg-white px-4 py-1.5 text-xs font-semibold text-indigo-600">
            Why we are so FAST?
          </span>
          <h2
            id="why-fast-heading"
            className="mx-auto mt-6 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#0b0b1a] sm:text-4xl"
          >
            Engineered for the modern digital lifestyle
          </h2>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.li
                key={feature.title}
                variants={item}
                className="rounded-2xl bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <Icon
                  className="h-7 w-7 text-indigo-600"
                  strokeWidth={2}
                />
                <h3 className="mt-4 text-lg font-bold text-[#0b0b1a]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {feature.description}
                </p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
