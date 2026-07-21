"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MissionConsole } from "./mission-console";
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

      {/* Mission console — bolted to the right edge of the stage frame */}
      <div className="absolute bottom-[12%] right-0 z-30 sm:bottom-[14%]">
        <MissionConsole
          active={useCaseOpen}
          onToggle={() => setUseCaseOpen((open) => !open)}
        />
      </div>
    </section>
  );
}
