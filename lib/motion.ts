import type { Variants } from "framer-motion";

export const EASE_REASONED = [0.22, 1, 0.36, 1] as const;

export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_REASONED } },
};

export const fadeRiseReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

export function staggerContainer(staggerMs = 0.1): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: staggerMs } },
  };
}

export const clipReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
  visible: { clipPath: "inset(0 0% 0 0)", opacity: 1, transition: { duration: 0.75, ease: EASE_REASONED } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE_REASONED } },
};

export const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper";
