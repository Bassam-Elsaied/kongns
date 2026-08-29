import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import CapabilityIndex from "@/components/CapabilityIndex";
import Container from "@/components/Container";
import FinalCta from "@/components/FinalCta";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  getCapabilities,
  projectsForCapability,
} from "@/components/data/capabilities";
import { ARROW_NUDGE_SM, ArrowRight } from "@/components/icons";
import { Link } from "@/i18n/navigation";
import { toLocale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/solutions">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Solutions" });

  return {
    title: `${t("titleLead")} ${t("titleTail")} | KOGNS`,
    description: t("subtitle"),
  };
}

export default async function SolutionsPage({
  params,
}: PageProps<"/[locale]/solutions">) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Solutions");
  const capabilities = getCapabilities(toLocale(locale));

  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <PageHeader
          eyebrow={t("eyebrow")}
          lead={t("titleLead")}
          tail={t("titleTail")}
          subtitle={t("subtitle")}
        />

        <Container>
          <div className="grid grid-cols-[260px_1fr] items-start gap-16 pb-30 max-[960px]:grid-cols-1 max-[960px]:gap-0">
            <CapabilityIndex
              capabilities={capabilities.map(({ slug, title }) => ({
                slug,
                title,
              }))}
            />

            <div className="flex flex-col">
              {capabilities.map((capability, index) => {
                const related = projectsForCapability(
                  toLocale(locale),
                  capability.slug,
                );

                return (
                  <section
                    key={capability.slug}
                    id={capability.slug}
                    className="scroll-mt-28 border-t border-line py-16 first:border-t-0 first:pt-0 max-[720px]:py-12"
                  >
                    <Reveal>
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-[11px] tracking-[0.16em] text-brand-2 tabular-nums">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="h-px flex-1 bg-line" />
                        {related.length > 0 && (
                          <span className="font-mono text-[11px] tracking-[0.16em] text-fg-mute uppercase">
                            {t("count", { count: related.length })}
                          </span>
                        )}
                      </div>

                      <h2 className="mt-6 text-[clamp(30px,3.6vw,52px)] leading-[1.02] font-medium tracking-[-0.035em]">
                        {capability.title}
                      </h2>
                      <p className="mt-6 max-w-160 text-[17px] leading-[1.7] text-fg-dim">
                        {capability.description}
                      </p>
                    </Reveal>

                    <div className="mt-8 font-mono text-[11px] tracking-[0.16em] text-fg-mute uppercase">
                      {t("coreHeading")}
                    </div>

                    <ul className="mt-4 grid list-none grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line max-[640px]:grid-cols-1">
                      {capability.items.map((item, itemIndex) => (
                        <li
                          key={item.title}
                          className="group flex flex-col gap-2 bg-background-2 p-6 transition-colors duration-300 ease-smooth hover:bg-surface-2"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="size-1 rounded-full bg-brand transition-shadow duration-300 group-hover:shadow-[0_0_10px_var(--brand)]" />
                            <h3 className="text-[15px] font-medium text-foreground">
                              {item.title}
                            </h3>
                            <span className="ms-auto font-mono text-[10px] text-fg-mute tabular-nums">
                              {String(itemIndex + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <p className="text-sm leading-relaxed text-fg-dim">
                            {item.description}
                          </p>
                        </li>
                      ))}
                    </ul>

                    {related.length > 0 && (
                      <div className="mt-8">
                        <div className="mb-4 font-mono text-[11px] tracking-[0.16em] text-fg-mute uppercase">
                          {t("deliveredIn")}
                        </div>
                        <ul className="flex list-none flex-wrap gap-2">
                          {related.map((project) => (
                            <li key={project.slug}>
                              <Link
                                href={`/work/${project.slug}`}
                                className="group flex items-center gap-2.5 rounded-full border border-line py-1.5 pe-4 ps-1.5 text-[13px] text-fg-dim transition-all duration-250 ease-smooth hover:border-line-strong hover:text-foreground"
                              >
                                <span
                                  className="relative size-6 shrink-0 overflow-hidden rounded-full"
                                  style={{ background: project.tint }}
                                >
                                  <Image
                                    src={project.cover}
                                    alt=""
                                    fill
                                    sizes="24px"
                                    className="object-cover object-top"
                                  />
                                </span>
                                {project.name}
                                <ArrowRight
                                  size={12}
                                  className={`text-fg-mute group-hover:text-foreground ${ARROW_NUDGE_SM}`}
                                />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </section>
                );
              })}
            </div>
          </div>
        </Container>

        <FinalCta />
      </main>

      <SiteFooter />
    </>
  );
}
