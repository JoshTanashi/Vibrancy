import { InstagramIcon, LinkedInIcon } from "@/components/ui/icons";

const SITEMAP_LINKS = [
  { href: "#premise", label: "About" },
  { href: "#pillars", label: "Services" },
  { href: "#booking", label: "Booking" },
  { href: "#faq", label: "FAQ" },
];

const RESOURCE_LINKS = [
  { href: "#knowledge-hub", label: "Knowledge Hub" },
  { href: "#evidence", label: "Evidence" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper-raised">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-serif text-h3 text-ink">Vibrancy</p>
            <p className="mt-3 max-w-xs text-sm text-ink-muted">
              Empowering Health, Ensuring Compliance, Building Excellence.
            </p>
            <div className="mt-4 flex gap-4 text-ink-muted">
              <a href="#" aria-label="Instagram" className="hover:text-accent-ink">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-accent-ink">
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <div>
            <p className="font-mono text-label uppercase text-ink-faint">Sitemap</p>
            <ul className="mt-3 space-y-2">
              {SITEMAP_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-ink-muted hover:text-accent-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-label uppercase text-ink-faint">Resources</p>
            <ul className="mt-3 space-y-2">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-ink-muted hover:text-accent-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-label uppercase text-ink-faint">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-muted">
              <li>
                <a href="tel:+10000000000" className="hover:text-accent-ink">
                  +1 (000) 000-0000
                </a>
              </li>
              <li>
                <a href="mailto:hello@vibrancyhealth.com" className="hover:text-accent-ink">
                  hello@vibrancyhealth.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="font-mono text-label text-ink-faint">
            © {new Date().getFullYear()} Vibrancy Health Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
