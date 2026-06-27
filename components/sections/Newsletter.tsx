"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CheckIcon } from "@/components/ui/icons";
import { isValidEmail } from "@/lib/validation";
import { FOCUS_RING } from "@/lib/motion";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!isValidEmail(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError(undefined);
    setSubscribed(true);
  }

  return (
    <section className="bg-accent-ink py-section-sm">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-h2 text-paper">Stay informed, not overwhelmed.</h2>
        <p className="mt-2 text-paper/80">
          One short note a month — new resources, regulatory changes worth knowing about.
        </p>

        <div className="mt-6 flex justify-center">
          <AnimatePresence mode="wait">
            {subscribed ? (
              <motion.p
                key="success"
                role="status"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 font-medium text-paper"
              >
                <CheckIcon className="h-5 w-5" />
                You&apos;re on the list.
              </motion.p>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
              >
                <div className="flex-1 text-left">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "newsletter-error" : undefined}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@company.com"
                    className="w-full rounded-full border border-paper/30 bg-transparent px-5 py-3 text-paper placeholder:text-paper/50 focus:border-paper focus:outline-none"
                  />
                  {error ? (
                    <p id="newsletter-error" role="alert" className="mt-1.5 text-sm text-paper">
                      {error}
                    </p>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className={`rounded-full bg-paper px-6 py-3 text-sm font-medium text-accent-ink hover:bg-paper-raised ${FOCUS_RING}`}
                >
                  Subscribe
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
