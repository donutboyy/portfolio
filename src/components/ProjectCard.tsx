import { Typography } from "@mui/material";
import ImageCarousel from "./ImageCarousel.tsx";
import IconButtons from "./IconButtons.tsx";
import SkillChip from "./SkillChip.tsx";
import { skillsById, type SkillId } from "../data/skills";
import { useReveal } from "../hooks/useReveal";
import "./ProjectCard.css";

interface ProjectCardProps {
  name: string;
  shortDescription?: string;
  description?: string;
  images: string[];
  links?: string[];
  tags?: SkillId[];
}

function ProjectCard({
  name,
  shortDescription,
  description,
  images,
  links,
  tags,
}: ProjectCardProps) {
  const revealRef = useReveal<HTMLElement>();

  return (
    <article className="project-band reveal" ref={revealRef}>
      {images.length > 0 && (
        <div className="project-band__media">
          <ImageCarousel images={images} projectName={name} />
        </div>
      )}
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
