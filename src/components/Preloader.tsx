"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

const MIN_MS = 2200;
const MAX_MS = 4800;

/**
 * Full-screen branded loader. The K mark draws in, rings orbit in the logo
 * gradient, and a progress bar waits for the intro film (or a timeout) before
 * handing off.
 */
export default function Preloader({
  mediaReady,
  onComplete,
}: {
  mediaReady: boolean;
  onComplete: () => void;
}) {
  const t = useTranslations("Intro");
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const finished = useRef(false);
  const mediaReadyRef = useRef(mediaReady);
  const onCompleteRef = useRef(onComplete);

  mediaReadyRef.current = mediaReady;
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const started = performance.now();
    let frame = 0;

    const finish = () => {
      if (finished.current) return;
      finished.current = true;
      setProgress(100);
      setLeaving(true);
      window.setTimeout(() => onCompleteRef.current(), reduce ? 0 : 420);
    };

    if (reduce) {
      finish();
      return;
    }

    const tick = (now: number) => {
      const elapsed = now - started;
      const eased = 1 - (1 - Math.min(elapsed / MIN_MS, 1)) ** 3;
      const hold = mediaReadyRef.current || elapsed >= MAX_MS;
      const next = hold
        ? Math.min(100, Math.max(eased * 100, 92))
        : Math.min(eased * 100, 92);
      setProgress(next);

      if (hold && elapsed >= MIN_MS && next >= 100) {
        finish();
        return;
      }

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={`preloader absolute inset-0 z-10 flex flex-col items-center justify-center overflow-hidden transition-opacity duration-500 ease-smooth ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{
        background:
          "radial-gradient(ellipse at center, #ffffff 42%, #ececee 100%)",
      }}
      role="status"
      aria-live="polite"
      aria-busy={!leaving}
    >
      <div className="preloader-orb preloader-orb-cyan" />
      <div className="preloader-orb preloader-orb-blue" />
      <div className="preloader-orb preloader-orb-purple" />

      <div className="relative flex flex-col items-center">
        <div className="relative flex size-44 items-center justify-center max-[520px]:size-36">
          <div className="preloader-ring preloader-ring-outer" />
          <div className="preloader-ring preloader-ring-inner" />
          <div className="preloader-glow" />

          <svg
            viewBox="55 40 300 320"
            className="relative z-10 h-[4.5rem] w-auto max-[520px]:h-14"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <linearGradient
                id="k-grad-preloader"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#a855ff" />
              </linearGradient>
            </defs>
            <g
              stroke="url(#k-grad-preloader)"
              strokeWidth="76"
              strokeLinecap="round"
              fill="none"
            >
              <line
                className="preloader-stroke preloader-stroke-1"
                x1="100"
                y1="85"
                x2="100"
                y2="315"
              />
              <line
                className="preloader-stroke preloader-stroke-2"
                x1="140"
                y1="230"
                x2="310"
                y2="85"
              />
              <line
                className="preloader-stroke preloader-stroke-3"
                x1="140"
                y1="170"
                x2="310"
                y2="315"
              />
            </g>
          </svg>
        </div>

        <div
          className="preloader-copy mt-7 flex flex-col items-center"
          dir="ltr"
        >
          <span className="latin text-[1.65rem] font-semibold tracking-[-0.04em] text-[#0b0d12]">
            KOGNS
          </span>
          <span className="latin mt-1 font-mono text-[9px] tracking-[0.28em] text-[#0b0d12]/40 uppercase">
            Engineering • Intelligence
          </span>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-12 mx-auto flex w-44 flex-col items-center gap-2.5 max-[520px]:bottom-8">
        <div className="h-px w-full overflow-hidden rounded-full bg-[#0b0d12]/10">
          <div
            className="preloader-bar h-full rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="font-mono text-[10px] tracking-[0.22em] text-[#0b0d12]/35 uppercase">
          {t("loading")}
        </span>
      </div>
    </div>
  );
}
