import React from "react";
import Hero1 from "../../assets/img/hero/hero-1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Hero = () => {
  return (
    <div className="relative flex justify-end px-16 py-20">
      <div className="absolute left-[16%] top-[60%] z-0 h-[20%] w-[10%] bg-primary opacity-80"></div>
      <div className="absolute left-0 top-[20%] z-20 w-[490px] bg-primary p-10 text-white">
        <h5 className="mb-8 font-serif text-4xl leading-relaxed">
          We Help You
          <br /> Make Modern <br />
          Interior
        </h5>
        <p className="text-justify font-serif">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a
        </p>
      </div>
      <div className="z-10 flex w-[80%] items-center overflow-hidden rounded-xl">
        <Swiper
          slidesPerView={1}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          style={{
            "--swiper-navigation-color": "white",
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={Hero1}
              alt="hero"
              className="min-h-full min-w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Hero1}
              alt="hero"
              className="min-h-full min-w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Hero1}
              alt="hero"
              className="min-h-full min-w-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="absolute right-4 top-[80%] z-30 h-[16%] w-[10%] bg-primary opacity-80"></div>
    </div>
  );
};

export default Hero;
