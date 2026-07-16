import type { Skill, SkillId } from "../data/skills";
import { resolveSkill } from "../data/skills";
import { SkillIcon } from "./SkillIcons";
import "./SkillChip.css";

interface SkillChipProps {
  skill?: Skill;
  /** Tag label or known skill id */
  tag?: string;
  variant?: "pixel" | "clean";
}

function SkillChip({ skill, tag, variant = "pixel" }: SkillChipProps) {
  const resolved = skill ?? resolveSkill(tag ?? "");
  const skillId = resolved.id as SkillId;

  return (
    <span className={`skill-chip skill-chip--${variant}`}>
      <SkillIcon id={skillId} className="skill-chip__icon" />
      <span className="skill-chip__label">{resolved.label}</span>
    </span>
  );
}

export default SkillChip;
