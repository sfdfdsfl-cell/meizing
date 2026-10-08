import Link from "next/link";
import Image from "next/image";
import { Phone, Share2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import { REFER_URL } from "@/lib/site";

export default function ContactHero() {
  return (
    <section
      aria-label="Get in touch"
      className="relative w-full overflow-hidden bg-linear-to-br from-[#f5f6fd] via-[#eceefb] to-[#dfe2f3]"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        {/* Top: intro + image */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-indigo-300 bg-white/70 px-4 py-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.15em] text-indigo-600 backdrop-blur-sm sm:text-xs">
                Ultra-High-Speed Network Active
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-[#0b0b1a] sm:text-5xl lg:text-6xl">
                Get in Touch
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
                Lightning-fast support and service requests. Our team is ready to
                help you optimize your high-speed experience.
              </p>
            </Reveal>
          </div>

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

        {/* Bottom: action cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl bg-slate-50 p-7 shadow-sm">
              <Phone className="h-7 w-7 text-indigo-600" strokeWidth={2} />
              <h2 className="mt-4 text-xl font-bold text-[#0b0b1a]">
                Book a New Connection
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Join the fiber revolution. Fill out our simplified request form
                and get installed within 48 hours.
              </p>
              <Link
                href="/booking"
                className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-[#2d2be0] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/30 transition-colors hover:bg-[#2018c4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0]"
              >
                Start Application
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-2xl bg-slate-50 p-7 shadow-sm">
              <Share2 className="h-7 w-7 text-indigo-600" strokeWidth={2} />
              <h2 className="mt-4 text-xl font-bold text-[#0b0b1a]">
                Refer and earn for friend &amp; family
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Refer Mezing internet services to your friends or family and get
                the{" "}
                <span className="font-semibold text-indigo-600">
                  DISCOUNT of ₹500
                </span>{" "}
                on your next bill!
              </p>
              <a
                href={REFER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-[#2d2be0] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/30 transition-colors hover:bg-[#2018c4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0]"
              >
                Send invite
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
