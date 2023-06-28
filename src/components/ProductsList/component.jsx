import React from 'react'
import SwiperProduct from './SwiperProduct';
import "swiper/swiper.css";
import spDeal from '../.././assets/img/ourproduct/sp_deal.png'

const Component = ({isLoadingData, productData, section}) => {
  return (
    <div className={`relative ${isLoadingData ? 'animate-pulse' : ''}`}>
        <div className="h-full p-10 flex flex-col justify-center items-end lg:h-64">
          <SwiperProduct 
            id={"desktop"}
            value={productData}
            classContainer="w-[50%] hidden lg:block" 
            section={section}
          />
        </div>
        {section === 'ourproduct2' && (
          <div className='w-full hidden lg:flex justify-end items-center'>
            <div className='w-[50%] border-black'>
              <div className='w-[60%] bg-orange-600 py-[1%] px-[15%] text-xl text-white text-center rounded-lg'>
                More Details
              </div>
            </div>
          </div>
        )}
        <div className={`h-full p-10 flex justify-end items-start text lg:h-64 ${section === 'ourproduct2' ? 'bg-white': 'bg-primary'}`}>
          <div className="w-full mt-[30%] lg:w-[50%] lg:mt-0 sm:mt-[20%]">
            {/* mobile view */}
            <SwiperProduct 
              name={'mobile'}
              value={productData}
              classContainer="w-full block my-10 lg:hidden"
              section={section}
            />
            {/**/}
            <div className={`text-sm sm:text-base ${ section === 'ourproduct2' ? 'text-primary' : 'text-white'}`}>
                {productData?.description}
            </div>
            {section === 'ourproduct' && (
              <div className='flex justify-center pt-8 lg:hidden'>
                <div className='w-full bg-orange-600 py-[1%] text-xl text-white text-center rounded-lg'>
                  More Details
                </div>
              </div>
            )}
          </div>
          {section === 'ourproduct2' && (
            <div className='hidden lg:absolute bg-primary left-0 bottom-0 w-[40%] h-[50%] rounded-e-xl'></div>
          )}
        </div>
        <div className="absolute bottom-[65%] lg:bottom-[15%] lg:left-[2%] lg:w-[45%] md:bottom-[60%] md:left-[10%] md:w-full max-w-[600px] px-2 sm:px-0">
          <img
              className="h-full w-full object-center sm:rounded-lg lg:h-full md:h-[400px] "
              src={`${process.env.REACT_APP_API_IMAGE}/${productData?.image_denah_path}`}
              alt={productData?.image_denah_path}
          />
            {section === 'ourproduct' && (
              <>
                <div className='hidden lg:flex justify-center -mt-[3%]'>
                  <div className='bg-orange-600 py-[1%] px-[20%] text-xl text-white rounded-lg'>
                    More Details
                  </div>
                </div>
                <div className='absolute -top-[10%] -left-[5%] md:-top-[10%] md:-left-[8%] lg:-top-[12%] lg:-left-[10%] '>
                  <img className='w-40 sm:w-60' src={spDeal} alt="super deal" />
                </div>
              </>
            )}
          {section === 'ourproduct2' && (
          <>
             <div className='flex justify-center -mt-[3%]'>
                <div className='bg-orange-600 py-[1%] px-[20%] text-xl text-white rounded-lg'>
                  More Details
                </div>
              </div>
            <div className='absolute -top-[10%] -left-[5%] md:-top-[10%] md:-left-[8%] lg:-top-[12%] lg:-left-[10%] '>
              <img className='w-40 sm:w-60' src={spDeal} alt="super deal" />
            </div>
            </>
          )}
        </div>
      </div>
  )
}

export default Component