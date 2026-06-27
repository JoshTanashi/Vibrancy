"use client";

import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useSessionIntroGate } from "@/lib/useSessionIntroGate";
import { IntroSequence } from "./IntroSequence";

interface IntroGateProps {
  children: ReactNode;
}

export function IntroGate({ children }: IntroGateProps) {
  const prefersReducedMotion = useReducedMotion();
  const { shouldPlay, markSeen } = useSessionIntroGate();

  if (prefersReducedMotion || !shouldPlay) {
    if (shouldPlay) markSeen();
    return <>{children}</>;
  }

  return <IntroSequence onComplete={markSeen}>{children}</IntroSequence>;
}
