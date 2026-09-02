import { hobbies } from "@/lib/content";

const GLYPHS: Record<(typeof hobbies)[number]["glyph"], string> = {
  skateboard: "🛹",
  thread: "🧵",
  pencil: "✏️",
  piano: "🎹",
};

export function HobbiesWidget() {
  return (
    <div className="flex items-center gap-2.5" aria-label="Currently into">
      {hobbies.map((hobby) => (
        <span
          key={hobby.label}
          title={hobby.label}
          className="flex items-center gap-1 text-sm"
        >
          <span aria-hidden>{GLYPHS[hobby.glyph]}</span>
          <span className="hidden md:inline text-xs text-[var(--color-text-muted)]">
            {hobby.label}
          </span>
        </span>
      ))}
    </div>
  );
}
