import { Home, Building2 } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function PlansIntro() {
  return (
    <section aria-label="Plans overview" className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-5xl rounded-3xl bg-[#eef1fb] px-8 py-12 text-center sm:px-12 sm:py-14">
            {/* Badge */}
            <span className="inline-flex items-center rounded-full border border-indigo-300 bg-white/70 px-4 py-1.5 text-xs font-semibold text-indigo-600">
              Future-Proof Fiber Optics
            </span>

            {/* Heading */}
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#0b0b1a] sm:text-4xl lg:text-5xl">
              Unmatched Speed for Home &amp; Business
            </h2>

            {/* Subheading */}
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500 sm:text-base">
              Experience the power of symmetrical gigabit speeds. Choose the plan
              that fuels your lifestyle or powers your enterprise.
            </p>

            {/* Categories */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
              <span className="flex items-center gap-2 text-lg font-semibold text-slate-600">
                <Home className="h-6 w-6 text-indigo-600" strokeWidth={2.2} />
                For Home
              </span>
              <span className="flex items-center gap-2 text-lg font-semibold text-slate-600">
                <Building2
                  className="h-6 w-6 text-indigo-600"
                  strokeWidth={2.2}
                />
                For Business
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
