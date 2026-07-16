import { Typography } from "@mui/material";
import IconButtons from "../components/IconButtons.tsx";
import SectionHeader from "../components/SectionHeader";
import { useReveal } from "../hooks/useReveal";
import "./Footer.css";

function Footer() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <div className="footer reveal" ref={revealRef}>
      <SectionHeader title="Get in touch" />
      <IconButtons
        links={[
          "https://www.linkedin.com/in/danieljlng/",
          "https://github.com/donutboyy",
          "mailto:dndanielng929@gmail.com",
        ]}
        iconSize={36}
      />
      <Typography variant="subtitle1" className="footer-copyright">
        Daniel Ng © {new Date().getFullYear()}
      </Typography>
    </div>
  );
}

export default Footer;
