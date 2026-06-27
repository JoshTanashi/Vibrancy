"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

interface ConnectingLineProps {
  height?: number;
  className?: string;
}

export function ConnectingLine({ height = 220, className }: ConnectingLineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 30%"],
  });
  const pathLength = useSpring(scrollYProgress, { stiffness: 90, damping: 20, mass: 0.3 });

  const path = `M2 2 C 2 ${height * 0.4}, ${height * 0.3} ${height * 0.6}, 2 ${height - 2}`;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`mx-auto flex justify-center ${className ?? ""}`}
      style={{ height }}
    >
      <svg width="4" height={height} viewBox={`0 0 4 ${height}`} fill="none">
        <motion.path
          d={path}
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
}
