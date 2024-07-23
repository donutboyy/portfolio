import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ImageCarousel.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box } from "@mui/material";

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((img) => (
          <SwiperSlide zoom={true}>
            <Box
              component="img"
              sx={{
                height: 255,
                display: "block",
                maxWidth: 400,
                overflow: "hidden",
                width: "100%",
              }}
              src={img.src}
              alt={img.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ImageCarousel;
