"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import Wordmark from "@/components/Wordmark";
import { ArrowRight } from "@/components/icons";
import { Link, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const NAV_ITEMS = [
  { href: "/work", key: "work" },
  { href: "/solutions", key: "solutions" },
  { href: "/insights", key: "insights" },
  { href: "/company", key: "company" },
] as const;

export default function SiteHeader() {
  const t = useTranslations("Nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const otherLocale = routing.locales.find((entry) => entry !== locale)!;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-4 z-100 mx-auto w-[calc(100%-32px)] max-w-344">
      <div
        className={`relative flex items-center justify-between rounded-full border border-line py-3 pe-4 ps-5 backdrop-blur-xl backdrop-saturate-160 transition-colors duration-300 ease-smooth ${
          scrolled ? "bg-background/80" : "bg-background/65"
        }`}
      >
        <Wordmark />

        <ul className="absolute left-1/2 flex -translate-x-1/2 list-none gap-1 max-[860px]:hidden">
          {NAV_ITEMS.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`inline-block rounded-full px-4 py-2 text-sm transition-colors duration-250 ease-smooth ${
                    active
                      ? "bg-foreground/6 text-foreground"
                      : "text-fg-dim hover:text-foreground"
                  }`}
                >
                  {t(item.key)}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 max-[860px]:hidden">
          <ThemeToggle className="inline-flex size-9 items-center justify-center rounded-full border border-line text-fg-dim transition-colors duration-250 ease-smooth hover:border-line-strong hover:text-foreground" />

          <Link
            href={pathname}
            locale={otherLocale}
            aria-label={t("languageLabel")}
            className="rounded-full border border-line px-3 py-1.75 text-xs text-fg-dim transition-colors duration-250 ease-smooth hover:border-line-strong hover:text-foreground"
          >
            {t("language")}
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2.25 text-[13px] font-medium text-background transition-transform duration-250 ease-smooth hover:-translate-y-px"
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
          className="hidden flex-col gap-1.25 px-1.5 py-2.5 max-[860px]:flex"
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
        <div className="mt-2 rounded-3xl border border-line bg-background/92 p-5 backdrop-blur-xl backdrop-saturate-160 min-[861px]:hidden">
          <ul className="mb-4 flex list-none flex-col">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block px-1 py-3 text-[17px] transition-colors duration-250 hover:text-foreground ${
                    pathname.startsWith(item.href)
                      ? "text-foreground"
                      : "text-fg-dim"
                  } ${index === NAV_ITEMS.length - 1 ? "" : "border-b border-line"}`}
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-foreground px-4 py-2.25 text-[13px] font-medium text-background"
            >
              <span>{t("cta")}</span>
              <ArrowRight size={14} className="rtl:-scale-x-100" />
            </Link>

            <Link
              href={pathname}
              locale={otherLocale}
              aria-label={t("languageLabel")}
              className="rounded-full border border-line px-4 py-2.25 text-[13px] text-fg-dim"
            >
              {t("language")}
            </Link>

            <ThemeToggle className="inline-flex size-10 items-center justify-center rounded-full border border-line text-fg-dim" />
          </div>
        </div>
      )}
    </nav>
  );
}
