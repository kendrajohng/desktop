import { basedIn, interests, socialLinks, tagline } from "@/lib/content";
import { BioText } from "@/components/BioText";
import { Headshot } from "@/components/Headshot";

export function AboutMeWindow() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <Headshot size={96} />

      <div>
        <h2 className="font-heading text-xl font-bold">Kendra Johng</h2>
        <p className="text-sm text-[var(--color-text-muted)]">{tagline}</p>
      </div>

      <BioText className="flex max-w-sm flex-col gap-3 text-sm leading-relaxed" />

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
        LinkedIn, GitHub, Instagram, and Email are still placeholder URLs —
        swap in real links in lib/content.ts.
      </p>
    </div>
  );
}
