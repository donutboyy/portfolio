import {
  Typography,
  Card,
  CardContent,
  Stack,
  CardHeader,
} from "@mui/material";
import ImageCarousel from "./ImageCarousel.tsx";
import IconButtons from "./IconButtons.tsx";

interface ProjectCardProps {
  name: string;
  shortDescription?: string;
  description?: string;
  images: string[];
  links?: string[];
}

function ProjectCard({
  name,
  shortDescription,
  description,
  images,
  links,
}: ProjectCardProps) {
  return (
    <Card
      sx={{
        width: { sm: "90vw", md: "90vw", lg: "800px" },
        borderRadius: "20px",
      }}
    >
      <CardHeader title={name} subheader={shortDescription} />
      <CardContent>
        <Stack spacing={2}>
          <ImageCarousel images={images} />
          {links && links.length > 0 && (
            <>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {description}
              </Typography>
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
