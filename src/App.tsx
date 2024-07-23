import { Grid, Card, Typography } from "@mui/material";
import "./App.css";
import ResponsiveAppBar from "./components/AppBar.tsx";
import ProjectCard from "./components/ProjectCard.tsx";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography id="#about" variant="h4" align="center">
            About
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography id="#projects" variant="h4" align="center">
            Projects
          </Typography>
          <Card variant="outlined">
            <ProjectCard />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Typography id="#contact" variant="h4" align="center">
            Contact
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
