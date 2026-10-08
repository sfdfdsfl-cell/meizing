import Link from "next/link";
import { Gauge } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function SpeedBand() {
  return (
    <section
      aria-label="Download speeds"
      className="relative w-full overflow-hidden bg-[#14162e] bg-[url('/mbps_section.png')] bg-cover bg-center"
    >
      {/* Dark overlay for text contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#0a0e2a]/40"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:gap-12 md:py-24">
        {/* Left: stat */}
        <Reveal className="md:pl-6">
          <p className="flex items-center gap-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <Gauge className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" strokeWidth={2} />
            1200 Mbps
          </p>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Download Speeds
          </p>
        </Reveal>

        {/* Right: copy + CTA */}
        <Reveal delay={0.15} className="flex flex-col items-start">
          <p className="max-w-md text-sm leading-relaxed text-slate-200 sm:text-base">
            The speed is consistently fast, even during peak times when everyone
            is online. We offer the fastest gigabit network available.
          </p>
          <Link
            href="/home-plans"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#2d2be0] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-colors hover:bg-[#2018c4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0]"
          >
            Start Now
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
