import { Typography, Stack, Box } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "./Education.css";

interface EducationProps {
  institution: string;
  institutionLink: string;
  degree: string;
  dates: string;
  location: string;
  logo?: string;
}

function Education({
  institution,
  institutionLink,
  degree,
  dates,
  location,
  logo,
}: EducationProps) {
  return (
    <Box className="education">
      {logo && (
        <Box className="education-logo">
          <img src={logo} alt={`${institution} logo`} />
        </Box>
      )}
      <Stack spacing={1} sx={{ textAlign: "left", minWidth: 0, flex: 1 }}>
        <Box className="school-info">
          <Typography variant="h5" className="degree-title">
            {degree}
          </Typography>
          <Typography variant="body2" className="school-dates">
            {dates}
          </Typography>
        </Box>
        <Box className="institution-info">
          <a
            href={institutionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="institution-link"
          >
            <Typography variant="h6" className="institution-name">
              {institution}
              {institutionLink.length > 0 && (
                <OpenInNewIcon className="institution-link-icon" />
              )}
            </Typography>
          </a>
          <Typography variant="body2" className="institution-location">
            {location}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default Education;
