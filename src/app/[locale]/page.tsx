import { setRequestLocale } from "next-intl/server";
import HeroFooter from "@/components/HeroFooter";
import HeroHeader from "@/components/HeroHeader";
import HomeHero from "@/components/HomeHero";

/** The landing page is the intro film only — a single, scroll-free viewport. */
export default async function LocaleRoot({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroHeader />

      <main className="flex-1">
        <HomeHero />
      </main>

      <HeroFooter />
    </>
  );
}
