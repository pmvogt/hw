"use client";

export function RippleBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="hw-radar-field absolute inset-[-4%] h-[108%] w-[108%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/figma/ripple-bg.svg"
          alt=""
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>
      <div className="hw-radar-pulse" />
      <div className="hw-radar-pulse hw-radar-pulse-echo" />
      <div className="hw-radar-sweep" />
    </div>
  );
}
