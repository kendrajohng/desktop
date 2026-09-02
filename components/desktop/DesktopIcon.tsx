"use client";

import { WindowId } from "@/lib/windowIds";
import { useWindowManager } from "@/components/window/WindowManagerContext";
import { useIsMobile } from "@/lib/useIsMobile";

type DesktopIconProps = {
  id: WindowId;
  label: string;
  caption: string;
  glyph: React.ReactNode;
};

export function DesktopIcon({ id, label, caption, glyph }: DesktopIconProps) {
  const { openWindow } = useWindowManager();
  const isMobile = useIsMobile();

  const open = () => openWindow(id);

  return (
    <button
      type="button"
      onDoubleClick={!isMobile ? open : undefined}
      onClick={isMobile ? open : undefined}
      onKeyDown={(e) => {
        if (e.key === "Enter") open();
      }}
      className="flex w-24 flex-col items-center gap-1.5 rounded-lg p-2 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
    >
      {glyph}
      <span className="font-heading text-sm font-semibold text-[var(--color-text)]">
        {label}
      </span>
      <span className="font-body text-xs italic text-[var(--color-text-muted)]">
        {caption}
      </span>
    </button>
  );
}
