"use client";

import { motion } from "framer-motion";
import { WhatsappIcon } from "@/components/ui/icons";
import { FOCUS_RING } from "@/lib/motion";

export function FloatingContactButton() {
  return (
    <motion.a
      href="#booking"
      aria-label="Jump to booking"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`fixed bottom-6 right-6 z-30 hidden h-14 w-14 items-center justify-center rounded-full bg-accent text-paper shadow-lg md:flex ${FOCUS_RING}`}
    >
      <WhatsappIcon className="h-6 w-6" />
    </motion.a>
  );
}
