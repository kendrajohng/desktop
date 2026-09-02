"use client";

import { useSyncExternalStore } from "react";

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function subscribe(callback: () => void) {
  const interval = setInterval(callback, 1000 * 15);
  return () => clearInterval(interval);
}

function getSnapshot() {
  return formatTime(new Date());
}

function getServerSnapshot() {
  return "";
}

export function Clock() {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <span className="font-heading text-sm font-medium tabular-nums">
      {time}
    </span>
  );
}
