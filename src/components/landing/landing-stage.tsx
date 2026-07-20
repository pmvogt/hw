"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DisplayCard } from "./display-card";
import { MissionSphere } from "./mission-sphere";
import { RippleBackground } from "./ripple-background";
import { UseCaseSphere } from "./use-case-sphere";

export function LandingStage() {
  const [useCaseOpen, setUseCaseOpen] = useState(false);

  return (
    <section className="relative min-h-0 flex-1 overflow-hidden bg-black">
      <RippleBackground />

      <AnimatePresence mode="wait">
        {!useCaseOpen ? (
          <motion.div
            key="globe"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <MissionSphere />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <UseCaseSphere open={useCaseOpen} onClose={() => setUseCaseOpen(false)} />

      {/* Docked use-case card — fixed corner, not on the orbit */}
      <div className="absolute right-3 top-3 z-30 sm:right-6 sm:top-6">
        <DisplayCard
          title="Use case"
          body="Friendly fleet"
          size="md"
          interactive
          onClick={() => setUseCaseOpen((open) => !open)}
          className={
            useCaseOpen
              ? "ring-1 ring-[#e8a020] shadow-[0_0_20px_rgba(232,160,32,0.3)] max-sm:!w-[7.5rem]"
              : "hover:border-[#e8a020] max-sm:!w-[7.5rem]"
          }
        />
      </div>
    </section>
  );
}
