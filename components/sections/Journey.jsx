import SectionHeader from "@/components/ui/SectionHeader";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { journey } from "@/lib/data";

export default function Journey() {
  return (
    <section className="relative py-24 lg:py-36">
      <div className="container-page">
        <SectionHeader
          eyebrow="The journey"
          title="Twenty years, one"
          highlight="long brief."
          body="Each chapter below is its own footnote in Nagpur's residential history. We've stayed small on purpose — and let the addresses do the speaking."
        />

        <div className="mt-16 relative">
          <div
            aria-hidden
            className="absolute left-3 sm:left-1/2 -translate-x-px top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-ink-900/15 to-transparent"
          />
          <RevealStagger className="space-y-14">
            {journey.map((j, i) => {
              const left = i % 2 === 0;
              return (
                <RevealItem
                  key={j.year}
                  className={`relative grid sm:grid-cols-2 gap-6 sm:gap-12 items-start`}
                >
                  <div
                    className={`pl-12 sm:pl-0 ${
                      left ? "sm:text-right sm:pr-12" : "sm:order-2 sm:pl-12"
                    }`}
                  >
                    <p className="font-display text-5xl text-brand-orange">
                      {j.year}
                    </p>
                    <h3 className="font-display text-2xl mt-3 text-ink-900">
                      {j.title}
                    </h3>
                    <p
                      className={`mt-3 text-ink-600 leading-relaxed text-sm sm:text-base ${
                        left ? "sm:ml-auto" : ""
                      } max-w-md`}
                    >
                      {j.body}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 top-2 h-6 w-6 rounded-full bg-ivory-50 border-2 border-brand-orange ring-8 ring-ivory-50"
                  />
                  <div
                    className={`hidden sm:block ${left ? "sm:order-2" : ""}`}
                  />
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
