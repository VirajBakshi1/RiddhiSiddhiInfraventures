import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { amenities } from "@/lib/data";

const IMG =
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=80";

export default function Amenities() {
  return (
    <section className="relative py-24 lg:py-36">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <SectionHeader
              eyebrow="Specifications & amenities"
              title="The details that"
              highlight="make a home."
              body="A specification sheet should read like a love letter to the people moving in. Ours is honest, particular, and chosen with the lived-in moment in mind."
            />
            <div className="mt-10 relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-card hidden lg:block">
              <Image
                src={IMG}
                alt="A living room detail"
                fill
                sizes="(min-width:1024px) 35vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <RevealStagger className="grid sm:grid-cols-2 gap-5">
              {amenities.map((a, i) => (
                <RevealItem
                  key={a.title}
                  className="rounded-2xl border border-ink-900/[0.07] p-6 lg:p-7 bg-white hover:bg-ivory-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-display text-sm tracking-wide-3 text-brand-orange">
                      0{i + 1}
                    </span>
                    <span className="divider-vertical" />
                  </div>
                  <h3 className="font-display text-2xl mt-5 text-ink-900 leading-snug">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-600 leading-relaxed">
                    {a.body}
                  </p>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </div>
    </section>
  );
}
