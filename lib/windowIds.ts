export const WINDOW_IDS = ["resume", "projects", "about", "substack", "notai"] as const;

export type WindowId = (typeof WINDOW_IDS)[number];
