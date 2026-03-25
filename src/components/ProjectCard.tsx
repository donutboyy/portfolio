import {
  Typography,
  Card,
  CardContent,
  Stack,
  CardHeader,
} from "@mui/material";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Card className="project-card">
        <CardHeader
          sx={{
            "& .MuiCardHeader-content": {
              flexDirection: "column",
              alignItems: "flex-start",
            },
          }}
          slotProps={{
            title: { className: "card-title" },
            subheader: { className: "card-subheader", sx: { mt: "4px" } },
          }}
          title={name}
          subheader={shortDescription}
        />
        <CardContent>
          <Stack spacing={2}>
            {images.length > 0 && <ImageCarousel images={images} />}
            {links && links.length > 0 && (
              <>
                <Typography
                  variant="body1"
                  align="center"
                  className="card-description"
                >
                  {description}
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  sx={{ pt: "1vh" }}
                  className="card-links-label"
                >
                  Links:
                </Typography>
                <IconButtons iconSize={40} links={links} />
              </>
            )}
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
