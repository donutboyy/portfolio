import { Typography } from "@mui/material";
import IconButtons from "../components/IconButtons";

function Contact() {
  return (
    <>
      <Typography variant="h3" align="center">
        Contact
      </Typography>
      <IconButtons
        iconSize={30}
        linkedinLink="https://www.linkedin.com/in/danieljlng/"
        githubLink="https://github.com/donutboyy"
        emailLink="mailto:dndanielng929@gmail.com"
      />
    </>
  );
}

export default Contact;
