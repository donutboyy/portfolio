import { Typography, IconButton, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  return (
    <>
      <Typography variant="h3" align="center">
        Contact
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        sx={{ m: "3vh", alignItems: "center" }}
      >
        <IconButton
          aria-label="linkedin"
          size="large"
          onClick={() => {
            alert("clicked");
          }}
        >
          <LinkedInIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="github" size="large">
          <GitHubIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="email" size="large">
          <EmailIcon fontSize="inherit" />
        </IconButton>
      </Stack>
    </>
  );
}

export default Contact;
