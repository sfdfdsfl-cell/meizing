import Image from "next/image";
import { Gauge } from "lucide-react";
import Reveal from "@/components/Reveal";

const stats = [
  { value: "10k+", label: "Happy Subscribers" },
  { value: "99.9%", label: "Uptime Guarantee" },
];

export default function AboutJourney() {
  return (
    <section aria-label="Our journey" className="w-full bg-[#f0f1fc]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 sm:py-24 lg:grid-cols-2 lg:gap-16">
        {/* Left: image with floating badge */}
        <Reveal className="w-full">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-indigo-900/20 ring-1 ring-black/5">
              <Image
                src="/connect.png"
                alt="Fiber-optic cables radiating light"
                width={2000}
                height={1333}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Floating speed badge */}
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 px-5 py-4 shadow-xl shadow-indigo-900/15 backdrop-blur-sm sm:left-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-[#2d2be0] text-white">
                <Gauge className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <div className="leading-tight">
                <p className="text-lg font-bold text-[#0b0b1a]">1 Gbps+</p>
                <p className="text-xs text-slate-500">Standard Core Speed</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right: copy */}
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
              The Journey
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-[#0b0b1a] sm:text-4xl lg:text-5xl">
              Crafting the Future of
              <br />
              Local Connectivity
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">
              From our humble beginnings in 2017 to becoming a leading Internet
              Service Provider, our journey has been defined by a commitment to
              technological innovation and customer satisfaction.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              We&apos;ve spent over seven years perfecting the art of
              high-speed data transmission, ensuring that every home and
              business in our coverage area experiences the true potential of
              the fiber-optic revolution.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <dl className="mt-8 grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-indigo-500 pl-4">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-2xl font-bold text-[#0b0b1a] sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-sm text-slate-500">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
