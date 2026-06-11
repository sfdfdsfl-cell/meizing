import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative isolate w-full overflow-hidden bg-[#dfe2f3] bg-[url('/hero_bg.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center">
        {/* Badge */}
        <Reveal>
          <span className="mb-6 inline-flex items-center rounded-full border border-white/60 bg-white/40 px-4 py-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.15em] text-indigo-700 backdrop-blur-sm sm:text-xs">
            Now available in your area
          </span>
        </Reveal>

        {/* Heading */}
        <Reveal delay={0.1}>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-[#0b0b1a] sm:text-5xl lg:text-6xl">
            Hyper-fast fiber
            <br />
            up to 1200 Mbps
          </h1>
        </Reveal>

        {/* Subheading */}
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Experience the power of 100% pure fiber-optic technology. No
            contracts, no data caps, and 1.2 gbps symmetrical speeds for
            ultimate performance.
          </p>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.3}>
          <a
            href="#start"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#2d2be0] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-colors hover:bg-[#2018c4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0]"
          >
            Start Now
          </a>
        </Reveal>
      </div>
    </section>
  );
}
