"use client";

import { useLocale, useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";
import { useIntro } from "@/components/IntroContext";
import Preloader from "@/components/Preloader";
import { ArrowRight } from "@/components/icons";

const INTRO_SRC: Record<string, string> = {
  ar: "/arintro.mp4",
  en: "/ennintro.mp4",
};
const INTRO_FALLBACK = "/enintro.mp4";

/**
 * First-visit cover: a branded preloader, then the intro film. When the film
 * ends (or is skipped) the overlay fades and the site — including the main
 * hero video — takes over.
 */
export default function IntroOverlay() {
  const t = useTranslations("Intro");
  const locale = useLocale();
  const { phase, setPhase, markReady } = useIntro();
  const [src, setSrc] = useState(() => INTRO_SRC[locale] ?? INTRO_FALLBACK);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [introReady, setIntroReady] = useState(false);
  const [sequence, setSequence] = useState(false);

  useEffect(() => {
    setSrc(INTRO_SRC[locale] ?? INTRO_FALLBACK);
    setIntroReady(false);
  }, [locale]);

  useEffect(() => {
    if (phase === "ready") return;
    setSequence(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "intro") return;
    videoRef.current?.play().catch(() => {});
  }, [phase]);

  const dismiss = useCallback(() => {
    if (phase === "ready") return;
    document.body.style.overflow = "";
    markReady();
  }, [markReady, phase]);

  const beginIntro = useCallback(() => {
    setPhase("intro");
  }, [setPhase]);

  if (phase === "ready") return null;

  return (
    <div className="on-dark fixed inset-0 z-200 bg-white">
      <video
        ref={videoRef}
        key={src}
        className={`absolute inset-0 size-full object-cover ${
          phase === "intro" ? "opacity-100" : "opacity-0"
        }`}
        src={src}
        muted
        playsInline
        preload="auto"
        onCanPlay={() => setIntroReady(true)}
        onCanPlayThrough={() => setIntroReady(true)}
        onError={() => {
          if (src !== INTRO_FALLBACK) setSrc(INTRO_FALLBACK);
        }}
        onEnded={dismiss}
        aria-label={t("label")}
        tabIndex={-1}
      />

      {sequence && phase === "preloader" && (
        <Preloader mediaReady={introReady} onComplete={beginIntro} />
      )}

      {phase === "intro" && (
        <button
          type="button"
          onClick={dismiss}
          className="absolute bottom-8 end-8 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/30 px-4 py-2.25 text-[13px] font-medium text-foreground/90 backdrop-blur-md transition-all duration-250 ease-smooth hover:-translate-y-px hover:border-white/45 hover:text-foreground"
        >
          <span>{t("skip")}</span>
          <ArrowRight size={14} className="rtl:-scale-x-100" />
        </button>
      )}
    </div>
  );
}
