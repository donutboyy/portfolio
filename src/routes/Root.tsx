import {
  Box,
  createTheme,
  responsiveFontSizes,
  SvgIcon,
  ThemeProvider,
  Typography,
} from "@mui/material";
import "./Root.css";
import ResponsiveAppBar from "../components/AppBar.tsx";
import Projects from "../pages/Projects.tsx";
import Contact from "../pages/Contact.tsx";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

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
          <Typography variant="h1" align="center" marginBottom={3}>
            Software Engineer
          </Typography>
          <Typography variant="h6" align="center" marginBottom={5}>
            I write clean, maintainable code and I love solving problems.
          </Typography>
        </Box>
        <a id="about" />
        <Box className="hero" bgcolor="black">
          <Typography variant="h2" align="center" color="primary.contrastText">
            About Me
          </Typography>
          <Typography variant="h6" align="center" color="primary.contrastText">
            Software Engineer with experience in web, frontend, backend and game
            development.
          </Typography>
          <SvgIcon component={KeyboardDoubleArrowDownIcon} color="primary" />
        </Box>
        <a id="projects" />
        <Box sx={{ mt: "5vh", p: "5vw" }}>
          <Projects />
        </Box>
        <a id="contact" />
        <Box bgcolor="yellowgreen" sx={{ p: "5vh" }}>
          <Contact />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default Root;
