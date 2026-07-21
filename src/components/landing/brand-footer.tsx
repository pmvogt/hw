import Image from "next/image";
import { BrandTagline } from "./brand-tagline";

export function BrandFooter() {
  return (
    <div className="relative z-20 w-full shrink-0">
      <BrandTagline />

      <footer className="flex w-full items-center justify-between gap-[var(--space-md)] bg-hw-orange px-[var(--page-inline)] py-[0.875rem] sm:h-[min(14vh,148px)] sm:min-h-[6.5rem] sm:gap-[var(--space-lg)] sm:py-[clamp(0.85rem,1.8vh,1.75rem)]">
        <h1
          className="hw-wordmark-in min-w-0 font-[family-name:var(--font-motorblock)] leading-[0.88] tracking-[0.01em] text-hw-ink"
          style={{ fontSize: "var(--text-wordmark)" }}
        >
          HARDWIRE
        </h1>

        <div className="hw-mark-in relative h-[2.25rem] w-[2rem] shrink-0 sm:h-[clamp(2.5rem,8vh,5.5rem)] sm:w-[clamp(2.25rem,7vh,5rem)]">
          <Image
            src="/figma/emblem.png"
            alt="Hardwire mark"
            fill
            sizes="(max-width: 639px) 36px, 96px"
            className="object-contain object-right"
            priority
          />
        </div>
      </footer>
    </div>
  );
}
