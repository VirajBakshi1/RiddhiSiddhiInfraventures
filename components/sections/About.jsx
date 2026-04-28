import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const IMG_A =
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80";
const IMG_B =
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80";

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-36">
      <div className="container-page grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6 relative">
          <div className="relative grid grid-cols-6 grid-rows-6 gap-4 aspect-[5/6]">
            <Reveal className="col-span-4 row-span-4 relative rounded-[24px] overflow-hidden shadow-card">
              <Image
                src={IMG_A}
                alt="A signature interior"
                fill
                sizes="(min-width:1024px) 40vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal
              delay={1}
              className="col-start-4 col-span-3 row-start-4 row-span-3 relative rounded-[24px] overflow-hidden shadow-card border-[6px] border-ivory-50"
            >
              <Image
                src={IMG_B}
                alt="A residential lobby detail"
                fill
                sizes="(min-width:1024px) 30vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal
              delay={2}
              className="col-start-1 col-span-3 row-start-5 row-span-2 rounded-[24px] bg-brand-green text-ivory-100 p-7 flex flex-col justify-between"
            >
              <p className="text-[11px] uppercase tracking-wide-3 text-ivory-100/70">
                Est. 2005
              </p>
              <div>
                <p className="font-display text-4xl">20</p>
                <p className="text-sm text-ivory-100/80 mt-1">
                  years of considered building
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="The practice"
            title="A lifetime promise of a living where"
            highlight="relationships blossom."
            body="For two decades, Riddhi Siddhi Infraventures has worked at a deliberate pace — choosing fewer plots, sketching them slowly, and finishing them with the kind of detail that only reveals itself once you live inside it."
          />

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Architecture-led",
                body: "Every project begins with a brief, not a budget. We design first, then build to that vision.",
              },
              {
                title: "Owner-first delivery",
                body: "From earnest money to keys, we use a single point of contact and an open file at every stage.",
              },
            ].map((c, i) => (
              <Reveal
                key={c.title}
                delay={i}
                className="rounded-2xl border border-ink-900/[0.07] bg-white/60 p-6"
              >
                <p className="font-display text-xl text-ink-900">{c.title}</p>
                <p className="mt-2 text-ink-600 text-sm leading-relaxed">
                  {c.body}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/about" className="btn-secondary">
              Meet the practice <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
