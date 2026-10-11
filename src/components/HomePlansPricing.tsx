import { Info, MonitorPlay, Wifi } from "lucide-react";
import Reveal from "@/components/Reveal";
import HomePlanCard, {
  type HomePlan,
  type PlanApp,
} from "@/components/HomePlanCard";

// Square app icons: shown edge to edge with no extra tile background.
const appIcon = { tileClass: "", imageClass: "object-cover" };

const apps = {
  hotstar: {
    name: "JioHotstar",
    src: "/JIO.png",
    width: 447,
    height: 447,
    ...appIcon,
  },
  zee5: { name: "ZEE5", src: "/Z5.png", width: 894, height: 894, ...appIcon },
  prime: {
    name: "Prime Video",
    src: "/PRIME.png",
    width: 512,
    height: 512,
    ...appIcon,
  },
  liv: {
    name: "Sony LIV",
    src: "/Sonyliv.png",
    width: 500,
    height: 500,
    ...appIcon,
  },
} satisfies Record<string, PlanApp>;

const fiberPlans: HomePlan[] = [
  { speed: 30, price: "399" },
  { speed: 100, price: "799", badge: "Most Popular" },
  { speed: 300, price: "1,499" },
];

const bundlePlans: HomePlan[] = [
  {
    tier: "Starter Entertainment",
    speed: 30,
    price: "599",
    description:
      "Perfect for casual streaming on a single screen with essential apps.",
    includedApps: [apps.liv, apps.hotstar, apps.zee5],
    moreApps: 10,
  },
  {
    tier: "Pro Entertainment",
    speed: 100,
    price: "899",
    badge: "Best Value",
    description:
      "Our most popular choice for families with multi-device streaming and HD quality.",
    includedApps: [apps.liv, apps.hotstar, apps.zee5, apps.prime],
    moreApps: 10,
  },
  {
    tier: "Ultimate Entertainment",
    speed: 300,
    price: "1,599",
    description:
      "The complete entertainment powerhouse with 4K streaming and all premium platforms.",
    includedApps: [apps.liv, apps.hotstar, apps.zee5, apps.prime],
    moreApps: 10,
  },
];

function PlanGrid({ plans }: { plans: HomePlan[] }) {
  return (
    <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
      {plans.map((plan, i) => (
        <Reveal
          as="li"
          key={plan.speed}
          delay={0.15 + i * 0.08}
          className="h-full"
        >
          <HomePlanCard plan={plan} />
        </Reveal>
      ))}
    </ul>
  );
}

function NoteBar({
  title,
  body,
  tag,
}: {
  title: string;
  body: string;
  tag: string;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-4">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-700">
          <Info className="h-4 w-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-semibold text-[#0b0b1a]">{title}</p>
          <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
            {body}
          </p>
        </div>
      </div>
      <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-md bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700 sm:self-auto">
        <span className="h-1.5 w-1.5 rounded-full bg-[#2d2be0]" />
        {tag}
      </span>
    </div>
  );
}

export default function HomePlansPricing() {
  return (
    <section
      id="home-plans"
      aria-labelledby="home-plans-heading"
      className="w-full scroll-mt-28 bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal className="text-center">
          <span className="inline-flex items-center rounded-full border border-indigo-400 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            Our Home Plans
          </span>
          <h2
            id="home-plans-heading"
            className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#0b0b1a] sm:text-4xl lg:text-[2.75rem]"
          >
            Transparent pricing for every digital lifestyle.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500">
            Zero hidden charges, symmetric upload and download speeds, with
            complimentary Wi-Fi hardware and seamless installation.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <h3 className="flex items-center gap-3 text-xl font-bold text-[#0b0b1a] sm:text-2xl">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-indigo-50 text-indigo-700">
              <Wifi className="h-4 w-4" aria-hidden="true" />
            </span>
            High-Speed Fiber Internet
          </h3>
        </Reveal>

        <PlanGrid plans={fiberPlans} />

        <Reveal delay={0.3} className="mt-6">
          <NoteBar
            title="Flexible Billing Durations Available"
            body="Choose Monthly, Quarterly (7 Days Free), Half-Yearly (15 Days Free), or Annual (30 Days Free & Free Installation)."
            tag="Up to 30 Days Free on Advance Cycles"
          />
        </Reveal>

        <Reveal className="mt-20">
          <h3 className="flex items-center gap-3 text-xl font-bold text-[#0b0b1a] sm:text-2xl">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-indigo-50 text-indigo-700">
              <MonitorPlay className="h-4 w-4" aria-hidden="true" />
            </span>
            Entertainment Bundles with OTT
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            High-speed fiber paired with India&apos;s top video streaming
            platforms in one single bill.
          </p>
        </Reveal>

        <PlanGrid plans={bundlePlans} />

        <Reveal delay={0.3} className="mt-6">
          <NoteBar
            title="Note: Preferred Billing Durations Selected"
            body="You can choose your preferred billing duration (Monthly, Quarterly with 7 Days Free, Half-Yearly with 15 Days Free, or Annual with 30 Days Free & Free Installation)."
            tag="OTT Subscriptions Included"
          />
        </Reveal>
      </div>
    </section>
  );
}
