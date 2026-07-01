"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { ShieldIcon, ClipboardIcon, UsersIcon, HeartPulseIcon } from "@/components/ui/icons";
import { scaleIn, staggerContainer } from "@/lib/motion";
import { differentiators } from "@/lib/content";
import type { ComponentType, SVGProps } from "react";

const ICONS: ComponentType<SVGProps<SVGSVGElement>>[] = [
  ShieldIcon,
  ClipboardIcon,
  UsersIcon,
  HeartPulseIcon,
];

export function WhyItWorks() {
  return (
    <section id="why-it-works" className="py-16" style={{ backgroundColor: "var(--color-surface-dark)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="mb-12 text-center font-serif text-h2 text-paper">
            The Vibrancy Advantage
          </h2>
        </Reveal>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-10 md:grid-cols-4"
        >
          {differentiators.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={item.title}
                variants={scaleIn}
                className="flex flex-col items-center gap-4 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-accent">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-h3 text-paper">{item.title}</h3>
                <p className="text-sm text-paper/70">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
