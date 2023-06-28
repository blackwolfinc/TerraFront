import { data } from 'autoprefixer';
import FormPromo from 'components/FormPromo';
import ProductsList from 'components/ProductsList/component'
import PromoList from 'components/PromoList';
import DefaultLayout from 'layout/DefaultLayout'
import React from 'react'
import { useProductDataQuery } from 'services/product/get-product';

const OurProduct = () => {
    const [productData, setProductData] = React.useState([]);

    const { data: dataProduct, isLoading:isLoadingData } = useProductDataQuery({
        params: "",
        settings: "",
    });

    React.useEffect(() => {
        if (!dataProduct) {
            return;
        }
        const datas = [...dataProduct?.data?.datas, ...dataProduct?.data?.datas]
        console.log('dad', datas)
        // setProductData(dataProduct?.data?.datas);
        setProductData(datas);
        // return () => {
        //     cleanup
        // };
    }, [dataProduct]);

  return (
      <DefaultLayout>
        <div className='uppercase text-4xl font-bold text-center font-bevietnampro'>
            Our product
        </div>
        <div className="my-32 md:mt-56 flex flex-col gap-32 lg:gap-10 md:gap-48">
              {productData && productData?.map((value, i) => {
                return (
                    <ProductsList
                        isLoading={isLoadingData}
                        productData={value}
                        section={(i < 1) ? 'ourproduct': 'ourproduct2'}
                    />
                )
            })}
        </div>
        <div id="form-promo" className="mb-40">
            <FormPromo />
        </div>
        <div>
            <PromoList />
        </div>
      </DefaultLayout>
  )
}

export default OurProduct