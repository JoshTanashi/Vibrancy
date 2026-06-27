import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { href: "#premise", label: "About" },
  { href: "#pillars", label: "Services" },
  { href: "#knowledge-hub", label: "Resources" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-serif text-h3 text-ink">
          Vibrancy
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-muted hover:text-accent-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button href="#booking" className="hidden md:inline-flex">
          Book a Consultation
        </Button>
        <a
          href="#booking"
          className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-paper md:hidden"
        >
          Book
        </a>
      </div>
    </header>
  );
}
