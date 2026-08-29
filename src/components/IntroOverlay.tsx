"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "@/components/icons";

// Marks the intro as watched for the rest of the browsing session, so it plays
// only on the first entry and not on every internal navigation or reload.
const STORAGE_KEY = "kogns-intro-seen";
const FADE_MS = 700;

/**
 * Full-screen intro film shown on the first entry to the site. The video plays
 * once, then fades away to reveal the site underneath — a Skip control lets
 * visitors dismiss it immediately.
 */
export default function IntroOverlay() {
  const t = useTranslations("Intro");
  const videoRef = useRef<HTMLVideoElement>(null);
  // Rendered by default so first-time visitors never see the site flash before
  // the intro covers it; returning visitors are hidden in the mount effect.
  const [present, setPresent] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) {
      setPresent(false);
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const dismiss = () => {
    if (leaving) return;
    sessionStorage.setItem(STORAGE_KEY, "1");
    document.body.style.overflow = "";
    setLeaving(true);
    window.setTimeout(() => setPresent(false), FADE_MS);
  };

  if (!present) return null;

  return (
    <div
      className={`on-dark fixed inset-0 z-200 bg-background transition-opacity ease-smooth ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover"
        src="/enintro.mp4"
        poster="/enintro-poster.webp"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={dismiss}
        aria-label={t("label")}
        tabIndex={-1}
      />

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/25" />

      <button
        type="button"
        onClick={dismiss}
        className="absolute bottom-8 end-8 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/30 px-4 py-2.25 text-[13px] font-medium text-foreground/90 backdrop-blur-md transition-all duration-250 ease-smooth hover:-translate-y-px hover:border-white/45 hover:text-foreground"
      >
        <span>{t("skip")}</span>
        <ArrowRight size={14} className="rtl:-scale-x-100" />
      </button>
    </div>
  );
}
