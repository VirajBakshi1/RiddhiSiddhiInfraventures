"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Sparkles, Download } from "lucide-react";
import Reveal, { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { projects, locationPoints, legacyFeatures, brochure } from "@/lib/data";

export default function SignatureProject() {
  const p = projects[0];

  return (
    <section className="relative py-24 lg:py-36 overflow-hidden">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative">
            <Reveal className="relative aspect-[5/6] sm:aspect-[6/5] lg:aspect-[5/6] rounded-[28px] overflow-hidden shadow-card">
              <Image
                src={p.cover}
                alt={`${p.name} — exterior`}
                fill
                sizes="(min-width:1024px) 60vw, 100vw"
                className="object-cover"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 text-ivory-100">
                <p className="text-[11px] uppercase tracking-wide-3 text-brand-orange-soft">
                  Signature project · {p.status}
                </p>
                <h3 className="font-display text-4xl sm:text-5xl mt-2">
                  {p.name}
                </h3>
                <p className="mt-3 max-w-md text-ivory-100/80 leading-relaxed">
                  {p.blurb}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pl-4">
            <span className="eyebrow">A closer look</span>
            <h2 className="heading-display mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] text-balance">
              An address built for those who measure{" "}
              <span className="italic text-brand-orange">privacy</span> in
              floors, not feet.
            </h2>
            <p className="mt-5 text-ink-600 leading-relaxed text-pretty max-w-md">
              {p.promise}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5">
              {[
                ["Type", p.type],
                ["Configuration", p.config],
                ["Location", p.location],
                ["Status", p.status],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-2xl bg-ivory-100 border border-ink-900/[0.05] p-5"
                >
                  <p className="text-[10px] uppercase tracking-wide-3 text-ink-500">
                    {k}
                  </p>
                  <p className="mt-1.5 text-sm text-ink-900">{v}</p>
                </div>
              ))}
            </div>

            <ul className="mt-8 space-y-3">
              {p.highlights.slice(0, 4).map((h) => (
                <li key={h} className="flex items-start gap-3 text-ink-700">
                  <Sparkles className="h-4 w-4 mt-1 text-brand-orange shrink-0" />
                  <span className="text-pretty">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/projects/the-legacy" className="btn-primary">
                View project <span aria-hidden>→</span>
              </Link>
              <a
                href={brochure.href}
                download
                className="btn-secondary"
              >
                <Download className="h-4 w-4" /> Brochure
              </a>
            </div>
          </div>
        </div>

        {/* Five-feature strip from brochure */}
        <RevealStagger className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {legacyFeatures.map((f, i) => (
            <RevealItem
              key={f.title}
              className="rounded-2xl bg-white border border-ink-900/[0.06] p-5 lg:p-6"
            >
              <p className="font-display text-sm tracking-wide-3 text-brand-orange">
                0{i + 1}
              </p>
              <p className="mt-3 font-display text-lg text-ink-900 leading-snug">
                {f.title}
              </p>
              <p className="mt-2 text-xs text-ink-600 leading-relaxed">
                {f.body}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>

        {/* Connectivity strip */}
        <Reveal className="mt-16 lg:mt-24 rounded-[28px] bg-ink-900 text-ivory-100 p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-brand-orange/30 blur-[100px]" />
          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <p className="text-[11px] uppercase tracking-wide-3 text-brand-orange-soft">
                Connectivity
              </p>
              <p className="font-display text-3xl mt-3 leading-tight">
                A neighbourhood that walks to you.
              </p>
              <p className="mt-3 text-ivory-100/70 text-sm">
                Shankar Nagar is one of Nagpur's most established residential
                pockets — and {p.name} sits at its very centre.
              </p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-4">
              {locationPoints.slice(0, 6).map((pt) => (
                <div
                  key={pt.label}
                  className="rounded-2xl border border-white/10 p-4 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2 text-ivory-100/85">
                    <MapPin className="h-3.5 w-3.5 text-brand-orange-soft" />
                    {pt.label}
                  </span>
                  <span className="font-display text-lg">{pt.distance}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
