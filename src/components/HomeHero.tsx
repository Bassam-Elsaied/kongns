"use client";

import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { useIntro } from "@/components/IntroContext";

const RESTART_DELAY_MS = 15000;
const MOBILE_QUERY = "(max-width: 980px)";
const MOBILE_SRC: Record<string, string> = {
  ar: "/armobilemain.mp4",
  en: "/enmobilemain.mp4",
};

const DESKTOP_SRC: Record<string, string> = {
  ar: "/armain.mp4",
  en: "/main.mp4",
};

/**
 * Full-viewport main film. Each locale has a desktop cut and a portrait cut.
 * After the clip ends, the last frame holds for fifteen seconds before it
 * plays again.
 */
export default function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const restartTimer = useRef(0);
  const { phase } = useIntro();
  const locale = useLocale();
  const [mobile, setMobile] = useState(false);

  const src = mobile
    ? (MOBILE_SRC[locale] ?? "/main.mp4")
    : (DESKTOP_SRC[locale] ?? "/main.mp4");

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    const sync = () => setMobile(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || phase !== "ready") return;

    window.clearTimeout(restartTimer.current);
    video.play().catch(() => {});

    return () => {
      window.clearTimeout(restartTimer.current);
    };
  }, [phase, src]);

  function replayAfterPause() {
    const video = videoRef.current;
    if (!video) return;

    window.clearTimeout(restartTimer.current);
    restartTimer.current = window.setTimeout(() => {
      video.currentTime = 0;
      video.play().catch(() => {});
    }, RESTART_DELAY_MS);
  }

  return (
    <section className="relative h-svh w-full overflow-hidden bg-background">
      <video
        ref={videoRef}
        key={src}
        className="absolute inset-0 size-full object-cover"
        src={src}
        muted
        playsInline
        preload="auto"
        onEnded={replayAfterPause}
        aria-hidden="true"
        tabIndex={-1}
      />
    </section>
  );
}
