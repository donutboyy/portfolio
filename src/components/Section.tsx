import type { ReactNode } from "react";
import "./Section.css";

type SectionVariant = "experience" | "education" | "projects" | "footer";

interface SectionProps {
  id: string;
  variant: SectionVariant;
  children: ReactNode;
  className?: string;
}

function Section({ id, variant, children, className }: SectionProps) {
  const classes = ["section", `section--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={classes}>
      <div className="section__inner">{children}</div>
    </section>
  );
}

export default Section;
