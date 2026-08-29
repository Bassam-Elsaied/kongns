import { useTranslations } from "next-intl";
import { Facebook, LinkedIn, Upwork } from "@/components/icons";
import { Link } from "@/i18n/navigation";

const LEGAL_LINKS = [
  { href: "/privacy-policy", key: "privacy" },
  { href: "/terms-of-service", key: "terms" },
] as const;

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/company/kogns/",
    label: "LinkedIn",
    Icon: LinkedIn,
  },
  {
    href: "https://www.facebook.com/profile.php?id=61593432899726",
    label: "Facebook",
    Icon: Facebook,
  },
  {
    href: "https://www.upwork.com/freelancers/~013c88afba45212e87",
    label: "Upwork",
    Icon: Upwork,
  },
];

/** Compact glassy footer bar that floats over the hero, mirroring the top nav. */
export default function HeroFooter() {
  const t = useTranslations("Footer");

  return (
    <footer className="on-dark fixed inset-x-0 bottom-4 z-100 mx-auto w-[calc(100%-32px)] max-w-344 drop-shadow-[0_1px_14px_rgba(0,0,0,0.55)]">
      <div className="flex items-center justify-between gap-4 py-2.5 pe-1 ps-2">
        <span className="font-mono text-[11px] tracking-[0.06em] text-foreground/70">
          © {new Date().getFullYear()} {t("rights")}
        </span>

        <div className="flex items-center gap-4">
          <ul className="flex list-none items-center gap-4 max-[560px]:hidden">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-foreground/70 transition-colors duration-250 ease-smooth hover:text-foreground"
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-8 items-center justify-center rounded-full border border-white/25 text-foreground/85 transition-all duration-250 ease-smooth hover:border-white/45 hover:text-foreground"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
