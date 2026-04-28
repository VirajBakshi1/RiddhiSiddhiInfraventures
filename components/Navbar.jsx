"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { brand, navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory-50/85 backdrop-blur-xl border-b border-ink-900/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-20">
        <Link
          href="/"
          aria-label="Riddhi Siddhi Infraventures — Home"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="Riddhi Siddhi Infraventures"
            width={180}
            height={48}
            priority
            className="h-10 w-auto sm:h-11 object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ink-700 hover:text-brand-orange transition-colors link-underline"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${brand.phone[0].replace(/\s/g, "")}`}
            className="text-sm text-ink-700 hover:text-brand-orange transition-colors flex items-center gap-2"
          >
            <Phone className="h-3.5 w-3.5" /> {brand.phone[0]}
          </a>
          <Link href="/contact" className="btn-primary">
            Enquire
            <span aria-hidden>→</span>
          </Link>
        </div>

        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-ink-900/10 bg-white/70"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-ink-900/[0.06] bg-ivory-50/95 backdrop-blur-xl"
          >
            <div className="container-page py-8 flex flex-col gap-6">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl tracking-tight-2 text-ink-900 hover:text-brand-orange transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <div className="h-px bg-ink-900/10 my-2" />
              <a
                href={`tel:${brand.phone[0].replace(/\s/g, "")}`}
                className="text-ink-600 flex items-center gap-2"
              >
                <Phone className="h-4 w-4 text-brand-orange" /> {brand.phone[0]}
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-fit"
              >
                Enquire <span aria-hidden>→</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
