import React from "react";
import { register } from 'swiper/element/bundle';
import "swiper/swiper.css";
import SwiperProduct from "./SwiperProduct";
import { useProductDataQuery } from "../../services/product/get-product";

register();

const ProductsList = () => {
  const [productData, setProductData] = React.useState([]);

  const { data: dataProduct, isLoading:isLoadingData } = useProductDataQuery({
    params: "",
    settings: "",
  });

  React.useEffect(() => {
    if (!dataProduct) {
      return;
    }

    setProductData(dataProduct?.data?.datas[0]);
    // return () => {
    //   cleanup
    // };
  }, [dataProduct]);

  return (
    <>
      <div className={`relative ${isLoadingData ? 'animate-pulse' : ''}`}>
        <div className="h-full p-10 flex flex-col justify-center items-end lg:h-64">
          <SwiperProduct 
            id={"desktop"}
            value={productData}
            classContainer="w-[50%] hidden lg:block" 
          />
        </div>
        <div className="h-full p-10 flex justify-end items-start bg-primary text-white text lg:h-64">
          <div className="w-full mt-[30%] lg:w-[50%] lg:mt-0 sm:mt-[20%]">
            {/* mobile view */}
            <SwiperProduct 
              name={'mobile'}
              value={productData}
              classContainer="w-full block my-10 lg:hidden" 
            />
            {/**/}
            <div className="text-sm sm:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
            </div>
          </div>
        </div>
        <div className="absolute bottom-[60%] lg:bottom-[18%] lg:left-[2%] lg:w-[45%] md:bottom-[55%] md:left-[10%] md:w-full max-w-[600px] shadow-2xl">
          <img
            className="h-full w-full object-center"
            src={`${process.env.REACT_APP_API_IMAGE}/${productData?.image_denah_path}`}
            alt={productData?.image_denah_path}
           />
        </div>
      </div>
    </>
  );
};

export default ProductsList;
