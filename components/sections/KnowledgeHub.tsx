"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NumberedSection } from "@/components/ui/NumberedSection";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { articles } from "@/lib/content";
import type { Article } from "@/types/content";

const FILTERS: Array<Article["tag"] | "All"> = [
  "All",
  "Women's Health",
  "Occupational Health",
  "Accreditation",
];

export function KnowledgeHub() {
  const [activeFilter, setActiveFilter] = useState<Article["tag"] | "All">("All");

  const visibleArticles =
    activeFilter === "All" ? articles : articles.filter((article) => article.tag === activeFilter);

  return (
    <NumberedSection
      id="knowledge-hub"
      index={8}
      label="Knowledge Hub"
      title="Further reading, organised by pillar."
    >
      <div role="group" aria-label="Filter resources by topic" className="mb-8 flex flex-wrap gap-3">
        {FILTERS.map((filter) => (
          <Tag
            key={filter}
            label={filter}
            active={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          />
        ))}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visibleArticles.map((article) => (
            <motion.div
              key={article.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="flex h-full flex-col gap-4">
                <ImagePlaceholder
                  width={article.image.width}
                  height={article.image.height}
                  caption={article.image.caption}
                  className="rounded-xl"
                />
                <div>
                  <p className="font-mono text-label uppercase text-accent-ink">{article.tag}</p>
                  <h3 className="mt-2 font-serif text-h3 text-ink">{article.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{article.excerpt}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </NumberedSection>
  );
}
