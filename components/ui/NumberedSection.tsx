import type { ReactNode } from "react";
import { SectionNumber } from "./SectionNumber";
import { Reveal } from "./Reveal";

interface NumberedSectionProps {
  id: string;
  index: number;
  label: string;
  title: string;
  kicker?: string;
  children: ReactNode;
  className?: string;
}

export function NumberedSection({
  id,
  index,
  label,
  title,
  kicker,
  children,
  className,
}: NumberedSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`py-section-sm md:py-section ${className ?? ""}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionNumber index={index} label={label} className="mb-3 block" />
          {kicker ? (
            <p className="mb-2 max-w-2xl text-body-lg text-ink-muted">{kicker}</p>
          ) : null}
          <h2 id={headingId} className="max-w-3xl font-serif text-h2 text-ink">
            {title}
          </h2>
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
