type IconProps = {
  size?: number;
  className?: string;
};

/**
 * Hover motion for arrows inside a `group`. The RTL variants carry higher
 * specificity, so they override the LTR nudge under `dir="rtl"`.
 */
export const ARROW_NUDGE =
  "transition-transform duration-350 ease-smooth group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1";

export const ARROW_NUDGE_SM =
  "transition-transform duration-350 ease-smooth group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5";

export const ARROW_LIFT =
  "transition-transform duration-350 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5";

export function ArrowRight({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowDiagonal({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 13L13 3M13 3H5.5M13 3V10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Sun({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Moon({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M20 14.5A8 8 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Facebook({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
    </svg>
  );
}

export function LinkedIn({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 448 512"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
    </svg>
  );
}

const NAV_ICON_CLASS = "nav-ico size-3.5 shrink-0 overflow-visible";

function WorkNavIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={NAV_ICON_CLASS}>
      <rect
        x="1.75"
        y="5.75"
        width="12.5"
        height="8"
        rx="1.6"
        stroke="currentColor"
        strokeWidth="1.35"
      />
      <path
        d="M1.75 8.75h12.5"
        stroke="currentColor"
        strokeWidth="1.35"
      />
      <path
        className="nav-ico-work-handle"
        d="M5.4 5.75V4.35A2.1 2.1 0 0 1 7.5 2.25h1A2.1 2.1 0 0 1 10.6 4.35v1.4"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SolutionsNavIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={NAV_ICON_CLASS}>
      <rect
        className="nav-ico-sol-1"
        x="3.25"
        y="2.25"
        width="9.5"
        height="3.1"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.35"
      />
      <rect
        className="nav-ico-sol-2"
        x="2.25"
        y="6.45"
        width="11.5"
        height="3.1"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.35"
      />
      <rect
        className="nav-ico-sol-3"
        x="3.25"
        y="10.65"
        width="9.5"
        height="3.1"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.35"
      />
    </svg>
  );
}

function InsightsNavIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={NAV_ICON_CLASS}>
      <path
        className="nav-ico-bar nav-ico-bar-1"
        d="M3.25 12.5V8.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        className="nav-ico-bar nav-ico-bar-2"
        d="M8 12.5V3.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        className="nav-ico-bar nav-ico-bar-3"
        d="M12.75 12.5V6.25"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CompanyNavIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={NAV_ICON_CLASS}>
      <path
        d="M3.25 13.5V4.6c0-.6.5-1.1 1.1-1.1h7.3c.6 0 1.1.5 1.1 1.1v8.9"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path d="M1.75 13.5h12.5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <path
        className="nav-ico-win"
        d="M6.1 6.2h1.3M8.6 6.2h1.3M6.1 8.7h1.3M8.6 8.7h1.3M6.1 11.2h1.3M8.6 11.2h1.3"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

const NAV_ICONS = {
  work: WorkNavIcon,
  solutions: SolutionsNavIcon,
  insights: InsightsNavIcon,
  company: CompanyNavIcon,
} as const;

export function NavLinkIcon({
  name,
}: {
  name: keyof typeof NAV_ICONS;
}) {
  const Icon = NAV_ICONS[name];
  return <Icon />;
}

export function Upwork({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 641 512"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M494.7 295.6c-50.3 0-83.5-38.9-92.8-53.9 11.9-83.5 42.1-108.9 92.8-108.9 45.9 0 81.2 36.4 81.2 81.4s-35.3 81.4-81.2 81.4zm0-230.2c-79.4 0-125.4 51.1-137.4 121.4-30.3-45.9-53.1-101.9-66.4-149.8H201v186.7c0 37-30 67.1-66.9 67.1s-66.9-30.1-66.9-67.1V36.9H.8v186.7c0 74.1 60.1 135.2 134.2 135.2s134.2-61.1 134.2-135.2v-31.3c13.1 26.1 29.2 53.1 48.7 76.9l-41.3 194.3h68.7l30-141.2c26.1 16.9 56.4 26.9 90.3 26.9C568.5 349.2 640 288 640 214.1s-71.5-148.7-145.3-148.7z" />
    </svg>
  );
}
