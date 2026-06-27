"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FOCUS_RING } from "@/lib/motion";

interface AccordionItem {
  index: number;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => {
        const isOpen = openIndex === item.index;
        const panelId = `faq-panel-${item.index}`;
        const buttonId = `faq-trigger-${item.index}`;

        return (
          <div key={item.index}>
            <button
              type="button"
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : item.index)}
              className={`flex w-full items-center justify-between gap-4 py-5 text-left ${FOCUS_RING}`}
            >
              <span>
                <span className="mb-1 block font-mono text-label uppercase text-accent-ink">
                  Objection {String(item.index).padStart(2, "0")}
                </span>
                <span className="font-serif text-h3 text-ink">{item.question}</span>
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                aria-hidden="true"
                className="shrink-0 text-2xl text-accent-ink"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 max-w-2xl text-ink-muted">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
