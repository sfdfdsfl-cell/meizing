import Reveal from "@/components/Reveal";

export default function SpeedBand() {
  return (
    <section
      aria-label="Download speeds"
      className="w-full bg-[#14162e]"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-2 md:gap-12 md:py-16">
        {/* Left: stat */}
        <Reveal className="md:pl-6">
          <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            1200 Mbps
          </p>
          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            Download Speeds
          </p>
        </Reveal>

        {/* Right: copy + CTA */}
        <Reveal delay={0.15} className="flex flex-col items-start">
          <p className="max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
            The speed is consistently fast, even during peak times when everyone
            is online. We offer the fastest gigabit network available.
          </p>
          <a
            href="#start"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#2d2be0] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-colors hover:bg-[#2018c4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0]"
          >
            Start Now
          </a>
        </Reveal>
      </div>
    </section>
  );
}
