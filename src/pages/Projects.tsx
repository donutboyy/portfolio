import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import type { SkillId } from "../data/skills";
import { useReveal } from "../hooks/useReveal";
import "./Projects.css";

interface ProjectsInfo {
  name: string;
  shortDescription?: string;
  description?: string;
  images: string[];
  links?: string[];
  tags: SkillId[];
}

const projects: ProjectsInfo[] = [
  {
    name: "tictactAI",
    shortDescription: "Unbeatable minimax opponent",
    description:
      "Tic Tac Toe game as a TUI with an unbeatable AI implementing the minimax algorithm",
    images: [
      "/images/tictactai_sc1.png",
      "/images/tictactai_sc2.png",
      "/images/tictactai_sc3.png",
    ],
    links: [
      "https://pypi.org/project/tictactai/",
      "https://github.com/donutboyy/tictactAI",
    ],
    tags: ["python", "tui"],
  },
  {
    name: "Goblin deez Knights",
    shortDescription: "2D endless shooter",
    description:
      "2D top down endless shooter made using the Unity Game Engine within a week",
    images: [
      "/images/gdk_title.png",
      "/images/gdk_sc1.jpg",
      "/images/gdk_sc2.jpg",
    ],
    links: ["https://www.newgrounds.com/portal/view/727351"],
    tags: ["unity", "csharp"],
  },
];

function Projects() {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <>
      <div className="reveal" ref={headerRef}>
        <SectionHeader title="Projects" />
      </div>
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            shortDescription={project.shortDescription}
            description={project.description}
            images={project.images}
            links={project.links}
            tags={project.tags}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
