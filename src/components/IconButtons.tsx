import { Box, IconButton, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

interface IconButtonsProps {
  links: string[];
  iconSize: number;
}

function IconButtons({ links, iconSize = 30 }: IconButtonsProps) {
  let linkedin, github, email, newgrounds, pypi;

  if (!links) {
    return;
  }

  for (let i = 0; i < links.length; i++) {
    if (links[i].includes("linkedin.com")) {
      linkedin = links[i];
    }
    if (links[i].includes("github.com")) {
      github = links[i];
    }
    if (links[i].includes("mailto:")) {
      email = links[i];
    }
    if (links[i].includes("newgrounds.com")) {
      newgrounds = links[i];
    }
    if (links[i].includes("pypi.org")) {
      pypi = links[i];
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
          <IconButton size="large">
            <LinkedInIcon
              fontSize="inherit"
              sx={{
                color: "black",
                width: `${iconSize}px`,
                height: `${iconSize}px`,
              }}
            />
          </IconButton>
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer">
          <IconButton size="large">
            <GitHubIcon
              fontSize="inherit"
              sx={{
                color: "black",
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
                color: "black",
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
                width: iconSize,
                height: iconSize,
                objectFit: "contain",
              }}
              src={"/icons/pypi.svg"}
            />
          </IconButton>
        </a>
      )}
    </Stack>
  );
}

export default IconButtons;
