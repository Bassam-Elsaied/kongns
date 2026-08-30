import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ContactChat from "@/components/ContactChat";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Cta" });

  return { title: `${t("action")} | KOGNS`, description: t("subtitle") };
}

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <ContactChat />
      </main>

      <SiteFooter />
    </>
  );
}
