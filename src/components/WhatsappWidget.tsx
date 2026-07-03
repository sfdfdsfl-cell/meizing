"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const PHONE = "917389692807";
const MESSAGE = "hii i want to know more";
const chatUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

export default function WhatsappWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 12 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{ transformOrigin: "bottom right" }}
            className="w-[19rem] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
            role="dialog"
            aria-label="WhatsApp chat"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-[#25D366] px-5 py-4">
              <p className="text-base font-semibold text-white">
                We&apos;re here to help!
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1ea952] text-white transition-colors hover:bg-[#178a43]"
              >
                <X className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </div>

            {/* Body */}
            <div className="bg-[#e9f1ea] p-4">
              <div className="rounded-xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
                Hello 👋, how may I help you?
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href={chatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#1ebe5a]"
                >
                  Open chat
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        aria-expanded={open}
        className="h-14 w-14 rounded-full shadow-lg shadow-green-900/20 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        <Image
          src="/whatsapp.png"
          alt="Chat on WhatsApp"
          width={512}
          height={512}
          className="h-full w-full rounded-full"
        />
      </button>
    </div>
  );
}
