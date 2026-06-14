"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Is there a contract required?",
    answer:
      "No! All our plans are month-to-month with no long-term contracts. Cancel anytime without penalties.",
  },
  {
    question: "What's included with installation?",
    answer:
      "Professional installation is completely free and includes setup of your modem, router, and testing to ensure optimal performance.",
  },
  {
    question: "Are there data caps or throttling?",
    answer:
      "Absolutely not! All our plans include unlimited data with no throttling. Use as much as you need.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes! You can change your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
];

export default function PlansFaq() {
  const reduceMotion = useReducedMotion();
  const [openItems, setOpenItems] = useState<number[]>([0, 1, 2, 3]);

  const toggle = (index: number) =>
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index],
    );

  return (
    <section aria-labelledby="plans-faq-heading" className="w-full bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-20 sm:py-24 md:grid-cols-[1fr_1.8fr] md:gap-14">
        <motion.h2
          id="plans-faq-heading"
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
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 rounded-lg bg-slate-100 px-5 py-4 text-left transition-colors hover:bg-slate-200/70"
                  >
                    <span className="text-sm font-bold text-[#0b0b1a] sm:text-base">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 0 : 180 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0"
                    >
                      <ChevronUp className="h-5 w-5 text-indigo-600" />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
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
                      <p className="px-5 pb-4 pt-3 text-sm leading-relaxed text-slate-500">
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
