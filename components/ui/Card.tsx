import type { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={clsx("rounded-2xl border border-line bg-paper-raised p-6", className)}>
      {children}
    </div>
  );
}
