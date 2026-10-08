import Image from "next/image";
import {
  CircleCheck,
  Monitor,
  MonitorPlay,
  Tablet,
  Tv,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const features: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "4K Ultra-HD & Dolby",
    description: "Crisp cinematic resolution with multi-channel surround audio.",
    icon: Monitor,
  },
  {
    title: "Live IPTV + 200+ Channels",
    description: "Sports, regional & news channels with 7-day cloud catch-up.",
    icon: Wifi,
  },
  {
    title: "Multi-Screen Streaming",
    description: "Watch on Smart TV, laptop, tablet and smartphone at once.",
    icon: Tablet,
  },
  {
    title: "Single Unified App & Bill",
    description: "One sign-in, unified search, and consolidated monthly billing.",
    icon: CircleCheck,
  },
];

const partners = [
  { name: "JioHotstar", src: "/ott-marquee/hotstar.png", width: 256, height: 144 },
  { name: "Prime Video", src: "/ott-marquee/prime.png", width: 205, height: 128 },
  { name: "Sony LIV", src: "/ott-marquee/liv.png", width: 144, height: 144 },
  { name: "ZEE5", src: "/ott-marquee/zee5.png", width: 144, height: 144 },
  { name: "Lionsgate Play", src: "/ott-marquee/liongate.png", width: 152, height: 152 },
  { name: "Sun NXT", src: "/ott-marquee/sun.png", width: 208, height: 192 },
  { name: "hoichoi", src: "/ott-marquee/hoichoi.png", width: 152, height: 152 },
  { name: "Chaupal", src: "/ott-marquee/chaupal.png", width: 370, height: 96 },
  { name: "Hungama", src: "/ott-marquee/hungama.png", width: 390, height: 96 },
  { name: "FanCode", src: "/ott-marquee/fancode.png", width: 468, height: 144 },
  { name: "ShemarooMe", src: "/ott-marquee/shemaroo.png", width: 283, height: 128 },
];

export default function HomePlansEntertainment() {
  return (
    <section
      aria-labelledby="entertainment-heading"
      className="relative w-full overflow-hidden bg-white"
    >
      {/* Soft blue glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-indigo-300/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[24rem] w-[24rem] rounded-full bg-indigo-200/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal className="text-center">
          <span className="inline-flex items-center rounded-full border border-indigo-400 bg-indigo-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-indigo-700 sm:text-xs">
            All-in-one entertainment ecosystem
          </span>
          <h2
            id="entertainment-heading"
            className="mt-6 text-4xl font-bold uppercase leading-[1.3] tracking-tight text-[#0b0b1a] sm:text-5xl"
          >
            Entertainment with
            <br />
            <span className="text-[#2d2be0]">Broadband</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Stream smarter with our addon OTT Packs &amp; Live IPTV channels.
            Add premium entertainment to any high-speed fiber internet plan,
            starting at just ₹199/month.
          </p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal as="li" key={feature.title} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-slate-200 bg-[#f7f8fb]/80 px-5 py-6 text-center backdrop-blur-sm">
                  <span className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg border border-indigo-100 bg-white text-indigo-700">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-[#0b0b1a]">
                    {feature.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[15rem] text-xs leading-relaxed text-slate-500">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={0.1} className="mt-10">
          <div className="rounded-2xl border border-slate-200 bg-[#f7f8fb]/80 p-6 shadow-sm backdrop-blur-sm">
            <div className="flex flex-col gap-4 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#0b0b1a]">
                  Included Streaming Partners &amp; Channels
                </h3>
                <p className="mt-0.5 text-xs text-slate-500">
                  Seamless single-sign-on access across all leading
                  entertainment services
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-indigo-100 bg-white px-3 py-1.5 text-xs font-medium text-indigo-700 sm:self-auto">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2d2be0]" />
                All Subscriptions Active in 1 Click
              </span>
            </div>

            <ul className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {partners.map((partner) => (
                <li
                  key={partner.name}
                  title={partner.name}
                  className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    className="h-full w-full object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-3xl">
          <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white/80 px-4 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2d2be0] text-white">
                <MonitorPlay className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[#0b0b1a]">
                  Zero Extra Hardware Required
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold uppercase text-indigo-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2d2be0]" />
                    Instant setup
                  </span>
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  No clunky set-top boxes — stream directly across your
                  preferred devices in 4K HDR.
                </p>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-[#0b0b1a] sm:self-auto">
              <Tv className="h-3.5 w-3.5 text-indigo-700" aria-hidden="true" />
              Android TV
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
