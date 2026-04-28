import { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="relative py-24 lg:py-32 bg-ink-900 text-ivory-100 overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-30" />
      <div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-brand-green/30 blur-[140px]" />
      <div className="absolute -bottom-40 -right-32 w-[480px] h-[480px] rounded-full bg-brand-orange/30 blur-[140px]" />

      <div className="relative container-page">
        <div className="max-w-3xl">
          <span className="eyebrow text-brand-orange-soft">By the numbers</span>
          <h2 className="heading-display mt-6 text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] text-balance text-ivory-50">
            Quietly built. Quietly{" "}
            <span className="italic text-brand-orange-soft">lived in.</span>
          </h2>
          <p className="mt-6 text-ivory-100/70 text-lg max-w-xl">
            We don't court awards. We court owners — and most of ours stay for
            decades.
          </p>
        </div>

        <RevealStagger className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((s) => (
            <RevealItem
              key={s.label}
              className="border-t border-white/10 pt-6"
            >
              <p className="font-display text-5xl sm:text-6xl text-ivory-50">
                {s.value}
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-wide-3 text-ivory-100/55">
                {s.label}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
