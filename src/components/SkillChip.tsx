import type { Skill } from "../data/skills";
import { SkillIcon } from "./SkillIcons";
import "./SkillChip.css";

interface SkillChipProps {
  skill: Skill;
  variant?: "pixel" | "clean";
}

function SkillChip({ skill, variant = "pixel" }: SkillChipProps) {
  return (
    <span className={`skill-chip skill-chip--${variant}`}>
      <SkillIcon id={skill.id} className="skill-chip__icon" />
      <span className="skill-chip__label">{skill.label}</span>
    </span>
  );
}

export default SkillChip;
