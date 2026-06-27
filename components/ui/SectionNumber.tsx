interface SectionNumberProps {
  index: number;
  label: string;
  className?: string;
}

export function SectionNumber({ index, label, className }: SectionNumberProps) {
  return (
    <span className={`font-mono text-label uppercase text-accent-ink ${className ?? ""}`}>
      {String(index).padStart(2, "0")} / {label}
    </span>
  );
}
