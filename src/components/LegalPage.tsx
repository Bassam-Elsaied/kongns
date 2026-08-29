import { useLocale, useTranslations } from "next-intl";
import Container from "@/components/Container";
import LegalIndex from "@/components/LegalIndex";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  getLegalDocuments,
  type LegalDocument,
} from "@/components/data/legal";
import { ARROW_NUDGE, ArrowRight } from "@/components/icons";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export default function LegalPage({ document: doc }: { document: LegalDocument }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("Legal");

  const words = doc.title.split(" ");
  const lead = words.slice(0, -1).join(" ");
  const tail = words[words.length - 1];

  const other = getLegalDocuments(locale).find((entry) => entry.slug !== doc.slug);

  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <PageHeader eyebrow={t("eyebrow")} lead={lead} tail={tail} />

        <Container>
          <div className="grid grid-cols-[260px_1fr] items-start gap-16 pb-30 max-[960px]:grid-cols-1 max-[960px]:gap-10">
            <LegalIndex sections={doc.sections} />

            <div>
              <Reveal>
                <div className="flex flex-wrap items-center gap-3 border-y border-line py-4 font-mono text-[11px] tracking-[0.12em] text-fg-mute uppercase">
                  <span>{t("lastUpdated")}</span>
                  <span aria-hidden="true">•</span>
                  <span className="text-brand-2">{doc.lastUpdated}</span>
                  <span className="ms-auto">
                    {t("sections", { count: doc.sections.length })}
                  </span>
                </div>

                <p className="mt-10 max-w-160 text-[clamp(19px,2.1vw,26px)] leading-[1.45] font-medium tracking-[-0.02em] text-foreground">
                  {doc.intro}
                </p>
              </Reveal>

              <ol className="mt-14 flex list-none flex-col">
                {doc.sections.map((section) => (
                  <li
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28 border-t border-line py-10 last:pb-0 max-[720px]:py-8"
                  >
                    <Reveal>
                      <div className="grid grid-cols-[56px_1fr] gap-4 max-[720px]:grid-cols-1 max-[720px]:gap-2">
                        <span className="pt-1 font-mono text-[11px] text-brand-2 tabular-nums">
                          {section.number}
                        </span>

                        <div>
                          <h2 className="text-[24px] leading-[1.2] font-medium tracking-[-0.02em] text-foreground">
                            {section.title}
                          </h2>
                          <p className="mt-4 max-w-160 text-[16px] leading-[1.75] text-fg-dim">
                            {section.body}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>

              {other && (
                <Reveal>
                  <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-line bg-background-2 p-8">
                    <div>
                      <div className="font-mono text-[11px] tracking-[0.16em] text-fg-mute uppercase">
                        {t("alsoRead")}
                      </div>
                      <h2 className="mt-2 text-xl font-medium tracking-[-0.02em] text-foreground">
                        {other.title}
                      </h2>
                    </div>

                    <Link
                      href={`/${other.slug}`}
                      className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm text-foreground transition-colors duration-250 ease-smooth hover:bg-foreground/4"
                    >
                      {t("read")}
                      <ArrowRight size={14} className={ARROW_NUDGE} />
                    </Link>
                  </div>
                </Reveal>
              )}

              <Reveal>
                <p className="mt-10 text-sm leading-relaxed text-fg-mute">
                  {t("questions")}{" "}
                  <a
                    href="mailto:hello@kogns.com"
                    className="latin text-fg-dim underline decoration-line underline-offset-4 transition-colors duration-250 hover:text-foreground"
                  >
                    hello@kogns.com
                  </a>
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </main>

      <SiteFooter />
    </>
  );
}
