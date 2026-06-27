"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { EASE_REASONED, FOCUS_RING } from "@/lib/motion";

const BAR_FILL_DURATION_S = 1.6;
const HOLD_AFTER_FILL_MS = 350;
const TOTAL_AUTO_COMPLETE_MS = BAR_FILL_DURATION_S * 1000 + HOLD_AFTER_FILL_MS;

interface IntroSequenceProps {
  onComplete: () => void;
  children: React.ReactNode;
}

export function IntroSequence({ onComplete, children }: IntroSequenceProps) {
  const [done, setDone] = useState(false);
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    if (done) return;
    const timer = setTimeout(() => setDone(true), TOTAL_AUTO_COMPLETE_MS);
    return () => clearTimeout(timer);
  }, [done]);

  useEffect(() => {
    if (done && !hasCompletedRef.current) {
      hasCompletedRef.current = true;
      onComplete();
    }
  }, [done, onComplete]);

  function skip() {
    setDone(true);
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
            <div className="flex flex-col items-center gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: EASE_REASONED }}
                className="font-serif text-h3 text-ink"
              >
                Vibrancy
              </motion.p>

              <div aria-hidden="true" className="h-px w-40 overflow-hidden bg-line sm:w-48">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: BAR_FILL_DURATION_S, ease: EASE_REASONED }}
                  style={{ transformOrigin: "left" }}
                  className="h-full w-full bg-accent"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={skip}
              aria-label="Skip intro animation"
              className={`absolute bottom-8 right-8 font-mono text-label uppercase text-ink-faint transition-colors hover:text-ink-muted ${FOCUS_RING}`}
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
