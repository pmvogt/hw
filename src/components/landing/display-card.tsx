interface DisplayCardProps {
  title: string;
  body: string;
  className?: string;
  size?: "sm" | "md";
  interactive?: boolean;
  onClick?: () => void;
  /** Optional image shown above the title/body (globe orbit cards). */
  imageSrc?: string;
  imageAlt?: string;
}

export function DisplayCard({
  title,
  body,
  className,
  size = "sm",
  interactive,
  onClick,
  imageSrc,
  imageAlt = "",
}: DisplayCardProps) {
  const sizing =
    size === "sm"
      ? "w-[6.5rem] gap-0.5 px-1.5 py-1"
      : "w-[8.75rem] gap-1 px-2.5 py-1.5";

  const titleSize = size === "sm" ? "0.625rem" : "0.75rem";
  const bodySize = size === "sm" ? "0.5625rem" : "0.6875rem";
  const imageHeight = size === "sm" ? "h-[2.35rem]" : "h-[3rem]";

  const shared = `flex flex-col border border-white/90 bg-hw-card text-left text-[#f2f2f0] ${sizing} ${className ?? ""}`;

  const inner = (
    <>
      {imageSrc ? (
        <div
          className={`relative mb-1 w-full shrink-0 overflow-hidden border border-white/20 bg-[#121212] ${imageHeight}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
            loading="lazy"
          />
        </div>
      ) : null}
      <p
        className="font-[family-name:var(--font-geist-pixel-square)] leading-none tracking-[0.02em]"
        style={{ fontSize: titleSize }}
      >
        {title}
      </p>
      <p
        className="font-[family-name:var(--font-geist-mono)] font-light leading-[1.15] tracking-[-0.01em] text-[#f2f2f0]/90"
        style={{ fontSize: bodySize }}
      >
        {body}
      </p>
    </>
  );

  if (interactive) {
    return (
      <button type="button" onClick={onClick} className={`${shared} cursor-pointer`}>
        {inner}
      </button>
    );
  }

  return <div className={shared}>{inner}</div>;
}
