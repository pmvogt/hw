"use client";

import { Html } from "@react-three/drei";
import { HARNESS_HUB } from "./mission-data";

/** Compact north-pole terminal: emblem on amber plate. No copy. */
export function HarnessHub() {
  return (
    <Html
      position={HARNESS_HUB}
      center
      distanceFactor={9.2}
      zIndexRange={[50, 0]}
      style={{ pointerEvents: "none" }}
    >
      <div className="relative flex h-7 w-7 items-center justify-center border border-hw-ink bg-hw-orange shadow-[0_0_14px_oklch(0.72_0.16_75_/_0.35)]">
        <span className="absolute -left-px -top-px h-0.5 w-0.5 border-l border-t border-hw-ink" />
        <span className="absolute -right-px -top-px h-0.5 w-0.5 border-r border-t border-hw-ink" />
        <span className="absolute -bottom-px -left-px h-0.5 w-0.5 border-b border-l border-hw-ink" />
        <span className="absolute -bottom-px -right-px h-0.5 w-0.5 border-b border-r border-hw-ink" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/figma/emblem.png"
          alt=""
          className="h-3.5 w-auto object-contain"
          draggable={false}
        />
      </div>
    </Html>
  );
}
