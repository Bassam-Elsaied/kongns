"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export const INTRO_STORAGE_KEY = "kogns-intro-seen";

export type IntroPhase = "preloader" | "intro" | "ready";

type IntroContextValue = {
  phase: IntroPhase;
  setPhase: (phase: IntroPhase) => void;
  markReady: () => void;
};

const IntroContext = createContext<IntroContextValue | null>(null);

/**
 * Shared gate for the first-visit sequence: branded preloader, then the intro
 * film, then the site chrome and the main hero video.
 */
export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<IntroPhase>("preloader");

  useEffect(() => {
    if (sessionStorage.getItem(INTRO_STORAGE_KEY)) {
      setPhase("ready");
    }
  }, []);

  const markReady = useCallback(() => {
    sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
    setPhase("ready");
  }, []);

  const value = useMemo(
    () => ({ phase, setPhase, markReady }),
    [phase, markReady],
  );

  return (
    <IntroContext.Provider value={value}>{children}</IntroContext.Provider>
  );
}

export function useIntro() {
  const context = useContext(IntroContext);
  if (!context) {
    throw new Error("useIntro must be used within IntroProvider");
  }
  return context;
}
