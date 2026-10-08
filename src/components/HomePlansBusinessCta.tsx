import Link from "next/link";
import { BadgeCheck, Building } from "lucide-react";
import Reveal from "@/components/Reveal";

const highlights = [
  "Dedicated Symmetric Bandwidth (up to 20 Gbps)",
  "Static IPs & Custom Subnets",
  "99.99% SLA & 4-hr MTTR",
  "24x7 Dedicated Account Access",
];

export default function HomePlansBusinessCta() {
  return (
    <section aria-labelledby="business-cta-heading" className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <Reveal>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-indigo-100 bg-linear-to-br from-white via-[#f5f7fd] to-[#eef2fc] px-6 py-10 text-center shadow-lg shadow-indigo-500/10 sm:px-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl"
            />

            <div className="relative">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg border border-indigo-100 bg-indigo-50 text-indigo-700">
                <Building className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="mt-3 inline-flex items-center rounded-full border border-indigo-400 bg-indigo-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-indigo-700">
                Corporate enterprise grade
              </span>
              <h2
                id="business-cta-heading"
                className="mt-4 text-2xl font-bold tracking-tight text-[#0b0b1a] sm:text-3xl"
              >
                Need a Custom Business Plan?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500">
                We offer customized, enterprise-ready connectivity for
                businesses of all sizes — backed by 99.99% uptime guarantees,
                dedicated optical links, and white-glove corporate support.
              </p>

              <ul className="mt-6 grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white/80 px-3 py-2.5 text-xs font-medium text-[#0b0b1a]"
                  >
                    <BadgeCheck
                      className="h-4 w-4 shrink-0 fill-[#2d2be0] text-white"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <hr className="my-6 border-slate-200" />

              <Link
                href="/business-plans"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#2d2be0] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-colors hover:bg-[#2018c4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0] sm:w-auto"
              >
                Explore Business Plans
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
