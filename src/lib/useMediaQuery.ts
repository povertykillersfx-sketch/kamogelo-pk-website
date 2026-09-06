"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * SSR-safe media query hook. The server snapshot is always `false`, so the
 * mobile-first markup is what gets rendered and hydrated; desktop layouts
 * swap in on the first client commit.
 */
export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}
