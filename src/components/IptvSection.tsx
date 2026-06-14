import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";

const highlights = [
  "Ultra-Low Latency Streaming",
  "7-Day Catch Up Service",
  "Multi-device Support",
];

export default function IptvSection() {
  return (
    <section aria-label="IPTV live channels" className="w-full bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 sm:py-24 lg:grid-cols-2 lg:gap-14">
        {/* Left: copy */}
        <div>
          <Reveal>
            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#0b0b1a] sm:text-5xl">
              With IPTV:
              <br />
              350+ Live Channels
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-500 sm:text-base">
              Never miss a moment of live action. From international sports to
              local news, we bring the world to your screen with zero lag and
              crystal-clear 4K resolution.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-8 space-y-4">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm font-semibold text-[#0b0b1a]"
                >
                  <Check
                    className="h-5 w-5 shrink-0 text-indigo-600"
                    strokeWidth={2.5}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Right: image */}
        <Reveal delay={0.15} className="w-full">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl shadow-indigo-900/15 ring-1 ring-black/5">
            <Image
              src="/image2.png"
              alt="Popular streaming platform app icons including Netflix, Disney+, HBO Max, Amazon Prime Video and Hulu"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
