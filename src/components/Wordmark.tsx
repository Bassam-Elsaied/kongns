import { Link } from "@/i18n/navigation";

/**
 * The "K" mark: three round-capped strokes sharing one diagonal gradient.
 * Geometry and colours are taken from the KOGNS logo.
 */
function LogoMark({ gradientId }: { gradientId: string }) {
  return (
    <svg
      viewBox="55 40 300 320"
      className="h-full w-auto shrink-0"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#a855ff" />
        </linearGradient>
      </defs>

      <g
        stroke={`url(#${gradientId})`}
        strokeWidth="76"
        strokeLinecap="round"
        fill="none"
      >
        <line x1="140" y1="230" x2="310" y2="85" />
        <line x1="140" y1="170" x2="310" y2="315" />
        <line x1="100" y1="85" x2="100" y2="315" />
      </g>
    </svg>
  );
}

export default function Wordmark({
  size = "nav",
}: {
  size?: "nav" | "footer";
}) {
  const footer = size === "footer";

  return (
    <Link
      href="/"
      dir="ltr"
      aria-label="KOGNS"
      className={`latin group inline-flex items-center leading-none ${
        footer ? "h-11 gap-3" : "h-7 gap-2"
      }`}
    >
      <LogoMark gradientId={footer ? "k-grad-footer" : "k-grad-nav"} />

      <span className="flex flex-col">
        <span
          className={`font-semibold tracking-[-0.03em] text-foreground ${
            footer ? "text-2xl" : "text-lg"
          }`}
        >
          KOGNS
        </span>
        <span
          className={`-mt-0.5 font-mono tracking-[0.22em] text-fg-mute uppercase ${
            footer ? "text-[8px]" : "text-[3px]"
          }`}
        >
          Engineering • Intelligence
        </span>
      </span>
    </Link>
  );
}
