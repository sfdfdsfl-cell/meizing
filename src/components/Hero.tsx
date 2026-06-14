import Image from "next/image";
import Reveal from "@/components/Reveal";

const partners = [
  { src: "/bsnl.png", alt: "BSNL", width: 136, height: 56 },
  { src: "/railwire.png", alt: "RailWire Express Network", width: 91, height: 56 },
  { src: "/railtel.png", alt: "RailTel", width: 144, height: 56 },
];

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

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-6xl flex-col justify-center px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: copy */}
          <div className="flex flex-col items-start text-left">
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-indigo-200 bg-white/70 px-4 py-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.15em] text-indigo-600 backdrop-blur-sm sm:text-xs">
                Now available in your area
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
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
                Experience the power of 100% pure fiber-optic technology. No
                contracts, no data caps, and 1.2 gbps symmetrical speeds for
                ultimate performance.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <a
                href="#"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#2d2be0] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-colors hover:bg-[#2018c4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0]"
              >
                Start Now
              </a>
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

        {/* Partners */}
        <Reveal delay={0.2} className="mt-14 lg:mt-16">
          <p className="text-center text-xs font-semibold tracking-wide text-slate-500">
            Authorized Last Mile Partner
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {partners.map((partner) => (
              <Image
                key={partner.alt}
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className="h-9 w-auto object-contain sm:h-10"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
