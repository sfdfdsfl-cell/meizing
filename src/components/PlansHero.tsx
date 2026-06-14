import Reveal from "@/components/Reveal";

export default function PlansHero() {
  return (
    <section
      aria-label="Plans hero"
      className="relative w-full overflow-hidden bg-[#dfe2f3] bg-[url('/plans_hero.png')] bg-cover bg-center"
    >
      <div className="mx-auto flex min-h-[34rem] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center sm:min-h-[40rem]">
        {/* Badge */}
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-indigo-300 bg-white/60 px-4 py-1.5 text-xs font-semibold text-indigo-600 backdrop-blur-sm">
            Giga-Plus Performance
          </span>
        </Reveal>

        {/* Heading */}
        <Reveal delay={0.1}>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-[#0b0b1a] sm:text-5xl lg:text-6xl">
            Experience the Future:
            <br />
            1.2 Gbps Fiber
          </h1>
        </Reveal>

        {/* Subheading */}
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            1,200 Mbps Symmetrical speeds. Zero data caps. Next-gen Wi-Fi 6
            technology. All on a 100% fiber optic infrastructure.
          </p>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.3}>
          <a
            href="#plans"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#2d2be0] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-colors hover:bg-[#2018c4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0]"
          >
            Get Started Now
          </a>
        </Reveal>
      </div>
    </section>
  );
}
