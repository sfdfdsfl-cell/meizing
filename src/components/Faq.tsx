"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "Why is my connection speed lower than expected?",
    answer:
      "Speed can be affected by several factors, including Wi-Fi interference, the age of your device, and the presence of background applications. We recommend testing your speed using a wired Ethernet connection directly to the router. Make sure that no other routers or heat-generating devices are being used in that room.",
  },
  {
    question: "What should I do during a local service outage?",
    answer:
      "First, check our real-time network status in the app. Check the router light; if it's red, an outage may be affecting your area. If an outage is confirmed in your area, our technicians are already working on it.",
  },
  {
    question: "Are there any contracts or hidden fees?",
    answer:
      "None at all. Every plan is contract-free with transparent, flat-rate pricing. There are no data caps, no equipment rental fees, and no surprise charges on your bill.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Professional installation is typically scheduled within 48 hours and takes about an hour. Our technician will set up your equipment, test your connection, and make sure everything is running at full speed before they leave.",
  },
];

function PlusIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
      <span className="absolute h-0.5 w-3.5 rounded-full bg-indigo-600" />
      <motion.span
        className="absolute h-3.5 w-0.5 rounded-full bg-indigo-600"
        animate={{ rotate: open ? 90 : 0, opacity: open ? 0 : 1 }}
        transition={{ duration: 0.25 }}
      />
    </span>
  );
}

export default function Faq() {
  const reduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section aria-labelledby="faq-heading" className="w-full bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pt-20 pb-24 sm:pt-24 md:grid-cols-[1fr_1.6fr] md:gap-16">
        <motion.h2
          id="faq-heading"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-3xl font-bold leading-tight tracking-tight text-[#0b0b1a] sm:text-4xl"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
          className="divide-y divide-slate-200 border-y border-slate-200"
        >
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-indigo-600"
                  >
                    <span className="text-base font-semibold text-[#0b0b1a] sm:text-lg">
                      {faq.question}
                    </span>
                    <PlusIcon open={open} />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { height: "auto", opacity: 1 },
                        collapsed: { height: 0, opacity: 0 },
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-8 text-sm leading-relaxed text-slate-500 sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
