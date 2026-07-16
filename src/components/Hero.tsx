import { Typography } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import IconButtons from "./IconButtons.tsx";
import SkillChip from "./SkillChip.tsx";
import { heroSkills } from "../data/skills";
import { useReveal } from "../hooks/useReveal";
import "./Hero.css";

function Hero() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-content">
        <div className="hero__layout reveal" ref={revealRef}>
          <div className="knight-stage">
            <div className="knight-container">
              <img
                id="knight"
                src="data:image/svg+xml;charset=utf8,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3C/svg%3E"
                alt="Knight character"
              />
            </div>
          </div>
          <div className="hero__copy">
            <Typography variant="h1" component="h1" className="hero-title">
              {"Hi, I'm Daniel!"}
            </Typography>
            <Typography variant="h6" component="p" className="description">
              Software Engineer with experience in web and game development.
            </Typography>
            <div className="skill-chips skill-chips--hero">
              {heroSkills.map((skill) => (
                <SkillChip key={skill.id} skill={skill} variant="pixel" />
              ))}
            </div>
            <IconButtons
              links={[
                "https://www.linkedin.com/in/danieljlng/",
                "https://github.com/donutboyy",
                "mailto:dndanielng929@gmail.com",
              ]}
              iconSize={36}
            />
          </div>
        </div>
        <a
          href="#experience"
          className="scroll-indicator"
          aria-label="Scroll to experience"
        >
          <KeyboardDoubleArrowDownIcon className="scroll-indicator__icon" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
