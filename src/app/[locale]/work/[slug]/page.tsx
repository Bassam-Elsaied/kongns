import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import BookingSection from "@/components/BookingSection";
import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudySidebar from "@/components/CaseStudySidebar";
import Container from "@/components/Container";
import ScreenFrame from "@/components/ScreenFrame";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getProject, getProjects } from "@/components/data/projects";
import { routing, toLocale } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getProjects(locale).map((project) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/work/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(toLocale(locale), slug);

  if (!project) return { title: "Not found | KOGNS" };

  return { title: `${project.name} | KOGNS`, description: project.summary };
}

const SECTION_HEADING =
  "text-[32px] leading-[1.1] font-medium tracking-[-0.02em] text-foreground";

export default async function CaseStudyPage({
  params,
}: PageProps<"/[locale]/work/[slug]">) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProject(toLocale(locale), slug);
  if (!project) notFound();

  const t = await getTranslations("CaseStudy");

  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <article>
          <CaseStudyHero project={project} />

          <Container>
            <figure className="relative z-2 -mt-10 aspect-16/10 overflow-hidden rounded-[18px] border border-line">
              <ScreenFrame
                src={project.cover}
                alt={project.name}
                tint={project.tint}
                sizes="(max-width: 1440px) 100vw, 1376px"
                priority
              />
            </figure>

            <div className="grid grid-cols-[1fr_360px] items-start gap-16 py-20 max-[960px]:grid-cols-1 max-[960px]:gap-10 max-[720px]:py-12">
              <div className="text-[17px] leading-[1.7] text-fg-dim">
                <h2 className={SECTION_HEADING}>{t("challenge")}</h2>
                <p className="mt-[1.2em]">{project.challenge}</p>

                <h2 className={`${SECTION_HEADING} mt-[2em]`}>{t("inside")}</h2>

                <figure className="relative mt-8 aspect-16/9 overflow-hidden rounded-[18px] border border-line">
                  <ScreenFrame
                    src={project.interfaceImage}
                    alt={project.name}
                    tint={project.tint}
                    sizes="(max-width: 960px) 100vw, 700px"
                  />
                </figure>

                <ol className="mt-12 flex list-none flex-col gap-14">
                  {project.features.map((feature, index) => (
                    <li key={feature.title}>
                      <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.16em] text-brand-2 uppercase">
                        <span className="h-px w-8 bg-brand/50" />
                        {String(index + 1).padStart(2, "0")} — {feature.key}
                      </div>

                      <h3 className="mt-4 text-2xl leading-[1.15] font-medium tracking-[-0.02em] text-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-3">{feature.description}</p>

                      <figure className="relative mt-6 aspect-16/10 overflow-hidden rounded-[14px] border border-line">
                        <ScreenFrame
                          src={feature.image}
                          alt={feature.title}
                          tint={project.tint}
                          sizes="(max-width: 960px) 100vw, 700px"
                          compact
                        />
                      </figure>
                    </li>
                  ))}
                </ol>

                <h2 className={`${SECTION_HEADING} mt-[2em]`}>
                  {t("solution")}
                </h2>
                <p className="mt-[1.2em]">{project.solution}</p>
              </div>

              <CaseStudySidebar project={project} />
            </div>
          </Container>

          <BookingSection />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
