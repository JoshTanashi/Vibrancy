import { NumberedSection } from "@/components/ui/NumberedSection";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { PhoneIcon, WhatsappIcon, EmailIcon, ClockIcon } from "@/components/ui/icons";

const CONTACT_CARDS = [
  { icon: PhoneIcon, label: "Phone", value: "+1 (000) 000-0000", href: "tel:+10000000000" },
  { icon: WhatsappIcon, label: "WhatsApp", value: "Message us", href: "https://wa.me/10000000000" },
  { icon: EmailIcon, label: "Email", value: "hello@vibrancyhealth.com", href: "mailto:hello@vibrancyhealth.com" },
  { icon: ClockIcon, label: "Business Hours", value: "Mon–Fri, 9am–5pm", href: null },
];

export function Contact() {
  return (
    <NumberedSection id="contact" index={10} label="Contact" title="Reach us directly.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CONTACT_CARDS.map((card, i) => {
          const Icon = card.icon;
          const inner = (
            <>
              <Icon className="h-6 w-6 text-accent-ink" />
              <p className="mt-3 font-mono text-label uppercase text-ink-faint">{card.label}</p>
              <p className="mt-1 font-medium text-ink">{card.value}</p>
            </>
          );

          return (
            <Reveal key={card.label} delay={i * 0.08}>
              <Card>
                {card.href ? (
                  <a href={card.href} className="block hover:text-accent-ink">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </Card>
            </Reveal>
          );
        })}
      </div>
    </NumberedSection>
  );
}
