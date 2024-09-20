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
        <Typography
          variant="h2"
          align="center"
          color="primary.contrastText"
          sx={{ pt: "20vh", px: "10vw" }}
        >
          About Me
        </Typography>
        <img id="knight" />
        <Typography
          variant="h6"
          align="center"
          color="primary.contrastText"
          sx={{ px: "5vw", width: "80vw" }}
        >
          Software Engineer with experience in web, frontend, backend and game
          development.
        </Typography>
      </Stack>
      <SvgIcon
        component={KeyboardDoubleArrowDownIcon}
        sx={{ width: "10vh", height: "20vh", p: "1vh" }}
      />
    </>
  );
}

export default AboutMe;
