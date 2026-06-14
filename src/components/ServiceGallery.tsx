"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const services = [
  { label: "Internet", src: "/mbps_section.png" },
  { label: "Streaming", src: "/image2.png" },
  { label: "Smart Phone", src: "/image3.png" },
  { label: "Landline", src: "/image4.png" },
  { label: "Smart Home", src: "/image5.png" },
  { label: "TV Box", src: "/image6.png" },
];

export default function ServiceGallery() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section aria-labelledby="services-heading" className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center"
        >
          <h2
            id="services-heading"
            className="text-3xl font-bold tracking-tight text-[#0b0b1a] sm:text-4xl"
          >
            Our service work better together
          </h2>
          <p className="mt-3 text-base text-slate-500 sm:text-lg">
            We offer the fastest gigabit network available.
          </p>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.li key={service.label} variants={item}>
              <a href="#" className="group block">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-100 shadow-sm">
                  <Image
                    src={service.src}
                    alt={service.label}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-sm font-bold uppercase tracking-wide text-indigo-600">
                  {service.label}
                </p>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
