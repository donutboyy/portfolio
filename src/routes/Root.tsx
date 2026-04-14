import {
  Box,
  Button,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
} from "@mui/material";
import "./Root.css";
import { getTheme } from "../theme.ts";
import { useThemeMode } from "../hooks/useThemeMode.tsx";
import { ThemeProvider as CustomThemeProvider } from "../context/ThemeProvider.tsx";
import ResponsiveAppBar from "../components/AppBar.tsx";
import Projects from "../pages/Projects.tsx";
import Footer from "../pages/Footer.tsx";
import AboutMe from "../pages/AboutMe.tsx";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useMemo } from "react";

function RootContent() {
  const { mode } = useThemeMode();
  const theme = useMemo(() => responsiveFontSizes(getTheme(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <Box className="hero">
        <div className="hero-content">
          <Typography
            variant="h1"
            align="center"
            className="hero-title"
            sx={{ px: "10vw" }}
          >
            {"Hi, I am Daniel"}
          </Typography>
          <Typography
            id="typewriter"
            variant="h4"
            align="center"
            className="hero-subtitle"
          >
            I love creating meaningful software.
          </Typography>
          <div>
            <a href="#about">
              <Button variant="outlined" className="hero-button">
                View my work{" "}
                <KeyboardDoubleArrowDownIcon className="hero-arrow" />
              </Button>
            </a>
          </div>
        </div>
      </Box>
      <Box id="about" className="section about-section">
        <AboutMe />
      </Box>
      <Box
        id="projects"
        className="section projects-section"
        sx={{ scrollMarginTop: "80px" }}
      >
        <Projects />
      </Box>
      <Box id="contact" className="section footer-section">
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

function Root() {
  return (
    <CustomThemeProvider>
      <RootContent />
    </CustomThemeProvider>
  );
}

export default Root;
