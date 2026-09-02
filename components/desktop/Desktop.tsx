"use client";

import { DesktopIcon } from "./DesktopIcon";
import { ProfileCard } from "./ProfileCard";
import { ResumeIcon } from "./icons/ResumeIcon";
import { ProjectsIcon } from "./icons/ProjectsIcon";
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
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-10 px-6 pt-14">
        <ProfileCard />
        <div className="flex flex-wrap justify-center gap-6">
          {ICONS.map((icon) => (
            <DesktopIcon key={icon.id} {...icon} />
          ))}
        </div>
      </div>

      <Window
        id="resume"
        title="Resume"
        defaultPosition={{ x: 300, y: 460 }}
        defaultSize={{ width: 560, height: 420 }}
      >
        <ResumeWindow />
      </Window>
      <Window
        id="projects"
        title="Projects"
        defaultPosition={{ x: 360, y: 490 }}
        defaultSize={{ width: 600, height: 420 }}
      >
        <ProjectsWindow />
      </Window>
      <Window
        id="about"
        title="About Me"
        defaultPosition={{ x: 420, y: 470 }}
        defaultSize={{ width: 480, height: 420 }}
      >
        <AboutMeWindow />
      </Window>
      <Window
        id="substack"
        title="Substack"
        defaultPosition={{ x: 340, y: 510 }}
        defaultSize={{ width: 480, height: 360 }}
      >
        <SubstackWindow />
      </Window>
      <Window
        id="notai"
        title="Not AI"
        defaultPosition={{ x: 400, y: 500 }}
        defaultSize={{ width: 560, height: 400 }}
      >
        <NotAiWindow />
      </Window>
    </div>
  );
}
