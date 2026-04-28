"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-20">
      <div className="container-page">
        <div className="relative grid lg:grid-cols-12 gap-10 pt-12 lg:pt-20 pb-16 lg:pb-28">
          {/* Left — copy */}
          <div className="lg:col-span-6 relative z-10 flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="eyebrow"
            >
              Crafting addresses in Nagpur · since 2005
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="heading-display mt-7 text-[clamp(2.6rem,6vw,5.4rem)] leading-[1] tracking-tight-3 text-balance"
            >
              A bond of
              <br />
              <span className="italic text-brand-orange">togetherness</span>,
              built to last.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 max-w-lg text-ink-600 text-base sm:text-lg leading-relaxed text-pretty"
            >
              Riddhi Siddhi Infraventures designs, develops and delivers
              residences for those who measure value in detail — never in
              square feet alone. Two decades of trust, 250+ families home.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link href="/projects" className="btn-primary">
                Explore residences
                <span aria-hidden>→</span>
              </Link>
              <Link href="/about" className="btn-secondary">
                The practice
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.7 }}
              className="mt-14 grid grid-cols-3 gap-8 max-w-md"
            >
              {[
                ["20", "Years of trust"],
                ["250+", "Families home"],
                ["08", "Addresses"],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="font-display text-3xl text-ink-900">{v}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide-3 text-ink-500">
                    {l}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — visual (real brochure imagery) */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] rounded-[28px] overflow-hidden shadow-card"
            >
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
                alt="A signature Riddhi Siddhi residence"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute left-5 right-5 bottom-5 flex items-end justify-between gap-4"
              >
                <div className="rounded-2xl bg-white/95 backdrop-blur px-5 py-4 shadow-soft">
                  <p className="text-[10px] uppercase tracking-wide-3 text-brand-orange">
                    Now welcoming
                  </p>
                  <p className="font-display text-2xl text-ink-900 leading-tight mt-0.5">
                    The Legacy
                  </p>
                  <p className="mt-1 text-xs text-ink-600 flex items-center gap-1.5">
                    <MapPin className="h-3 w-3" /> Shankar Nagar, Nagpur
                  </p>
                </div>
                <Link
                  href="/projects/the-legacy"
                  className="hidden sm:inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-orange text-white shadow-[0_18px_36px_-12px_rgba(240,90,40,0.6)] hover:scale-105 transition-transform"
                >
                  →
                </Link>
              </motion.div>
            </motion.div>

            {/* Side stat card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="hidden lg:block absolute -left-10 top-12 card-soft p-5 max-w-[210px]"
            >
              <p className="text-[10px] uppercase tracking-wide-3 text-ink-500">
                Single residence per floor
              </p>
              <p className="font-display text-xl mt-1 text-ink-900">
                A rare luxury — privacy by design
              </p>
            </motion.div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3 text-xs text-ink-500 uppercase tracking-wide-3 pb-8">
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          Scroll to explore
        </div>
      </div>

      <div className="pointer-events-none absolute -top-32 -left-40 h-[440px] w-[440px] rounded-full bg-brand-orange/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-brand-green/10 blur-[120px]" />
    </section>
  );
}
