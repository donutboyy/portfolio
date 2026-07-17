import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import type { SkillId } from "../data/skills";
import { useReveal } from "../hooks/useReveal";
import "./Projects.css";

interface ProjectsInfo {
  name: string;
  shortDescription?: string;
  description?: string;
  image: string;
  links?: string[];
  tags: SkillId[];
}

const projects: ProjectsInfo[] = [
  {
    name: "cbz2xtc",
    shortDescription: "Python library: CBZ → XTC for XTEink X4",
    description:
      "A Python library that converts CBZ comic archives to XTC for reading on the XTEink X4.",
    image: "/images/cbz2xtc.jpeg",
    links: [
      "https://pypi.org/project/cbz2xtc/",
      "https://github.com/donutboyy/cbz2xtc",
    ],
    tags: ["python"],
  },
  {
    name: "Goblin deez Knights",
    shortDescription: "2D endless shooter",
    description:
      "2D top down endless shooter made using the Unity Game Engine within a week",
    image: "/images/gdk_sc2.jpg",
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
            image={project.image}
            links={project.links}
            tags={project.tags}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
