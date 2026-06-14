import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function OttSection() {
  return (
    <section
      aria-labelledby="ott-heading"
      className="w-full bg-linear-to-b from-[#eef0fb] to-[#e1e4f6]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal className="text-center">
          <h2
            id="ott-heading"
            className="text-3xl font-bold tracking-tight text-[#0b0b1a] sm:text-4xl"
          >
            20+ Premium OTTs Included
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500 sm:text-base">
            Your favorite content platforms, all in one single login. No more
            multiple subscriptions.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12">
          <Image
            src="/combined_channels.png"
            alt="Premium OTT platforms included: Amazon Prime Lite, Hotstar, SonyLiv, SunNXT, Zee5, iTap, AAO NXT, AHA Telugu, OM TV, ETV Win, Chaupal, FanCode, Hungama, RajTV, ShemarooMe, DistroTV, ShortsTV, Nammaflix, Hubhopper, Discovery Plus, PlayboxTV and more"
            width={1140}
            height={632}
            className="mx-auto h-auto w-full max-w-5xl"
          />
        </Reveal>
      </div>
    </section>
  );
}
