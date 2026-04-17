import {
  Box,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import "./Root.css";
import { getTheme } from "../theme.ts";
import { useThemeMode } from "../hooks/useThemeMode.tsx";
import { ThemeProvider as CustomThemeProvider } from "../context/ThemeProvider.tsx";
import ResponsiveAppBar from "../components/AppBar.tsx";
import Hero from "../components/Hero.tsx";
import Projects from "../pages/Projects.tsx";
import Footer from "../pages/Footer.tsx";
import ExperiencePage from "../pages/Experiences.tsx";
import EducationSection from "../pages/EducationSection.tsx";
import { useMemo } from "react";

function RootContent() {
  const { mode } = useThemeMode();
  const theme = useMemo(() => responsiveFontSizes(getTheme(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <Hero />
      <Box
        id="experience"
        className="section experience-section"
        sx={{ scrollMarginTop: "80px" }}
      >
        <div className="experience-content">
          <ExperiencePage />
        </div>
      </Box>
      <Box
        id="education"
        className="section education-section"
        sx={{ scrollMarginTop: "80px" }}
      >
        <div className="education-content">
          <EducationSection />
        </div>
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
