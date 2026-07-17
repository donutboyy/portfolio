import { Typography } from "@mui/material";
import IconButtons from "./IconButtons.tsx";
import SkillChip from "./SkillChip.tsx";
import { skillsById, type SkillId } from "../data/skills";
import { useReveal } from "../hooks/useReveal";
import "./ProjectCard.css";

interface ProjectCardProps {
  name: string;
  shortDescription?: string;
  description?: string;
  image: string;
  links?: string[];
  tags?: SkillId[];
}

function ProjectCard({
  name,
  shortDescription,
  description,
  image,
  links,
  tags,
}: ProjectCardProps) {
  const revealRef = useReveal<HTMLElement>();

  return (
    <article className="project-band reveal" ref={revealRef}>
      <div className="project-band__media">
        <img
          className="project-band__hero"
          src={image}
          alt={`${name} screenshot`}
          loading="lazy"
        />
      </div>
      <div className="project-band__copy">
        <div>
          <Typography
            variant="h3"
            component="h3"
            className="project-band__title"
          >
            {name}
          </Typography>
          {shortDescription && (
            <Typography variant="subtitle1" className="project-band__subheader">
              {shortDescription}
            </Typography>
          )}
        </div>
        {description && (
          <Typography variant="body1" className="project-band__description">
            {description}
          </Typography>
        )}
        {tags && tags.length > 0 && (
          <div className="skill-chips skill-chips--project">
            {tags.map((tag) => (
              <SkillChip key={tag} skill={skillsById[tag]} variant="clean" />
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="project-band__links">
            <IconButtons iconSize={36} links={links} />
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
