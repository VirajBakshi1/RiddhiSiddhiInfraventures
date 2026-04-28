import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import Reveal, { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import {
  projects,
  locationPoints,
  amenities,
  brochure,
  consultants,
} from "@/lib/data";
import { ArrowUpRight, MapPin, Sparkles, Download } from "lucide-react";
import CTA from "@/components/sections/CTA";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.location}`,
    description: p.blurb,
  };
}

export default function ProjectDetail({ params }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) notFound();

  const others = projects.filter((x) => x.slug !== p.slug);
  const isLegacy = p.slug === "the-legacy";

  return (
    <>
      <PageHeader
        eyebrow={`${p.status} · ${p.location}`}
        title={p.name}
        body={p.blurb}
      />

      <section className="container-page pb-12 lg:pb-20">
        <Reveal className="relative aspect-[16/9] sm:aspect-[16/8] rounded-[28px] overflow-hidden shadow-card">
          <Image
            src={p.cover}
            alt={p.name}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </Reveal>
        {isLegacy && (
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={brochure.href} download className="btn-primary">
              <Download className="h-4 w-4" /> {brochure.label}
            </a>
            <span className="text-xs text-ink-500">
              PDF · 12 pages · official project brochure
            </span>
          </div>
        )}
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-page grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">A closer look</span>
            <h2 className="heading-display mt-6 text-4xl sm:text-5xl leading-[1.05] text-balance">
              The way the day is{" "}
              <span className="italic text-brand-orange">spent here.</span>
            </h2>
            <p className="mt-6 text-ink-600 leading-relaxed">
              {p.blurb} {p.promise}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
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
                  <p className="mt-1.5 text-ink-900">{v}</p>
                </div>
              ))}
            </div>

            <ul className="space-y-3">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-ink-700">
                  <Sparkles className="h-4 w-4 mt-1 text-brand-orange shrink-0" />
                  <span className="text-pretty">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request a private viewing <span aria-hidden>→</span>
              </Link>
              <Link href="/projects" className="btn-secondary">
                Back to portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {isLegacy && (
        <section className="py-20 lg:py-28 bg-ivory-100">
          <div className="container-page">
            <span className="eyebrow">A way of life</span>
            <div className="grid lg:grid-cols-12 gap-6 lg:items-end mt-5 mb-12">
              <h2 className="heading-display lg:col-span-8 text-4xl sm:text-5xl leading-[1.05] max-w-3xl text-balance">
                A passion to build a{" "}
                <span className="italic text-brand-orange">
                  bond of togetherness
                </span>{" "}
                — for your future.
              </h2>
              <p className="lg:col-span-4 text-ink-600 leading-relaxed">
                A lifetime promise of a living where relationships blossom —
                drawn for the way a family actually lives.
              </p>
            </div>

            <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
              <RevealItem className="lg:col-span-7 relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[5/6] rounded-3xl overflow-hidden shadow-soft">
                <Image
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=80"
                  alt="A signature interior detail"
                  fill
                  sizes="(min-width:1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </RevealItem>
              <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5">
                <RevealItem className="relative aspect-[4/5] lg:aspect-[3/2] rounded-3xl overflow-hidden shadow-soft">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
                    alt="Living room"
                    fill
                    sizes="(min-width:1024px) 41vw, 50vw"
                    className="object-cover"
                  />
                </RevealItem>
                <RevealItem className="relative aspect-[4/5] lg:aspect-[3/2] rounded-3xl overflow-hidden shadow-soft">
                  <Image
                    src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80"
                    alt="Bedroom detail"
                    fill
                    sizes="(min-width:1024px) 41vw, 50vw"
                    className="object-cover"
                  />
                </RevealItem>
              </div>
            </RevealStagger>
          </div>
        </section>
      )}

      <section className="py-20 lg:py-28">
        <div className="container-page">
          <span className="eyebrow">The neighbourhood</span>
          <h2 className="heading-display mt-5 text-4xl sm:text-5xl leading-[1.05] max-w-2xl text-balance">
            A walk-everywhere{" "}
            <span className="italic text-brand-orange">address.</span>
          </h2>
          <RevealStagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {locationPoints.map((pt) => (
              <RevealItem
                key={pt.label}
                className="flex items-center justify-between rounded-2xl bg-white border border-ink-900/[0.06] p-5"
              >
                <span className="flex items-center gap-2 text-ink-700">
                  <MapPin className="h-4 w-4 text-brand-orange" /> {pt.label}
                </span>
                <span className="font-display text-xl text-ink-900">
                  {pt.distance}
                </span>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-ivory-100">
        <div className="container-page">
          <span className="eyebrow">Specifications</span>
          <h2 className="heading-display mt-5 text-4xl sm:text-5xl leading-[1.05] max-w-2xl text-balance">
            Material decisions, made{" "}
            <span className="italic text-brand-orange">slowly.</span>
          </h2>
          <RevealStagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {amenities.map((a, i) => (
              <RevealItem
                key={a.title}
                className="rounded-2xl border border-ink-900/[0.07] p-6 bg-white"
              >
                <p className="font-display text-sm tracking-wide-3 text-brand-orange">
                  0{i + 1}
                </p>
                <h3 className="font-display text-xl mt-3 text-ink-900">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {a.body}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {isLegacy && (
        <section className="py-20">
          <div className="container-page">
            <div className="rounded-[28px] bg-white border border-ink-900/[0.06] p-8 lg:p-12 grid sm:grid-cols-3 gap-6">
              {consultants.map((c) => (
                <div key={c.role}>
                  <p className="text-[10px] uppercase tracking-wide-3 text-ink-500">
                    {c.role}
                  </p>
                  <p className="mt-2 font-display text-xl text-ink-900">
                    {c.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {others.length > 0 && (
        <section className="py-24 bg-ivory-100">
          <div className="container-page">
            <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
              <h2 className="heading-display text-3xl sm:text-4xl">
                Other addresses
              </h2>
              <Link href="/projects" className="btn-secondary">
                View all <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {others.slice(0, 2).map((o) => (
                <Link
                  key={o.slug}
                  href={`/projects/${o.slug}`}
                  className="group rounded-3xl overflow-hidden bg-white border border-ink-900/[0.06] shadow-soft hover:shadow-card transition-all duration-500"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink-900">
                    <Image
                      src={o.cover}
                      alt={o.name}
                      fill
                      sizes="(min-width:768px) 50vw, 100vw"
                      className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] uppercase tracking-wide-3 text-brand-orange">
                      {o.status}
                    </p>
                    <p className="font-display text-2xl mt-2 text-ink-900">
                      {o.name}
                    </p>
                    <p className="mt-2 text-ink-600 text-sm">{o.blurb}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
