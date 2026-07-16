import { Box, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "./IconButtons.css";

interface IconButtonsProps {
  links: string[];
  iconSize: number;
}

function IconButtons({ links, iconSize = 30 }: IconButtonsProps) {
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

  const iconSx = {
    width: `${iconSize}px`,
    height: `${iconSize}px`,
  };

  const imgSx = {
    display: "block",
    width: iconSize,
    height: iconSize,
  };

  return (
    <div className="icon-buttons">
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-buttons__link"
          aria-label="LinkedIn"
        >
          <IconButton size="large" className="social-icon">
            <LinkedInIcon fontSize="inherit" sx={iconSx} />
          </IconButton>
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-buttons__link"
          aria-label="GitHub"
        >
          <IconButton size="large" className="social-icon">
            <GitHubIcon fontSize="inherit" sx={iconSx} />
          </IconButton>
        </a>
      )}
      {email && (
        <a href={email} className="icon-buttons__link" aria-label="Email">
          <IconButton size="large" className="social-icon">
            <EmailIcon fontSize="inherit" sx={iconSx} />
          </IconButton>
        </a>
      )}
      {newgrounds && (
        <a
          href={newgrounds}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-buttons__link"
          aria-label="Newgrounds"
        >
          <IconButton size="large" className="social-icon">
            <Box
              component="img"
              sx={imgSx}
              src="/icons/newgrounds.svg"
              alt=""
            />
          </IconButton>
        </a>
      )}
      {pypi && (
        <a
          href={pypi}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-buttons__link"
          aria-label="PyPI"
        >
          <IconButton size="large" className="social-icon">
            <Box component="img" sx={imgSx} src="/icons/pypi.svg" alt="" />
          </IconButton>
        </a>
      )}
      {googleplay && (
        <a
          href={googleplay}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-buttons__link"
          aria-label="Google Play"
        >
          <IconButton size="large" className="social-icon">
            <Box
              component="img"
              sx={imgSx}
              src="/icons/googleplay.svg"
              alt=""
            />
          </IconButton>
        </a>
      )}
    </div>
  );
}

export default IconButtons;
