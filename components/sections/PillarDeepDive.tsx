import clsx from "clsx";
import { Reveal } from "@/components/ui/Reveal";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { PillarDeepDiveContent } from "@/types/content";

interface PillarDeepDiveProps {
  content: PillarDeepDiveContent;
  reverse: boolean;
}

export function PillarDeepDive({ content, reverse }: PillarDeepDiveProps) {
  const headingId = `${content.id}-detail-heading`;

  return (
    <section
      id={content.id}
      aria-labelledby={headingId}
      className="border-b border-line py-section-sm md:py-section"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={clsx(
            "grid items-center gap-12 md:grid-cols-2",
            reverse && "md:[&>*:first-child]:order-2"
          )}
        >
          <Reveal>
            <SectionNumber index={content.index} label={content.eyebrow} className="mb-3 block" />
            <h3 id={headingId} className="font-serif text-h2 text-ink">
              {content.title}
            </h3>

            <dl className="mt-6 space-y-4">
              <div>
                <dt className="font-mono text-label uppercase text-ink-faint">Problem</dt>
                <dd className="mt-1 text-ink-muted">{content.problem}</dd>
              </div>
              <div>
                <dt className="font-mono text-label uppercase text-ink-faint">Approach</dt>
                <dd className="mt-1 text-ink-muted">{content.approach}</dd>
              </div>
              <div>
                <dt className="font-mono text-label uppercase text-ink-faint">Outcome</dt>
                <dd className="mt-1 text-ink-muted">{content.outcome}</dd>
              </div>
            </dl>

            <ul className="mt-6 flex flex-wrap gap-2">
              {content.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ink-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <ImagePlaceholder
              width={content.image.width}
              height={content.image.height}
              caption={content.image.caption}
              className="rounded-2xl"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
