import { basedIn, bio, interests, socialLinks, tagline } from "@/lib/content";

export function AboutMeWindow() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div
        className="flex h-24 w-24 items-center justify-center rounded-full text-2xl font-heading font-bold text-white shadow-plum"
        style={{
          background:
            "linear-gradient(135deg, var(--color-accent), var(--color-accent-secondary))",
        }}
        aria-label="Headshot placeholder"
        title="Headshot placeholder — replace with a real photo"
      >
        KJ
      </div>

      <div>
        <h2 className="font-heading text-xl font-bold">Kendra Johng</h2>
        <p className="text-sm text-[var(--color-text-muted)]">{tagline}</p>
      </div>

      <p className="max-w-sm text-sm leading-relaxed">{bio}</p>

      <div className="flex flex-wrap justify-center gap-2">
        {interests.map((interest) => (
          <span
            key={interest}
            className="rounded-full bg-white/60 px-3 py-1 text-xs font-medium"
          >
            {interest}
          </span>
        ))}
      </div>

      <p className="text-xs italic text-[var(--color-text-muted)]">
        Based in {basedIn}
      </p>

      <div className="flex flex-wrap justify-center gap-3 border-t border-black/5 pt-4">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-heading font-semibold text-[var(--color-accent)] underline-offset-2 hover:underline"
          >
            {link.label}
          </a>
        ))}
      </div>
      <p className="text-xs italic text-[var(--color-text-muted)]">
        Social links are placeholders — swap in real URLs in lib/content.ts.
      </p>
    </div>
  );
}
