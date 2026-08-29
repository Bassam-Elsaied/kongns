"use client";

import { useSyncExternalStore } from "react";

export const THEME_STORAGE_KEY = "kogns-theme";

const THEME_INIT = `(function(){try{var t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

const subscribe = () => () => {};

/**
 * Blocking theme init. Emitted only on the server (and the matching hydration
 * pass) so React 19 does not warn about client-created `<script>` tags. The
 * IIFE has already run by the first client commit.
 */
export default function ThemeScript() {
  const isServer = useSyncExternalStore(subscribe, () => false, () => true);
  if (!isServer) return null;

  return (
    <script
      // Applies the saved (or system) theme before content paints to avoid a flash.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: THEME_INIT }}
    />
  );
}
