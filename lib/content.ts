// Real content pulled from PRD.md. Anything marked TODO/PLACEHOLDER below is a
// stand-in — see README.md "Placeholder checklist" for the full list of what
// Kendra needs to supply before launch.

export const tagline = "Technical Writer";

export const bioIntro =
  "I help businesses achieve operational efficiency through effective documentation.";

export type Venture = {
  name: string;
  url: string;
  description: string;
};

export const agency: Venture = {
  name: "thewritingstudio.io",
  url: "https://thewritingstudio.io",
  description: "a technical writing agency",
};

// PLACEHOLDER URL — add the real link once Write Good is live.
export const currentProject: Venture = {
  name: "Write Good",
  url: "#",
  description: "a technical writing brief generator web app",
};

export const basedIn = "Salt Lake City, Utah"; // PLACEHOLDER: confirm city to show publicly

export const interests = [
  "Skateboarding",
  "Art",
  "Sewing",
  "Drawing",
  "Piano",
];

export type Job = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    company: "Vector Resources, Inc.",
    role: "Technical Proposal Writer",
    period: "Current",
    bullets: [
      "Writes technical proposals for U.S. Government solicitations.",
      "Handles marketing materials and document administration.",
    ],
  },
  {
    company: "Kentik",
    role: "Senior Technical Writer",
    period: "",
    bullets: [
      "Release notes, system overviews, and instructional documentation.",
      "Portal structure articles.",
    ],
  },
  {
    company: "U.S. EPA (via Systalex)",
    role: "Technical Writer",
    period: "2021–2025",
    bullets: [
      "Public documents including release notes, CONOPS, and regulatory guidance.",
    ],
  },
];

export type WorkSample = {
  client: string;
  description: string;
};

export const workSamples: WorkSample[] = [
  { client: "NuWave Laser", description: "User manuals" },
  {
    client: "Pharmacy / Phlebotomy",
    description: "Standard operating procedures (SOPs)",
  },
  { client: "SharePoint", description: "Standard operating procedures (SOPs)" },
  {
    client: "Vector Resources",
    description: "Marketing and project-management documentation",
  },
  {
    client: "GitHub Contributions",
    description: "UI/UX writing and user guides",
  },
];

export const clients = [
  "Vector Resources",
  "NuWave Laser",
  "a'lei beauty",
  "Gilead",
  "BSI Group",
  "Western Growers",
  "Kentik",
  "EPA",
  "Brown Girl Surf",
];

export type SocialLink = {
  label: string;
  href: string;
};

// PLACEHOLDER URLs — swap in real profile links.
export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/TODO" },
  { label: "GitHub", href: "https://github.com/TODO" },
  { label: "Instagram", href: "https://instagram.com/TODO" },
  { label: "Substack", href: "https://TODO.substack.com" },
  { label: "Email", href: "mailto:TODO@example.com" },
];

export const substackUrl = "https://TODO.substack.com"; // PLACEHOLDER

export const resumeFileUrl = "/resume-placeholder.pdf"; // PLACEHOLDER — replace with real PDF in /public

export const hobbies = [
  { label: "Skate", glyph: "skateboard" as const },
  { label: "Sew", glyph: "thread" as const },
  { label: "Draw", glyph: "pencil" as const },
  { label: "Piano", glyph: "piano" as const },
];

export type NotAiItem = {
  title: string;
  kind: "video" | "art";
};

// PLACEHOLDER — Kendra to supply real skate clips / art pieces.
export const notAiItems: NotAiItem[] = [
  { title: "Skate clip — sample slot", kind: "video" },
  { title: "Skate clip — sample slot", kind: "video" },
  { title: "Original art — sample slot", kind: "art" },
  { title: "Original art — sample slot", kind: "art" },
];
