import { Typography, Stack, Box } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "./Experience.css";

interface ExperienceProps {
  company: string;
  companyLink: string;
  title: string;
  dates: string;
  location: string;
  details: string[];
}

function Experience({
  company,
  companyLink,
  title,
  dates,
  location,
  details,
}: ExperienceProps) {
  return (
    <Box className="experience">
      <Stack spacing={1}>
        <Box className="job-info">
          <Typography variant="h5" className="job-title">
            {title}
          </Typography>
          <Typography variant="body2" className="job-dates">
            {dates}
          </Typography>
        </Box>
        <Box className="company-info">
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="company-link"
          >
            <Typography variant="h6" className="company-name">
              {company}
              {companyLink.length > 0 && <OpenInNewIcon className="company-link-icon" />}
            </Typography>
          </a>
          <Typography variant="body2" className="company-location">
            {location}
          </Typography>
        </Box>
        <ul className="job-details">
          {details.map((detail, index) => (
            <li key={index}>
              <Typography variant="body1">{detail}</Typography>
            </li>
          ))}
        </ul>
      </Stack>
    </Box>
  );
}

export default Experience;
