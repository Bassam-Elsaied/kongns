import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import LegalPage from "@/components/LegalPage";
import { getLegalDocument } from "@/components/data/legal";
import { toLocale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/privacy-policy">): Promise<Metadata> {
  const { locale } = await params;
  const policy = getLegalDocument(toLocale(locale), "privacy-policy");

  return { title: `${policy?.title} | KOGNS`, description: policy?.intro };
}

export default async function PrivacyPolicyPage({
  params,
}: PageProps<"/[locale]/privacy-policy">) {
  const { locale } = await params;
  setRequestLocale(locale);

  const policy = getLegalDocument(toLocale(locale), "privacy-policy");
  if (!policy) notFound();

  return <LegalPage document={policy} />;
}
