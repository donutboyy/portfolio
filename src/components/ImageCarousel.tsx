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
  }[];
}

function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <>
      <Swiper
        centeredSlides={true}
        centeredSlidesBounds={true}
        //autoplay={{
        //  delay: 2500,
        //  disableOnInteraction: false,
        //}}
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
                height: 255,
                display: "block",
                maxHeight: 400,
                overflow: "hidden",
                width: "100%",
                objectFit: "contain",
              }}
              src={img.src}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ImageCarousel;
