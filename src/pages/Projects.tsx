import { Typography, Card } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <>
      <Typography id="#projects" variant="h4" align="center">
        Projects
      </Typography>
      <Card variant="outlined" sx={{m: 2}}>
        <ProjectCard 
          name="Goblin deez Knights"
          description="2D top down endless shooter made using the Unity Game Engine within a week"
          images={[
            {
              src: "/images/gdk_title.png",
            },
            {
              src: "/images/gdk_sc1.jpg",
            },
            {
              src: "/images/gdk_sc2.jpg",
            },
          ]}
        />
      </Card>
      <Card variant="outlined" sx={{ m: 2 }}>
        <ProjectCard 
          name="tictactAI"
          description="Tic Tac Toe game in the terminal with an unbeatable 'AI' made using minimax algorithm"
          images={[
            {
              src: "/images/gdk_title.png",
            },
            {
              src: "/images/gdk_sc1.jpg",
            },
            {
              src: "/images/gdk_sc2.jpg",
            },
          ]}
        />
      </Card>
    </>
  );
}

export default Projects;
