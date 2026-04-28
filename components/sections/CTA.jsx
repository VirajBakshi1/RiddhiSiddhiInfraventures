import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { brand } from "@/lib/data";

const IMG =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80";

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-page">
        <Reveal className="relative isolate overflow-hidden rounded-[36px] bg-ink-900 text-ivory-100">
          <Image
            src={IMG}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/30" />

          <div className="relative grid lg:grid-cols-12 gap-10 p-10 sm:p-14 lg:p-20 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow text-brand-orange-soft">
                Begin the conversation
              </span>
              <h2 className="heading-display text-ivory-50 mt-6 text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.05] text-balance">
                A quiet conversation,
                <br className="hidden sm:block" />
                <span className="italic text-brand-orange-soft">
                  before the city wakes.
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-ivory-100/75 leading-relaxed text-pretty">
                Drop us a note, or schedule a private viewing of The Legacy.
                Your enquiry stays on a single desk — no pipeline, no chase
                calls.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Schedule a viewing <span aria-hidden>→</span>
                </Link>
                <a
                  href={`tel:${brand.phone[0].replace(/\s/g, "")}`}
                  className="btn-secondary !text-ivory-100 !border-white/15 !bg-white/5 hover:!bg-white/10"
                >
                  Call {brand.phone[0]}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-8">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-7 space-y-6">
                {[
                  ["Office", brand.office],
                  ["Email", brand.email],
                  ["Project site", brand.site],
                ].map(([k, v]) => (
                  <div key={k}>
                    <p className="text-[10px] uppercase tracking-wide-3 text-ivory-100/55">
                      {k}
                    </p>
                    <p className="mt-1.5 text-ivory-50 leading-relaxed">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
