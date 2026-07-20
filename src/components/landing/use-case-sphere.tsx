"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface UseCaseSphereProps {
  open: boolean;
  onClose: () => void;
}

/** Replaces the globe in-place with a Sphere-style use-case surface. */
export function UseCaseSphere({ open, onClose }: UseCaseSphereProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="absolute inset-0 z-20 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="mission-title"
            className="relative flex aspect-square w-[min(78vw,34rem)] flex-col overflow-hidden rounded-full border border-[#e8a020]/55 bg-black shadow-[0_0_80px_rgba(232,160,32,0.22)]"
            initial={{ scale: 0.72, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.88, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/figma/friendly-fleet.png"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 78vw, 34rem"
              className="object-cover object-center"
            />

            {/* Darken bright photo so white/amber UI stays legible */}
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2)_20%,rgba(0,0,0,0.72)_72%,rgba(0,0,0,0.9)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.35)_0%,transparent_35%,rgba(0,0,0,0.55)_100%)]" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center sm:px-12">
              <h2
                id="mission-title"
                className="font-[family-name:var(--font-motorblock)] text-[clamp(1.6rem,5vw,2.6rem)] leading-none text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]"
              >
                FRIENDLY FLEET
              </h2>
              <p className="mt-3 max-w-[28ch] font-[family-name:var(--font-geist-mono)] text-[11px] leading-relaxed text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)] sm:text-[12px]">
                Our deployment methodology for building resilient physical AI systems. Friendly
                Fleet brings robots, sensors, communications, and AI together into one operational
                fleet.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                {["Comms", "Sensors", "Robots", "LLMs", "Power", "Compute"].map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/35 bg-black/35 px-1.5 py-0.5 font-[family-name:var(--font-geist-mono)] text-[9px] tracking-[0.06em] text-white/85 backdrop-blur-[2px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="mt-5 border border-white/55 bg-black/40 px-3 py-1.5 font-[family-name:var(--font-geist-mono)] text-[10px] tracking-[0.14em] text-white backdrop-blur-[2px] hover:border-[#e8a020] hover:text-[#e8a020]"
              >
                CLOSE
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
