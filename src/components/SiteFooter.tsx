"use client";

import { useTranslations } from "next-intl";
import { useIntro } from "@/components/IntroContext";
import { Facebook, LinkedIn, NavLinkIcon, Upwork } from "@/components/icons";
import { Link, usePathname } from "@/i18n/navigation";

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

/**
 * Floating pill bar that mirrors the header: copyright, legal links, socials.
 */
export default function SiteFooter() {
  const t = useTranslations("Footer");
  const pathname = usePathname();
  const { phase } = useIntro();
  const revealed = phase === "ready";
  const isHome = pathname === "/";

  return (
    <>
      {!isHome && <div className="h-20 shrink-0" aria-hidden="true" />}

      <footer
        className={`fixed inset-x-0 bottom-4 z-100 mx-auto w-[calc(100%-32px)] max-w-344 transition-all duration-700 ease-smooth ${
          revealed
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <div className="site-header-bar relative flex items-center justify-between rounded-full py-1.5 pe-3.5 ps-4">
          <div className="site-header-shapes" aria-hidden="true">
            <span className="site-shape site-shape-circle site-shape-a" />
            <span className="site-shape site-shape-square site-shape-b" />
            <span className="site-shape site-shape-circle site-shape-c" />
            <span className="site-shape site-shape-square site-shape-d" />
            <span className="site-shape site-shape-circle site-shape-e" />
            <span className="site-shape site-shape-square site-shape-f" />
            <span className="site-shape site-shape-circle site-shape-g" />
          </div>

          <span className="relative z-1 font-mono text-[10px] tracking-[0.06em] text-fg-dim">
            © {new Date().getFullYear()} {t("rights")}
          </span>

          <ul className="absolute left-1/2 z-1 flex -translate-x-1/2 list-none gap-0.5 max-[720px]:hidden">
            {LEGAL_LINKS.map((link) => {
              const active = pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`nav-link group inline-flex items-center gap-1 rounded-full px-2 py-1 text-[12px] font-normal ${
                      active ? "nav-link-active" : ""
                    }`}
                  >
                    <NavLinkIcon name={link.key} />
                    <span className="nav-link-label">{t(link.key)}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="relative z-1 flex items-center gap-1">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="nav-cta flex size-7 items-center justify-center rounded-full text-white transition-transform duration-250 ease-smooth hover:-translate-y-px"
              >
                <Icon size={11} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
