import {
  Box,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
  Stack,
  SvgIcon,
} from "@mui/material";
import "./Root.css";
import { getTheme } from "../theme.ts";
import { useThemeMode } from "../hooks/useThemeMode.tsx";
import { ThemeProvider as CustomThemeProvider } from "../context/ThemeProvider.tsx";
import ResponsiveAppBar from "../components/AppBar.tsx";
import Projects from "../pages/Projects.tsx";
import Footer from "../pages/Footer.tsx";
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
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: "2vh", md: "5vh" }}
            alignItems="center"
            justifyContent="center"
          >
            <div>
              <div className="knight-container">
                <img
                  id="knight"
                  src="data:image/svg+xml;charset=utf8,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3C/svg%3E"
                  alt="Knight character"
                />
              </div>
            </div>
            <Stack
              spacing={{ xs: "2vh", md: "5vh" }}
              alignItems="center"
              justifyContent="center"
              sx={{ height: { xs: "auto", md: "80vh" } }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography
                  variant="h1"
                  align="center"
                  className="hero-title"
                  sx={{ width: { xs: "90vw", md: "50vw" } }}
                >
                  {"Hi, I am Daniel"}
                </Typography>
              </Box>
              <div>
                <Typography
                  variant="h6"
                  align="center"
                  className="description"
                  sx={{ width: { xs: "90vw", md: "50vw" } }}
                >
                  Software Engineer with experience in web, frontend, backend
                  and game development.
                </Typography>
              </div>
            </Stack>
          </Stack>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <SvgIcon
              component={KeyboardDoubleArrowDownIcon}
              className="scroll-indicator"
              sx={{
                width: "10vh",
                height: "20vh",
                p: "1vh",
              }}
            />
          </div>
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
