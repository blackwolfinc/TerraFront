import DefaultLayout from "layout/DefaultLayout";
import React from "react";
import Fasilitas from "components/Fasilitas";
import Spesifikasi from "components/Spesifikasi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate, useParams } from "react-router-dom";
import { useProductDataQuery } from "services/product/get-product";
import FormPromo from "components/FormPromo";
import useWindowDimensions from "utils/useWindowDimension";
import PromoList from "components/PromoList";
import Aos from "aos";

const DetailProduct = () => {
  const { id } = useParams();
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const { data: productData, isLoading: productLoading } = useProductDataQuery({
    id: id,
    settings: {
      onError: (err) => {
        navigate("/");
      },
    },
  });

  Aos.init({ duration: 1000, anchorPlacement: "top-bottom", once: true });

  return (
    <DefaultLayout>
      <div className="mt-10">
        <div className="mb-10" data-aos="fade-up">
          {!productLoading ? (
            <h1 className="text-center font-dmserif text-5xl text-primary">
              {productData?.data.title}
            </h1>
          ) : (
            <div className="mx-auto h-12 w-80 animate-pulse rounded-lg bg-gray-200"></div>
          )}
        </div>
        <div data-aos="fade-up">
          <div className="relative mx-auto w-full px-40 pb-10 max-lg:px-10">
            <div className="relative z-10 flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl shadow-custom1">
              {productLoading && (
                <div className="h-full w-full animate-pulse bg-gray-200"></div>
              )}
              {!productLoading && (
                <img
                  src={`${process.env.REACT_APP_API_IMAGE}/${productData?.data.image_denah_path}`}
                  alt="Product"
                  className="min-h-full min-w-full object-cover"
                />
              )}
            </div>
            <div className="z-0">
              <div className="absolute bottom-0 right-0 h-1/2 w-full bg-primary"></div>
            </div>
          </div>
        </div>
        {!productLoading && (
          <div>
            <div className="mx-28 py-28 max-lg:mx-10" data-aos="fade-up">
              <h3 className="font-baijamjuree text-3xl font-bold text-black/80 max-lg:text-center">
                High Quality Home
              </h3>
              <div className="my-10">
                <Swiper
                  spaceBetween={24}
                  slidesPerView={width > 768 ? 3 : 1}
                  loop={true}
                  className="product-slider"
                >
                  {productData?.data.productImageSlides.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-lg border-4 border-primary bg-primary">
                          <img
                            src={`${process.env.REACT_APP_API_IMAGE}/${item.image_path}`}
                            alt={`product-${index}`}
                            className="min-h-full min-w-full object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <p className="mb-10 w-1/2 text-justify font-serif max-lg:w-full">
                {productData?.data.description}
              </p>
              <div
                dangerouslySetInnerHTML={{
                  __html: productData?.data.detailProduct,
                }}
                className="font-serif"
              ></div>
            </div>
            <div className="mb-40" data-aos="fade-up">
              <Fasilitas list={productData?.data.facilities} />
            </div>
            <div className="mb-40" data-aos="fade-up">
              <Spesifikasi list={productData?.data.specification} />
            </div>
            <div className="mb-40" data-aos="fade-up">
              <FormPromo />
            </div>
            <div className="mb-40" data-aos="fade-up">
              <PromoList />
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default DetailProduct;
