import { PlayIcon } from "@/components/ui/icons";

interface VideoPlaceholderProps {
  caption?: string;
  className?: string;
}

export function VideoPlaceholder({ caption, className }: VideoPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={caption ? `Video placeholder: ${caption}` : "Video placeholder"}
      className={`relative flex aspect-video flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-line bg-paper-raised p-6 text-center ${className ?? ""}`}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ink/10 text-ink-muted">
        <PlayIcon className="h-8 w-8" />
      </div>
      {caption ? (
        <p className="max-w-xs font-mono text-label text-ink-faint">{caption}</p>
      ) : null}
    </div>
  );
}
