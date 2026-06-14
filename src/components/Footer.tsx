import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Plan", href: "/plans" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const offerings = [
  "Broadband for Sagar Cantt",
  "Broadband for Civil Line",
  "Broadband for Makronia",
  "Broadband for Tili",
  "Broadband for Katra Bazar",
  "Broadband for Moti Nagar",
  "Broadband for Bada Bazaar",
  "Broadband for Sadar Bazaar",
  "Broadband for Sagar District",
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full scroll-mt-20 border-t border-slate-200 bg-white"
    >
      <Reveal className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand + offerings */}
          <div>
            <Image
              src="/logo.png"
              alt="Mezing Broadband"
              width={646}
              height={109}
              className="h-9 w-auto"
              priority
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-500">
              We are dedicated to providing high-speed internet and innovative
              digital solutions, catering to a broad spectrum of clients—from
              residential users to large enterprises—while ensuring seamless and
              dependable connectivity.
            </p>

            <div className="mt-10">
              <h3 className="text-base font-bold text-[#0b0b1a]">
                Our Offerings
              </h3>
              <ul className="mt-4 space-y-1.5">
                {offerings.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 transition-colors hover:text-indigo-600"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navigation + cards */}
          <div>
            <h3 className="text-base font-bold text-[#0b0b1a]">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-800"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-4">
              <a
                href="#"
                className="block max-w-xs rounded-xl border border-slate-300 px-5 py-4 transition-colors hover:border-indigo-400 hover:bg-indigo-50/40"
              >
                <p className="flex items-center gap-2 text-sm font-semibold text-[#0b0b1a]">
                  <span className="h-2 w-2 rounded-full bg-indigo-600" />
                  We&apos;re Listening
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Your feedback matters!
                </p>
              </a>
              <a
                href="#"
                className="block max-w-xs rounded-xl border border-slate-300 px-5 py-4 transition-colors hover:border-indigo-400 hover:bg-indigo-50/40"
              >
                <p className="text-sm font-semibold text-[#0b0b1a]">
                  Refer a Friend
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  You will receive exciting offers
                </p>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold text-[#0b0b1a]">Contact us</h3>
            <p className="mt-4 text-sm font-semibold text-[#0b0b1a]">
              MEZING BROADBAND PRIVATE LIMITED
            </p>
            <p className="mt-1 text-xs text-slate-500">
              CIN: U63122MP2026PTC084113
            </p>
            <address className="mt-4 text-sm not-italic leading-relaxed text-slate-500">
              Plot N 77/1/1 Utkarsh Public School Area, Rani Durgawati Ward No.
              1, Semrabag, Sagar, Madhya Pradesh, Pin: 470002 INDIA
            </address>
            <p className="mt-5 text-sm font-bold text-[#0b0b1a]">
              <a href="tel:+917389692807" className="hover:text-indigo-600">
                +91 7389692807
              </a>
            </p>
            <div className="mt-5 text-sm">
              <p className="text-slate-500">Email:</p>
              <a
                href="mailto:mezingconsultants@gmail.com"
                className="font-bold text-[#0b0b1a] transition-colors hover:text-indigo-600"
              >
                mezingconsultants@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            © 2026 Mezing Broadband. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
            <Link
              href="/privacy-policy"
              className="text-slate-500 transition-colors hover:text-indigo-600"
            >
              Privacy Policy
            </Link>
            <Link
              href="/refund-policy"
              className="text-slate-500 transition-colors hover:text-indigo-600"
            >
              Refund Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-slate-500 transition-colors hover:text-indigo-600"
            >
              Terms &amp; Conditions
            </Link>
          </nav>
        </div>
      </Reveal>
    </footer>
  );
}
