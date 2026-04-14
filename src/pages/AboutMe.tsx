import { Stack, Typography, SvgIcon } from "@mui/material";
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
        <div>
          <Typography
            variant="h2"
            align="center"
            className="about-title"
            sx={{ pt: "20vh", px: "10vw" }}
          >
            About Me
          </Typography>
        </div>
        <div>
          <div className="knight-container">
            <img
              id="knight"
              src="data:image/svg+xml;charset=utf8,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3C/svg%3E"
              alt="Knight character"
            />
          </div>
        </div>
        <div>
          <Typography
            variant="h6"
            align="center"
            className="about-description"
            sx={{ px: "5vw", width: "80vw" }}
          >
            Software Engineer with experience in web, frontend, backend and game
            development.
          </Typography>
        </div>
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
    </>
  );
}

export default AboutMe;
