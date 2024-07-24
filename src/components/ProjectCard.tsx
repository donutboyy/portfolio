import { Typography, CardContent } from "@mui/material";
import ImageCarousel from "./ImageCarousel.tsx";

interface ProjectCardProps {
  name: string,
  description: string,
  images: {
    src: string
  }[]
}

function ProjectCard({ name, description, images }: ProjectCardProps ) {
  return (
    <>
      <CardContent>
        <Typography variant="h5" align="center">
          {name}
        </Typography>
        <Typography variant="body1" align="center">
          {description}
        </Typography>
        <ImageCarousel
          images={images}
        />
      </CardContent>
    </>
  );
}

export default ProjectCard;
