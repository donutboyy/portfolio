import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ImageCarousel.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box } from "@mui/material";

interface ImageCarouselProps {
  images: string[];
  projectName: string;
}

function ImageCarousel({ images, projectName }: ImageCarouselProps) {
  return (
    <>
      <Swiper
        centeredSlides={true}
        centeredSlidesBounds={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Box
              component="img"
              justifyContent="center"
              alignItems="center"
              sx={{
                height: { xs: 220, md: 280 },
                display: "block",
                maxHeight: 360,
                overflow: "hidden",
                width: "100%",
                objectFit: "contain",
                backgroundColor: "color-mix(in srgb, var(--bg-default) 55%, transparent)",
              }}
              src={img}
              alt={`${projectName} screenshot ${index + 1}`}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ImageCarousel;
