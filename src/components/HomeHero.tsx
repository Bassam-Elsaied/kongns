"use client";

import { useEffect, useRef } from "react";

/**
 * Full-viewport intro film. Muted and inline so browsers allow autoplay, but it
 * only starts once the hero actually scrolls into view (and pauses when it
 * leaves) to avoid playing off-screen.
 */
export default function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative h-svh w-full overflow-hidden bg-background">
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover"
        src="enintro.mp4"
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      />

      {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/50 to-transparent" /> */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/50 to-transparent" />
    </section>
  );
}
