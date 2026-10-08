"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, X } from "lucide-react";

export type PlanApp = {
  name: string;
  src: string;
  width: number;
  height: number;
  /** Brand-colored tile behind the logo, so it reads like an app icon. */
  tileClass?: string;
  imageClass?: string;
};

export type HomePlan = {
  speed: number;
  price: string;
  badge?: string;
  /** Bundle-only fields */
  tier?: string;
  description?: string;
  includedApps?: PlanApp[];
  moreApps?: number;
};

const check = (
  <BadgeCheck
    className="mt-0.5 h-4 w-4 shrink-0 fill-[#2d2be0] text-white"
    aria-hidden="true"
  />
);

function AppTiles({ plan, size }: { plan: HomePlan; size: "sm" | "md" }) {
  if (!plan.includedApps) return null;
  const tile = size === "sm" ? "h-8 w-8" : "h-9 w-9";
  return (
    <div className="rounded-xl border border-slate-200 bg-[#f4f5fc] p-3">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
        Included Apps
      </p>
      <ul className="mt-2 flex flex-wrap items-center gap-2">
        {plan.includedApps.map((app) => (
          <li
            key={app.name}
            title={app.name}
            className={`flex ${tile} items-center justify-center overflow-hidden rounded-md shadow-sm ${
              app.tileClass ?? "border border-slate-200 bg-white p-1"
            }`}
          >
            <Image
              src={app.src}
              alt={app.name}
              width={app.width}
              height={app.height}
              className={`h-full w-full ${app.imageClass ?? "object-contain"}`}
            />
          </li>
        ))}
        {plan.moreApps ? (
          <li className="rounded-md border border-slate-200 bg-white px-2 py-1.5 text-[10px] font-medium text-slate-600">
            +{plan.moreApps} more
          </li>
        ) : null}
      </ul>
    </div>
  );
}

function Benefit({ title, note }: { title: string; note?: string }) {
  return (
    <li className="flex gap-2.5">
      {check}
      <div>
        <p className="text-sm font-semibold text-[#0b0b1a]">{title}</p>
        {note && (
          <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{note}</p>
        )}
      </div>
    </li>
  );
}

export default function HomePlanCard({ plan }: { plan: HomePlan }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Restore page scrolling if we navigate away while the popup is open.
  useEffect(
    () => () => {
      document.documentElement.style.overflow = "";
    },
    [],
  );
  const isBundle = Boolean(plan.tier);

  const open = () => {
    dialogRef.current?.showModal();
    // Stop the page behind the popup from scrolling.
    document.documentElement.style.overflow = "hidden";
  };
  const close = () => dialogRef.current?.close();

  return (
    <>
      <div className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#2d2be0] hover:shadow-xl hover:shadow-indigo-500/15 hover:ring-1 hover:ring-[#2d2be0] focus-within:border-[#2d2be0] focus-within:ring-1 focus-within:ring-[#2d2be0]">
        {plan.badge && (
          <span
            className={`absolute rounded-md bg-[#2d2be0] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white ${
              isBundle
                ? "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
                : "right-3 top-3"
            }`}
          >
            {plan.badge}
          </span>
        )}

        {plan.tier && (
          <p className="mb-3 text-[10px] font-medium uppercase tracking-wide text-slate-500 transition-colors group-hover:text-[#2d2be0]">
            {plan.tier}
          </p>
        )}

        <p className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-[#0b0b1a] transition-colors group-hover:text-[#2d2be0]">
            {plan.speed}
          </span>
          <span className="text-sm text-slate-600">Mbps</span>
        </p>

        {!isBundle && (
          <p className="mt-4 flex items-center gap-2 text-sm text-slate-700">
            {check}
            Unlimited Data
          </p>
        )}

        <hr className="my-5 border-slate-200" />

        <p className="flex items-baseline gap-1.5">
          <span className="text-2xl font-bold text-[#0b0b1a]">₹{plan.price}</span>
          <span className="text-xs text-slate-500">/month + GST</span>
        </p>

        {plan.description && (
          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            {plan.description}
          </p>
        )}

        {plan.includedApps && (
          <div className="mt-4">
            <AppTiles plan={plan} size="sm" />
          </div>
        )}

        <div className="mt-auto pt-6">
          <button
            type="button"
            onClick={open}
            aria-haspopup="dialog"
            className="flex w-full items-center justify-center rounded-full border border-[#2d2be0] px-4 py-2.5 text-sm font-semibold text-[#2d2be0] transition-colors duration-300 group-hover:bg-[#2d2be0] group-hover:text-white hover:bg-[#2018c4]! focus-visible:bg-[#2d2be0] focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0]"
          >
            Get Started
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => {
          document.documentElement.style.overflow = "";
        }}
        aria-label={`${plan.speed} Mbps ${isBundle ? "entertainment" : "fiber"} plan details`}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-sm rounded-2xl bg-transparent p-0 backdrop:bg-slate-950/60 backdrop:backdrop-blur-sm"
      >
        <div className="relative max-h-[90dvh] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>

          <p className="text-sm font-semibold text-[#0b0b1a]">
            {isBundle ? "Entertainment" : "Fiber Only"}
          </p>
          <p className="mt-5 flex items-baseline gap-1.5">
            <span className="text-3xl font-bold text-[#0b0b1a]">
              ₹{plan.price}
            </span>
            <span className="text-xs text-slate-500">/month + GST</span>
          </p>

          <hr className="my-5 border-slate-200" />

          <p className="text-sm font-semibold text-[#0b0b1a]">Benefits</p>
          <ul className="mt-4 space-y-3">
            <Benefit title="Validity - 30 Days" />
            {isBundle && <Benefit title="Free OTT Bundle" />}
          </ul>

          {isBundle && (
            <div className="mt-4">
              <AppTiles plan={plan} size="md" />
            </div>
          )}

          <ul className="mt-4 space-y-3">
            <Benefit
              title={`Upload/Download = ${plan.speed} Mbps`}
              note="Unlimited Data, High Speed"
            />
            <Benefit
              title="Free Wi-Fi Router."
              note="(Property of Mezing Broadband to be recovered upon service termination)"
            />
          </ul>

          <hr className="my-5 border-slate-200" />

          <p className="text-sm text-[#0b0b1a]">
            Available in 3, 6 and 12 months options
          </p>

          <Link
            href={`/booking?${new URLSearchParams({
              plan: `${isBundle ? "Entertainment" : "Fiber Only"} ${plan.speed} Mbps – ₹${plan.price}/month`,
              from: "home",
            })}`}
            className="mt-5 flex w-full items-center justify-center rounded-full bg-[#2d2be0] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2018c4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0]"
          >
            Get Started
          </Link>
        </div>
      </dialog>
    </>
  );
}
