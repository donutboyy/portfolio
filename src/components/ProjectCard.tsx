import { Typography, Card, CardContent } from "@mui/material";
import ImageCarousel from "./ImageCarousel.tsx";

interface ProjectCardProps {
  name: string;
  description: string;
  images: {
    src: string;
  }[];
}

function ProjectCard({ name, description, images }: ProjectCardProps) {
  return (
    <Card variant="outlined" sx={{ m: 2, width: 800, height: 500 }}>
      <CardContent sx={{ m: 2 }}>
        <Typography variant="h5" align="center">
          {name}
        </Typography>
        <Typography variant="body1" align="center">
          {description}
        </Typography>
        <ImageCarousel images={images} />
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
