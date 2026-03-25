import { Stack, Typography, SvgIcon } from "@mui/material";
import { motion } from "framer-motion";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <Stack
        spacing="5vh"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "80vh" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            align="center"
            className="about-title"
            sx={{ pt: "20vh", px: "10vw" }}
          >
            About Me
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="knight-container">
            <img
              id="knight"
              src="data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E"
              alt="Knight character"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography
            variant="h6"
            align="center"
            className="about-description"
            sx={{ px: "5vw", width: "80vw" }}
          >
            Software Engineer with experience in web, frontend, backend and game
            development.
          </Typography>
        </motion.div>
      </Stack>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <SvgIcon
          component={KeyboardDoubleArrowDownIcon}
          className="scroll-indicator"
          sx={{
            width: "10vh",
            height: "20vh",
            p: "1vh",
          }}
        />
      </motion.div>
    </>
  );
}

export default AboutMe;
