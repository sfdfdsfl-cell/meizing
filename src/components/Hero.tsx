import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative w-full overflow-hidden bg-linear-to-br from-[#f5f6fd] via-[#eceefb] to-[#d9ddf3]"
    >
      {/* Decorative corner glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-32 h-112 w-md rounded-full bg-[#8f8df0]/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-112 w-md rounded-full bg-[#9a8df0]/35 blur-3xl"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6.75rem)] max-w-6xl flex-col justify-center px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: copy */}
          <div className="flex flex-col items-start text-left">
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-indigo-500 bg-white/70 px-3 py-1 text-[0.6875rem] font-semibold text-indigo-700 backdrop-blur-sm sm:text-xs">
                Next-Gen Optical Fiber Network
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-[#0b0b1a] sm:text-5xl lg:text-6xl">
                Hyper-fast fiber
                <br />
                up to 1200 Mbps
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
                Experience the power of{" "}
                <strong className="font-semibold text-[#0b0b1a]">
                  100% pure fiber-optic technology
                </strong>{" "}
                with no contracts, no data caps, reliable high-speed internet,
                transparent pricing, and{" "}
                <strong className="font-semibold text-[#0b0b1a]">
                  no hidden fees
                </strong>{" "}
                perfect for your home or business.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <Link
                href="/home-plans"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#2d2be0] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-colors hover:bg-[#2018c4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0]"
              >
                Start Now
              </Link>
            </Reveal>
          </div>

          {/* Right: image */}
          <Reveal delay={0.15} className="w-full">
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-indigo-900/20 ring-1 ring-black/5">
              <Image
                src="/hero_section.png"
                alt="Fiber-optic cables connected to a network switch"
                width={554}
                height={471}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
