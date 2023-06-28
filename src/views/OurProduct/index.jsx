import FormPromo from "components/FormPromo";
import ProductsList from "components/ProductsList/component";
import PromoList from "components/PromoList";
import DefaultLayout from "layout/DefaultLayout";
import React from "react";
import { useProductDataQuery } from "services/product/get-product";

const OurProduct = () => {
  const [productData, setProductData] = React.useState([]);

  const { data: dataProduct, isLoading: isLoadingData } = useProductDataQuery({
    params: "",
    settings: "",
  });

    React.useEffect(() => {
        if (!dataProduct) {
            return;
        }

        setProductData(dataProduct?.data?.datas);
        // return () => {
        //     cleanup
        // };
    }, [dataProduct]);


  return (
    <DefaultLayout>
      <div className="mt-4 text-center font-dmserif text-3xl font-bold tracking-wider text-primary lg:mt-10 lg:text-6xl">
        Our product
      </div>
      <div className="my-8 flex flex-col gap-40 md:mt-56 md:gap-48 lg:my-32 lg:gap-40">
        {productData &&
          productData?.map((value, i) => {
            return (
              <ProductsList
                key={value.id}
                id={value.id}
                title={value.title}
                denah={value?.image_denah_path}
                images={value?.productImageSlides}
                description={value?.description}
                isLoading={isLoadingData}
                section={i < 1 ? "ourproduct" : "ourproduct2"}
              />
            );
          })}
      </div>
      <div id="form-promo" className="mb-40">
        <FormPromo />
      </div>
      <div>
        <PromoList />
      </div>
    </DefaultLayout>
  );
};

export default OurProduct;
