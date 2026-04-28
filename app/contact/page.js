import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { brand } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

export const metadata = {
  title: "Contact — Begin the conversation",
  description:
    "Schedule a private viewing or speak with us about a forthcoming residence. Your enquiry stays on a single desk.",
};

export default function ContactPage() {
  const cards = [
    {
      icon: Phone,
      title: "Speak with us",
      lines: brand.phone,
      tone: "We answer between 9am and 8pm, every day of the week.",
      hrefBase: "tel:",
    },
    {
      icon: Mail,
      title: "Write to us",
      lines: [brand.email],
      tone: "We reply within a working day — usually sooner.",
      hrefBase: "mailto:",
    },
    {
      icon: MapPin,
      title: "Visit us",
      lines: [brand.office, `Project site · ${brand.site}`],
      tone: "Visits by appointment. Tea is on us.",
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="A quiet conversation,"
        highlight="on your terms."
        body="Whether you're a few months away or a few years, we're glad to talk. Tell us what you have in mind — we'll take it from there."
      />

      <section className="py-12 lg:py-20">
        <div className="container-page grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="space-y-5">
              {cards.map((c) => (
                <Reveal
                  key={c.title}
                  className="rounded-3xl bg-white border border-ink-900/[0.06] shadow-soft p-7"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-10 w-10 rounded-full bg-brand-orange/10 inline-flex items-center justify-center">
                      <c.icon className="h-4 w-4 text-brand-orange" />
                    </span>
                    <p className="font-display text-xl text-ink-900">
                      {c.title}
                    </p>
                  </div>
                  <ul className="mt-5 space-y-1.5 text-ink-700">
                    {c.lines.map((l) => (
                      <li key={l}>
                        {c.hrefBase ? (
                          <a
                            href={`${c.hrefBase}${l.replace(/\s/g, "")}`}
                            className="hover:text-brand-orange transition-colors"
                          >
                            {l}
                          </a>
                        ) : (
                          <span>{l}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-ink-500">{c.tone}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <Reveal className="relative aspect-[16/9] sm:aspect-[16/7] rounded-[28px] overflow-hidden border border-ink-900/[0.06]">
            <iframe
              title="Riddhi Siddhi Infraventures · Office"
              src="https://www.openstreetmap.org/export/embed.html?bbox=79.0689%2C21.1310%2C79.0989%2C21.1610&layer=mapnik"
              className="absolute inset-0 w-full h-full grayscale-[0.2]"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
