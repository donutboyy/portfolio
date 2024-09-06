import {
  Box,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
} from "@mui/material";
import "./Root.css";
import ResponsiveAppBar from "../components/AppBar.tsx";
import Projects from "../pages/Projects.tsx";
import Footer from "../pages/Footer.tsx";
import AboutMe from "../pages/AboutMe.tsx";

declare module "@mui/material/styles" {
  interface PaletteColor {
    mixed?: string;
  }

  interface SimplePaletteColorOptions {
    mixed?: string;
  }
}

function Root() {
  const theme = responsiveFontSizes(
    createTheme({
      palette: {
        primary: {
          main: "#1f5252",
        },
      },
    }),
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        <Box className="hero">
          <Typography
            variant="h1"
            align="center"
            marginBottom={3}
            sx={{ px: "10vw" }}
          >
            {"Hi, I'm Daniel"}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            marginBottom={5}
            sx={{ px: "5vw" }}
          >
            I love creating useful software while learning and problem solving
            along the way.
          </Typography>
        </Box>
        <a id="about" />
        <Box className="hero" bgcolor="black">
          <AboutMe />
        </Box>
        <a id="projects" />
        <Box sx={{ mt: "5vh", p: "5vw" }}>
          <Projects />
        </Box>
        <a id="contact" />
        <Box bgcolor="yellowgreen" sx={{ p: "5vh" }}>
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default Root;
