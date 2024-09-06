import { Typography, Card, CardContent, Grid2 as Grid } from "@mui/material";
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
    <Card variant="outlined">
      <CardContent sx={{ m: "2vh", width: { sm: "none", md: "600px" } }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Typography variant="h4" align="center">
            {name}
          </Typography>
          <Typography variant="body1" align="center">
            {description}
          </Typography>
          <ImageCarousel images={images} />
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
