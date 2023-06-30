import Aos from "aos";
import FormPromo from "components/FormPromo";
import ProductsList from "components/ProductsList";
import PromoList from "components/PromoList";
import DefaultLayout from "layout/DefaultLayout";
import React from "react";
import { useProductDataQuery } from "services/product/get-product";

Aos.init({ duration: 1000, anchorPlacement: "top-bottom", once: true });

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
      <div className="mb-40 mt-4 px-16 font-dmserif text-6xl font-bold tracking-wider text-primary lg:mb-40 lg:mt-10 lg:text-center">
        Our product
      </div>
      <div className="flex flex-col gap-40 lg:mb-40">
        {productData &&
          productData?.map((value, i) => {
            return (
              <div key={value.id} data-aos="fade-up">
                <ProductsList
                  id={value.id}
                  title={value.title}
                  denah={value?.image_denah_path}
                  images={value?.productImageSlides}
                  description={value?.description}
                  isLoading={isLoadingData}
                  showCategory={true}
                  showButton1={i === 0}
                  showButton2={i > 0}
                  section={i > 0 ? "ourproduct2" : "ourproduct1"}
                />
              </div>
            );
          })}
      </div>
      <div id="form-promo" className="mb-40" data-aos="fade-up">
        <FormPromo bgForm />
      </div>
      <div className="mb-40" data-aos="fade-up">
        <PromoList onlyFeatured />
      </div>
    </DefaultLayout>
  );
};

export default OurProduct;
