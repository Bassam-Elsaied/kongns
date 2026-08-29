import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Geist,
  Geist_Mono,
  IBM_Plex_Sans_Arabic,
  Instrument_Serif,
} from "next/font/google";
import { notFound } from "next/navigation";
import IntroOverlay from "@/components/IntroOverlay";
import ThemeScript from "@/components/ThemeScript";
import { localeDirection, routing } from "@/i18n/routing";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

// Geist has no Arabic coverage, so the Arabic locale needs its own face.
const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Footer" });

  return {
    title: "KOGNS — Engineering • Intelligence",
    description: t("tagline"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      dir={localeDirection[locale]}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${plexArabic.variable} h-full antialiased`}
    >
      <body className="grain flex min-h-full flex-col">
        <ThemeScript />
        <NextIntlClientProvider>
          <IntroOverlay />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
