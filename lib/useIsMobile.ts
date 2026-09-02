"use client";

import { useSyncExternalStore } from "react";

const BREAKPOINT = "(max-width: 767px)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(BREAKPOINT);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(BREAKPOINT).matches;
}

function getServerSnapshot() {
  return false;
}

export function useIsMobile() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
