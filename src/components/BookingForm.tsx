"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Crosshair,
  LoaderCircle,
  UserRound,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import BookingSuccess from "@/components/BookingSuccess";
import { submitBooking } from "@/lib/bookingForm";

type Errors = Partial<Record<"fullName" | "mobile" | "email" | "address" | "consent", string>>;

const inputBase =
  "w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#0b0b1a] placeholder:text-slate-400 transition-colors focus:border-[#2d2be0] focus:outline-none focus:ring-2 focus:ring-[#2d2be0]/15";

const inputClass = (hasError: boolean) =>
  `${inputBase} ${hasError ? "border-rose-400" : "border-slate-300"}`;

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-xs text-rose-600">
      {message}
    </p>
  );
}

function Stepper() {
  return (
    <div className="w-full border-b border-slate-200 bg-white">
      <ol className="mx-auto flex max-w-3xl items-center gap-3 px-6 py-3 text-xs sm:text-sm">
        <li className="flex shrink-0 items-center gap-2 text-slate-600">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-[#2d2be0]">
            <Check className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span>
            <span className="hidden sm:inline">1. </span>Select Plan
          </span>
        </li>
        <li aria-hidden="true" className="h-0.5 flex-1 rounded-full bg-[#2d2be0]" />
        <li
          aria-current="step"
          className="flex shrink-0 items-center gap-2 font-semibold text-[#2d2be0]"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2d2be0] text-xs text-white">
            2
          </span>
          <span>
            <span className="hidden sm:inline">2. Connection &amp; </span>
            <span className="sm:hidden">Connection &amp; </span>KYC
            <span className="hidden sm:inline"> Details</span>
          </span>
        </li>
      </ol>
    </div>
  );
}

export default function BookingForm({
  plan,
  backHref,
  children,
}: {
  plan: string;
  backHref: string;
  /** Extra sections shown under the form, hidden after submission. */
  children?: ReactNode;
}) {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [consent, setConsent] = useState(true);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [locating, setLocating] = useState(false);
  const [locationError, setLocationError] = useState("");

  const validate = (): Errors => {
    const next: Errors = {};
    if (fullName.trim().length < 2) next.fullName = "Please enter your full name.";
    if (!/^[6-9]\d{9}$/.test(mobile))
      next.mobile = "Enter a valid 10-digit mobile number.";
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = "Enter a valid email address.";
    if (address.trim().length < 10)
      next.address = "Please enter your complete installation address.";
    if (!consent) next.consent = "Please allow us to contact you about your booking.";
    return next;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const firstInvalid = e.currentTarget.querySelector<HTMLElement>(
        `[name="${Object.keys(found)[0]}"]`,
      );
      firstInvalid?.focus();
      return;
    }

    setStatus("submitting");
    try {
      await submitBooking({ fullName, mobile, email, address, plan, consent });
      setStatus("done");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
    }
  };

  const useCurrentLocation = () => {
    setLocationError("");
    if (!("geolocation" in navigator)) {
      setLocationError("Location isn't supported on this device.");
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const pin = `GPS: ${coords.latitude.toFixed(6)}, ${coords.longitude.toFixed(6)} (https://maps.google.com/?q=${coords.latitude},${coords.longitude})`;
        setAddress((current) => (current.trim() ? `${current.trim()}\n${pin}` : pin));
        setLocating(false);
      },
      () => {
        setLocationError("Couldn't get your location. Please allow access or type the address.");
        setLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  };

  if (status === "done") {
    return (
      <>
        <Stepper />
        <BookingSuccess plansHref={backHref} />
      </>
    );
  }

  return (
    <>
      <Stepper />

      <div className="mx-auto max-w-3xl px-6 pb-12 pt-14 sm:pt-20">
        <Reveal>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#0b0b1a] sm:text-5xl">
            Complete your{" "}
            <span className="text-[#2d2be0]">Connection Booking</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
            Complete this quick 3-minute booking request to reserve your fiber
            port. No upfront payment or card details are required today—our
            local field engineering team will verify physical fiber
            feasibility, schedule your doorstep installation slot, and complete
            paperless e-KYC before activation.
          </p>
          {plan && (
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2d2be0]" />
              Selected plan: {plan}
            </p>
          )}
        </Reveal>

        <Reveal delay={0.1}>
          <form noValidate onSubmit={handleSubmit} className="mt-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-start justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-[#2d2be0]">
                    <UserRound className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="text-sm font-semibold text-[#0b0b1a]">
                      Contact Information
                    </h2>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Used for appointment confirmations and router dispatch
                    </p>
                  </div>
                </div>
                <span className="hidden shrink-0 rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold text-indigo-700 sm:inline">
                  Instant SMS Updates
                </span>
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="fullName" className="text-xs font-semibold uppercase tracking-wide text-[#0b0b1a]">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="e.g. Rahul Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    className={`mt-2 ${inputClass(Boolean(errors.fullName))}`}
                  />
                  <FieldError id="fullName-error" message={errors.fullName} />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="mobile" className="text-xs font-semibold uppercase tracking-wide text-[#0b0b1a]">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <div
                      className={`mt-2 flex items-center rounded-lg border bg-white transition-colors focus-within:border-[#2d2be0] focus-within:ring-2 focus-within:ring-[#2d2be0]/15 ${
                        errors.mobile ? "border-rose-400" : "border-slate-300"
                      }`}
                    >
                      <span className="border-r border-slate-200 py-1 pl-4 pr-3 text-sm text-slate-500">
                        +91
                      </span>
                      <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel-national"
                        placeholder="98765 43210"
                        maxLength={10}
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                        aria-invalid={Boolean(errors.mobile)}
                        aria-describedby={errors.mobile ? "mobile-error" : undefined}
                        className="w-full rounded-r-lg bg-transparent px-3 py-3 text-sm text-[#0b0b1a] placeholder:text-slate-400 focus:outline-none"
                      />
                    </div>
                    <FieldError id="mobile-error" message={errors.mobile} />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-[#0b0b1a]">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="rahul.sharma@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`mt-2 ${inputClass(Boolean(errors.email))}`}
                    />
                    <FieldError id="email-error" message={errors.email} />
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <label htmlFor="address" className="text-xs font-semibold uppercase tracking-wide text-[#0b0b1a]">
                      Complete Installation Address <span className="text-rose-500">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={useCurrentLocation}
                      disabled={locating}
                      className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-[11px] font-semibold text-[#2d2be0] transition-colors hover:bg-indigo-100 disabled:opacity-60"
                    >
                      {locating ? (
                        <LoaderCircle className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
                      ) : (
                        <Crosshair className="h-3.5 w-3.5" aria-hidden="true" />
                      )}
                      {locating ? "Locating…" : "Use current location"}
                    </button>
                  </div>
                  <textarea
                    id="address"
                    name="address"
                    rows={3}
                    autoComplete="street-address"
                    placeholder="Flat 402, Block B, Silver Crest Apartments, Civil Lines, Sagar Cantt., Sagar, Madhya Pradesh - 470001"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    aria-invalid={Boolean(errors.address)}
                    aria-describedby={`address-hint${errors.address ? " address-error" : ""}`}
                    className={`mt-2 resize-y leading-relaxed ${inputClass(Boolean(errors.address))}`}
                  />
                  <FieldError id="address-error" message={errors.address} />
                  {locationError && (
                    <p className="mt-1.5 text-xs text-rose-600">{locationError}</p>
                  )}
                  <p id="address-hint" className="mt-2 text-xs leading-relaxed text-slate-500">
                    Include Flat/House No., Wing, Building/Society Name, Nearest
                    Landmark, and 6-digit Pincode to assist the line engineer in
                    locating the fiber.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-slate-200 bg-white px-4 py-3.5">
              <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-700">
                <input
                  type="checkbox"
                  name="consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  aria-describedby={errors.consent ? "consent-error" : undefined}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[#2d2be0]"
                />
                I agree to be contacted by Mezing Broadband &amp; its Partner
                before 10PM.
              </label>
              <FieldError id="consent-error" message={errors.consent} />
            </div>

            {status === "error" && (
              <p role="alert" className="mt-5 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                Something went wrong while sending your request. Please check
                your connection and try again.
              </p>
            )}

            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href={backHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#2d2be0] px-6 py-2.5 text-sm font-semibold text-[#2d2be0] transition-colors hover:bg-indigo-50"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to Plans
              </Link>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2d2be0] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-colors hover:bg-[#2018c4] disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2be0]"
              >
                {status === "submitting" && (
                  <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                )}
                {status === "submitting" ? "Submitting…" : "Confirm & Submit"}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
      {children}
    </>
  );
}
