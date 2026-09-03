"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useIntro } from "@/components/IntroContext";
import Wordmark from "@/components/Wordmark";
import { ArrowRight, NavLinkIcon } from "@/components/icons";
import { Link, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const NAV_ITEMS = [
  { href: "/work", key: "work" },
  { href: "/solutions", key: "solutions" },
  { href: "/insights", key: "insights" },
  { href: "/company", key: "company" },
  { href: "/contact", key: "contact" },
] as const;

/**
 * Shared top bar: wordmark, centered links, language and CTA. Hidden until the
 * intro sequence finishes so it does not sit on the preloader or intro film.
 */
export default function SiteHeader() {
  const t = useTranslations("Nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const { phase } = useIntro();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const revealed = phase === "ready";

  const otherLocale = routing.locales.find((entry) => entry !== locale)!;
  const isHome = pathname === "/";
  const solidBar = !isHome && scrolled;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-4 z-100 mx-auto w-[calc(100%-32px)] max-w-344 transition-all duration-700 ease-smooth ${
        revealed
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-4 opacity-0"
      }`}
    >
      <div
        className={`site-header-bar relative flex items-center justify-between rounded-full py-1.5 pe-3.5 ps-4 ${
          solidBar ? "site-header-bar-scrolled" : ""
        }`}
      >
          <div className="site-header-shapes" aria-hidden="true">
            <span className="site-shape site-shape-circle site-shape-a" />
            <span className="site-shape site-shape-square site-shape-b" />
            <span className="site-shape site-shape-circle site-shape-c" />
            <span className="site-shape site-shape-square site-shape-d" />
            <span className="site-shape site-shape-circle site-shape-e" />
            <span className="site-shape site-shape-square site-shape-f" />
            <span className="site-shape site-shape-circle site-shape-g" />
          </div>
          <div className="relative z-1">
            <Wordmark />
          </div>

        <ul className="absolute left-1/2 z-1 flex -translate-x-1/2 list-none gap-0.5 max-[980px]:hidden">
          {NAV_ITEMS.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`nav-link group inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[13px] font-normal ${
                    active ? "nav-link-active" : ""
                  }`}
                >
                  <NavLinkIcon name={item.key} />
                  <span className="nav-link-label">{t(item.key)}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="relative z-1 flex items-center gap-2 max-[980px]:hidden">
          <Link
            href={pathname}
            locale={otherLocale}
            aria-label={t("languageLabel")}
            className={`rounded-full border border-line px-2.5 py-1 text-xs text-fg-dim transition-colors duration-250 ease-smooth hover:border-line-strong hover:text-foreground ${
              otherLocale === "ar" ? "arabic" : "latin"
            }`}
          >
            {t("language")}
          </Link>

          <Link
            href="/contact"
            className="nav-cta inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-medium text-white transition-transform duration-250 ease-smooth hover:-translate-y-px"
          >
            <span>{t("cta")}</span>
            <ArrowRight size={14} className="rtl:-scale-x-100" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? t("close") : t("open")}
          className="relative z-1 hidden flex-col gap-1.25 px-1.5 py-1.5 max-[980px]:flex"
        >
          <span
            className={`block h-[1.5px] w-5 bg-foreground transition-transform duration-300 ease-smooth ${
              open ? "translate-y-[3.25px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-foreground transition-transform duration-300 ease-smooth ${
              open ? "translate-y-[-3.25px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div
          className={`site-header-bar relative mt-2 rounded-3xl p-5 min-[981px]:hidden ${
            !isHome ? "site-header-bar-scrolled" : ""
          }`}
        >
          <div className="site-header-shapes" aria-hidden="true">
            <span className="site-shape site-shape-circle site-shape-a" />
            <span className="site-shape site-shape-square site-shape-b" />
            <span className="site-shape site-shape-circle site-shape-c" />
            <span className="site-shape site-shape-square site-shape-d" />
          </div>
          <div className="relative z-1">
          <ul className="mb-4 flex list-none flex-col">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname.startsWith(item.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`nav-link group flex items-center gap-2.5 px-1 py-3 text-[17px] font-normal ${
                    pathname.startsWith(item.href) ? "nav-link-active" : ""
                  } ${index === NAV_ITEMS.length - 1 ? "" : "border-b border-line"}`}
                >
                  <NavLinkIcon name={item.key} />
                  <span className="nav-link-label">{t(item.key)}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="nav-cta flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-2.25 text-[13px] font-medium text-white"
            >
              <span>{t("cta")}</span>
              <ArrowRight size={14} className="rtl:-scale-x-100" />
            </Link>

            <Link
              href={pathname}
              locale={otherLocale}
              aria-label={t("languageLabel")}
              className={`rounded-full border border-line px-4 py-2.25 text-[13px] text-fg-dim ${
                otherLocale === "ar" ? "arabic" : "latin"
              }`}
            >
              {t("language")}
            </Link>
          </div>
          </div>
        </div>
      )}
    </nav>
  );
}
