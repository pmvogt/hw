/** Page-end legal strip (placeholders for client review). Distinct from the amber brand bar. */
export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-hw-black px-[var(--page-inline)] py-[var(--space-xl)]">
      <div className="flex w-full flex-col gap-[var(--space-md)] sm:flex-row sm:items-center sm:justify-between sm:gap-[var(--space-lg)]">
        <p className="font-[family-name:var(--font-geist-mono)] text-[length:var(--text-micro)] leading-none tracking-[0.04em] text-[#f2f2f0]/55">
          © 2026 Hardwire. All rights reserved.
        </p>

        <nav
          aria-label="Legal"
          className="flex flex-wrap items-center gap-x-[var(--space-lg)] gap-y-[var(--space-sm)]"
        >
          <a
            href="#privacy"
            className="font-[family-name:var(--font-geist-mono)] text-[length:var(--text-micro)] leading-none tracking-[0.08em] text-[#f2f2f0]/70 underline-offset-4 transition-colors hover:text-hw-orange hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hw-orange"
          >
            Privacy
          </a>
          <a
            href="#terms"
            className="font-[family-name:var(--font-geist-mono)] text-[length:var(--text-micro)] leading-none tracking-[0.08em] text-[#f2f2f0]/70 underline-offset-4 transition-colors hover:text-hw-orange hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hw-orange"
          >
            Terms
          </a>
        </nav>
      </div>
    </footer>
  );
}
