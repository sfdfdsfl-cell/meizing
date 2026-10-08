import Link from "next/link";
import Reveal from "@/components/Reveal";

/** Swap for the business-themed hero photo once it's added to /public. */
const heroImage = "/plans_hero.png";

export default function BusinessPlansHero() {
  return (
    <section
      aria-label="Business plans hero"
      className="relative w-full overflow-hidden bg-[#c9cdf3] bg-cover bg-center"
      style={{ backgroundImage: `url('${heroImage}')` }}
    >
      {/* Lavender wash keeps the text readable over the photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-[#b9bdf5]/70 via-[#d4d6f7]/50 to-[#b9bdf5]/40"
      />

      <div className="relative mx-auto flex min-h-[30rem] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center sm:min-h-[36rem]">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-indigo-400 bg-white/60 px-3 py-1 text-xs font-medium text-indigo-700 backdrop-blur-sm">
            Business Plans - Giga Plus Performance
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 text-4xl font-bold leading-[1.15] tracking-tight text-[#0b0b1a] sm:text-5xl lg:text-[3.5rem]">
            Business Internet &amp; Leased
            <br className="hidden sm:block" /> Lines ILL
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
            Guaranteed 99.9% uptime, symmetrical speeds &amp; direct IX peering
            engineered for modern enterprises, offices, and critical facilities.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#business-plans"
              className="inline-flex min-w-48 items-center justify-center rounded-full border border-[#2d2be0] bg-white/40 px-8 py-3 text-sm font-semibold text-[#2d2be0] backdrop-blur-sm transition-colors hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0]"
            >
              View Plans
            </a>
            <Link
              href="/contact"
              className="inline-flex min-w-48 items-center justify-center rounded-full bg-[#2d2be0] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-colors hover:bg-[#2018c4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0]"
            >
              Connect with Us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
