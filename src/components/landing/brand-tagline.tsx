"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Tagline above the amber brand bar — size + scan-style entrance. */
export function BrandTagline() {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <p
        className="bg-hw-black px-[var(--page-inline)] pb-[var(--space-sm)] pt-[var(--space-2xs)] font-[family-name:var(--font-geist-pixel-square)] leading-[1.2] tracking-[0.04em] text-[#f2f2f0] sm:pb-[var(--space-md)] sm:pt-[var(--space-sm)]"
        style={{ fontSize: "var(--text-tagline)" }}
      >
        The harness for physical, real-world AI.
      </p>
    );
  }

  return (
    <div className="relative overflow-hidden bg-hw-black px-[var(--page-inline)] pb-[var(--space-sm)] pt-[var(--space-2xs)] sm:pb-[var(--space-md)] sm:pt-[var(--space-sm)]">
      <motion.p
        className="relative z-[1] font-[family-name:var(--font-geist-pixel-square)] leading-[1.2] tracking-[0.04em] text-[#f2f2f0]"
        style={{ fontSize: "var(--text-tagline)" }}
        initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.85, delay: 0.55, ease: EASE }}
      >
        <motion.span
          className="inline-block"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.95, delay: 0.65, ease: EASE }}
        >
          The harness for physical, real-world AI.
        </motion.span>
      </motion.p>

      {/* Amber scan bar — hard-tech typewriter wipe */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-y-[18%] z-[2] w-[3px] bg-hw-orange shadow-[0_0_18px_rgba(232,160,32,0.85)]"
        initial={{ left: "4%", opacity: 0 }}
        animate={{ left: ["4%", "92%"], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 0.95, delay: 0.65, ease: EASE, times: [0, 0.08, 0.85, 1] }}
      />

      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,transparent,rgba(232,160,32,0.18),transparent)]"
        initial={{ opacity: 0, x: "-40%" }}
        animate={{ opacity: [0, 1, 0], x: ["-40%", "40%", "120%"] }}
        transition={{ duration: 1.05, delay: 0.6, ease: EASE }}
      />
    </div>
  );
}
