"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  ChevronDown,
  Clock,
  type LucideIcon,
} from "lucide-react";

type Channel = {
  icon: LucideIcon;
  title: string;
  detail: string;
  href?: string;
  boxed: boolean;
};

const channels: Channel[] = [
  {
    icon: Phone,
    title: "Phone Support",
    detail: "+91 7389692807",
    href: "tel:+917389692807",
    boxed: true,
  },
  {
    icon: Mail,
    title: "Email Support",
    detail: "mezingconsultants@gmail.com",
    href: "mailto:mezingconsultants@gmail.com",
    boxed: true,
  },
  {
    icon: MessageCircle,
    title: "Live web chat",
    detail: "Agents online",
    href: "#",
    boxed: true,
  },
  {
    icon: MapPin,
    title: "Visit our Fibre Hub",
    detail: "Sagar, Sagar, Madhya Pradesh, India 470001",
    boxed: false,
  },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const inputClasses =
  "mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-[#0b0b1a] placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30";

export default function SupportArea() {
  const reduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  };

  return (
    <section
      aria-labelledby="support-heading"
      className="relative w-full overflow-hidden bg-linear-to-br from-[#eceefb] via-[#f3f4fc] to-[#dfe2f3]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <motion.h2
          id="support-heading"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
          className="text-3xl font-bold tracking-tight text-[#0b0b1a] sm:text-4xl"
        >
          2-Minute Support Area
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.7fr_1fr]">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
            className="rounded-2xl bg-slate-50 p-6 shadow-sm sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-[#0b0b1a]"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-[#0b0b1a]"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="text-sm font-semibold text-[#0b0b1a]"
                >
                  Issue Category
                </label>
                <div className="relative">
                  <select
                    id="category"
                    name="category"
                    defaultValue="Technical Assist"
                    className={`${inputClasses} appearance-none pr-10`}
                  >
                    <option>Technical Assist</option>
                    <option>Billing Inquiry</option>
                    <option>New Connection</option>
                    <option>Other</option>
                  </select>
                  <ChevronDown
                    aria-hidden="true"
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-[#0b0b1a]"
                >
                  Describe your issue
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us more about your issue..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[#2d2be0] px-8 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/30 transition-colors hover:bg-[#2018c4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0]"
                >
                  Submit
                </button>
                {submitted && (
                  <span className="text-sm font-medium text-emerald-600">
                    Thanks! We&apos;ll get back to you within 2 minutes.
                  </span>
                )}
              </div>
            </form>

            <p className="mt-6 flex items-center gap-2 text-xs text-slate-500">
              <Clock className="h-4 w-4 text-indigo-600" strokeWidth={2} />
              Typical response time: Under 2 minutes for technical tickets.
            </p>
          </motion.div>

          {/* Traditional channels */}
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="rounded-2xl bg-slate-100/70 p-6 shadow-sm"
          >
            <h3 className="text-lg font-bold text-[#0b0b1a]">
              Traditional Channels
            </h3>

            <ul className="mt-5 space-y-3">
              {channels.map((channel) => {
                const Icon = channel.icon;
                const inner = (
                  <>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <span className="leading-tight">
                      <span className="block text-sm font-semibold text-[#0b0b1a]">
                        {channel.title}
                      </span>
                      <span className="block break-words text-xs text-slate-500">
                        {channel.detail}
                      </span>
                    </span>
                  </>
                );
                return (
                  <li key={channel.title}>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        className={`flex items-center gap-3 rounded-xl ${
                          channel.boxed ? "bg-white p-3 shadow-sm" : "p-3"
                        } transition-colors hover:bg-indigo-50/60`}
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 p-3">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
