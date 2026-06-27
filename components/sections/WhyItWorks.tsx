import { NumberedSection } from "@/components/ui/NumberedSection";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { differentiators } from "@/lib/content";

export function WhyItWorks() {
  return (
    <NumberedSection
      id="why-it-works"
      index={7}
      label="Why It Works"
      title="What follows from the premise."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {differentiators.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <Card className="h-full">
              <p className="font-mono text-label uppercase text-accent-ink">
                Conclusion {String(item.index).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-serif text-h3 text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </NumberedSection>
  );
}
