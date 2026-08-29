import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import LegalPage from "@/components/LegalPage";
import { getLegalDocument } from "@/components/data/legal";
import { toLocale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/terms-of-service">): Promise<Metadata> {
  const { locale } = await params;
  const terms = getLegalDocument(toLocale(locale), "terms-of-service");

  return { title: `${terms?.title} | KOGNS`, description: terms?.intro };
}

export default async function TermsOfServicePage({
  params,
}: PageProps<"/[locale]/terms-of-service">) {
  const { locale } = await params;
  setRequestLocale(locale);

  const terms = getLegalDocument(toLocale(locale), "terms-of-service");
  if (!terms) notFound();

  return <LegalPage document={terms} />;
}
