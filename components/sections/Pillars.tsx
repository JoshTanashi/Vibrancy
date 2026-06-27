"use client";

import { motion, useReducedMotion } from "framer-motion";
import { NumberedSection } from "@/components/ui/NumberedSection";
import { Card } from "@/components/ui/Card";
import { ArrowIcon } from "@/components/ui/icons";
import { fadeRise, fadeRiseReduced, staggerContainer } from "@/lib/motion";
import { pillars } from "@/lib/content";

export function Pillars() {
  const prefersReducedMotion = useReducedMotion();
  const itemVariants = prefersReducedMotion ? fadeRiseReduced : fadeRise;

  return (
    <NumberedSection
      id="pillars"
      index={2}
      label="Three Pillars"
      title="Three audiences. One standard."
    >
      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 md:grid-cols-3"
      >
        {pillars.map((pillar) => (
          <motion.div key={pillar.id} variants={itemVariants}>
            <Card className="flex h-full flex-col">
              <p className="font-mono text-label text-accent-ink">
                {String(pillar.index).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-serif text-h3 text-ink">{pillar.name}</h3>
              <p className="mt-2 text-sm text-ink-muted">{pillar.description}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-ink-muted">
                {pillar.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <a
                href={`#${pillar.id}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-ink hover:gap-3"
              >
                Learn more
                <ArrowIcon className="h-4 w-4 transition-transform" />
              </a>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </NumberedSection>
  );
}
