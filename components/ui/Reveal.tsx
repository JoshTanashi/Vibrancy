"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeRise, fadeRiseReduced } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const variants = prefersReducedMotion ? fadeRiseReduced : fadeRise;
  const sharedProps = {
    className,
    variants,
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, margin: "-80px" },
    transition: { delay },
  };

  if (as === "li") {
    return <motion.li {...sharedProps}>{children}</motion.li>;
  }

  return <motion.div {...sharedProps}>{children}</motion.div>;
}
