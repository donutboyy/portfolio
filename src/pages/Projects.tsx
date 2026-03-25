import { Typography, Grid2 as Grid } from "@mui/material";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

interface ProjectsInfo {
  name: string;
  shortDescription?: string;
  description?: string;
  images: string[];
  links?: string[];
}

const projects: ProjectsInfo[] = [
  {
    name: "Personal Website",
    shortDescription: "This website",
    images: [],
    links: ["https://github.com/donutboyy/portfolio"],
  },
  {
    name: "tictactAI",
    shortDescription: "Python TUI",
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
    shortDescription: "Unity game",
    description:
      "2D top down endless shooter made using the Unity Game Engine within a week",
    images: [
      "/images/gdk_title.png",
      "/images/gdk_sc1.jpg",
      "/images/gdk_sc2.jpg",
    ],
    links: [
      "https://www.newgrounds.com/portal/view/727351",
      "https://play.google.com/store/apps/details/Goblin_deez_Knights?id=com.donutboygame.GoblindeezKnights",
    ],
  },
];

function Projects() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <Typography
          variant="h2"
          align="center"
          className="section-title"
          sx={{ pb: "3vh" }}
        >
          Projects
        </Typography>
      </motion.div>
      <Grid container justifyContent="center" alignItems="center" spacing={4}>
        {projects.map((project, index) => (
          <Grid
            key={index}
            size={12}
            justifyContent="center"
            alignItems="center"
            sx={{
              display: { sm: "flex-grow", md: "flex", lg: "flex" },
            }}
          >
            <ProjectCard
              name={project.name}
              shortDescription={project.shortDescription}
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
