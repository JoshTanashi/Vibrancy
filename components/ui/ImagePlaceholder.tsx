interface ImagePlaceholderProps {
  width: number;
  height: number;
  caption: string;
  className?: string;
}

export function ImagePlaceholder({ width, height, caption, className }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Placeholder image: ${caption}`}
      className={`flex flex-col items-center justify-center gap-2 border border-line bg-paper-raised p-6 text-center ${className ?? ""}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <span className="font-mono text-label text-ink-faint">
        {width} × {height}
      </span>
      <p className="max-w-xs text-sm text-ink-muted">{caption}</p>
    </div>
  );
}
