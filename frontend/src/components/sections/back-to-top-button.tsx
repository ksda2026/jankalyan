"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { ArrowUp } from "lucide-react";

import { siteConfig } from "@/config/site";

export function BackToTopButton() {
  const { label, ariaLabel, showAfterPx } = siteConfig.backToTop;
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > showAfterPx));

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label={ariaLabel}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          className="group fixed bottom-5 right-5 z-50 flex size-13 items-center justify-center rounded-full bg-primary text-white shadow-xl shadow-primary/30 outline-none transition-colors duration-300 hover:bg-secondary focus-visible:ring-3 focus-visible:ring-ring/50 sm:bottom-8 sm:right-8"
        >
          <svg aria-hidden viewBox="0 0 52 52" className="absolute inset-0 size-full -rotate-90">
            <circle cx="26" cy="26" r="24" fill="none" stroke="currentColor" strokeOpacity="0.15" strokeWidth="2.5" />
            <motion.circle
              cx="26"
              cy="26"
              r="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ pathLength: progress }}
              className="text-secondary transition-colors duration-300 group-hover:text-white"
            />
          </svg>
          <span className="pointer-events-none absolute right-full mr-3 hidden translate-x-1 whitespace-nowrap rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
            {label}
          </span>
          <ArrowUp className="relative size-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
