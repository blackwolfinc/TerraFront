import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const HeroSlide = ({ images }) => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      navigation={true}
      modules={[Navigation]}
      style={{
        "--swiper-navigation-color": "white",
        "--swiper-navigation-size": "2rem",
      }}
      className="mySwiper"
    >
      {images?.map((image, index) => {
        return (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`hero-${index}`}
              className="min-h-full min-w-full object-cover"
            />
          </SwiperSlide>
        );
      })}
      ;
    </Swiper>
  );
};

export default HeroSlide;
