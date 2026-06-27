"use client";

import clsx from "clsx";
import { FOCUS_RING } from "@/lib/motion";

interface TagProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export function Tag({ label, active, onClick }: TagProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={clsx(
        "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
        active
          ? "border-accent bg-accent text-paper"
          : "border-line text-ink-muted hover:border-accent hover:text-accent-ink",
        FOCUS_RING
      )}
    >
      {label}
    </button>
  );
}
