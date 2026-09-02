import { notAiItems } from "@/lib/content";

export function NotAiWindow() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Proof of human-made, non-AI creative work: skate clips and original
        art.
      </p>
      <div className="grid grid-cols-2 gap-3">
        {notAiItems.map((item, i) => (
          <div
            key={item.title + i}
            className="flex aspect-square flex-col items-center justify-center gap-2 rounded-xl bg-white/60 p-3 text-center"
          >
            <span className="text-2xl">{item.kind === "video" ? "🛹" : "🎨"}</span>
            <span className="text-xs font-medium text-[var(--color-text-muted)]">
              {item.title}
            </span>
          </div>
        ))}
      </div>
      <p className="text-xs italic text-[var(--color-text-muted)]">
        Sample layout — replace with real video embeds / art images in
        lib/content.ts once Kendra shares the media.
      </p>
    </div>
  );
}
