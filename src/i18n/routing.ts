import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ar", "en"],
  defaultLocale: "ar",
  // Mirrors the source site, which serves /ar and /en explicitly.
  localePrefix: "always",
  // Arabic is the default for everyone; `Accept-Language` must not override it.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];

export const localeDirection: Record<Locale, "rtl" | "ltr"> = {
  ar: "rtl",
  en: "ltr",
};

/**
 * Narrows the `string` locale that route params hand back. The locale layout
 * already 404s on anything unrecognised, so the fallback is unreachable.
 */
export function toLocale(value: string): Locale {
  return routing.locales.includes(value as Locale)
    ? (value as Locale)
    : routing.defaultLocale;
}
