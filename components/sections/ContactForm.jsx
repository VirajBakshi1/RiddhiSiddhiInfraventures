"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const interests = [
  "The Legacy",
  "Amara Residences",
  "Future projects",
  "Just exploring",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [interest, setInterest] = useState(interests[0]);

  return (
    <div className="rounded-[28px] bg-white border border-ink-900/[0.06] shadow-soft p-7 sm:p-10">
      <span className="eyebrow">Send a note</span>
      <h2 className="heading-display mt-4 text-3xl sm:text-4xl leading-tight text-balance">
        Tell us a little, and we'll{" "}
        <span className="italic text-brand-orange">take it from there.</span>
      </h2>

      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-10 rounded-2xl bg-brand-green/10 border border-brand-green/20 p-8 flex items-start gap-4"
          >
            <CheckCircle2 className="h-6 w-6 text-brand-green mt-0.5 shrink-0" />
            <div>
              <p className="font-display text-2xl text-ink-900">
                Note received.
              </p>
              <p className="mt-2 text-ink-600 leading-relaxed">
                Thank you for writing in. Someone from the practice will reply
                personally — usually within a working day.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -12 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="mt-10 space-y-7"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Full name" name="name" required />
              <Field
                label="Email"
                name="email"
                type="email"
                required
              />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="City" name="city" />
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-wide-3 text-ink-500">
                I'm interested in
              </label>
              <div className="mt-3 flex flex-wrap gap-2">
                {interests.map((label) => {
                  const active = interest === label;
                  return (
                    <button
                      type="button"
                      key={label}
                      onClick={() => setInterest(label)}
                      className={`rounded-full px-4 py-2 text-sm border transition-all ${
                        active
                          ? "bg-ink-900 text-white border-ink-900"
                          : "bg-white text-ink-700 border-ink-900/15 hover:border-ink-900/40"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label
                className="text-[10px] uppercase tracking-wide-3 text-ink-500"
                htmlFor="message"
              >
                A few words about what you're looking for
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2 w-full rounded-2xl border border-ink-900/15 bg-ivory-50 px-4 py-3 text-sm focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition"
                placeholder="A 3 BHK in Shankar Nagar for a family of four, ideally ready by next monsoon…"
              />
            </div>

            <div className="flex items-center justify-between gap-4 flex-wrap">
              <p className="text-xs text-ink-500 max-w-sm leading-relaxed">
                By submitting, you agree to be contacted by Riddhi Siddhi
                Infraventures. We don't share your details — ever.
              </p>
              <button type="submit" className="btn-primary">
                Send note <span aria-hidden>→</span>
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ label, name, type = "text", required = false }) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-wide-3 text-ink-500">
        {label}
        {required && <span className="text-brand-orange"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl border border-ink-900/15 bg-ivory-50 px-4 py-3 text-sm focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition"
      />
    </label>
  );
}
