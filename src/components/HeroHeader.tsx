"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import Wordmark from "@/components/Wordmark";
import { ArrowRight, NavLinkIcon } from "@/components/icons";
import { Link, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const NAV_ITEMS = [
  { href: "/work", key: "work" },
  { href: "/solutions", key: "solutions" },
  { href: "/insights", key: "insights" },
  { href: "/company", key: "company" },
] as const;

const GLASS_PILL =
  "border border-white/35 bg-white/20 shadow-[0_8px_32px_rgba(17,17,26,0.08),inset_0_1px_0_rgba(255,255,255,0.45)] backdrop-blur-[16px] backdrop-saturate-140 dark:border-white/12 dark:bg-black/45 dark:shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.08)]";

/**
 * Home-only navigation: logo on one side, white glass pill with per-link
 * icons on the other — so the intro film stays visible behind it.
 */
export default function HeroHeader() {
  const t = useTranslations("Nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const otherLocale = routing.locales.find((entry) => entry !== locale)!;

  return (
    <nav className="fixed inset-x-0 top-0 z-100 px-8 pt-6 max-[720px]:px-4 max-[720px]:pt-4">
      <div className="flex items-center justify-between gap-4">
        <div className="drop-shadow-[0_1px_12px_rgba(0,0,0,0.5)]">
          <Wordmark />
        </div>

        <div className={`flex items-center rounded-full p-1.5 ${GLASS_PILL} max-[860px]:hidden`}>
          <ul className="flex list-none items-center">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-semibold text-[#0b0d12]/70 transition-colors duration-250 ease-smooth hover:bg-black/5 hover:text-[#0b0d12] dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  <NavLinkIcon name={item.key} />
                  <span>{t(item.key)}</span>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={pathname}
            locale={otherLocale}
            aria-label={t("languageLabel")}
            className="rounded-full px-3 py-2 text-[12px] font-semibold text-[#0b0d12]/50 transition-colors duration-250 ease-smooth hover:bg-black/5 hover:text-[#0b0d12] dark:text-white/50 dark:hover:bg-white/10 dark:hover:text-white"
          >
            {t("language")}
          </Link>

          <ThemeToggle className="inline-flex size-9 items-center justify-center rounded-full text-[#0b0d12]/50 transition-colors duration-250 ease-smooth hover:bg-black/5 hover:text-[#0b0d12] dark:text-white/50 dark:hover:bg-white/10 dark:hover:text-white" />

          <Link
            href="/contact"
            className="ms-1 inline-flex items-center gap-1.5 rounded-full bg-[#0b0d12] px-4 py-2.25 text-[13px] font-semibold text-white transition-transform duration-250 ease-smooth hover:-translate-y-px dark:bg-white dark:text-[#0b0d12]"
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
          className={`hidden size-11 items-center justify-center rounded-full max-[860px]:flex ${GLASS_PILL}`}
        >
          <span className="flex flex-col gap-1.25">
            <span
              className={`block h-[1.5px] w-4.5 bg-[#0b0d12] transition-transform duration-300 ease-smooth dark:bg-white ${
                open ? "translate-y-[3.25px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-4.5 bg-[#0b0d12] transition-transform duration-300 ease-smooth dark:bg-white ${
                open ? "translate-y-[-3.25px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className={`mt-2 rounded-3xl p-5 min-[861px]:hidden ${GLASS_PILL}`}>
          <ul className="mb-4 flex list-none flex-col">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`group flex items-center gap-2.5 px-1 py-3 text-[17px] font-semibold text-[#0b0d12]/70 transition-colors duration-250 hover:text-[#0b0d12] dark:text-white/70 dark:hover:text-white ${
                    index === NAV_ITEMS.length - 1 ? "" : "border-b border-black/8 dark:border-white/10"
                  }`}
                >
                  <NavLinkIcon name={item.key} />
                  <span>{t(item.key)}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#0b0d12] px-4 py-2.25 text-[13px] font-semibold text-white dark:bg-white dark:text-[#0b0d12]"
            >
              <span>{t("cta")}</span>
              <ArrowRight size={14} className="rtl:-scale-x-100" />
            </Link>

            <Link
              href={pathname}
              locale={otherLocale}
              aria-label={t("languageLabel")}
              onClick={() => setOpen(false)}
              className="rounded-full border border-black/10 px-4 py-2.25 text-[13px] font-semibold text-[#0b0d12]/70 dark:border-white/15 dark:text-white/70"
            >
              {t("language")}
            </Link>

            <ThemeToggle className="inline-flex size-10 items-center justify-center rounded-full border border-black/10 text-[#0b0d12]/70 dark:border-white/15 dark:text-white/70" />
          </div>
        </div>
      )}
    </nav>
  );
}
