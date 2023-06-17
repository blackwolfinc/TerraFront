import React from "react";
import ourProduct from '../../assets/img/our-product.png'
import ourProduct2 from '../../assets/img/fasilitas.png'
import ourProduct3 from '../../assets/img/location.png'
import Swiper, { Navigation, Pagination, Scrollbar } from "swiper";
import { register } from 'swiper/element/bundle';
import "swiper/swiper.css";
import { MdOutlineArrowForwardIos } from 'react-icons/md'

register();

const ProductsList = () => {
  const swiper = React.useRef(null);
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  React.useEffect(() => {
    swiper.current = new Swiper("#swiper_product_list", {
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
          slidesPerView: 2,
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
      <div className="relative">
        <div className="h-64 p-10 flex flex-col justify-start items-end">
          <div className="w-[50%]">
            <div className="font-bold text-2xl text-primary py-4">
              OUR PRODUCT
            </div>
            <div className="flex flex-row">
              <div id="swiper_product_list" class="swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide bg-primary rounded-lg p-1">
                    <img width={'100%'} src={ourProduct} alt='product' />
                  </div>
                  <div class="swiper-slide bg-primary rounded-lg p-1">
                    <img width={'100%'} src={ourProduct2} alt='product' />
                  </div>
                  <div class="swiper-slide bg-primary rounded-lg p-1">
                    <img width={'100%'} src={ourProduct3} alt='product' />
                  </div>
                  <div class="swiper-slide bg-primary rounded-lg p-1">
                    <img width={'100%'} src={ourProduct} alt='product' />
                  </div>
                  <div class="swiper-slide bg-primary rounded-lg p-1">
                    <img width={'100%'} src={ourProduct2} alt='product' />
                  </div>
                  <div class="swiper-slide bg-primary rounded-lg p-1">
                    <img width={'100%'} src={ourProduct3} alt='product' />
                  </div>
                </div>
              </div>
              <button ref={navigationNextRef}>
                <MdOutlineArrowForwardIos className="w-8 text-2xl" />
              </button>
            </div>
          </div>
        </div>
        <div className="z-1 h-64 p-10 flex justify-end items-center bg-primary text-white">
          <span className="w-[50%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
          </span>
        </div>
        <div className="absolute bottom-[15%] left-10 w-[40%] shadow-2xl">
          <img src={ourProduct} alt='product' />
        </div>
        
      </div>
    </>
  );
};

export default ProductsList;
