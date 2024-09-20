import { Box, Button, IconButton, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

interface IconButtonsProps {
  links: string[];
  iconSize: number;
  color?: string;
}

function IconButtons({
  links,
  iconSize = 30,
  color = "black",
}: IconButtonsProps) {
  let linkedin, github, email, newgrounds, pypi, googleplay;

  if (!links) {
    return;
  }

  for (let i = 0; i < links.length; i++) {
    if (links[i].includes("mailto:")) {
      email = links[i];
      continue;
    }
    const domain = new URL(links[i]).hostname.replace("www.", "");
    if (domain == "linkedin.com") {
      linkedin = links[i];
    }
    if (domain == "github.com") {
      github = links[i];
    }
    if (domain == "newgrounds.com") {
      newgrounds = links[i];
    }
    if (domain == "pypi.org") {
      pypi = links[i];
    }
    if (domain == "play.google.com") {
      googleplay = links[i];
    }
  }

  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent="center"
      sx={{ m: "1vh", alignItems: "center" }}
    >
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <Button size="large">
            <LinkedInIcon
              fontSize="inherit"
              sx={{
                color: color,
                width: `${iconSize}px`,
                height: `${iconSize}px`,
              }}
            />
          </Button>
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer">
          <IconButton size="large">
            <GitHubIcon
              fontSize="inherit"
              sx={{
                color: color,
                width: `${iconSize}px`,
                height: `${iconSize}px`,
              }}
            />
          </IconButton>
        </a>
      )}
      {email && (
        <a href={email} target="_blank" rel="noopener noreferrer">
          <IconButton size="large">
            <EmailIcon
              fontSize="inherit"
              sx={{
                color: color,
                width: `${iconSize}px`,
                height: `${iconSize}px`,
              }}
            />
          </IconButton>
        </a>
      )}
      {newgrounds && (
        <a href={newgrounds} target="_blank" rel="noopener noreferrer">
          <IconButton size="large">
            <Box
              component="img"
              justifyContent="center"
              alignItems="center"
              sx={{
                display: "block",
                color: color,
                width: iconSize,
                height: iconSize,
                objectFit: "contain",
              }}
              src={"/icons/newgrounds.svg"}
            />
          </IconButton>
        </a>
      )}
      {pypi && (
        <a href={pypi} target="_blank" rel="noopener noreferrer">
          <IconButton size="large">
            <Box
              component="img"
              justifyContent="center"
              alignItems="center"
              sx={{
                display: "block",
                color: color,
                width: iconSize,
                height: iconSize,
                objectFit: "contain",
              }}
              src={"/icons/pypi.svg"}
            />
          </IconButton>
        </a>
      )}
      {googleplay && (
        <a href={googleplay} target="_blank" rel="noopener noreferrer">
          <IconButton size="large">
            <Box
              component="img"
              justifyContent="center"
              alignItems="center"
              sx={{
                display: "block",
                color: color,
                width: iconSize,
                height: iconSize,
                objectFit: "contain",
              }}
              src={"/icons/googleplay.svg"}
            />
          </IconButton>
        </a>
      )}
    </Stack>
  );
}

export default IconButtons;
