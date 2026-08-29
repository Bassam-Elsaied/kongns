"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Moon, Sun } from "@/components/icons";
import { THEME_STORAGE_KEY } from "@/components/ThemeScript";

/**
 * Light/dark switch. The initial class on <html> is set by ThemeScript
 * to avoid a flash, so here we only mirror and update that state.
 */
export default function ThemeToggle({
  className = "",
  size = 16,
}: {
  className?: string;
  size?: number;
}) {
  const t = useTranslations("Nav");
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next ? "dark" : "light");
    } catch {
      // Ignore storage failures (private mode, disabled cookies, etc.).
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? t("themeLight") : t("themeDark")}
      title={t("theme")}
      className={className}
    >
      {/* Render nothing theme-specific until mounted to avoid hydration drift. */}
      <span className={mounted ? "" : "opacity-0"}>
        {dark ? <Moon size={size} /> : <Sun size={size} />}
      </span>
    </button>
  );
}
