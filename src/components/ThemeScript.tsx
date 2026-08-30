"use client";

import { useEffect, useLayoutEffect, useSyncExternalStore } from "react";

export const THEME_STORAGE_KEY = "kogns-theme";

const THEME_INIT = `(function(){try{var t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

const subscribe = () => () => {};

/** `useLayoutEffect` warns when it runs during SSR, where it is a no-op anyway. */
const useBeforePaint =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

/** Mirrors the logic inlined in `THEME_INIT`; keep the two in sync. */
function applyStoredTheme() {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    const dark = stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", dark);
  } catch {
    // Ignore storage failures (private mode, disabled cookies, etc.).
  }
}

/**
 * Blocking theme init. Emitted only on the server (and the matching hydration
 * pass) so React 19 does not warn about client-created `<script>` tags. The
 * IIFE has already run by the first client commit.
 */
export default function ThemeScript() {
  const isServer = useSyncExternalStore(subscribe, () => false, () => true);

  // Switching locale is a client-side navigation that swaps the `[locale]`
  // root layout, so React re-applies the `<html>` class list from JSX and
  // drops the class the init script added. Restore it before the next paint.
  useBeforePaint(applyStoredTheme, []);

  if (!isServer) return null;

  return (
    <script
      // Applies the saved (or system) theme before content paints to avoid a flash.
      dangerouslySetInnerHTML={{ __html: THEME_INIT }}
    />
  );
}
