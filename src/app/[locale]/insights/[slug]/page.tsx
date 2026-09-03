import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import FinalCta from "@/components/FinalCta";
import { getCapability } from "@/components/data/capabilities";
import {
  formatInsightDate,
  getInsight,
  publishedInsights,
  relatedInsights,
  type Block,
} from "@/components/data/insights";
import { ARROW_NUDGE, ArrowRight } from "@/components/icons";
import { Link } from "@/i18n/navigation";
import { routing, toLocale } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    publishedInsights(locale).map((insight) => ({ locale, slug: insight.slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/insights/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const insight = getInsight(toLocale(locale), slug);

  if (!insight) return { title: "Not found | KOGNS" };

  return { title: `${insight.title} | KOGNS`, description: insight.excerpt };
}

function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <div className="text-[15px] leading-[1.75] text-fg-dim">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          const Tag = block.level === 2 ? "h2" : "h3";
          return (
            <Tag
              key={index}
              className={
                block.level === 2
                  ? "mt-[1.6em] mb-[0.5em] text-[22px] leading-[1.3] font-medium tracking-[-0.02em] text-foreground"
                  : "mt-[1.4em] mb-[0.45em] text-[17px] font-medium tracking-[-0.015em] text-foreground"
              }
            >
              {block.text}
            </Tag>
          );
        }

        if (block.type === "paragraph") {
          return (
            <p key={index} className="mt-[1.1em]">
              {block.text}
            </p>
          );
        }

        const List = block.ordered ? "ol" : "ul";
        return (
          <List key={index} className="mt-[1.2em] flex list-none flex-col gap-3">
            {block.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="relative border-s border-line ps-5 before:absolute before:top-[0.65em] before:-start-[3px] before:size-[5px] before:rounded-full before:bg-brand"
              >
                {item.term && (
                  <strong className="font-medium text-foreground">
                    {item.term}:{" "}
                  </strong>
                )}
                {item.text}
              </li>
            ))}
          </List>
        );
      })}
    </div>
  );
}

export default async function InsightPage({
  params,
}: PageProps<"/[locale]/insights/[slug]">) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const insight = getInsight(toLocale(locale), slug);
  if (!insight || insight.draft) notFound();

  const t = await getTranslations("Insights");
  const nav = await getTranslations("Nav");

  const capability = insight.capability
    ? getCapability(toLocale(locale), insight.capability)
    : undefined;
  const related = relatedInsights(toLocale(locale), insight);

  return (
    <>
      <main className="flex-1">
        <article>
          <header className="pt-40 pb-10 max-[720px]:pt-32">
            <Container>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-fg-mute uppercase transition-colors duration-250 hover:text-foreground"
              >
                <ArrowRight size={12} className="rotate-180 rtl:rotate-0" />
                {nav("insights")}
              </Link>

              <h1 className="mt-5 max-w-[28ch] text-[clamp(28px,4.5vw,44px)] leading-[1.2] font-medium tracking-[-0.03em]">
                {insight.title}
              </h1>

              <p className="mt-5 max-w-160 text-[15px] leading-[1.7] text-fg-dim">
                {insight.excerpt}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-line pt-6 font-mono text-[11px] tracking-[0.12em] text-fg-mute uppercase">
                <span className="text-brand-2">{insight.category}</span>
                <span aria-hidden="true">•</span>
                <time dateTime={insight.date}>
                  {formatInsightDate(insight.date, toLocale(locale))}
                </time>
                <span aria-hidden="true">•</span>
                <span>{insight.readTime}</span>
                <span className="ms-auto">{insight.author}</span>
              </div>
            </Container>
          </header>

          <Container>
            <div className="grid grid-cols-[minmax(0,1fr)_300px] items-start gap-16 pb-24 max-[960px]:grid-cols-1 max-[960px]:gap-12">
              <Prose blocks={insight.blocks} />

              <aside className="sticky top-28 flex flex-col gap-4 max-[960px]:static">
                {capability && (
                  <div className="rounded-2xl border border-line bg-background-2 p-6">
                    <div className="font-mono text-[11px] tracking-[0.16em] text-fg-mute uppercase">
                      {t("relatedSolution")}
                    </div>
                    <h2 className="mt-3 text-[16px] leading-snug font-medium text-foreground">
                      {capability.title}
                    </h2>
                    <Link
                      href={`/solutions#${capability.slug}`}
                      className="group mt-4 inline-flex items-center gap-2 text-[13px] text-fg-dim transition-colors duration-250 hover:text-foreground"
                    >
                      {t("learnMore")}
                      <ArrowRight size={13} className={ARROW_NUDGE} />
                    </Link>
                  </div>
                )}

                {related.length > 0 && (
                  <div className="rounded-2xl border border-line bg-background-2 p-6">
                    <div className="mb-4 font-mono text-[11px] tracking-[0.16em] text-fg-mute uppercase">
                      {t("relatedInsights")}
                    </div>
                    <ul className="flex list-none flex-col gap-4">
                      {related.map((entry) => (
                        <li key={entry.slug}>
                          <Link
                            href={`/insights/${entry.slug}`}
                            className="group block"
                          >
                            <span className="font-mono text-[10px] tracking-[0.12em] text-fg-mute uppercase">
                              {entry.category}
                            </span>
                            <span className="mt-1 block text-sm leading-snug text-fg-dim transition-colors duration-250 group-hover:text-foreground">
                              {entry.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </aside>
            </div>
          </Container>

          <FinalCta />
        </article>
      </main>

    </>
  );
}
