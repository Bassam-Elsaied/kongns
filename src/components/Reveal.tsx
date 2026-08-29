"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const DELAY_MS = [0, 80, 160, 240, 320];

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-in={shown}
      style={{ transitionDelay: `${DELAY_MS[delay]}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}
