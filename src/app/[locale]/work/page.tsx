import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import FinalCta from "@/components/FinalCta";
import PageHeader from "@/components/PageHeader";
import WorkList from "@/components/WorkList";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/work">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Work" });

  return {
    title: `${t("titleLead")} ${t("titleTail")} | KOGNS`,
    description: t("subtitle"),
  };
}

export default async function WorkPage({ params }: PageProps<"/[locale]/work">) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Work");

  return (
    <>
      <main className="flex-1">
        <PageHeader
          eyebrow={t("eyebrow")}
          lead={t("titleLead")}
          tail={t("titleTail")}
          subtitle={t("subtitle")}
        />

        <WorkList />
        <FinalCta />
      </main>
    </>
  );
}
