"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 12px 32px -8px rgba(14,77,138,0.15)" }}
      transition={{ duration: 0.2 }}
      className={clsx("rounded-2xl border border-line bg-paper-raised p-6", className)}
    >
      {children}
    </motion.div>
  );
}
