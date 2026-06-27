"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import type { ReactNode } from "react";
import { FOCUS_RING } from "@/lib/motion";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors";

export function Button({
  children,
  variant = "primary",
  href,
  className,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const variantClass =
    variant === "primary"
      ? "bg-accent text-paper hover:bg-accent-ink"
      : "border border-ink/20 text-ink hover:border-accent hover:text-accent-ink";

  const classes = clsx(base, variantClass, FOCUS_RING, className);

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
