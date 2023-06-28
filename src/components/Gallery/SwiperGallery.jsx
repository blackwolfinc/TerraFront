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
    value.galleryImages &&
    value?.galleryImages[value?.galleryImages?.length - 1];
  const idName = `swiper w-full swiper_gallery${value?.id}`;

  React.useEffect(() => {
    swiper.current = new Swiper(`.swiper_gallery${value?.id}`, {
      modules: [Navigation, Pagination, Scrollbar],
      slidesPerView: 3,
      spaceBetween: 20,
      // pagination: {
      //   el: '.swiper-pagination',
      //   type: 'bullets',
      // },
      navigation: {
        nextEl: navigationNextRef.current,
        prevEl: navigationPrevRef.current,
      },
      loop: true,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      breakpoints: {
        425: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    // return () => swiper.current.destroy();
  });

  return (
    <>
      <div className="px-4 lg:px-10">
        <div className="mb-10 flex flex-col items-center justify-center text-primary lg:flex-row lg:py-4">
          <div className="w-full lg:w-6/12">
            {value?.galleryImages ? (
              <img
                className="min-h-full min-w-full rounded-lg object-cover lg:w-[80%]"
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
            <div className="font-bevietnampro text-3xl font-bold leading-relaxed">
              {value?.title ?? "-"}
            </div>
            <div className="text-justify font-brygada text-lg">
              {value?.description ?? "-"}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-row items-center justify-between">
          <div className="w-[97%]">
            <div class={idName}>
              <div class="swiper-wrapper">
                {value?.galleryImages?.map((image) => {
                  return (
                    <div
                      key={image.id}
                      class="swiper-slide w-full rounded-lg bg-primary p-1"
                    >
                      <div className="flex h-[120px] w-full items-center justify-center overflow-hidden sm:h-[200px]">
                        <img
                          className="min-h-full min-w-full object-cover object-center"
                          src={`${process.env.REACT_APP_API_IMAGE}/${image.image_path}`}
                          alt={image.image_path}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-4 text-slate-600 sm:w-[3%]">
            <button ref={navigationNextRef}>
              <MdOutlineArrowForwardIos className="text-4xl" />
            </button>
          </div>
        </div>
        {/* mobile */}
        <div className="flex w-full flex-col gap-10 py-8 sm:px-8 lg:hidden lg:w-6/12">
          <div className="font-bevietnampro text-3xl font-bold leading-relaxed">
            {value?.title ?? "-"}
          </div>
          <div className="text-justify font-brygada text-sm sm:text-lg">
            {value?.description ?? "-"}
          </div>
        </div>
      </div>
    </>
  );
};

export default SwipperGallery;
