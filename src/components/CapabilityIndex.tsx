"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

/** Sticky index that tracks which capability section is in view. */
export default function CapabilityIndex({
  capabilities,
}: {
  capabilities: { slug: string; title: string }[];
}) {
  const t = useTranslations("Solutions");
  const [active, setActive] = useState(capabilities[0].slug);

  useEffect(() => {
    const sections = capabilities
      .map((capability) => document.getElementById(capability.slug))
      .filter((node): node is HTMLElement => node !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-140px 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [capabilities]);

  return (
    <nav aria-label={t("contents")} className="sticky top-28 max-[960px]:hidden">
      <div className="mb-5 font-mono text-[11px] tracking-[0.16em] text-fg-mute uppercase">
        {t("contents")}
      </div>

      <ul className="flex list-none flex-col">
        {capabilities.map((capability, index) => {
          const current = active === capability.slug;
          return (
            <li key={capability.slug}>
              <a
                href={`#${capability.slug}`}
                aria-current={current ? "true" : undefined}
                className={`group flex gap-3 border-s py-3 ps-4 text-sm transition-colors duration-300 ease-smooth ${
                  current
                    ? "border-brand text-foreground"
                    : "border-line text-fg-mute hover:text-fg-dim"
                }`}
              >
                <span className="font-mono text-[11px] tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="leading-snug">{capability.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
