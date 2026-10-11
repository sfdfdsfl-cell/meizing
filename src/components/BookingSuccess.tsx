import Link from "next/link";
import Reveal from "@/components/Reveal";
import SocialLinks from "@/components/SocialLinks";

export default function BookingSuccess({ plansHref }: { plansHref: string }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14 text-center sm:py-20">
      <Reveal>
        <h1 className="text-4xl font-bold tracking-tight text-[#0b0b1a] sm:text-5xl">
          You&apos;re all set, great choice!
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
          Thank you for showing your interest in Mezing Broadband. Our team is
          on it and will reach out to you shortly.
        </p>
      </Reveal>

      <video
        src="/done.webm"
        autoPlay
        muted
        playsInline
        aria-hidden="true"
        className="mx-auto mt-6 h-44 w-44 object-contain sm:h-52 sm:w-52"
      />

      <Reveal delay={0.2}>
        <p className="mt-6 text-sm text-slate-500">
          Annual plans save you up to ₹5,000 / year
        </p>
        <Link
          href={plansHref}
          className="mt-5 inline-flex items-center justify-center rounded-full bg-[#2d2be0] px-9 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-colors hover:bg-[#2018c4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0]"
        >
          Explore Our Plans
        </Link>

        <p className="mt-12 text-sm font-semibold text-slate-600">
          Stay Connected with us on Social Media for Updates &amp; Offers.
        </p>
        <SocialLinks hidePlaceholders className="mt-5 justify-center" />
      </Reveal>
    </div>
  );
}
