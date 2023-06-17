import React from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import defaultImage from '../../assets/img/no-image.jpg'

const SwipperGallery = ({value}) => {
    //Swiper
    const swiper = React.useRef(null);
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    const imageMain = value.galleryImages && value?.galleryImages[value?.galleryImages?.length - 1];

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
            <div className="flex flex-row justify-center items-center text-primary py-4">
                  <div className='w-6/12'>
                    {value?.galleryImages ?
                          (
                            <img
                                className="w-[80%] object-cover rounded-lg"
                                src={`${process.env.REACT_APP_API_IMAGE}/${imageMain?.image_path}`}
                                alt={imageMain?.image_path}
                            />
                          ) : (
                            <img
                                className="w-[80%] object-cover"
                                src={defaultImage}
                                alt='imageDefault'     
                            />
                        )
                   
                    }
                </div>
                <div className='w-6/12 flex flex-col justify-start items-center text-justify py-8 gap-10'>
                    <div className='font-bold uppercase text-3xl'>
                        {value?.title ?? '-'}
                    </div>
                    <div className='text-lg'>
                        {value?.description ?? '-'}
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row justify-between items-center'>
                <div className='w-[97%]'>
                      <div class={`swiper w-full swiper_gallery${value?.id}`}>
                        <div class="swiper-wrapper">
                            {value?.galleryImages?.map(image => {
                                return (
                                    <div key={image.id} class="swiper-slide bg-primary rounded-lg p-1 w-full">
                                        <div className="w-full h-[200px]">
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
                </div>
                <div className='w-[3%] text-slate-600' >
                    <button ref={navigationNextRef} >
                        <MdOutlineArrowForwardIos className="text-4xl"  />
                    </button>
                </div>
           </div>
        </div>
    </>
  )
}

export default SwipperGallery