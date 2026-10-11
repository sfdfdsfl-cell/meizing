"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const milestones = [
  {
    year: "2017",
    title: "The Vision",
    text: "Mezing Fibre was founded with a single mission: to bridge the digital divide in our local communities with world-class fiber technology.",
  },
  {
    year: "2020",
    title: "Rapid Expansion",
    text: "Scaled our infrastructure across multiple regions and secured strategic partnerships with major telecom giants to enhance our last-mile delivery.",
  },
  {
    year: "2024",
    title: "Market Leadership",
    text: "Now a trusted name in high-speed fiber optics, serving thousands with 24/7 support and ultra-reliable infrastructure.",
  },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

/** Expanding ring that repeats around a dot. */
function Pulse({
  delay = 0,
  className,
}: {
  delay?: number;
  className: string;
}) {
  return (
    <motion.span
      aria-hidden="true"
      className={`absolute inset-0 rounded-full ${className}`}
      initial={{ scale: 1, opacity: 0.6 }}
      animate={{ scale: 2.6, opacity: 0 }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay }}
    />
  );
}

export default function Timeline() {
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [activeCount, setActiveCount] = useState(
    reduceMotion ? milestones.length : 0,
  );

  // 0 → 1 as the timeline scrolls through the middle of the screen.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 70%", "end 55%"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.4,
  });
  const progress = reduceMotion ? scrollYProgress : smooth;
  const dotTop = useTransform(
    progress,
    (v) => `${Math.min(Math.max(v, 0), 1) * 100}%`,
  );

  // A milestone becomes active once the travelling dot reaches its node.
  useMotionValueEvent(progress, "change", (value) => {
    const track = trackRef.current;
    if (!track) return;
    const trackRect = track.getBoundingClientRect();
    const reached = itemRefs.current.filter((item) => {
      if (!item) return false;
      const rect = item.getBoundingClientRect();
      const nodeY = rect.top + rect.height / 2 - trackRect.top;
      return value * trackRect.height >= nodeY - 4;
    }).length;
    setActiveCount((current) => (current === reached ? current : reached));
  });

  return (
    <section
      aria-labelledby="timeline-heading"
      className="w-full overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
          className="text-center"
        >
          <h2
            id="timeline-heading"
            className="text-3xl font-bold tracking-tight text-[#0b0b1a] sm:text-4xl"
          >
            Our Growth Timeline
          </h2>
          <p className="mt-3 text-sm text-slate-500 sm:text-base">
            Evolution of speed and service over the years
          </p>
        </motion.div>

        <div ref={trackRef} className="relative mt-16">
          {/* Track */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-4 top-0 w-0.5 -translate-x-1/2 rounded-full bg-slate-200 md:left-1/2"
          >
            {/* Blue fill that grows with scroll */}
            <motion.div
              className="absolute inset-x-0 top-0 h-full origin-top rounded-full bg-linear-to-b from-indigo-300 via-[#4f46e5] to-[#2d2be0]"
              style={{ scaleY: progress }}
            />

            {/* Travelling glowing dot */}
            <motion.span
              className="absolute left-1/2 z-20 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2d2be0] shadow-[0_0_0_4px_rgba(255,255,255,1),0_0_18px_6px_rgba(45,43,224,0.55)]"
              style={{ top: dotTop }}
            >
              {!reduceMotion && <Pulse className="bg-[#2d2be0]/50" />}
            </motion.span>
          </div>

          <ul className="space-y-10 md:space-y-16">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              const active = index < activeCount;
              return (
                <li
                  key={milestone.year}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="relative"
                >
                  {/* Milestone node */}
                  <span
                    aria-hidden="true"
                    className="absolute left-4 top-1/2 z-10 h-6 w-6 -translate-x-1/2 -translate-y-1/2 md:left-1/2"
                  >
                    {active && !reduceMotion && (
                      <>
                        <Pulse className="bg-[#2d2be0]/30" />
                        <Pulse className="bg-[#2d2be0]/20" delay={0.9} />
                      </>
                    )}
                    <motion.span
                      className="absolute inset-0 rounded-full border-4 border-white shadow-md"
                      animate={{
                        backgroundColor: active ? "#2d2be0" : "#e2e8f0",
                        scale: active ? 1.15 : 1,
                      }}
                      transition={{ duration: 0.35, ease }}
                    />
                  </span>

                  {/* Card */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: reduceMotion ? 0 : isLeft ? -48 : 48,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.55, ease }}
                    className={`group md:w-1/2 ${
                      isLeft ? "md:pr-10" : "md:ml-auto md:pl-10"
                    } pl-10`}
                  >
                    <div
                      className={`rounded-xl border p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                        isLeft ? "md:text-right" : ""
                      } ${
                        active
                          ? "border-indigo-200 bg-white shadow-lg shadow-indigo-500/10"
                          : "border-transparent bg-slate-100"
                      }`}
                    >
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold transition-colors duration-500 ${
                          active
                            ? "bg-[#2d2be0] text-white"
                            : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {milestone.year}
                      </span>
                      <h3
                        className={`mt-3 font-bold transition-colors duration-500 ${
                          active ? "text-[#2d2be0]" : "text-[#0b0b1a]"
                        }`}
                      >
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {milestone.text}
                      </p>
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
