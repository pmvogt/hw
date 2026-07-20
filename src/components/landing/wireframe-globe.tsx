"use client";

interface WireframeGlobeProps {
  className?: string;
}

export function WireframeGlobe({ className }: WireframeGlobeProps) {
  return (
    <div className={`h-full w-full ${className ?? ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/figma/globe.svg"
        alt=""
        className="hw-globe-spin h-full w-full object-contain"
        draggable={false}
      />
    </div>
  );
}
