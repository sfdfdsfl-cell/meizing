import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SocialLinks from "@/components/SocialLinks";
import {
  APP_STORE_URLS,
  CUSTOMER_LOGIN_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  SUPPORT_EMAIL,
} from "@/lib/site";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Home Plan", href: "/home-plans" },
  { label: "Business Plan", href: "/business-plans" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const offerings = [
  "Broadband for Sagar District",
  "Broadband for Sagar Cantt",
  "Broadband for Civil Line",
  "Broadband for Makronia",
  "Broadband for Tili",
  "Broadband for Katra Bazar",
  "Broadband for Moti Nagar",
  "Broadband for Bada Bazaar",
  "Broadband for Sadar Bazaar",
];

const navLinkClass =
  "text-sm font-medium text-[#2d2be0] transition-colors hover:text-[#1a18a8]";

function StoreBadge({
  href,
  label,
  caption,
  name,
  icon,
}: {
  href: string;
  label: string;
  caption: string;
  name: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-11 items-center gap-2.5 rounded-lg border border-slate-500 bg-black px-3 text-white transition-opacity hover:opacity-85"
    >
      {icon}
      <span className="flex flex-col leading-none">
        <span className="text-[9px] font-medium">{caption}</span>
        <span className="mt-0.5 text-lg font-semibold tracking-tight">
          {name}
        </span>
      </span>
    </a>
  );
}

const googlePlayIcon = (
  <svg viewBox="0 0 24 26" className="h-6 w-6" aria-hidden="true">
    <path fill="#00d7fe" d="M1.1.6C.8.9.6 1.4.6 2.1v21.8c0 .7.2 1.2.5 1.5l.1.1L13.4 13.3v-.3L1.2.5l-.1.1Z" />
    <path fill="#ffce00" d="m17.5 17.4-4.1-4.1v-.3l4.1-4.1.1.1 4.8 2.8c1.4.8 1.4 2 0 2.8l-4.8 2.8h-.1Z" />
    <path fill="#ff3a44" d="M17.6 17.3 13.4 13 1.1 25.4c.5.5 1.2.5 2.1.1l14.4-8.2" />
    <path fill="#48ff48" d="M17.6 8.8 3.2.6C2.3.1 1.6.2 1.1.7L13.4 13l4.2-4.2Z" />
  </svg>
);

const appleIcon = (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" aria-hidden="true">
    <path d="M16.37 12.74c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-2.99-.79-1.54.02-2.96.9-3.75 2.27-1.6 2.78-.41 6.89 1.15 9.15.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.24-.02 2.02-1.12 2.77-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.39-.92-2.41-3.67ZM14.1 5.98c.63-.77 1.06-1.83.94-2.89-.91.04-2.02.61-2.67 1.37-.58.67-1.1 1.76-.96 2.8 1.02.08 2.06-.52 2.69-1.28Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full scroll-mt-28 border-t border-slate-200 bg-white"
    >
      <Reveal className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Mezing Broadband home">
              <Image
                src="/new_logo.png"
                alt="Mezing Broadband"
                width={747}
                height={381}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              We are dedicated to providing high-speed internet and innovative
              digital solutions, catering to a broad spectrum of clients—from
              residential users to large enterprises—while ensuring seamless and
              dependable connectivity.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-labelledby="footer-nav-heading">
            <h3
              id="footer-nav-heading"
              className="text-base font-bold text-[#0b0b1a]"
            >
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={navLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={CUSTOMER_LOGIN_URL} className={navLinkClass}>
                  Customer Login
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold text-[#0b0b1a]">Contact us</h3>
            <p className="mt-4 text-xs font-semibold uppercase text-[#0b0b1a]">
              Mezing Broadband Private Limited
            </p>
            <p className="mt-1 text-[11px] text-slate-500">
              CIN: U63122MP2026PTC084113
            </p>
            <p className="mt-5 text-sm text-slate-600">
              Phone:{" "}
              <a
                href={PHONE_HREF}
                className="font-semibold text-[#0b0b1a] transition-colors hover:text-[#2d2be0]"
              >
                {PHONE_DISPLAY}
              </a>
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Email:{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="break-all font-semibold text-[#0b0b1a] transition-colors hover:text-[#2d2be0]"
              >
                {SUPPORT_EMAIL}
              </a>
            </p>
            <address className="mt-5 text-sm not-italic leading-relaxed text-slate-600">
              Plot N 77/1/1 Utkarsh Public School Area, Rani Durgawati Ward No.
              1, Semrabag, Sagar, Madhya Pradesh, Pin: 470002 INDIA
            </address>
          </div>

          {/* Offerings */}
          <div>
            <h3 className="text-base font-bold text-[#0b0b1a]">
              Our Offerings
            </h3>
            <ul className="mt-4 space-y-1">
              {offerings.map((item) => (
                <li key={item}>
                  <Link
                    href="/home-plans"
                    className="text-sm text-slate-600 transition-colors hover:text-[#2d2be0]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* App + socials */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold text-[#0b0b1a]">
              Download Our App
            </h3>
            <div className="mt-4 flex flex-wrap gap-4">
              <StoreBadge
                href={APP_STORE_URLS.googlePlay}
                label="Get it on Google Play"
                caption="GET IT ON"
                name="Google Play"
                icon={googlePlayIcon}
              />
              <StoreBadge
                href={APP_STORE_URLS.appStore}
                label="Download on the App Store"
                caption="Download on the"
                name="App Store"
                icon={appleIcon}
              />
            </div>

            <SocialLinks className="mt-10 lg:mt-16" />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © 2026 Mezing Broadband. All rights reserved.
          </p>
          <nav
            aria-label="Legal"
            className="flex flex-wrap gap-x-10 gap-y-2 text-xs"
          >
            <Link
              href="/privacy-policy"
              className="text-[#2d2be0] transition-colors hover:text-[#1a18a8]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/refund-policy"
              className="text-[#2d2be0] transition-colors hover:text-[#1a18a8]"
            >
              Refund Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-[#2d2be0] transition-colors hover:text-[#1a18a8]"
            >
              Terms &amp; Conditions
            </Link>
          </nav>
        </div>
      </Reveal>
    </footer>
  );
}
