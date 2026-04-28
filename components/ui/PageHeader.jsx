"use client";

import { motion } from "framer-motion";

export default function PageHeader({ eyebrow, title, highlight, body }) {
  return (
    <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-24 overflow-hidden">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            {eyebrow && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="eyebrow"
              >
                {eyebrow}
              </motion.span>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.1 }}
              className="heading-display mt-6 text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.05] tracking-tight-3 text-balance"
            >
              {title}
              {highlight && (
                <>
                  {" "}
                  <span className="italic text-brand-orange">{highlight}</span>
                </>
              )}
            </motion.h1>
          </div>
          {body && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="lg:col-span-4 lg:pb-3"
            >
              <p className="text-ink-600 text-base sm:text-lg leading-relaxed text-pretty">
                {body}
              </p>
            </motion.div>
          )}
        </div>
      </div>
      <div className="pointer-events-none absolute -top-32 -right-40 h-[440px] w-[440px] rounded-full bg-brand-orange/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -left-32 h-[420px] w-[420px] rounded-full bg-brand-green/10 blur-[120px]" />
    </section>
  );
}
