import Reveal from "./Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  body,
  align = "left",
  className = "",
  highlight,
}) {
  const isCenter = align === "center";
  return (
    <div
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      {title && (
        <Reveal delay={1}>
          <h2 className="heading-display mt-5 text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.05] text-balance">
            {title}
            {highlight && (
              <>
                {" "}
                <span className="italic text-brand-orange">{highlight}</span>
              </>
            )}
          </h2>
        </Reveal>
      )}
      {body && (
        <Reveal delay={2}>
          <p
            className={`mt-6 text-ink-600 text-base sm:text-lg leading-relaxed text-pretty ${
              isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"
            }`}
          >
            {body}
          </p>
        </Reveal>
      )}
    </div>
  );
}
