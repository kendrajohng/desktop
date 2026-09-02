import { agency, bioIntro, currentProject } from "@/lib/content";

function VentureLink({ venture }: { venture: typeof agency }) {
  return (
    <a
      href={venture.url}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-[var(--color-accent)] underline-offset-2 hover:underline"
    >
      {venture.name}
    </a>
  );
}

export function BioText({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p>{bioIntro}</p>
      <p>
        I run <VentureLink venture={agency} />, {agency.description}, and
        I&apos;m building <VentureLink venture={currentProject} />,{" "}
        {currentProject.description}.
      </p>
    </div>
  );
}
