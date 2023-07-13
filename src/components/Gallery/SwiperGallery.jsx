import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Swiper, { Navigation, Pagination, Scrollbar } from "swiper";
import defaultImage from "../../assets/img/no-image.jpg";

const SwipperGallery = ({ value }) => {
  //Swiper
  const swiper = React.useRef(null);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const imageMain =
    value?.galleryImages &&
    value?.galleryImages[value?.galleryImages?.length - 1];
  const idName = `swiper w-full swiper_gallery${value?.id}`;

  React.useEffect(() => {
    swiper.current = new Swiper(`.swiper_gallery${value?.id}`, {
      modules: [Navigation, Pagination, Scrollbar],
      slidesPerView: 3,
      // spaceBetween: 20,
      navigation: {
        nextEl: navigationNextRef.current,
        prevEl: navigationPrevRef.current,
      },
      loop: true,
      breakpoints: {
        300: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });

    // return () => swiper.current.destroy();
  });

  const getImages = () => {
    if (!value?.galleryImages) return [];

    if (value?.galleryImages?.length === 0) {
      return [];
    }

    const minimum = 6;
    const imagePaths = value?.galleryImages?.map((image) => image.image_path);
    const dupImages = [];

    while (dupImages.length < minimum) {
      dupImages.push(...imagePaths);
    }

    return dupImages;
  };

  return (
    <>
      <div className="px-4 lg:px-10">
        <div className="mb-4 flex flex-col justify-center text-primary lg:mb-10 lg:flex-row lg:py-4">
          <div className="flex aspect-[3/2] w-full items-center justify-center overflow-hidden rounded-lg shadow-custom1 lg:w-6/12">
            {value?.galleryImages ? (
              <img
                className="min-h-full min-w-full object-cover"
                src={`${process.env.REACT_APP_API_IMAGE}/${imageMain?.image_path}`}
                alt={imageMain?.image_path}
              />
            ) : (
              <img
                className="w-[80%] object-cover"
                src={defaultImage}
                alt="imageDefault"
              />
            )}
          </div>
          <div className="hidden w-full flex-col gap-10 py-8 sm:px-8 lg:flex lg:w-6/12">
            <div className="font-bevietnampro text-3xl font-bold leading-relaxed text-primary">
              {value?.title || "-"}
            </div>
            <div className="text-justify font-brygada text-lg">
              {value?.description || "-"}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-row items-center justify-between">
          <div className="w-full lg:w-[97%]">
            <div className={idName}>
              <div className="swiper-wrapper">
                {getImages()?.map((image, i) => {
                  return (
                    <div
                      key={`gallery-${i}`}
                      className="swiper-slide w-full rounded-lg"
                    >
                      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg shadow-custom1">
                        <img
                          className="min-h-full min-w-full object-cover object-center"
                          src={`${process.env.REACT_APP_API_IMAGE}/${image}`}
                          alt={image}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="hidden w-4 text-slate-600 sm:w-[3%] lg:block">
            <button ref={navigationNextRef}>
              <MdOutlineArrowForwardIos className="text-xl md:text-2xl lg:text-3xl" />
            </button>
          </div>
        </div>
        {/* mobile */}
        <div className="mt-5 flex w-full flex-col sm:px-8 lg:hidden lg:w-6/12">
          <div className="mb-6 font-bevietnampro text-2xl font-bold leading-relaxed text-primary">
            {value?.title || "-"}
          </div>
          <div className="text-justify font-brygada text-sm text-primary sm:text-lg">
            {value?.description || "-"}
          </div>
        </div>
      </div>
    </>
  );
};

export default SwipperGallery;
