"use client";

import { useTranslations } from "next-intl";
import { useRef, type MouseEvent } from "react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { ARROW_LIFT, ArrowDiagonal } from "@/components/icons";
import { Link } from "@/i18n/navigation";

const BUTTON_BASE =
  "group inline-flex items-center gap-2.5 rounded-full border px-[22px] py-3.5 text-sm font-medium tracking-[-0.01em] transition-all duration-250 ease-smooth";

export default function FinalCta() {
  const t = useTranslations("Cta");
  const sectionRef = useRef<HTMLElement>(null);

  function trackPointer(event: MouseEvent<HTMLElement>) {
    const node = sectionRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    node.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={trackPointer}
      className="relative overflow-hidden py-40 text-center max-[720px]:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(124,58,237,0.08), transparent 40%)",
        }}
      />

      <Container className="relative z-2">
        <Reveal>
          <div className="font-mono text-[11px] font-medium tracking-[0.16em] text-fg-mute uppercase">
            <span className="me-2 inline-block size-1.5 rounded-full bg-brand align-middle shadow-[0_0_12px_var(--brand)]" />
            {t("eyebrow")}
          </div>

          <h2 className="mx-auto mt-6 max-w-[16ch] text-[clamp(44px,7.5vw,128px)] leading-[0.95] font-medium tracking-tighter">
            {t("title")}
          </h2>

          <p className="mx-auto mt-7 max-w-140 text-lg leading-[1.55] text-fg-dim">
            {t("subtitle")}
          </p>
        </Reveal>

        <Reveal delay={2}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className={`${BUTTON_BASE} border-transparent bg-foreground text-background hover:-translate-y-px hover:opacity-90`}
            >
              {t("action")}
              <ArrowDiagonal className={ARROW_LIFT} />
            </Link>
            <a
              href="mailto:hello@kogns.com"
              className={`latin ${BUTTON_BASE} border-line-strong text-foreground hover:border-foreground/30 hover:bg-foreground/4`}
            >
              {t("email")}
              <ArrowDiagonal className={ARROW_LIFT} />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
