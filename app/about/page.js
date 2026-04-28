import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal, { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import Stats from "@/components/sections/Stats";
import Pillars from "@/components/sections/Pillars";
import Journey from "@/components/sections/Journey";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "About — A small practice with long memory",
  description:
    "Riddhi Siddhi Infraventures has been quietly building distinguished homes in Nagpur since 2005 — one address at a time.",
};

const IMG_1 =
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80";
const IMG_2 =
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1600&q=80";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the practice"
        title="Two decades of the same"
        highlight="quiet ambition."
        body="We have always wanted the same thing — to build the kind of homes we ourselves would want to grow old in. The practice has not changed; only the city around it has."
      />

      <section className="container-page pb-12 lg:pb-24">
        <Reveal className="relative aspect-[16/9] sm:aspect-[16/7] rounded-[28px] overflow-hidden shadow-card">
          <Image
            src={IMG_1}
            alt="A signature Riddhi Siddhi residence"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </Reveal>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-page grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="The story"
              title="Begun in"
              highlight="2005."
            />
          </div>
          <div className="lg:col-span-7 space-y-6 text-ink-700 leading-relaxed text-base sm:text-lg">
            <Reveal as="p">
              Riddhi Siddhi Infraventures opened its first office in Gorepeth
              — a single drafting table, a tape measure, and a notebook with
              three pages of names that would become our first owners.
            </Reveal>
            <Reveal as="p" delay={1}>
              Twenty years on, our notebook has filled many times over. We
              still build at the pace we always have: never more than two
              projects at once, never an address we have not personally walked
              for a season before drawing a line.
            </Reveal>
            <Reveal as="p" delay={2}>
              Across our portfolio, more than two hundred and fifty families
              wake up in a home we made — and most of them came to us through
              someone already living in one. That, more than anything, is the
              measurement we trust.
            </Reveal>
          </div>
        </div>
      </section>

      <Pillars />

      <section className="py-24 lg:py-32 bg-ivory-100">
        <div className="container-page grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <Reveal className="relative aspect-[4/5] rounded-[28px] overflow-hidden shadow-card">
              <Image
                src={IMG_2}
                alt="The team at work"
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="How we work"
              title="A delivery model built around the"
              highlight="owner."
              body="From the first visit to the day the keys change hands, each owner is on a single file with a single point of contact. No call-centres, no escalation matrices — just one number that picks up."
            />
            <RevealStagger className="mt-10 space-y-5">
              {[
                {
                  k: "01 · Listen",
                  v: "Every conversation begins with the way you'd like the day to start, and ends with the way you'd like it to close.",
                },
                {
                  k: "02 · Sketch",
                  v: "Architects sit at the same table as our site engineers from the first sketch — the design and the buildability are decided together.",
                },
                {
                  k: "03 · Build",
                  v: "A small in-house crew of foremen and finishers, supported by mills and partners we've used for over a decade.",
                },
                {
                  k: "04 · Stay",
                  v: "We stay involved for the first two monsoons after handover. Most owners only meet us once after that — at their housewarming.",
                },
              ].map((s) => (
                <RevealItem
                  key={s.k}
                  className="flex gap-6 border-t border-ink-900/10 pt-5"
                >
                  <p className="font-display text-lg text-brand-orange whitespace-nowrap">
                    {s.k}
                  </p>
                  <p className="text-ink-700 leading-relaxed">{s.v}</p>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>

      <Journey />
      <Stats />
      <CTA />
    </>
  );
}
