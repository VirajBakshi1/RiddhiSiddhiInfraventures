const items = [
  "Trust",
  "Quality",
  "Innovation",
  "Craft",
  "Detail",
  "Integrity",
  "Heritage",
  "Light",
  "Endurance",
];

export default function Marquee() {
  const repeated = [...items, ...items];
  return (
    <section
      aria-hidden
      className="relative border-y border-ink-900/[0.06] py-8 overflow-hidden bg-ivory-100"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((w, i) => (
          <span
            key={i}
            className="font-display text-3xl sm:text-4xl text-ink-900/60 ml-10 italic"
          >
            {w}
            <span className="ml-10 text-brand-orange not-italic">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
