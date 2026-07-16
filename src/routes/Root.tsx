import { CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { getTheme } from "../theme.ts";
import { useThemeMode } from "../hooks/useThemeMode.tsx";
import { ThemeProvider as CustomThemeProvider } from "../context/ThemeProvider.tsx";
import ResponsiveAppBar from "../components/AppBar.tsx";
import Section from "../components/Section.tsx";
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
      <Section id="experience" variant="experience">
        <ExperiencePage />
      </Section>
      <Section id="education" variant="education">
        <EducationSection />
      </Section>
      <Section id="projects" variant="projects">
        <Projects />
      </Section>
      <Section id="contact" variant="footer">
        <Footer />
      </Section>
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
