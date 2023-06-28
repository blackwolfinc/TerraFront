import React from "react";
import Swiper, { Navigation, Pagination, Scrollbar } from "swiper";
import { register } from 'swiper/element/bundle';
import "swiper/swiper.css";
import { MdOutlineArrowForwardIos } from 'react-icons/md'

register();

const SwiperProduct = ({value, name, classContainer, section}) => {
    const swiper = React.useRef(null);
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    const idName = `swiper_product_list_${name}`

  React.useEffect(() => {
    swiper.current = new Swiper(`#swiper_product_list_${name}`, {
      modules: [Navigation, Pagination, Scrollbar],
      slidesPerView: 'auto',
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
  }, [name]);

  return (
    <>
        <div className={classContainer}>
            <div className="font-bold text-2xl text-white py-4 lg:text-2xl md:text-2xl lg:text-primary">
               { section === 'ourproduct' || 'ourproduct2' ? 'High Quality Home' : 'OUR PRODUCT'} 
            </div>
            <div className="flex flex-row">
                <div id={idName} class="swiper">
                    <div class="swiper-wrapper">
                        {value?.productImageSlides && value?.productImageSlides?.map((image, i) => {
                            return (
                                 <div key={i} class="swiper-slide bg-primary rounded-lg p-1">
                                    <div className="h-[100px] w-full">
                                        <img
                                            className="h-full w-full object-center"
                                            src={image.id !== 'x' ?
                                              `${process.env.REACT_APP_API_IMAGE}/${image.image_path}`
                                              : image.image_path
                                            }
                                            alt={image.image_path}
                                        />
                                    </div>
                                </div>
                            )
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
