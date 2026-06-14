import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function AboutHero() {
  return (
    <section
      aria-label="About hero"
      className="relative w-full overflow-hidden bg-linear-to-br from-[#f5f6fd] via-[#eceefb] to-[#dfe2f3]"
    >
      {/* Decorative glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-112 w-md -translate-x-1/2 rounded-full bg-[#8f8df0]/30 blur-3xl"
      />

      <div className="relative z-10 mx-auto flex min-h-[34rem] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center sm:min-h-[40rem]">
        {/* Badge */}
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-4 py-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.15em] text-indigo-600 backdrop-blur-sm sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            Since 2017
          </span>
        </Reveal>

        {/* Heading */}
        <Reveal delay={0.1}>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-[#0b0b1a] sm:text-5xl lg:text-6xl">
            7+ Years of Excellence in
            <br />
            <span className="bg-linear-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
              Optical Fiber
            </span>{" "}
            Services
          </h1>
        </Reveal>

        {/* Subheading */}
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Empowering your digital world with ultra-high-speed connectivity and
            unmatched reliability. Connecting homes and businesses with the speed
            of light.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/plans"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#2d2be0] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-colors hover:bg-[#2018c4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0] sm:w-auto"
            >
              View Our Plans
            </Link>
            <a
              href="#infrastructure"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-[#0b0b1a] transition-colors hover:bg-slate-50 sm:w-auto"
            >
              Our Infrastructure
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
