"use client";

import { DesktopIcon } from "./DesktopIcon";
import { ResumeIcon } from "./icons/ResumeIcon";
import { ProjectsIcon } from "./icons/ProjectsIcon";
import { AboutIcon } from "./icons/AboutIcon";
import { SubstackIcon } from "./icons/SubstackIcon";
import { NotAiIcon } from "./icons/NotAiIcon";
import { Window } from "@/components/window/Window";
import { ResumeWindow } from "@/components/windows/ResumeWindow";
import { ProjectsWindow } from "@/components/windows/ProjectsWindow";
import { AboutMeWindow } from "@/components/windows/AboutMeWindow";
import { SubstackWindow } from "@/components/windows/SubstackWindow";
import { NotAiWindow } from "@/components/windows/NotAiWindow";

const ICONS = [
  {
    id: "resume" as const,
    label: "Resume",
    caption: "pdf · updated 2026",
    glyph: <ResumeIcon />,
  },
  {
    id: "projects" as const,
    label: "Projects",
    caption: "writing samples · case studies",
    glyph: <ProjectsIcon />,
  },
  {
    id: "about" as const,
    label: "About Me",
    caption: "the basics",
    glyph: <AboutIcon />,
  },
  {
    id: "substack" as const,
    label: "Substack",
    caption: "notes & essays",
    glyph: <SubstackIcon />,
  },
  {
    id: "notai" as const,
    label: "Not AI",
    caption: "skate clips · original art",
    glyph: <NotAiIcon />,
  },
];

export function Desktop() {
  return (
    <div
      className="relative h-screen w-full overflow-hidden pt-11"
      style={{
        background:
          "linear-gradient(135deg, var(--color-wallpaper-start), var(--color-wallpaper-end))",
      }}
    >
      <div className="flex w-28 flex-col items-center gap-4 p-4">
        {ICONS.map((icon) => (
          <DesktopIcon key={icon.id} {...icon} />
        ))}
      </div>

      <Window
        id="resume"
        title="Resume"
        defaultPosition={{ x: 360, y: 90 }}
        defaultSize={{ width: 560, height: 520 }}
      >
        <ResumeWindow />
      </Window>
      <Window
        id="projects"
        title="Projects"
        defaultPosition={{ x: 420, y: 130 }}
        defaultSize={{ width: 600, height: 520 }}
      >
        <ProjectsWindow />
      </Window>
      <Window
        id="about"
        title="About Me"
        defaultPosition={{ x: 480, y: 100 }}
        defaultSize={{ width: 480, height: 560 }}
      >
        <AboutMeWindow />
      </Window>
      <Window
        id="substack"
        title="Substack"
        defaultPosition={{ x: 400, y: 160 }}
        defaultSize={{ width: 480, height: 400 }}
      >
        <SubstackWindow />
      </Window>
      <Window
        id="notai"
        title="Not AI"
        defaultPosition={{ x: 460, y: 140 }}
        defaultSize={{ width: 560, height: 480 }}
      >
        <NotAiWindow />
      </Window>
    </div>
  );
}
