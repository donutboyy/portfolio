import { Typography } from "@mui/material";
import IconButtons from "../components/IconButtons.tsx";

function Footer() {
  return (
    <>
      <IconButtons
        links={[
          "https://www.linkedin.com/in/danieljlng/",
          "https://github.com/donutboyy",
          "mailto:dndanielng929@gmail.com",
        ]}
        iconSize={30}
        color="primary.contrastText"
      />
      <Typography
        variant="subtitle1"
        color="primary.contrastText"
        align="center"
      >
        Daniel Ng © 2024
      </Typography>
    </>
  );
}

export default Footer;
