import { Typography, CardContent } from "@mui/material";
import ImageCarousel from "./ImageCarousel.tsx";

function ProjectCard() {
  return (
    <>
      <CardContent>
        <Typography variant="h5" align="center">
          Goblin deez Knights
        </Typography>
        <Typography variant="body1" align="center">
          A 2D top down endless shooter made using the Unity Game Engine.
        </Typography>
        <ImageCarousel
          images={[
            {
              src: "/images/gdk_title.png",
              alt: "goblin deez knights title screen",
            },
            {
              src: "/images/gdk_sc1.jpg",
              alt: "goblin deez knights gameplay",
            },
            {
              src: "/images/gdk_sc2.jpg",
              alt: "goblin deez knights gameplay 2",
            },
          ]}
        />
      </CardContent>
    </>
  );
}

export default ProjectCard;
