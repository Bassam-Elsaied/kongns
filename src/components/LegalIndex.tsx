"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import type { LegalSection } from "@/components/data/legal";

/** Sticky contents list that tracks the section currently in view. */
export default function LegalIndex({ sections }: { sections: LegalSection[] }) {
  const t = useTranslations("Legal");
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-140px 0px -60% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label={t("contents")} className="sticky top-28 max-[960px]:hidden">
      <div className="mb-5 font-mono text-[11px] tracking-[0.16em] text-fg-mute uppercase">
        {t("contents")}
      </div>

      <ol className="flex list-none flex-col">
        {sections.map((section) => {
          const current = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={current ? "true" : undefined}
                className={`flex gap-3 border-s py-2.5 ps-4 text-[13px] transition-colors duration-300 ease-smooth ${
                  current
                    ? "border-brand text-foreground"
                    : "border-line text-fg-mute hover:text-fg-dim"
                }`}
              >
                <span className="font-mono text-[11px] tabular-nums">
                  {section.number}
                </span>
                <span className="leading-snug">{section.title}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
