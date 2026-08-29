import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Container from "@/components/Container";
import FinalCta from "@/components/FinalCta";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getCapabilities } from "@/components/data/capabilities";
import { getCompany } from "@/components/data/company";
import { getProjects } from "@/components/data/projects";
import { ARROW_NUDGE, ArrowRight } from "@/components/icons";
import { Link } from "@/i18n/navigation";
import { toLocale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/company">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Company" });

  return {
    title: `${t("titleLead")} ${t("titleTail")} | KOGNS`,
    description: getCompany(toLocale(locale)).intro,
  };
}

const SECTION_LABEL =
  "font-mono text-[11px] tracking-[0.16em] text-fg-mute uppercase";

const SECTION_TITLE =
  "text-[clamp(30px,4vw,56px)] leading-none font-medium tracking-[-0.035em]";

export default async function CompanyPage({
  params,
}: PageProps<"/[locale]/company">) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Company");
  const company = getCompany(toLocale(locale));
  const projects = getProjects(toLocale(locale));

  // Counts are derived from the case study data rather than stated on the source site.
  const figures = [
    { value: projects.length, label: t("platforms") },
    {
      value: getCapabilities(toLocale(locale)).length,
      label: t("disciplines"),
    },
    {
      value: new Set(projects.map((project) => project.sector)).size,
      label: t("industries"),
    },
  ];

  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <PageHeader
          eyebrow={t("eyebrow")}
          lead={t("titleLead")}
          tail={t("titleTail")}
        />

        <Container>
          <Reveal>
            <p className="max-w-[24ch] text-[clamp(24px,3.2vw,44px)] leading-[1.2] font-medium tracking-[-0.03em] text-foreground max-[720px]:max-w-none">
              {company.intro}
            </p>
          </Reveal>

          <Reveal>
            <dl className="mt-16 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line max-[640px]:grid-cols-1">
              {figures.map((figure) => (
                <div
                  key={figure.label}
                  className="flex flex-col gap-1 bg-background-2 px-7 py-8"
                >
                  <dt className={SECTION_LABEL}>{figure.label}</dt>
                  <dd className="latin font-serif text-[clamp(40px,5vw,64px)] leading-none text-brand-2 italic">
                    {figure.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>

        <section className="py-28 max-[720px]:py-16">
          <Container>
            <Reveal>
              <div className="flex items-baseline gap-5">
                <h2 className={SECTION_TITLE}>{t("philosophy")}</h2>
                <span className="h-px flex-1 bg-line" />
                <span className={SECTION_LABEL}>
                  {String(company.philosophy.length).padStart(2, "0")}
                </span>
              </div>
            </Reveal>

            <ul className="mt-12 grid list-none grid-cols-2 gap-x-16 gap-y-14 max-[800px]:grid-cols-1 max-[800px]:gap-y-10">
              {company.philosophy.map((principle, index) => (
                <li key={principle.title}>
                  <Reveal>
                    <div className="group border-t border-line pt-6 transition-colors duration-350 ease-smooth hover:border-line-strong">
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-[11px] text-brand-2 tabular-nums">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-2xl font-medium tracking-[-0.02em] text-foreground">
                          {principle.title}
                        </h3>
                      </div>
                      <p className="mt-4 text-[16px] leading-[1.7] text-fg-dim">
                        {principle.description}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section className="pb-28 max-[720px]:pb-16">
          <Container>
            <Reveal>
              <div className="flex items-baseline gap-5">
                <h2 className={SECTION_TITLE}>{t("process")}</h2>
                <span className="h-px flex-1 bg-line" />
                <span className={SECTION_LABEL}>
                  {String(company.process.length).padStart(2, "0")}
                </span>
              </div>
            </Reveal>

            <ol className="relative mt-14 flex list-none flex-col gap-12 before:absolute before:inset-y-2 before:start-[5px] before:w-px before:bg-line max-[720px]:before:hidden">
              {company.process.map((step) => (
                <li key={step.step}>
                  <Reveal>
                    <div className="grid grid-cols-[auto_220px_1fr] items-start gap-8 max-[720px]:grid-cols-1 max-[720px]:gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 size-[11px] shrink-0 rounded-full border-2 border-brand bg-background shadow-[0_0_14px_rgba(34,211,238,0.5)] max-[720px]:hidden"
                      />
                      <div>
                        <div className="font-mono text-[11px] tracking-[0.16em] text-brand-2">
                          {step.step}
                        </div>
                        <h3 className="mt-2 text-xl leading-snug font-medium tracking-[-0.015em] text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="max-w-160 text-[16px] leading-[1.75] text-fg-dim">
                        {step.description}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section className="pb-28 max-[720px]:pb-16">
          <Container>
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-line bg-background-2 p-14 max-[720px]:p-8">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-32 -end-20 size-96 rounded-full bg-brand/10 blur-3xl"
                />

                <div className="relative grid grid-cols-[1fr_auto] items-end gap-10 max-[800px]:grid-cols-1 max-[800px]:items-start">
                  <div>
                    <span className={SECTION_LABEL}>{t("careers")}</span>
                    <h2 className="mt-4 max-w-[16ch] text-[clamp(28px,3.6vw,48px)] leading-[1.05] font-medium tracking-[-0.03em]">
                      {company.careers.title}
                    </h2>
                    <p className="mt-5 max-w-140 text-[16px] leading-[1.7] text-fg-dim">
                      {company.careers.description}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform duration-250 ease-smooth hover:-translate-y-0.5"
                  >
                    {company.careers.cta}
                    <ArrowRight size={14} className={ARROW_NUDGE} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <FinalCta />
      </main>

      <SiteFooter />
    </>
  );
}
