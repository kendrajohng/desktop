"use client";

import { tagline } from "@/lib/content";
import { BioText } from "@/components/BioText";
import { useWindowManager } from "@/components/window/WindowManagerContext";

export function ProfileCard() {
  const { openWindow } = useWindowManager();

  return (
    <div className="flex max-w-xl items-start gap-5 text-left">
      <div
        className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full text-2xl font-heading font-bold text-white shadow-plum"
        style={{
          background:
            "linear-gradient(135deg, var(--color-accent), var(--color-accent-secondary))",
        }}
        aria-label="Headshot placeholder"
        title="Headshot placeholder — replace with a real photo"
      >
        KJ
      </div>

      <div className="flex flex-col gap-2 pt-1">
        <p className="font-heading text-sm font-bold uppercase tracking-wide">
          {tagline}
        </p>
        <BioText className="flex flex-col gap-2 text-sm leading-relaxed" />
        <button
          type="button"
          onClick={() => openWindow("about")}
          className="mt-1 w-fit font-heading text-sm font-bold uppercase tracking-wide underline decoration-2 underline-offset-4 transition-colors hover:text-[var(--color-accent)]"
        >
          More about me →
        </button>
      </div>
    </div>
  );
}
