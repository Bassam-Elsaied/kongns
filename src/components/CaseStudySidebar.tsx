import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import {
  getProjects,
  relatedProjects,
  type Project,
} from "@/components/data/projects";
import {
  ARROW_LIFT,
  ArrowDiagonal,
  ArrowRight,
} from "@/components/icons";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

const CARD = "rounded-[18px] border border-line bg-surface p-7";
const CARD_HEADING =
  "mb-4 font-mono text-[11px] tracking-[0.1em] text-fg-mute uppercase";

export default function CaseStudySidebar({ project }: { project: Project }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("CaseStudy");
  const nav = useTranslations("Nav");
  const related = relatedProjects(locale, project);

  return (
    <aside className="sticky top-25 flex flex-col gap-6 max-[960px]:static">
      <div className={CARD}>
        <div className={CARD_HEADING}>{t("allProjects")}</div>
        <ul className="list-none">
          {getProjects(locale).map((entry) => {
            const current = entry.slug === project.slug;
            return (
              <li
                key={entry.slug}
                className="border-b border-line last:border-b-0"
              >
                <Link
                  href={`/work/${entry.slug}`}
                  aria-current={current ? "page" : undefined}
                  className={`flex items-center justify-between gap-3 py-3 text-sm transition-all duration-250 ease-smooth hover:text-foreground ${
                    current ? "ps-2 text-foreground" : "text-fg-dim"
                  }`}
                >
                  <span>{entry.name}</span>
                  <ArrowRight
                    size={12}
                    className="shrink-0 rtl:-scale-x-100"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={`${CARD} border-line bg-linear-135 from-surface to-background-2`}
      >
        <div className="font-mono text-[11px] font-medium tracking-[0.16em] text-fg-mute uppercase">
          <span className="me-2 inline-block size-1.5 rounded-full bg-brand align-middle shadow-[0_0_12px_var(--brand)]" />
          {t("next")}
        </div>
        <div className="mt-3 mb-5 text-2xl leading-[1.15] tracking-[-0.02em] text-foreground">
          {t("haveProject")}
        </div>
        <Link
          href="#booking"
          className="group inline-flex items-center gap-2.5 rounded-full border border-transparent bg-foreground px-5.5 py-3.5 text-sm font-medium tracking-[-0.01em] text-background transition-all duration-250 ease-smooth hover:-translate-y-px hover:opacity-90"
        >
          {nav("cta")}
          <ArrowDiagonal className={ARROW_LIFT} />
        </Link>
      </div>

      {related.length > 0 && (
        <div className={CARD}>
          <div className={CARD_HEADING}>{t("related")}</div>
          <ul className="flex list-none flex-col gap-3">
            {related.map((entry) => (
              <li key={entry.slug}>
                <Link
                  href={`/work/${entry.slug}`}
                  className="flex items-center gap-3 text-sm text-fg-dim transition-colors duration-250 hover:text-foreground"
                >
                  <span
                    className="relative size-13 shrink-0 overflow-hidden rounded-[10px]"
                    style={{ background: entry.tint }}
                  >
                    <Image
                      src={entry.cover}
                      alt=""
                      fill
                      sizes="52px"
                      className="object-cover object-top"
                    />
                  </span>
                  <span>{entry.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
