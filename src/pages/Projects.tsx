import { Typography, Grid } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <>
      <Typography id="#projects" variant="h2" align="center">
        Projects
      </Typography>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item display="flex" justifyContent="center" alignItems="center">
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
        </Grid>
        <Grid item display="flex" justifyContent="center" alignItems="center">
          <ProjectCard
            name="tictactAI"
            description="Tic Tac Toe game in the terminal with an unbeatable 'AI' made using minimax algorithm"
            images={[
              {
                src: "/images/tictactai_sc1.png",
              },
              {
                src: "/images/tictactai_sc2.png",
              },
              {
                src: "/images/tictactai_sc3.png",
              },
            ]}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Projects;
