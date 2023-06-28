import React from "react";
import { register } from 'swiper/element/bundle';
import { useProductDataQuery } from "../../services/product/get-product";
import Component from "./component";
import dummy from '../../assets/img/no-image.jpg'

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
    if (dataProduct?.data?.datas[0]?.productImageSlides?.length < 3) {
      const addIndexData = 6 - dataProduct?.data?.datas[0]?.productImageSlides?.length
      let i = 0;
      do {
        dataProduct?.data?.datas[0]?.productImageSlides.push({ id: 'x', image_path: dummy })
        i++
      }
      while ( i < addIndexData);
    }

    setProductData(dataProduct?.data?.datas[0]);
    // return () => {
    //   cleanup
    // };
  }, [dataProduct]);

  return (
    <>
      <Component
        isLoadingData={isLoadingData}
        productData={productData}
      />
    </>
  );
};

export default ProductsList;
