"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/* ---------- Icons ---------- */

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13l0-8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3Z"
        fill="currentColor"
        opacity="0.25"
      />
      <path
        d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3Zm0 2.2 6 2.25V11c0 3.9-2.5 6.8-6 8.85C8.5 17.8 6 14.9 6 11V6.45L12 4.2Z"
        fill="currentColor"
      />
      <path
        d="m9 11.5 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M4 12a8 8 0 0 1 16 0v5a3 3 0 0 1-3 3h-2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect x="3" y="11" width="3.5" height="6" rx="1.5" fill="currentColor" />
      <rect x="17.5" y="11" width="3.5" height="6" rx="1.5" fill="currentColor" />
      <circle cx="12" cy="20" r="1.4" fill="currentColor" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="m5 12 4.5 4.5L19 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------- Widgets ---------- */

function SpeedTestWidget() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-100">
      <p className="text-xs font-medium text-slate-500">Speed test</p>
      <p className="mt-0.5 text-xl font-bold text-[#0b0b1a]">
        2,450 <span className="text-sm font-semibold text-slate-400">Mbps</span>
      </p>
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200">
        <motion.div
          className="h-full rounded-full bg-linear-to-r from-indigo-500 to-[#2d2be0]"
          initial={{ width: reduceMotion ? "82%" : "0%" }}
          whileInView={{ width: "82%" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}

function StatusWidget() {
  const rows = [
    { title: "Firewall active", sub: "0 threats detected" },
    { title: "Network stable", sub: "Uptime 99.9%" },
  ];
  return (
    <div className="space-y-3 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-100">
      {rows.map((row) => (
        <div key={row.title} className="flex items-center gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <CheckIcon />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-[#0b0b1a]">{row.title}</p>
            <p className="text-xs text-slate-500">{row.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ChatWidget() {
  return (
    <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-indigo-400 to-[#2d2be0] text-sm font-bold text-white">
            S
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-[#0b0b1a]">
              Sarah from support
            </p>
            <p className="flex items-center gap-1.5 text-xs text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Online now
            </p>
          </div>
        </div>
        <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-[0.625rem] font-semibold text-indigo-600">
          New
        </span>
      </div>
      <div className="mt-3 rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-xs leading-relaxed text-slate-600 ring-1 ring-slate-100">
        Hi there! How can I help you with your connection today?
      </div>
    </div>
  );
}

/* ---------- Cards ---------- */

const features: {
  icon: ReactNode;
  title: string;
  description: string;
  widget: ReactNode;
}[] = [
  {
    icon: <BoltIcon />,
    title: "Ultra-fast Fiber",
    description:
      "Symmetrical upload and download speeds up to 5 gbps. Perfect for streaming, gaming, and large file transfer.",
    widget: <SpeedTestWidget />,
  },
  {
    icon: <ShieldIcon />,
    title: "Secure & Reliable",
    description:
      "Built-in security features and 99.9% uptime guarantee. Your connection is protected 24/7.",
    widget: <StatusWidget />,
  },
  {
    icon: <SupportIcon />,
    title: "24/7 Support",
    description:
      "Local support team available round the clock. No bots, just real people helping you stay connected.",
    widget: <ChatWidget />,
  },
];

export default function FeatureCards() {
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
    <section aria-label="Key features" className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={item}
              className="flex flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-[#2d2be0] text-white shadow-md shadow-indigo-500/30">
                {feature.icon}
              </span>
              <h3 className="mt-5 text-xl font-bold text-[#0b0b1a]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {feature.description}
              </p>
              <div className="mt-6">{feature.widget}</div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
