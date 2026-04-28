"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/data";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const total = testimonials.length;
  const next = () => setI((v) => (v + 1) % total);
  const prev = () => setI((v) => (v - 1 + total) % total);

  return (
    <section className="relative py-24 lg:py-36 bg-ivory-100">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="In their own words"
              title="The reason most"
              highlight="referrals begin at home."
            />
          </div>
          <div className="lg:col-span-5 flex lg:justify-end gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="h-12 w-12 rounded-full border border-ink-900/15 hover:bg-ink-900 hover:text-white transition-colors inline-flex items-center justify-center"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="h-12 w-12 rounded-full bg-ink-900 text-white hover:bg-brand-orange transition-colors inline-flex items-center justify-center"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-14 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[28px] bg-white border border-ink-900/[0.06] p-10 lg:p-16 shadow-soft"
            >
              <span
                aria-hidden
                className="font-display text-7xl lg:text-9xl leading-none text-brand-orange/25 block"
              >
                “
              </span>
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink-900 leading-snug max-w-3xl text-balance -mt-6">
                {testimonials[i].quote}
              </p>
              <div className="mt-10 pt-6 border-t border-ink-900/10 flex items-end justify-between gap-4 flex-wrap">
                <div>
                  <p className="font-display text-xl text-ink-900">
                    {testimonials[i].name}
                  </p>
                  <p className="text-sm text-ink-500 mt-1">
                    {testimonials[i].home}
                  </p>
                </div>
                <p className="text-xs uppercase tracking-wide-3 text-ink-500">
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(total).padStart(2, "0")}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
