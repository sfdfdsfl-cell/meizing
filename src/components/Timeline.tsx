"use client";

import { motion, useReducedMotion } from "framer-motion";

const milestones = [
  {
    year: "2017: The Vision",
    text: "Mezing Fibre was founded with a single mission: to bridge the digital divide in our local communities with world-class fiber technology.",
  },
  {
    year: "2020: Rapid Expansion",
    text: "Scaled our infrastructure across multiple regions and secured strategic partnerships with major telecom giants to enhance our last-mile delivery.",
  },
  {
    year: "2024: Market Leadership",
    text: "Now a trusted name in high-speed fiber optics, serving thousands with 24/7 support and ultra-reliable infrastructure.",
  },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function Timeline() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="timeline-heading"
      className="w-full overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
          className="text-center"
        >
          <h2
            id="timeline-heading"
            className="text-3xl font-bold tracking-tight text-[#0b0b1a] sm:text-4xl"
          >
            Our Growth Timeline
          </h2>
          <p className="mt-3 text-sm text-slate-500 sm:text-base">
            Evolution of speed and service over the years
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Vertical line (draws in on scroll) */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleY: reduceMotion ? 1 : 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute bottom-4 left-4 top-4 w-0.5 origin-top bg-slate-200 md:left-1/2 md:-translate-x-1/2"
          />

          <ul className="space-y-10 md:space-y-16">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              return (
                <li key={milestone.year} className="relative">
                  {/* Node */}
                  <motion.span
                    aria-hidden="true"
                    initial={{ scale: reduceMotion ? 1 : 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.3, ease, delay: 0.15 }}
                    className="absolute left-4 top-1/2 z-10 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-slate-200 md:left-1/2"
                  />

                  {/* Card */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: reduceMotion ? 0 : isLeft ? -48 : 48,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.55, ease }}
                    className={
                      isLeft
                        ? "rounded-lg bg-slate-100 p-6 pl-12 md:ml-0 md:w-1/2 md:pl-6 md:pr-10 md:text-right"
                        : "rounded-lg bg-slate-100 p-6 pl-12 md:ml-auto md:w-1/2 md:pl-10"
                    }
                  >
                    <h3 className="font-bold text-[#0b0b1a]">
                      {milestone.year}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {milestone.text}
                    </p>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
