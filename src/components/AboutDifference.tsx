"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Rocket, Headphones, ShieldCheck, type LucideIcon } from "lucide-react";

const items: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Rocket,
    title: "Symmetrical Speeds",
    description:
      "Experience identical upload and download speeds, perfect for gaming, video conferencing, and heavy content creation.",
  },
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    description:
      "Our local technical team is always on standby to resolve any issues within hours, not days. We value your uptime.",
  },
  {
    icon: ShieldCheck,
    title: "Military-Grade Reliability",
    description:
      "Our ring-topology infrastructure ensures that even if a line is cut, your data finds another path instantly.",
  },
];

export default function AboutDifference() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section
      id="our-difference"
      aria-labelledby="difference-heading"
      className="w-full scroll-mt-20 bg-[#f0f1fc]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            The Difference
          </p>
          <h2
            id="difference-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-[#0b0b1a] sm:text-4xl"
          >
            Why Mezing Fibre Beats the Rest
          </h2>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {items.map((entry) => {
            const Icon = entry.icon;
            return (
              <motion.li
                key={entry.title}
                variants={item}
                className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-[#0b0b1a]">
                  {entry.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {entry.description}
                </p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
