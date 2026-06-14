"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const partners = [
  {
    src: "/bsnl.png",
    alt: "BSNL",
    label: "BSNL Infrastructure",
    width: 136,
    height: 56,
  },
  {
    src: "/railwire.png",
    alt: "RailWire Express Network",
    label: "RailWire Network",
    width: 91,
    height: 56,
  },
  {
    src: "/railtel.png",
    alt: "RailTel",
    label: "RailTel Services",
    width: 144,
    height: 56,
  },
];

export default function AboutPartners() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
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
    <section aria-labelledby="partners-heading" className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Credibility
          </p>
          <h2
            id="partners-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-[#0b0b1a] sm:text-4xl"
          >
            Authorized Last Mile Partner
          </h2>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {partners.map((partner) => (
            <motion.li
              key={partner.label}
              variants={item}
              className="flex flex-col items-center rounded-2xl border border-slate-200 bg-slate-50 px-8 py-10 text-center transition-shadow hover:shadow-md"
            >
              <div className="flex h-20 w-36 items-center justify-center rounded-xl border border-slate-200 bg-white px-4">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width}
                  height={partner.height}
                  className="h-9 w-auto object-contain"
                />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                {partner.label}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
