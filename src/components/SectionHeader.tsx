import { Typography } from "@mui/material";
import "./SectionHeader.css";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

function SectionHeader({ title, className }: SectionHeaderProps) {
  const classes = ["section-header", className].filter(Boolean).join(" ");

  return (
    <header className={classes}>
      <Typography variant="h2" component="h2" className="section-header__title">
        {title}
      </Typography>
      <hr className="section-header__rule" aria-hidden="true" />
    </header>
  );
}

export default SectionHeader;
