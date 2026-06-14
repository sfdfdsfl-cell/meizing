import Reveal from "@/components/Reveal";

export default function BusinessCta() {
  return (
    <section
      aria-label="Business plans"
      className="w-full bg-[#241a3a] bg-[url('/life.png')] bg-cover bg-center"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-3xl border border-indigo-200/70 bg-[#eef1fb]/90 px-8 py-14 text-center shadow-2xl shadow-indigo-900/20 backdrop-blur-sm sm:px-12 sm:py-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0b0b1a] sm:text-4xl">
              Need a Business Plan?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
              We offer customized solutions for businesses of all sizes with
              dedicated support, static IPs, and service level agreements.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="/#footer"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#2d2be0] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-colors hover:bg-[#2018c4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0] sm:w-auto"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
