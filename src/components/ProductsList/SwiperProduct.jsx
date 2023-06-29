import React from "react";
import Swiper, { Navigation, Pagination, Scrollbar } from "swiper";
import { register } from "swiper/element/bundle";
import "swiper/swiper.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const SwiperProduct = ({ id, title, images, classContainer, section }) => {
  const swiper = React.useRef(null);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const idName = `swiper_product_list_${id}`;

  React.useEffect(() => {
    swiper.current = new Swiper(`#swiper_product_list_${id}`, {
      modules: [Navigation, Pagination, Scrollbar],
      slidesPerView: "auto",
      spaceBetween: 20,
      navigation: {
        nextEl: navigationNextRef.current,
        prevEl: navigationPrevRef.current,
      },
      loop: true,
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

    register();

    // return () => swiper.current.destroy();
  }, [id]);

  return (
    <>
      <div className={classContainer}>
        <div className="mb-4 py-4 font-arimo text-2xl uppercase tracking-widest text-white md:text-2xl lg:text-4xl lg:text-primary">
          {title}
        </div>
        <div className="flex flex-row">
          <div id={idName} class="swiper">
            <div class="swiper-wrapper">
              {images &&
                images?.map((image, i) => {
                  return (
                    <div key={i} class="swiper-slide rounded-lg bg-primary p-1">
                      <div className="h-[100px] w-full">
                        <img
                          className="min-h-full min-w-full object-cover object-center"
                          src={
                            image.id !== "x"
                              ? `${process.env.REACT_APP_API_IMAGE}/${image.image_path}`
                              : image.image_path
                          }
                          alt={image.image_path}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <button ref={navigationNextRef}>
            <MdOutlineArrowForwardIos className="w-8 text-2xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SwiperProduct;
