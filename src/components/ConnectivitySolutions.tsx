import Link from "next/link";
import {
  ArrowRight,
  ArrowUpDown,
  Building2,
  Router,
  Server,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";

type Solution = {
  title: string;
  tagline?: string;
  description: string;
  cta: string;
  href: string;
  icon: LucideIcon;
  iconClass: string;
};

const solutions: Solution[] = [
  {
    title: "Home Broadband",
    tagline: "Starting at 399/-",
    description:
      "High-speed fiber connectivity designed for modern homes. Enjoy seamless streaming, lag-free gaming, and reliable remote work with our most affordable plans.",
    cta: "View Home Plans",
    href: "/home-plans",
    icon: ArrowUpDown,
    iconClass: "bg-indigo-100 text-indigo-700",
  },
  {
    title: "Corporate/Business Broadband",
    description:
      "Enterprise-grade connectivity with guaranteed bandwidth and priority support. Scalable solutions designed to power your office infrastructure with maximum reliability.",
    cta: "View Corporate Plans",
    href: "/business-plans#business-plans",
    icon: Building2,
    iconClass: "bg-rose-100 text-rose-600",
  },
  {
    title: "Internet Lease Line",
    description:
      "Dedicated, symmetrical gigabit speeds with 99.9% uptime SLA. Uncontended connectivity ensuring your critical business operations never slow down.",
    cta: "Explore Specifications",
    href: "/business-plans#business-plans",
    icon: Router,
    iconClass: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Static IP",
    description:
      "Secure, dedicated IP addresses for reliable hosting, VPN setups, and seamless remote access to your internal corporate networks.",
    cta: "Learn More",
    href: "/business-plans#industries",
    icon: Server,
    iconClass: "bg-indigo-100 text-indigo-700",
  },
];

export default function ConnectivitySolutions() {
  return (
    <section
      aria-labelledby="connectivity-heading"
      className="w-full bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 pb-20 sm:pb-24">
        <Reveal className="text-center">
          <h2
            id="connectivity-heading"
            className="text-3xl font-bold tracking-tight text-[#0b0b1a] sm:text-4xl"
          >
            Our connectivity solutions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-500 sm:text-lg">
            Scalable infrastructure designed for performance and reliability.
          </p>
        </Reveal>

        <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
          {solutions.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <Reveal
                as="li"
                key={solution.title}
                delay={i * 0.08}
                className="flex"
              >
                <div className="flex w-full flex-col rounded-xl border-t border-indigo-300 bg-[#f4f5fc] p-6 transition-shadow duration-300 hover:shadow-md">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${solution.iconClass}`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-[#0b0b1a]">
                    {solution.title}
                  </h3>
                  {solution.tagline && (
                    <p className="mt-2 text-xs font-semibold text-indigo-700">
                      {solution.tagline}
                    </p>
                  )}
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {solution.description}
                  </p>
                  <Link
                    href={solution.href}
                    className="group mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-indigo-700 hover:text-indigo-900"
                  >
                    {solution.cta}
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
