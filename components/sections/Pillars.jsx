import SectionHeader from "@/components/ui/SectionHeader";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { pillars } from "@/lib/data";

export default function Pillars() {
  return (
    <section className="relative py-24 lg:py-36 bg-ivory-100">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Why our owners stay"
              title="Four ideas we refuse"
              highlight="to compromise on."
              body="We measure ourselves against four principles. Each one gets its own conversation, its own drawing review, its own line item on the snag-list."
            />
          </div>
          <div className="lg:col-span-5 lg:pb-3 text-ink-600 text-sm leading-relaxed">
            <p>
              You can read about these on most builder websites. The difference
              is what happens when no one is watching — at 11pm, in the rain,
              when the slab is curing and a sub-contractor wants to leave.
              That's where these become real.
            </p>
          </div>
        </div>

        <RevealStagger className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p) => (
            <RevealItem
              key={p.n}
              className="group relative rounded-3xl bg-white border border-ink-900/[0.06] p-7 lg:p-8 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-display text-sm tracking-wide-3 text-brand-orange">
                  {p.n}
                </span>
                <span className="h-8 w-8 rounded-full border border-ink-900/10 inline-flex items-center justify-center text-ink-400 group-hover:bg-brand-orange group-hover:text-white group-hover:border-brand-orange transition-all">
                  →
                </span>
              </div>
              <h3 className="font-display text-2xl text-ink-900 leading-snug text-balance">
                {p.title}
              </h3>
              <p className="mt-4 text-sm text-ink-600 leading-relaxed text-pretty">
                {p.body}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
