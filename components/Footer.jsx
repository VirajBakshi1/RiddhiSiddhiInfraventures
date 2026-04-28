import Image from "next/image";
import Link from "next/link";
import { brand, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-ink-900 text-ivory-100 overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-[0.35] pointer-events-none" />
      <div className="absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full bg-brand-orange/20 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-24 w-[420px] h-[420px] rounded-full bg-brand-green/20 blur-[140px] pointer-events-none" />

      <div className="relative container-page pt-24 pb-10">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-10">
          <div className="lg:col-span-5">
            <Image
              src="/logo.png"
              alt={brand.name}
              width={220}
              height={60}
              className="h-12 w-auto object-contain brightness-0 invert opacity-90"
            />
            <p className="mt-7 max-w-md text-ivory-100/70 leading-relaxed text-pretty">
              {brand.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {brand.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-full border border-white/10 px-5 py-2 text-sm text-ivory-100/80 hover:bg-white hover:text-ink-900 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] uppercase tracking-wide-3 text-ivory-100/50">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-ivory-100/85 hover:text-brand-orange transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] uppercase tracking-wide-3 text-ivory-100/50">
              Projects
            </p>
            <ul className="mt-5 space-y-3 text-ivory-100/85">
              <li>
                <Link
                  href="/projects/the-legacy"
                  className="hover:text-brand-orange transition-colors"
                >
                  The Legacy
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-brand-orange transition-colors"
                >
                  Amara Residences
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-brand-orange transition-colors"
                >
                  RS Heritage
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] uppercase tracking-wide-3 text-ivory-100/50">
              Connect
            </p>
            <ul className="mt-5 space-y-3 text-ivory-100/85">
              {brand.phone.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="hover:text-brand-orange transition-colors"
                  >
                    {p}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="hover:text-brand-orange transition-colors"
                >
                  {brand.email}
                </a>
              </li>
              <li className="pt-3 text-ivory-100/60 text-sm leading-relaxed">
                {brand.office}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between text-xs text-ivory-100/50">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <a href="#" className="hover:text-ivory-100">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-ivory-100">
              Terms of Use
            </a>
            <a href="#" className="hover:text-ivory-100">
              RERA Disclosures
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
