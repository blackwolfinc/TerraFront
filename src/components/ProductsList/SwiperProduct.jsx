import React from "react";
import "swiper/swiper.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperProduct = ({ id, title, images, classContainer, onClickImage }) => {
  const swiperRef = React.useRef(null);

  const getImages = () => {
    if (images.length === 0) {
      return [];
    }

    const minimum = 6;
    const imagePaths = images.map((image) => image.image_path);
    const dupImages = [];

    while (dupImages.length < minimum) {
      dupImages.push(...imagePaths);
    }

    return dupImages;
  };

  return (
    <>
      <div className={classContainer}>
        <div className="mb-4 font-arimo text-2xl uppercase tracking-widest md:text-2xl lg:mb-10 lg:text-4xl">
          {title}
        </div>
        <div className="mb-7 flex flex-row lg:mb-0">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={true}
            slidesPerView={3}
            spaceBetween={16}
            className="relative"
          >
            {images &&
              getImages()?.map((image, i) => {
                return (
                  <SwiperSlide
                    key={`product-image-${i}`}
                    className="aspect-[4/3] rounded-lg border-2 border-primary bg-primary lg:aspect-video lg:border-4"
                  >
                    <div
                      className="h-full w-full cursor-pointer overflow-hidden rounded-md"
                      onClick={() => {
                        if (onClickImage) onClickImage(image);
                      }}
                    >
                      <img
                        className="min-h-full min-w-full object-cover object-center"
                        src={
                          image.id !== "x"
                            ? `${process.env.REACT_APP_API_IMAGE}/${image}`
                            : image
                        }
                        alt={`Product ${i}`}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
          <button
            className="hidden lg:block"
            onClick={() => swiperRef.current.slideNext()}
          >
            <MdOutlineArrowForwardIos className="w-8 text-2xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SwiperProduct;
