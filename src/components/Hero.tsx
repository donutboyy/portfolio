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
                Software Engineer with experience in web and game development.
              </Typography>
            </div>
            <div>
              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                useFlexGap
                sx={{ maxWidth: { xs: "90vw", md: "50vw" } }}
              >
                <img
                  src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black"
                  alt="JavaScript"
                />
                <img
                  src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white"
                  alt="TypeScript"
                />
                <img
                  src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black"
                  alt="React"
                />
              </Stack>
            </div>
            <div style={{ marginTop: "8px" }}>
              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                useFlexGap
                sx={{ maxWidth: { xs: "90vw", md: "50vw" } }}
              >
                <img
                  src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white"
                  alt="Node.js"
                />
                <img
                  src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white"
                  alt="Python"
                />
                <img
                  src="https://img.shields.io/badge/-C%23-05122A?logo=data:image/svg%2Bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjOUI0Rjk2Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNjgyMTdBIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTY0IDRMMTE2IDM2VjkyTDY0IDEyNEwxMiA5MlYzNkw2NCA0WiIgZmlsbD0idXJsKCNncmFkKSIgc3Ryb2tlPSIjNTgyMTZCIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSI2NCIgeT0iNzgiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DIzwvdGV4dD48L3N2Zz4="
                  alt="C#"
                />
                <img
                  src="https://img.shields.io/badge/Unity-000000?style=flat&logo=unity&logoColor=white"
                  alt="Unity"
                />
              </Stack>
            </div>
            <div style={{ marginTop: "8px" }}>
              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                useFlexGap
                sx={{ maxWidth: { xs: "90vw", md: "50vw" } }}
              >
                <img
                  src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white"
                  alt="Git"
                />
                <img
                  src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white"
                  alt="GitHub"
                />
                <img
                  src="https://img.shields.io/badge/Neovim-57A143?style=flat&logo=neovim&logoColor=white"
                  alt="Neovim"
                />
              </Stack>
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
