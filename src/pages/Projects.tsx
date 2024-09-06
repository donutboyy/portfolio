import { Typography, Grid2 as Grid } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

interface ProjectsInfo {
  name: string;
  description: string;
  images: string[];
  links: string[];
}

const projects: ProjectsInfo[] = [
  {
    name: "Personal Website",
    description: "This website, made using React and MUI",
    images: [
      "/images/tictactai_sc1.png",
      "/images/tictactai_sc2.png",
      "/images/tictactai_sc3.png",
    ],
    links: ["https://github.com/donutboyy/portfolio"],
  },
  {
    name: "tictactAI",
    description:
      "Tic Tac Toe game as a TUI with an unbeatable 'AI' implementing the minimax algorithm",
    images: [
      "/images/tictactai_sc1.png",
      "/images/tictactai_sc2.png",
      "/images/tictactai_sc3.png",
    ],
    links: [
      "https://pypi.org/project/tictactai/",
      "https://github.com/donutboyy/tictactAI",
    ],
  },
  {
    name: "Goblin deez Knights",
    description:
      "2D top down endless shooter made using the Unity Game Engine within a week",
    images: [
      "/images/gdk_title.png",
      "/images/gdk_sc1.jpg",
      "/images/gdk_sc2.jpg",
    ],
    links: ["https://www.newgrounds.com/portal/view/727351"],
  },
];

function Projects() {
  return (
    <>
      <Typography variant="h2" align="center" sx={{ pb: "3vh" }}>
        Projects
      </Typography>
      <Grid container justifyContent="center" alignItems="center" spacing={4}>
        {projects.map((project, index) => (
          <Grid
            key={index}
            size={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ProjectCard
              name={project.name}
              description={project.description}
              images={project.images}
              links={project.links}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Projects;
