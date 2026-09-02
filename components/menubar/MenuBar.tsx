"use client";

import { useWindowManager } from "@/components/window/WindowManagerContext";
import { Clock } from "./Clock";
import { Weather } from "./Weather";
import { HobbiesWidget } from "./HobbiesWidget";

export function MenuBar() {
  const { closeAll } = useWindowManager();

  return (
    <div
      className="fixed inset-x-0 top-0 z-[9999] flex h-11 items-center justify-between border-b border-white/40 px-4 backdrop-blur-md"
      style={{ background: "rgba(231, 217, 247, 0.65)" }}
    >
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={closeAll}
          aria-label="Close all windows"
          className="flex h-6 w-6 items-center justify-center rounded-full font-heading text-xs font-bold text-white shadow-plum"
          style={{
            background:
              "linear-gradient(135deg, var(--color-accent), var(--color-accent-secondary))",
          }}
        >
          K
        </button>
        <Clock />
      </div>

      <div className="flex items-center gap-4">
        <Weather />
        <HobbiesWidget />
      </div>
    </div>
  );
}
