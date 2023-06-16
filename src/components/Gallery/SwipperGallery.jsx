import React from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

const SwipperGallery = ({value}) => {
    //Swiper
    const swiper = React.useRef(null);
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    React.useEffect(() => {
        swiper.current = new Swiper(".swiper", {
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
        <div className="px-10">
            <div className="text-white font-bold uppercase text-xl py-4">
                {value?.title ?? '-'}
            </div>
            <div className='flex flex-row justify-center items-center'>
                <div class="swiper w-full">
                    <div class="swiper-wrapper">
                          {value?.galleryImages?.map(image => {
                            console.log(`${process.env.REACT_APP_API_IMAGE}/${image.image_path}`)
                            return (
                                <div key={image.id} class="swiper-slide bg-primary rounded-lg p-1 w-full">
                                    <div className="w-full h-40">
                                        <img
                                            className="w-full object-cover"
                                            src={`${process.env.REACT_APP_API_IMAGE}/${image.image_path}`}
                                            alt={image.image_path}     
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
              {value?.galleryImages && value?.galleryImages?.length > 2 && (
                <button ref={navigationNextRef} className='text-gray-400 opacity-90'>
                    <MdOutlineArrowForwardIos className="w-10 text-4xl" />
                </button>
              )}
           </div>
        </div>
    </>
  )
}

export default SwipperGallery