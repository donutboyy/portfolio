import { Typography, Stack } from "@mui/material";
import IconButtons from "../components/IconButtons.tsx";

function Footer() {
  return (
    <div>
      <Stack
        spacing={3}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <Typography variant="h5" align="center" className="footer-heading">
          Get in touch
        </Typography>
        <IconButtons
          links={[
            "https://www.linkedin.com/in/danieljlng/",
            "https://github.com/donutboyy",
            "mailto:dndanielng929@gmail.com",
          ]}
          iconSize={36}
        />
        <Typography
          variant="subtitle1"
          className="footer-copyright"
          align="center"
        >
          Daniel Ng © {new Date().getFullYear()}
        </Typography>
      </Stack>
    </div>
  );
}

export default Footer;
