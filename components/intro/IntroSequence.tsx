"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { EASE_REASONED } from "@/lib/motion";

const STATEMENTS = [
  "Health is a system.",
  "Systems need order.",
  "Order requires evidence.",
  "This is Vibrancy.",
];

const STATEMENT_DURATION_MS = 1100;

interface IntroSequenceProps {
  onComplete: () => void;
  children: React.ReactNode;
}

export function IntroSequence({ onComplete, children }: IntroSequenceProps) {
  const [index, setIndex] = useState(0);
  const [skipped, setSkipped] = useState(false);
  const done = skipped || index >= STATEMENTS.length;
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    if (!done) {
      const timer = setTimeout(() => setIndex((current) => current + 1), STATEMENT_DURATION_MS);
      return () => clearTimeout(timer);
    }

    if (!hasCompletedRef.current) {
      hasCompletedRef.current = true;
      onComplete();
    }
  }, [index, done, onComplete]);

  function skip() {
    setSkipped(true);
  }

  return (
    <>
      <AnimatePresence>
        {!done ? (
          <motion.div
            key="intro-overlay"
            exit={{ opacity: 0, transition: { duration: 0.5, ease: EASE_REASONED } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-paper"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: EASE_REASONED }}
                className="px-6 text-center font-serif text-h1 text-ink"
              >
                {STATEMENTS[index]}
              </motion.p>
            </AnimatePresence>
            <button
              type="button"
              onClick={skip}
              className="absolute bottom-8 right-8 font-mono text-label uppercase text-ink-muted hover:text-accent-ink"
            >
              Skip
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
      {children}
    </>
  );
}
