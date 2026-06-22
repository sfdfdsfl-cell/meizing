"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState, type MouseEvent } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Plan", href: "/plans" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false);
    // If the target section exists on the current page, smooth-scroll to it.
    // Otherwise let the link navigate to the homepage with the hash.
    if (href.startsWith("/#")) {
      const el = document.getElementById(href.slice(2));
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" aria-label="Mezing Broadband home">
          <Image
            src="/new_logo.jpg"
            alt="Mezing Broadband"
            width={767}
            height={299}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors hover:text-indigo-600 ${
                  isActive(link.href) ? "text-indigo-600" : "text-[#0b0b1a]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#"
          className="hidden rounded-full bg-[#2d2be0] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/30 transition-colors hover:bg-[#2018c4] md:inline-flex"
        >
          Customer Login
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#0b0b1a] hover:bg-slate-100 md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            aria-hidden="true"
          >
            {open ? (
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors hover:bg-slate-50 ${
                      isActive(link.href) ? "text-indigo-600" : "text-[#0b0b1a]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-[#2d2be0] px-6 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#2018c4]"
                >
                  Customer Login
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
