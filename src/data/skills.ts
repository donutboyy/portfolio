export type SkillId =
  | "javascript"
  | "typescript"
  | "react"
  | "nodejs"
  | "python"
  | "csharp"
  | "unity"
  | "git"
  | "github"
  | "neovim"
  | "tui";

export interface Skill {
  id: SkillId;
  label: string;
}

/** Hero skill row — full set for this pass */
export const heroSkills: Skill[] = [
  { id: "javascript", label: "JavaScript" },
  { id: "typescript", label: "TypeScript" },
  { id: "react", label: "React" },
  { id: "nodejs", label: "Node.js" },
  { id: "python", label: "Python" },
  { id: "csharp", label: "C#" },
  { id: "unity", label: "Unity" },
  { id: "git", label: "Git" },
  { id: "github", label: "GitHub" },
  { id: "neovim", label: "Neovim" },
];

export const skillsById: Record<SkillId, Skill> = {
  javascript: { id: "javascript", label: "JavaScript" },
  typescript: { id: "typescript", label: "TypeScript" },
  react: { id: "react", label: "React" },
  nodejs: { id: "nodejs", label: "Node.js" },
  python: { id: "python", label: "Python" },
  csharp: { id: "csharp", label: "C#" },
  unity: { id: "unity", label: "Unity" },
  git: { id: "git", label: "Git" },
  github: { id: "github", label: "GitHub" },
  neovim: { id: "neovim", label: "Neovim" },
  tui: { id: "tui", label: "TUI" },
};

/** Resolve a tag label or id to a Skill (falls back to a plain label chip). */
export function resolveSkill(tag: string): Skill {
  const normalized = tag.toLowerCase().replace(/\./g, "").replace(/\s+/g, "");
  const aliases: Record<string, SkillId> = {
    javascript: "javascript",
    js: "javascript",
    typescript: "typescript",
    ts: "typescript",
    react: "react",
    nodejs: "nodejs",
    node: "nodejs",
    python: "python",
    csharp: "csharp",
    "c#": "csharp",
    unity: "unity",
    git: "git",
    github: "github",
    neovim: "neovim",
    nvim: "neovim",
    tui: "tui",
  };

  const id = aliases[normalized];
  if (id) return skillsById[id];
  return { id: "tui", label: tag };
}
