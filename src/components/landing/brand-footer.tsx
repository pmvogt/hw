import Image from "next/image";

export function BrandFooter() {
  return (
    <footer className="relative z-20 flex h-[min(18.15vh,196px)] min-h-[96px] w-full shrink-0 items-center justify-between gap-[var(--space-lg)] bg-hw-orange px-[clamp(1rem,2.24vw,2.6875rem)] py-[clamp(0.75rem,2.2vh,2.5rem)]">
      <div className="flex min-w-0 flex-col justify-center gap-[var(--space-3xs)]">
        <h1
          className="font-[family-name:var(--font-motorblock)] leading-[0.88] tracking-[0.01em] text-hw-ink"
          style={{ fontSize: "var(--text-wordmark)" }}
        >
          HARDWIRE
        </h1>
        <p
          className="max-w-[42ch] font-[family-name:var(--font-geist-mono)] font-normal leading-none tracking-[-0.01em] text-hw-ink"
          style={{ fontSize: "var(--text-tagline)" }}
        >
          The harness for physical, real-world AI.
        </p>
      </div>

      <div className="relative h-[clamp(2.75rem,10.5vh,7.25rem)] w-[clamp(2.5rem,9.5vh,7rem)] shrink-0">
        <Image
          src="/figma/emblem.png"
          alt="Hardwire mark"
          fill
          sizes="121px"
          className="object-contain object-right"
          priority
        />
      </div>
    </footer>
  );
}
