"use client";

import { useLocale, useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import {
  formatInsightDate,
  getInsights,
  insightCategories,
  type Insight,
} from "@/components/data/insights";
import { ARROW_NUDGE, ArrowRight } from "@/components/icons";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

const FILTER_BASE =
  "cursor-pointer rounded-full border px-3.5 py-2 text-[13px] transition-all duration-250 ease-smooth";
const FILTER_ON = "border-foreground bg-foreground text-background";
const FILTER_OFF =
  "border-line text-fg-dim hover:border-line-strong hover:text-foreground";

function Meta({ insight }: { insight: Insight }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("Insights");

  return (
    <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-[0.12em] text-fg-mute uppercase">
      <span className="text-brand-2">{insight.category}</span>
      <span aria-hidden="true">•</span>
      <time dateTime={insight.date}>
        {formatInsightDate(insight.date, locale)}
      </time>
      <span aria-hidden="true">•</span>
      <span>{insight.readTime}</span>
      {insight.draft && (
        <span className="rounded-full border border-line px-2 py-0.5 text-[10px] text-fg-mute">
          {t("draft")}
        </span>
      )}
    </div>
  );
}

/** Draft entries are listed but unlinked, matching how the source site marks them. */
function CardShell({
  insight,
  className,
  children,
}: {
  insight: Insight;
  className: string;
  children: React.ReactNode;
}) {
  if (insight.draft) {
    return <div className={`${className} opacity-55`}>{children}</div>;
  }

  return (
    <Link href={`/insights/${insight.slug}`} className={`group ${className}`}>
      {children}
    </Link>
  );
}

export default function InsightList() {
  const locale = useLocale() as Locale;
  const t = useTranslations("Insights");
  const [active, setActive] = useState("");

  const categories = useMemo(() => insightCategories(locale), [locale]);
  const insights = useMemo(() => getInsights(locale), [locale]);

  const visible = active
    ? insights.filter((insight) => insight.category === active)
    : insights;

  const [featured, ...rest] = visible;

  return (
    <section className="pb-30">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-center gap-1 pb-10">
            <button
              type="button"
              onClick={() => setActive("")}
              aria-pressed={active === ""}
              className={`${FILTER_BASE} ${active === "" ? FILTER_ON : FILTER_OFF}`}
            >
              {t("all")}
            </button>

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={active === category}
                className={`${FILTER_BASE} ${
                  active === category ? FILTER_ON : FILTER_OFF
                }`}
              >
                {category}
              </button>
            ))}

            <div className="ms-auto font-mono text-[11px] tracking-[0.1em] text-fg-mute">
              {t("count", { count: visible.length })}
            </div>
          </div>
        </Reveal>

        {featured && (
          <Reveal>
            <CardShell
              insight={featured}
              className="relative grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] overflow-hidden rounded-3xl border border-line bg-background-2 transition-colors duration-350 ease-smooth hover:border-line-strong max-[800px]:grid-cols-1"
            >
              <div className="relative flex flex-col justify-between overflow-hidden border-e border-line p-8 max-[800px]:border-e-0 max-[800px]:border-b">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-24 -left-16 size-72 rounded-full bg-brand/12 blur-3xl"
                />
                <span className="relative font-mono text-[11px] tracking-[0.16em] text-fg-mute uppercase">
                  {t("featured")}
                </span>
                <span className="latin relative mt-16 block font-serif text-[clamp(72px,10vw,140px)] leading-none text-foreground/8 italic">
                  01
                </span>
              </div>

              <div className="flex flex-col justify-center p-10 max-[720px]:p-7">
                <Meta insight={featured} />

                <h2 className="mt-5 text-[clamp(26px,3.2vw,40px)] leading-[1.08] font-medium tracking-[-0.03em] transition-colors duration-250 group-hover:text-brand-2">
                  {featured.title}
                </h2>

                <p className="mt-4 text-[17px] leading-[1.6] text-fg-dim">
                  {featured.excerpt}
                </p>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  {featured.draft ? t("notPublished") : t("read")}
                  {!featured.draft && (
                    <ArrowRight size={14} className={ARROW_NUDGE} />
                  )}
                </span>
              </div>
            </CardShell>
          </Reveal>
        )}

        <div className="mt-4 grid grid-cols-2 gap-4 max-[800px]:grid-cols-1">
          {rest.map((insight, index) => (
            <Reveal key={insight.slug}>
              <CardShell
                insight={insight}
                className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-background-2 p-8 transition-colors duration-350 ease-smooth hover:border-line-strong max-[720px]:p-6"
              >
                <span className="pointer-events-none absolute end-6 top-5 font-mono text-[11px] text-foreground/20 tabular-nums">
                  {String(index + 2).padStart(2, "0")}
                </span>

                <Meta insight={insight} />

                <h3 className="mt-4 text-[22px] leading-[1.2] font-medium tracking-[-0.02em] transition-colors duration-250 group-hover:text-brand-2">
                  {insight.title}
                </h3>

                <p className="mt-3 flex-1 text-[15px] leading-[1.6] text-fg-dim">
                  {insight.excerpt}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-[13px] text-fg-mute transition-colors duration-250 group-hover:text-foreground">
                  {insight.draft ? t("notPublished") : t("read")}
                  {!insight.draft && (
                    <ArrowRight size={13} className={ARROW_NUDGE} />
                  )}
                </span>
              </CardShell>
            </Reveal>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="py-16 text-center text-fg-mute">{t("empty")}</p>
        )}
      </Container>
    </section>
  );
}
