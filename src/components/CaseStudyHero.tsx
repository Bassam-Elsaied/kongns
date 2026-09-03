import { useTranslations } from "next-intl";
import type { ReactNode } from "react";
import Container from "@/components/Container";
import type { Project } from "@/components/data/projects";

const EYEBROW =
  "font-mono text-[11px] font-medium tracking-[0.16em] text-fg-mute uppercase";

function Fact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <span className={EYEBROW}>{label}</span>
      <span className="text-[14px] leading-[1.5]">{children}</span>
    </div>
  );
}

export default function CaseStudyHero({ project }: { project: Project }) {
  const t = useTranslations("CaseStudy");

  return (
    <section className="relative overflow-hidden bg-background-2 pt-50 pb-20 max-[720px]:pt-36">
      <Container className="relative z-1">
        <div className="mb-6 flex justify-between gap-4">
          <span className={EYEBROW}>
            <span className="me-2 inline-block size-1.5 rounded-full bg-brand align-middle shadow-[0_0_12px_var(--brand)]" />
            {t("eyebrow")}
          </span>
          <span className={`${EYEBROW} text-end`}>{project.sector}</span>
        </div>

        <h1 className="text-[clamp(32px,5vw,52px)] leading-[1.15] font-medium tracking-[-0.03em]">
          {project.name}
        </h1>

        <p className="mt-5 max-w-180 text-[15px] leading-[1.7] text-fg-dim">
          {project.summary}
        </p>

        <div className="mt-16 grid grid-cols-4 gap-6 border-y border-line py-8 max-[700px]:grid-cols-2">
          <Fact label={t("discipline")}>{project.discipline}</Fact>
          <Fact label={t("sector")}>{project.sector}</Fact>
          {project.stats.map((stat) => (
            <Fact key={stat.label} label={stat.label}>
              <span className="text-brand-2">{stat.value}</span>
            </Fact>
          ))}
        </div>
      </Container>
    </section>
  );
}
