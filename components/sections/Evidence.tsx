import { NumberedSection } from "@/components/ui/NumberedSection";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { testimonials } from "@/lib/content";

export function Evidence() {
  return (
    <NumberedSection
      id="evidence"
      index={6}
      label="The Evidence"
      title="Conclusions other people have already drawn."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <Reveal key={testimonial.name} delay={i * 0.1}>
            <Card className="flex h-full flex-col">
              <figure className="flex h-full flex-col">
                <p aria-hidden="true" className="font-serif text-3xl text-accent-ink">
                  &ldquo;
                </p>
                <blockquote className="flex-1 text-ink-muted">{testimonial.quote}</blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <p className="font-medium text-ink">{testimonial.name}</p>
                  <p className="font-mono text-label text-ink-faint">{testimonial.citation}</p>
                </figcaption>
              </figure>
            </Card>
          </Reveal>
        ))}
      </div>
    </NumberedSection>
  );
}
