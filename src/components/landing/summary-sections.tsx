"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const GAP_POINTS = [
  {
    label: "Demos pass",
    body: "Every platform looks ready in a controlled run. Mud, low light, dead radios, and night shifts are what score it.",
  },
  {
    label: "Sites break plans",
    body: "A datasheet isn't a deployment. Uneven ground, weather, and operators who weren't in the lab decide what fails first.",
  },
  {
    label: "Buyers want records",
    body: "Operators, insurers, and program offices don't fund staged runs. They fund systems with evidence they held under load.",
  },
];

const WHY_NOW_CURVES = [
  {
    label: "Models",
    body: "Multimodal models run on-device now. Capability is there; fielded systems aren't.",
  },
  {
    label: "Compute",
    body: "Edge GPUs fit the power and cost budget of platforms that used to run dumb controllers.",
  },
  {
    label: "Sensors",
    body: "Cameras, lidar, and radar ship as commodity SKUs. Buy them, don't invent them.",
  },
  {
    label: "Software",
    body: "Agents can orchestrate. They still don't commission themselves onto a live site.",
  },
];

function SectionReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-[var(--space-sm)] font-[family-name:var(--font-geist-mono)] text-[length:var(--text-summary-eyebrow)] uppercase tracking-[0.2em] text-hw-orange">
      <span aria-hidden className="inline-block h-[0.55em] w-[0.55em] bg-hw-orange" />
      {children}
    </p>
  );
}

function SectionTitle({
  children,
  measure = "18ch",
}: {
  children: React.ReactNode;
  measure?: string;
}) {
  return (
    <h2
      className="font-[family-name:var(--font-geist-pixel-square)] leading-[1.02] tracking-[0.01em] text-[#f2f2f0]"
      style={{
        fontSize: "var(--text-summary-title)",
        maxWidth: measure,
      }}
    >
      {children}
    </h2>
  );
}

function SectionLead({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-[42ch] font-[family-name:var(--font-geist-mono)] text-[length:var(--text-summary-body)] font-normal leading-[1.6] tracking-[-0.01em] text-[#f2f2f0]/78">
      {children}
    </p>
  );
}

/** Asymmetric intro: title owns the left; lead docks right on wide screens. */
function SectionIntro({
  eyebrow,
  title,
  titleMeasure,
  lead,
}: {
  eyebrow: string;
  title: React.ReactNode;
  titleMeasure?: string;
  lead: React.ReactNode;
}) {
  return (
    <header className="grid gap-[var(--space-xl)] lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] lg:items-end lg:gap-[var(--space-2xl)]">
      <div className="flex flex-col gap-[var(--space-md)]">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <SectionTitle measure={titleMeasure}>{title}</SectionTitle>
      </div>
      <SectionLead>{lead}</SectionLead>
    </header>
  );
}

/** Amber-drenched coda — committed identity, not a polite footnote. */
function ClaimBlock({ children }: { children: React.ReactNode }) {
  return (
    <aside className="mt-[var(--space-2xl)] bg-hw-orange px-[var(--space-lg)] py-[var(--space-xl)] text-hw-ink sm:px-[var(--space-xl)] sm:py-[var(--space-2xl)]">
      <p className="max-w-[36ch] font-[family-name:var(--font-geist-pixel-square)] text-[length:var(--text-summary-point)] leading-[1.25] tracking-[0.02em] text-hw-ink sm:max-w-[42ch]">
        {children}
      </p>
    </aside>
  );
}

export function SummarySections() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative z-10 bg-hw-black">
      {/* THE GAP — stacked evidence with giant indices (not a SaaS 3-col) */}
      <section className="border-t border-white/10 px-[var(--page-inline)] py-[clamp(2.5rem,6vh,4.5rem)]">
        <SectionReveal>
          <div className="flex w-full flex-col">
            <SectionIntro
              eyebrow="The gap"
              title={
                <>
                  Robots don&apos;t fail in the lab.
                  <span className="mt-[0.12em] block text-hw-orange">
                    They fail on your site.
                  </span>
                </>
              }
              titleMeasure="18ch"
              lead={
                <>
                  Robots, sensors, models, and power all work in isolation.
                  Making them hold together on a live site, through a real
                  shift, without the vendor on call: that&apos;s where
                  deployments break.
                </>
              }
            />

            <ol className="mt-[var(--space-2xl)] border-t border-white/20">
              {GAP_POINTS.map((point, index) => (
                <motion.li
                  key={point.label}
                  className="flex min-h-[10.75rem] items-center gap-x-[var(--space-xl)] border-b border-white/15 py-[var(--space-xl)] sm:min-h-[12rem] sm:gap-x-[var(--space-2xl)] sm:py-[2rem]"
                  initial={reducedMotion ? false : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.5,
                    delay: reducedMotion ? 0 : index * 0.08,
                    ease: EASE,
                  }}
                >
                  <span
                    className="inline-flex w-[2.15em] shrink-0 items-center justify-start font-[family-name:var(--font-motorblock)] leading-none tracking-[0.02em] text-hw-orange"
                    style={{ fontSize: "var(--text-summary-index)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex min-w-0 max-w-[48ch] flex-col gap-[var(--space-xs)]">
                    <h3 className="font-[family-name:var(--font-geist-pixel-square)] text-[length:var(--text-summary-point)] leading-[1.1] tracking-[0.03em] text-[#f2f2f0]">
                      {point.label}
                    </h3>
                    <p className="font-[family-name:var(--font-geist-mono)] text-[length:var(--text-summary-body)] font-normal leading-[1.55] tracking-[-0.01em] text-[#f2f2f0]/75">
                      {point.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>

            <ClaimBlock>
              Capital keeps going into robots and models. Hardwire builds the
              missing piece: making them work on the customer&apos;s site.
            </ClaimBlock>
          </div>
        </SectionReveal>
      </section>

      {/* WHY NOW — dense instrument board, not four equal marketing cards */}
      <section className="border-t border-white/10 px-[var(--page-inline)] py-[clamp(2.5rem,6vh,4.5rem)]">
        <SectionReveal>
          <div className="flex w-full flex-col">
            <SectionIntro
              eyebrow="Why now"
              title={
                <>
                  Every component just got cheap.
                  <span className="mt-[0.12em] block">Deployment didn&apos;t.</span>
                </>
              }
              titleMeasure="20ch"
              lead={
                <>
                  Models, silicon, sensors, and agent software are cheap enough
                  to buy. None of them installs itself on a worksite.
                </>
              }
            />

            <div className="mt-[var(--space-2xl)] border border-white/25">
              <ul className="grid sm:grid-cols-2">
                {WHY_NOW_CURVES.map((curve, index) => (
                  <motion.li
                    key={curve.label}
                    className={`flex min-h-[11rem] flex-col justify-between gap-[var(--space-lg)] bg-hw-black p-[var(--space-lg)] sm:min-h-[13rem] sm:p-[var(--space-xl)] ${
                      index % 2 === 0 ? "sm:border-r sm:border-white/20" : ""
                    } ${index < 2 ? "border-b border-white/20" : ""}`}
                    initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      duration: 0.45,
                      delay: reducedMotion ? 0 : index * 0.07,
                      ease: EASE,
                    }}
                  >
                    <h3
                      className="font-[family-name:var(--font-motorblock)] leading-none tracking-[0.02em] text-[#f2f2f0]"
                      style={{ fontSize: "clamp(1.75rem, 3vw + 0.5rem, 2.75rem)" }}
                    >
                      {curve.label}
                    </h3>
                    <p className="max-w-[34ch] font-[family-name:var(--font-geist-mono)] text-[length:var(--text-summary-body)] font-normal leading-[1.5] tracking-[-0.01em] text-[#f2f2f0]/72">
                      {curve.body}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>

            <ClaimBlock>
              Cheap components don&apos;t deploy themselves. Field reliability
              is still unsolved, and that&apos;s the layer that earns trust.
            </ClaimBlock>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}
