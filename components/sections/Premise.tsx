import { NumberedSection } from "@/components/ui/NumberedSection";
import { Reveal } from "@/components/ui/Reveal";
import { trustFacts } from "@/lib/content";

export function Premise() {
  return (
    <NumberedSection
      id="premise"
      index={1}
      label="The Premise"
      title="Most health and compliance providers treat the two as separate problems."
    >
      <div className="grid gap-12 md:grid-cols-2">
        <Reveal delay={0.1}>
          <div className="max-w-xl space-y-4 text-body-lg text-ink-muted">
            <p>
              Health advice that ignores compliance leaves individuals and businesses exposed.
              Compliance work that ignores the human reality of health leaves it unused on a
              shelf. Neither holds up on its own.
            </p>
            <p>
              Vibrancy treats them as one discipline: every recommendation is built to be both
              genuinely good for the people involved and defensible under scrutiny — for
              individuals, for businesses, and for the providers who answer to regulators.
            </p>
          </div>
        </Reveal>

        <ul className="space-y-6">
          {trustFacts.map((fact, i) => (
            <Reveal key={fact.index} delay={0.1 + i * 0.1} as="li">
              <p className="font-mono text-label text-accent-ink">
                {String(fact.index).padStart(2, "0")}
              </p>
              <p className="mt-1 font-serif text-h3 text-ink">{fact.stat}</p>
              <p className="mt-1 text-sm text-ink-muted">{fact.context}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </NumberedSection>
  );
}
