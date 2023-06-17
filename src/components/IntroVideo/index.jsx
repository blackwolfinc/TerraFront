import React from "react";
import ourProduct from '../../assets/img/our-product.png'
// import ourProduct2 from '../../assets/img/fasilitas.png'
// import ourProduct3 from '../../assets/img/location.png'

const IntroVideo = () => {
  return (
    <>
      <div className="relative">
        <div className="h-64 p-10 flex flex-col justify-start items-end">
          <div className="w-[50%]">
            <div className="font-bold text-2xl text-primary py-4">
              OUR PRODUCT
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

export default IntroVideo;
