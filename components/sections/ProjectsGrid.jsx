import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { projects } from "@/lib/data";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function ProjectsGrid({ heading = true }) {
  return (
    <section className="relative py-24 lg:py-36 bg-ivory-100/70">
      <div className="container-page">
        {heading && (
          <div className="grid lg:grid-cols-12 gap-10 lg:items-end mb-14">
            <div className="lg:col-span-8">
              <SectionHeader
                eyebrow="The portfolio"
                title="A small, deliberate"
                highlight="catalogue."
                body="We've never built more than two projects at once. Every address that bears our name has had our full attention from drawing-board to door-handle."
              />
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link href="/projects" className="btn-secondary">
                See all addresses <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}

        <RevealStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <RevealItem key={p.slug} className="group">
              <Link
                href={`/projects/${p.slug}`}
                className="block rounded-3xl overflow-hidden bg-white border border-ink-900/[0.06] shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={p.cover}
                    alt={p.name}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/55 via-ink-900/5 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-wide-3 text-ink-700">
                    {p.status}
                  </span>
                  <span className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 text-ink-900 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-5 text-ivory-100">
                    <p className="text-[10px] uppercase tracking-wide-3 text-ivory-100/70">
                      {String(i + 1).padStart(2, "0")} · {p.type}
                    </p>
                    <p className="font-display text-3xl mt-1 leading-tight">
                      {p.name}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-ink-600 text-sm leading-relaxed text-pretty">
                    {p.blurb}
                  </p>
                  <div className="mt-5 pt-4 border-t border-ink-900/[0.06] flex items-center justify-between text-xs text-ink-500">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3 w-3" /> {p.location}
                    </span>
                    <span>{p.config.split("·")[0].trim()}</span>
                  </div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
