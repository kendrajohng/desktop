import { substackUrl } from "@/lib/content";

export function SubstackWindow() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-heading text-lg font-bold">Notes &amp; essays</h2>
      <p className="text-sm">
        Kendra writes about technical writing, documentation craft, and
        whatever else is on her mind, over on Substack.
      </p>
      <a
        href={substackUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-heading font-semibold text-white transition-opacity hover:opacity-90"
      >
        Read on Substack →
      </a>
      <p className="text-xs italic text-[var(--color-text-muted)]">
        Placeholder link — once you share your publication URL, this can also
        embed a couple of recent posts inline.
      </p>
    </div>
  );
}
