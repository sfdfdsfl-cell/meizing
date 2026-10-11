"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Phone, Headphones, MapPin, type LucideIcon } from "lucide-react";

type Line = { text: string; href?: string };

const cards: {
  icon: LucideIcon;
  title: string;
  lines: Line[];
}[] = [
  {
    icon: Phone,
    title: "Customer Care",
    lines: [
      { text: "+91 7389692807", href: "tel:+917389692807" },
      {
        text: "support@mezingbroadband.com",
        href: "mailto:support@mezingbroadband.com",
      },
    ],
  },
  {
    icon: Headphones,
    title: "Sales",
    lines: [
      { text: "+91 7389692807", href: "tel:+917389692807" },
      {
        text: "support@mezingbroadband.com",
        href: "mailto:support@mezingbroadband.com",
      },
    ],
  },
  {
    icon: MapPin,
    title: "Address",
    lines: [{ text: "Sagar, Sagar, Madhya Pradesh, India 470001" }],
  },
];

export default function ContactInfo() {
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
    <section aria-label="Contact information" className="w-full bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.li
                key={card.title}
                variants={item}
                className="flex flex-col items-center rounded-2xl bg-slate-50 px-6 py-8 text-center transition-shadow hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h2 className="mt-4 text-lg font-bold text-[#0b0b1a]">
                  {card.title}
                </h2>
                <div className="mt-3 space-y-1.5">
                  {card.lines.map((line) =>
                    line.href ? (
                      <a
                        key={line.text}
                        href={line.href}
                        className="block break-words text-sm text-slate-500 transition-colors hover:text-indigo-600"
                      >
                        {line.text}
                      </a>
                    ) : (
                      <p
                        key={line.text}
                        className="text-sm leading-relaxed text-slate-500"
                      >
                        {line.text}
                      </p>
                    ),
                  )}
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
