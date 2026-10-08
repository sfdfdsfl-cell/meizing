import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function HomePlansHero() {
  return (
    <section
      aria-label="Home plans hero"
      className="relative w-full overflow-hidden bg-[#dfe2f3] bg-[url('/plans_hero.png')] bg-cover bg-center"
    >
      <div className="mx-auto flex min-h-[30rem] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center sm:min-h-[36rem]">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-indigo-400 bg-white/60 px-3 py-1 text-xs font-medium text-indigo-700 backdrop-blur-sm">
            Home Plans
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 text-4xl font-bold leading-[1.15] tracking-tight text-[#0b0b1a] sm:text-5xl lg:text-[3.5rem]">
            Residential Internet &amp; All-In-One OTT Entertainment
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            1,200 Mbps Symmetrical speeds. Zero data caps. Next-gen Wi-Fi 6
            technology. All on a 100% fiber optic infrastructure.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#home-plans"
              className="inline-flex min-w-40 items-center justify-center rounded-full border border-[#2d2be0] bg-white/40 px-8 py-3 text-sm font-semibold text-[#2d2be0] backdrop-blur-sm transition-colors hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0]"
            >
              View Plans
            </a>
            <Link
              href="/contact"
              className="inline-flex min-w-40 items-center justify-center rounded-full bg-[#2d2be0] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-colors hover:bg-[#2018c4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0]"
            >
              Connect with Us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
