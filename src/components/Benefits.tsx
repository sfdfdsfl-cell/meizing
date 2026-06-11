"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const benefits = [
  {
    title: "Ultra-fast speeds",
    description:
      "Experience download speeds up to 1 gbps with our cutting-edge fiber-optic technology.",
  },
  {
    title: "99.9% uptime",
    description:
      "Reliable connection you can count on with industry-leading uptime guarantee.",
  },
  {
    title: "24/7 support",
    description:
      "Our expert support team is always available to help you with any questions.",
  },
  {
    title: "No data caps",
    description:
      "Stream, game, and browse as much as you want with unlimited data.",
  },
  {
    title: "Free equipment",
    description:
      "Get a high-performance router and modem included with every plan.",
  },
  {
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
    <section aria-labelledby="benefits-heading" className="w-full bg-white">
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
          {benefits.map((benefit) => (
            <motion.li
              key={benefit.title}
              variants={item}
              className="rounded-2xl bg-[#eef0fb] px-8 py-8 text-center transition-shadow hover:shadow-md"
            >
              <h3 className="text-base font-bold uppercase tracking-wide text-indigo-600">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {benefit.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
