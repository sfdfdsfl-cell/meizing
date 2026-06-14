"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Gauge,
  Timer,
  Headphones,
  Gamepad2,
  Router,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const benefits: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Gauge,
    title: "Ultra-fast speeds",
    description:
      "Experience download speeds up to 1 gbps with our cutting-edge fiber-optic technology.",
  },
  {
    icon: Timer,
    title: "99.9% uptime",
    description:
      "Reliable connection you can count on with industry-leading uptime guarantee.",
  },
  {
    icon: Headphones,
    title: "24/7 support",
    description:
      "Our expert support team is always available to help you with any questions.",
  },
  {
    icon: Gamepad2,
    title: "No data caps",
    description:
      "Stream, game, and browse as much as you want with unlimited data.",
  },
  {
    icon: Router,
    title: "Free equipment",
    description:
      "Get a high-performance router and modem included with every plan.",
  },
  {
    icon: Wrench,
    title: "Easy installation",
    description:
      "Professional installation scheduled at your convenience, usually within 48 hours.",
  },
];

export default function Benefits() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
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
    <section aria-labelledby="benefits-heading" className="w-full bg-[#f0f1fc]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <motion.h2
          id="benefits-heading"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center text-3xl font-bold tracking-tight text-[#0b0b1a] sm:text-4xl"
        >
          Our benefits
        </motion.h2>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.li
                key={benefit.title}
                variants={item}
                className="flex flex-col items-center rounded-2xl bg-white px-8 py-8 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <Icon className="h-7 w-7 text-indigo-600" strokeWidth={2} />
                <h3 className="mt-4 text-base font-bold uppercase tracking-wide text-indigo-600">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {benefit.description}
                </p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
