import { experience, resumeFileUrl } from "@/lib/content";

export function ResumeWindow() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-lg font-bold">Kendra Johng</h2>
        <a
          href={resumeFileUrl}
          download
          className="rounded-full bg-[var(--color-accent)] px-4 py-1.5 text-sm font-heading font-semibold text-white transition-opacity hover:opacity-90"
        >
          Download PDF
        </a>
      </div>
      <p className="text-xs italic text-[var(--color-text-muted)]">
        Placeholder resume file — replace /public/resume-placeholder.pdf with
        Kendra&apos;s real PDF.
      </p>

      <div className="flex flex-col gap-4">
        {experience.map((job) => (
          <div key={job.company} className="border-l-2 border-[var(--color-accent-secondary)] pl-4">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="font-heading text-base font-semibold">
                {job.role}
              </h3>
              {job.period && (
                <span className="text-xs text-[var(--color-text-muted)]">
                  {job.period}
                </span>
              )}
            </div>
            <p className="text-sm font-medium text-[var(--color-text-muted)]">
              {job.company}
            </p>
            <ul className="mt-1.5 list-disc space-y-1 pl-5 text-sm">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
