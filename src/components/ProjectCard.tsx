import { Typography, Card, CardContent, Stack } from "@mui/material";
import ImageCarousel from "./ImageCarousel.tsx";
import IconButtons from "./IconButtons.tsx";

interface ProjectCardProps {
  name: string;
  description: string;
  images: string[];
  links?: string[];
}

function ProjectCard({ name, description, images, links }: ProjectCardProps) {
  return (
    <Card variant="outlined" sx={{ borderRadius: "20px" }}>
      <CardContent
        sx={{ m: "1vh", width: { sm: "none", md: "600px", lg: "800px" } }}
      >
        <Stack spacing={2}>
          <Typography variant="h4" justifyContent="center" align="center">
            {name}
          </Typography>
          <Typography variant="body1" align="center">
            {description}
          </Typography>
          <ImageCarousel images={images} />
          {links && (
            <>
              <Typography variant="h5" align="center" paddingTop="1vh">
                Links:
              </Typography>
              <IconButtons iconSize={50} links={links} />
            </>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
