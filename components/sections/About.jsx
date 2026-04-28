import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const IMG_TALL =
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80";
const IMG_SQUARE =
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80";
const IMG_WIDE =
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80";
const IMG_DETAIL =
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80";

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-36">
      <div className="container-page grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6 relative">
          <div className="relative grid grid-cols-2 gap-4 sm:gap-5">
            {/* Left column */}
            <div className="space-y-4 sm:space-y-5">
              <Reveal className="relative aspect-[3/4] rounded-[24px] overflow-hidden shadow-card">
                <Image
                  src={IMG_TALL}
                  alt="A signature interior"
                  fill
                  sizes="(min-width:1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </Reveal>
              <Reveal
                delay={2}
                className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-card"
              >
                <Image
                  src={IMG_WIDE}
                  alt="A residential lobby detail"
                  fill
                  sizes="(min-width:1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </Reveal>
            </div>

            {/* Right column — staircased downwards */}
            <div className="space-y-4 sm:space-y-5 pt-10 sm:pt-14">
              <Reveal
                delay={1}
                className="relative rounded-[24px] bg-brand-green text-ivory-100 p-6 sm:p-7 aspect-[4/5] flex flex-col justify-between overflow-hidden"
              >
                <span className="absolute -right-10 -bottom-10 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
                <p className="text-[11px] uppercase tracking-wide-3 text-ivory-100/70 relative">
                  Est. 2005
                </p>
                <div className="relative">
                  <p className="font-display text-5xl sm:text-6xl leading-none">
                    20
                  </p>
                  <p className="text-sm text-ivory-100/80 mt-2">
                    years of considered building
                  </p>
                </div>
              </Reveal>
              <Reveal
                delay={3}
                className="relative aspect-square rounded-[24px] overflow-hidden shadow-card"
              >
                <Image
                  src={IMG_SQUARE}
                  alt="A material detail"
                  fill
                  sizes="(min-width:1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </Reveal>
              <Reveal
                delay={4}
                className="relative rounded-[24px] bg-ink-900 text-ivory-100 px-6 py-5 flex items-center gap-4 overflow-hidden"
              >
                <p className="font-display text-3xl sm:text-4xl text-brand-orange-soft leading-none">
                  250+
                </p>
                <p className="text-xs text-ivory-100/75 leading-snug">
                  families settled in a Riddhi Siddhi home
                </p>
              </Reveal>
            </div>
          </div>

          {/* Floating accent at bottom */}
          <Reveal
            delay={5}
            className="hidden lg:block absolute -left-8 -bottom-8 w-44 rounded-2xl overflow-hidden shadow-card aspect-[5/4] border-[6px] border-ivory-50"
          >
            <Image
              src={IMG_DETAIL}
              alt="An exterior detail"
              fill
              sizes="200px"
              className="object-cover"
            />
          </Reveal>
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
