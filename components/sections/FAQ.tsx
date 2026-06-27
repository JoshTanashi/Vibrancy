import { NumberedSection } from "@/components/ui/NumberedSection";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/lib/content";

export function FAQ() {
  return (
    <NumberedSection id="faq" index={11} label="FAQ" title="The questions behind the hesitation.">
      <Accordion items={faqItems} />
    </NumberedSection>
  );
}
