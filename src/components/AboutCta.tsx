import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function AboutCta() {
  return (
    <section
      aria-label="Get started"
      className="relative w-full overflow-hidden bg-[#1730a8] bg-[url('/life.png')] bg-cover bg-center"
    >
      {/* Blue overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-[#1b3ccb]/90 to-[#13288f]/90"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center sm:py-24">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Experience Light Speed?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-indigo-100 sm:text-base">
            Join thousands of satisfied customers and transform your digital
            lifestyle today with Mezing Fibre.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#1b34c4] shadow-lg transition-colors hover:bg-slate-100 sm:w-auto"
            >
              Check Availability
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/70 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Contact Sales
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
