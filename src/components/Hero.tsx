import { Box, Stack, SvgIcon, Typography } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import IconButtons from "./IconButtons.tsx";
import "./Hero.css";

function Hero() {
  return (
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
                align="left"
                className="hero-title"
                sx={{ width: { xs: "90vw", md: "50vw" } }}
              >
                {"Hi, I'm Daniel!"}
              </Typography>
            </Box>
            <div>
              <Typography
                variant="h6"
                align="left"
                className="description"
                sx={{ width: { xs: "90vw", md: "50vw" } }}
              >
                Software Engineer with experience in web, frontend, backend and
                game development.
              </Typography>
            </div>
            <IconButtons
              links={[
                "https://www.linkedin.com/in/danieljlng/",
                "https://github.com/donutboyy",
                "mailto:dndanielng929@gmail.com",
              ]}
              iconSize={36}
            />
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
  );
}

export default Hero;
