"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const plans = [
  {
    speed: "100 Mbps",
    popular: false,
    description:
      "Good for e-mail, web browsing, and streaming on 3-4 medium or large screen devices.",
    price: "799.00",
  },
  {
    speed: "200 Mbps",
    popular: true,
    description:
      "Fast online speeds for the whole family connect 10+ devices at once throughout your whole home.",
    price: "1199",
  },
  {
    speed: "300 Mbps",
    popular: false,
    description:
      "Good for streaming through the ultimate wifi experience, multiplayer gaming, and unlimited devices.",
    price: "1499",
  },
];

export default function Plans() {
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
      id="plans"
      aria-labelledby="plans-heading"
      className="w-full scroll-mt-20 bg-linear-to-b from-[#d7dcf3] to-[#bfc7ed]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <motion.h2
          id="plans-heading"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mx-auto max-w-3xl text-center text-3xl font-bold leading-tight tracking-tight text-[#0b0b1a] sm:text-4xl"
        >
          Just take a look at our internet plan and pick which is better for your
          needs.
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.speed}
              variants={item}
              className="flex flex-col rounded-2xl bg-white p-7 shadow-sm transition-shadow hover:shadow-lg"
            >
              <p className="text-lg font-bold text-[#0b0b1a]">
                {plan.speed}
                {plan.popular && (
                  <span className="ml-2 align-middle text-sm font-semibold text-indigo-600">
                    Most popular
                  </span>
                )}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {plan.description}
              </p>
              <p className="mt-6 text-base font-bold text-[#0b0b1a]">
                {plan.price}
                <span className="font-medium text-slate-400">/Month</span>
              </p>
              <a
                href="#"
                className="mt-5 inline-flex w-fit items-center justify-center rounded-full bg-[#2d2be0] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/30 transition-colors hover:bg-[#2018c4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0]"
              >
                Get details
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
