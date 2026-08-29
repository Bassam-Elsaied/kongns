"use client";

import { useLocale, useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ScreenFrame from "@/components/ScreenFrame";
import { allTags, getProjects, projectTags } from "@/components/data/projects";
import { ARROW_NUDGE, ArrowRight } from "@/components/icons";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

const FILTER_BASE =
  "cursor-pointer rounded-full border px-3.5 py-2 text-[13px] transition-all duration-250 ease-smooth";
const FILTER_ON = "border-foreground bg-foreground text-background";
const FILTER_OFF =
  "border-line text-fg-dim hover:border-line-strong hover:text-foreground";

export default function WorkList() {
  const locale = useLocale() as Locale;
  const t = useTranslations("Work");
  const [active, setActive] = useState("");

  const tags = useMemo(() => allTags(locale), [locale]);

  // Row numbers come from the full list, so they stay stable while filtering.
  const numbered = useMemo(
    () =>
      getProjects(locale).map((project, index) => ({
        ...project,
        number: String(index + 1).padStart(2, "0"),
      })),
    [locale],
  );

  const visible = active
    ? numbered.filter((project) => projectTags(project).includes(active))
    : numbered;

  return (
    <section className="pb-30">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-center gap-1 pb-8">
            <button
              type="button"
              onClick={() => setActive("")}
              aria-pressed={active === ""}
              className={`${FILTER_BASE} ${active === "" ? FILTER_ON : FILTER_OFF}`}
            >
              {t("all")}
            </button>

            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActive(tag)}
                aria-pressed={active === tag}
                className={`${FILTER_BASE} ${active === tag ? FILTER_ON : FILTER_OFF}`}
              >
                {tag}
              </button>
            ))}

            <div className="ms-auto font-mono text-[11px] tracking-[0.1em] text-fg-mute">
              {t("count", { count: visible.length })}
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col">
          {visible.map((project, index) => (
            <Reveal key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className={`group relative grid grid-cols-[60px_1.5fr_180px_1fr_40px] items-center gap-6 border-b border-line py-8 transition-[padding] duration-300 ease-smooth hover:ps-6 max-[800px]:grid-cols-[40px_1fr_24px] ${
                  index === 0 ? "border-t" : ""
                }`}
              >
                <span className="font-mono text-xs tracking-[0.1em] text-fg-mute">
                  {project.number}
                </span>

                <span>
                  <h3 className="text-[clamp(28px,4vw,56px)] leading-none font-medium tracking-[-0.03em]">
                    {project.name}
                  </h3>
                  <span className="mt-2 block font-mono text-[11px] tracking-[0.06em] text-fg-mute">
                    {project.discipline}
                  </span>
                </span>

                <span className="font-mono text-xs text-fg-dim max-[800px]:hidden">
                  {project.sector}
                </span>

                <span className="text-end font-mono text-[13px] tracking-[0.04em] text-fg-dim max-[800px]:hidden">
                  <span className="text-brand-2">{project.stats[0].value}</span>{" "}
                  {project.stats[0].label}
                </span>

                <span className="flex justify-end text-fg-mute transition-colors duration-250 group-hover:text-foreground">
                  <ArrowRight size={20} className={ARROW_NUDGE} />
                </span>

                {/* Tailwind v4 animates `scale` as its own property, so it must be
                    named explicitly here rather than relying on `transform`. */}
                <span className="pointer-events-none absolute end-8 top-1/2 z-5 h-50 w-70 -translate-y-1/2 scale-90 overflow-hidden rounded-xl opacity-0 shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-[opacity,scale] duration-500 ease-smooth group-hover:scale-100 group-hover:opacity-100 max-[800px]:hidden">
                  <ScreenFrame
                    src={project.cover}
                    alt={project.name}
                    tint={project.tint}
                    sizes="280px"
                    compact
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
