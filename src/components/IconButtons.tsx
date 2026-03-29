import { Box, IconButton, Stack } from "@mui/material";
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
  color = "#888888",
}: IconButtonsProps) {
  let linkedin, github, email, newgrounds, pypi, googleplay;

  if (!links) {
    return null;
  }

  for (let i = 0; i < links.length; i++) {
    if (links[i].includes("mailto:")) {
      email = links[i];
      continue;
    }
    const domain = new URL(links[i]).hostname.replace("www.", "");
    if (domain === "linkedin.com") {
      linkedin = links[i];
    }
    if (domain === "github.com") {
      github = links[i];
    }
    if (domain === "newgrounds.com") {
      newgrounds = links[i];
    }
    if (domain === "pypi.org") {
      pypi = links[i];
    }
    if (domain === "play.google.com") {
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
          <IconButton size="large" className="social-icon">
            <LinkedInIcon
              fontSize="inherit"
              sx={{
                color: color,
                width: `${iconSize}px`,
                height: `${iconSize}px`,
                transition: "color 0.2s ease",
              }}
            />
          </IconButton>
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer">
          <IconButton size="large" className="social-icon">
            <GitHubIcon
              fontSize="inherit"
              sx={{
                color: color,
                width: `${iconSize}px`,
                height: `${iconSize}px`,
                transition: "color 0.2s ease",
              }}
            />
          </IconButton>
        </a>
      )}
      {email && (
        <a href={email} target="_blank" rel="noopener noreferrer">
          <IconButton size="large" className="social-icon">
            <EmailIcon
              fontSize="inherit"
              sx={{
                color: color,
                width: `${iconSize}px`,
                height: `${iconSize}px`,
                transition: "color 0.2s ease",
              }}
            />
          </IconButton>
        </a>
      )}
      {newgrounds && (
        <a href={newgrounds} target="_blank" rel="noopener noreferrer">
          <IconButton size="large" className="social-icon">
            <Box
              component="img"
              sx={{
                display: "block",
                width: iconSize,
                height: iconSize,
                objectFit: "contain",
                filter: "var(--icon-filter)",
                opacity: 0.7,
                transition: "opacity 0.2s ease",
              }}
              src={"/icons/newgrounds.svg"}
            />
          </IconButton>
        </a>
      )}
      {pypi && (
        <a href={pypi} target="_blank" rel="noopener noreferrer">
          <IconButton size="large" className="social-icon">
            <Box
              component="img"
              sx={{
                display: "block",
                width: iconSize,
                height: iconSize,
                objectFit: "contain",
                filter: "var(--icon-filter)",
                opacity: 0.7,
                transition: "opacity 0.2s ease",
              }}
              src={"/icons/pypi.svg"}
            />
          </IconButton>
        </a>
      )}
      {googleplay && (
        <a href={googleplay} target="_blank" rel="noopener noreferrer">
          <IconButton size="large" className="social-icon">
            <Box
              component="img"
              sx={{
                display: "block",
                width: iconSize,
                height: iconSize,
                objectFit: "contain",
                filter: "var(--icon-filter)",
                opacity: 0.7,
                transition: "opacity 0.2s ease",
              }}
              src={"/icons/googleplay.svg"}
            />
          </IconButton>
        </a>
      )}
      <style>{`
        .social-icon {
          border-radius: 12px !important;
          transition: all 0.2s ease !important;
          padding: 12px !important;
        }
        .social-icon:hover {
          background: rgba(0, 217, 255, 0.08) !important;
          box-shadow: 0 0 15px rgba(0, 217, 255, 0.1) !important;
        }
        .social-icon:hover .MuiSvgIcon-root {
          color: #00d9ff !important;
        }
        .social-icon:hover img {
          opacity: 1 !important;
        }
      `}</style>
    </Stack>
  );
}

export default IconButtons;
