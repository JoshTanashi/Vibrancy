"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { VideoPlaceholder } from "@/components/ui/VideoPlaceholder";
import { EASE_REASONED, scaleIn } from "@/lib/motion";

const AUDIENCES = ["Individuals", "Businesses", "Healthcare Providers"];

export function Hero() {
  return (
    <section className="border-b border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE_REASONED }}
              className="mb-6 font-mono text-label uppercase text-accent-ink"
            >
              Vibrancy Health Solutions
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE_REASONED }}
              className="font-serif text-display text-ink"
            >
              Empowering health.{" "}
              <span className="italic text-accent-ink">Ensuring compliance.</span>{" "}
              Building excellence.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: EASE_REASONED }}
              className="mt-6 text-body-lg text-ink-muted"
            >
              A health and compliance consultancy built on one premise: good outcomes follow
              from clear reasoning, not guesswork.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: EASE_REASONED }}
              className="mt-6 flex flex-wrap gap-x-3 gap-y-1 font-mono text-label uppercase text-ink-faint"
            >
              {AUDIENCES.map((audience, i) => (
                <span key={audience}>
                  {audience}
                  {i < AUDIENCES.length - 1 ? <span aria-hidden="true"> · </span> : null}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: EASE_REASONED }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href="#booking" variant="primary">
                Book a Consultation
              </Button>
              <Button href="#pillars" variant="secondary">
                Explore Our Services
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <VideoPlaceholder caption="Empowering health outcomes through expert guidance and compliance — see Vibrancy in action." />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
