import type { Metadata, Viewport } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Geist,
  Geist_Mono,
  Instrument_Serif,
  Tajawal,
} from "next/font/google";
import { notFound } from "next/navigation";
import { IntroProvider } from "@/components/IntroContext";
import IntroOverlay from "@/components/IntroOverlay";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
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

// Geist has no Arabic coverage, so the Arabic locale uses Tajawal.
const tajawal = Tajawal({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export const viewport: Viewport = {
  colorScheme: "light",
};

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
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${tajawal.variable} h-full antialiased`}
    >
      <body className="grain flex min-h-full flex-col">
        <NextIntlClientProvider>
          <IntroProvider>
            <IntroOverlay />
            <SiteHeader />
            {children}
            <SiteFooter />
          </IntroProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
