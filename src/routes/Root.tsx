import {
  Box,
  Button,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import "./Root.css";
import { baseTheme } from "../theme.ts";

const theme = responsiveFontSizes(baseTheme);
import ResponsiveAppBar from "../components/AppBar.tsx";
import Projects from "../pages/Projects.tsx";
import Footer from "../pages/Footer.tsx";
import AboutMe from "../pages/AboutMe.tsx";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <Box className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Typography
            variant="h1"
            align="center"
            className="hero-title"
            sx={{ px: "10vw" }}
          >
            {"Hi, I'm Daniel"}
          </Typography>
          <Typography
            id="typewriter"
            variant="h4"
            align="center"
            className="hero-subtitle"
          >
            I love creating meaningful software.
          </Typography>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <a href="#about">
              <Button variant="outlined" className="hero-button">
                View my work{" "}
                <KeyboardDoubleArrowDownIcon className="hero-arrow" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </Box>
      <Box id="about" className="section about-section">
        <AboutMe />
      </Box>
      <Box id="projects" className="section projects-section">
        <Projects />
      </Box>
      <Box id="contact" className="section footer-section">
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default Root;
