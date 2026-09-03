import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import FinalCta from "@/components/FinalCta";
import InsightList from "@/components/InsightList";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/insights">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Insights" });

  return {
    title: `${t("titleLead")} ${t("titleTail")} | KOGNS`,
    description: t("subtitle"),
  };
}

export default async function InsightsPage({
  params,
}: PageProps<"/[locale]/insights">) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Insights");

  return (
    <>
      <main className="flex-1">
        <PageHeader
          eyebrow={t("eyebrow")}
          lead={t("titleLead")}
          tail={t("titleTail")}
          subtitle={t("subtitle")}
        />

        <InsightList />
        <FinalCta />
      </main>
    </>
  );
}
