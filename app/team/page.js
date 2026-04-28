import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Reveal, { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import CTA from "@/components/sections/CTA";
import { partners, consultants } from "@/lib/data";
import { Quote } from "lucide-react";

export const metadata = {
  title: "Team — The partners behind the practice",
  description:
    "Riddhi Siddhi Infraventures is led by partners Umesh Shrikhande and Shrikant Raut — two decades of considered building, on a single table.",
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="The partners"
        title="Two desks. One"
        highlight="long brief."
        body="Riddhi Siddhi Infraventures has stayed deliberately small. Every drawing is reviewed, every milestone signed off, every owner met — by one of two people whose names are on the door."
      />

      <section className="py-12 lg:py-20">
        <div className="container-page space-y-24 lg:space-y-32">
          {partners.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={p.name}
                className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center`}
              >
                <Reveal
                  className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}
                >
                  <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden shadow-card">
                    <Image
                      src={p.portrait}
                      alt={`${p.name} — ${p.role}, Riddhi Siddhi Infraventures`}
                      fill
                      sizes="(min-width:1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-900/60 to-transparent" />
                    <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between gap-3">
                      <div className="rounded-2xl bg-white/95 backdrop-blur px-4 py-3">
                        <p className="text-[10px] uppercase tracking-wide-3 text-brand-orange">
                          {p.role}
                        </p>
                        <p className="font-display text-lg text-ink-900 leading-tight mt-0.5">
                          {p.name}
                        </p>
                      </div>
                      <span className="font-display text-3xl text-ivory-50 italic">
                        0{i + 1}
                      </span>
                    </div>
                  </div>
                </Reveal>

                <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
                  <Reveal>
                    <span className="eyebrow">Partner · Riddhi Siddhi</span>
                  </Reveal>
                  <Reveal delay={1}>
                    <h2 className="heading-display mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] text-balance">
                      {p.name.split(" ")[0]}{" "}
                      <span className="italic text-brand-orange">
                        {p.name.split(" ").slice(1).join(" ")}
                      </span>
                    </h2>
                  </Reveal>
                  <Reveal delay={2}>
                    <p className="mt-6 text-ink-600 text-base sm:text-lg leading-relaxed text-pretty max-w-xl">
                      {p.bio}
                    </p>
                  </Reveal>

                  <Reveal delay={3}>
                    <figure className="mt-8 rounded-2xl border border-ink-900/[0.06] bg-ivory-100 p-6 sm:p-7 max-w-xl">
                      <Quote className="h-5 w-5 text-brand-orange" />
                      <blockquote className="mt-3 font-display text-xl sm:text-2xl text-ink-900 leading-snug italic text-balance">
                        “{p.quote}”
                      </blockquote>
                    </figure>
                  </Reveal>

                  <Reveal delay={4}>
                    <ul className="mt-8 flex flex-wrap gap-2">
                      {p.focus.map((f) => (
                        <li
                          key={f}
                          className="rounded-full border border-ink-900/15 bg-white px-4 py-1.5 text-xs text-ink-700"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-ivory-100">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow">A small bench</span>
              <h2 className="heading-display mt-5 text-4xl sm:text-5xl leading-[1.05] text-balance">
                Two partners, a{" "}
                <span className="italic text-brand-orange">
                  trusted bench
                </span>{" "}
                of consultants.
              </h2>
              <p className="mt-6 text-ink-600 leading-relaxed max-w-xl">
                The names on the door are joined by a quiet, long-standing
                bench of architects, structural engineers and legal advisers
                we have worked with for the better part of two decades.
              </p>
            </div>
          </div>

          <RevealStagger className="mt-12 grid sm:grid-cols-3 gap-5">
            {consultants.map((c) => (
              <RevealItem
                key={c.role}
                className="rounded-2xl bg-white border border-ink-900/[0.07] p-6 lg:p-7"
              >
                <p className="text-[10px] uppercase tracking-wide-3 text-brand-orange">
                  {c.role}
                </p>
                <p className="mt-3 font-display text-2xl text-ink-900 leading-snug">
                  {c.name}
                </p>
                <p className="mt-3 text-sm text-ink-600 leading-relaxed">
                  Long-standing collaborator. On every Riddhi Siddhi project
                  for over a decade.
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <div className="rounded-[28px] bg-white border border-ink-900/[0.06] p-8 sm:p-12 grid lg:grid-cols-12 gap-8 items-center shadow-soft">
            <div className="lg:col-span-8">
              <span className="eyebrow">Speak with the partners</span>
              <h3 className="heading-display mt-4 text-3xl sm:text-4xl leading-tight text-balance">
                A conversation, on a single desk —{" "}
                <span className="italic text-brand-orange">never an inbox.</span>
              </h3>
              <p className="mt-4 text-ink-600 leading-relaxed max-w-xl">
                Whether you're considering a residence at The Legacy or an
                upcoming address, a partner answers personally — usually within
                the working day.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link href="/contact" className="btn-primary">
                Begin a conversation <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
