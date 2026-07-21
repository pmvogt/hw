"use client";

interface MissionConsoleProps {
  active: boolean;
  onToggle: () => void;
}

/**
 * Edge-docked mission console: the Friendly Fleet trigger reads as an
 * instrument bolted to the stage frame (no right border — it bleeds off
 * the viewport edge) rather than a card floating in the void.
 */
export function MissionConsole({ active, onToggle }: MissionConsoleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={active}
      className={`group flex min-h-11 flex-col items-start gap-1 border-y border-l bg-black/70 py-2 pl-3 pr-4 text-left backdrop-blur-[2px] transition-[border-color,opacity,box-shadow] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8a020] sm:pr-5 ${
        active
          ? "border-[#e8a020] opacity-100 shadow-[0_0_18px_rgba(232,160,32,0.25)]"
          : "border-white/40 opacity-75 hover:border-[#e8a020] hover:opacity-100"
      }`}
    >
      <span className="font-[family-name:var(--font-geist-mono)] text-[0.5625rem] tracking-[0.18em] text-[#f2f2f0]/60">
        USE CASE · 01
      </span>
      <span className="font-[family-name:var(--font-geist-pixel-square)] text-[0.75rem] tracking-[0.05em] text-[#f2f2f0] sm:text-[0.8125rem]">
        FRIENDLY FLEET
      </span>
      <span className="flex items-center gap-1.5">
        <span
          className={`h-1.5 w-1.5 rounded-full bg-[#e8a020] ${
            active ? "" : "hw-console-dot"
          }`}
        />
        <span className="font-[family-name:var(--font-geist-mono)] text-[0.5625rem] tracking-[0.14em] text-[#e8a020]/90">
          {active ? "ACTIVE" : "STANDBY"}
        </span>
      </span>
    </button>
  );
}
