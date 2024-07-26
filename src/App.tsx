import { Grid, Typography } from "@mui/material";
import "./App.css";
import ResponsiveAppBar from "./components/AppBar.tsx";
import Projects from "./pages/Projects.tsx";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Grid container spacing={4} sx={{ p: 4 }}>
        <Grid item xs={12}>
          <Typography id="#about" variant="h4" align="center">
            About
          </Typography>
          <Typography variant="body1">
            Software Engineer with experience in web, frontend, backend and game
            development.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Projects />
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
