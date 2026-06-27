"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { MenuIcon, CloseIcon } from "@/components/ui/icons";
import { FOCUS_RING } from "@/lib/motion";

const NAV_LINKS = [
  { href: "#premise", label: "About" },
  { href: "#pillars", label: "Services" },
  { href: "#knowledge-hub", label: "Resources" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <div className="hidden md:block">
          <Button href="#booking">Book a Consultation</Button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href="#booking"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-paper"
          >
            Book
          </a>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className={`flex h-9 w-9 items-center justify-center text-ink ${FOCUS_RING}`}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <nav aria-label="Primary" className="flex flex-col px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-sm font-medium text-ink-muted hover:text-accent-ink"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
