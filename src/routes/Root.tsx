import {
  Box,
  Button,
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
} from "@mui/material";
import "./Root.css";
import ResponsiveAppBar from "../components/AppBar.tsx";
import Projects from "../pages/Projects.tsx";
import Footer from "../pages/Footer.tsx";
import AboutMe from "../pages/AboutMe.tsx";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

function Root() {
  const theme = responsiveFontSizes(
    createTheme({
      palette: {},
    }),
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ResponsiveAppBar />
        <Box className="hero" bgcolor="">
          <Typography
            variant="h1"
            align="center"
            marginBottom={3}
            sx={{ px: "10vw" }}
          >
            {"Hi, I'm Daniel"}
          </Typography>
          <Typography
            id="typewriter"
            variant="h4"
            align="center"
            marginBottom={5}
          >
            I love creating meaningful software.
          </Typography>
          <a href="#about">
            <Button variant="outlined">
              View my work <KeyboardDoubleArrowDownIcon />
            </Button>
          </a>
        </Box>
        <a id="about" />
        <Box className="hero" bgcolor="primary.main">
          <AboutMe />
        </Box>
        <a id="projects" />
        <Box sx={{ mt: "5vh", p: "5vw" }}>
          <Projects />
        </Box>
        <a id="contact" />
        <Box bgcolor="primary.main" sx={{ p: "5vh" }}>
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default Root;
