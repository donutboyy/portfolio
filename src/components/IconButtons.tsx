import { Box, IconButton, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

interface IconButtonsProps {
  iconSize: number;
  githubLink?: string;
  linkedinLink?: string;
  itchLink?: string;
  emailLink?: string;
  newgroundsLink?: string;
  pypiLink?: string;
}

function IconButtons({
  iconSize = 30,
  githubLink: github,
  linkedinLink: linkedin,
  emailLink: email,
  newgroundsLink: newgrounds,
  pypiLink: pypi,
}: IconButtonsProps) {
  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent="center"
      sx={{ m: "3vh", alignItems: "center" }}
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
