import DefaultLayout from "layout/DefaultLayout";
import React from "react";
import Fasilitas from "components/Fasilitas";
import Spesifikasi from "components/Spesifikasi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate, useParams } from "react-router-dom";
import { useProductDataQuery } from "services/product/get-product";
import FormPromo from "components/FormPromo";
import PromoList from "components/PromoList";
import Aos from "aos";

const DetailProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: productData, isLoading: productLoading } = useProductDataQuery({
    id: id,
    settings: {
      onError: (err) => {
        navigate("/");
      },
    },
  });

  const getImages = () => {
    if (!productData) return [];

    const images = productData?.data.productImageSlides;

    if (images.length === 0) {
      return [];
    }

    const minimum = 6;
    const imagePaths = images.map((image) => image.image_path);
    const dupImages = [];

    while (dupImages.length < minimum) {
      dupImages.push(...imagePaths);
    }

    return dupImages;
  };

  Aos.init({ duration: 1000, anchorPlacement: "top-bottom", once: true });

  return (
    <DefaultLayout>
      <div className="mt-10">
        <div className="mb-32" data-aos="fade-up">
          {!productLoading ? (
            <h1 className="break-words px-8 font-dmserif text-6xl text-primary lg:text-center lg:text-7xl">
              {productData?.data.title}
            </h1>
          ) : (
            <div className="mx-auto h-12 w-80 animate-pulse rounded-lg bg-gray-200"></div>
          )}
        </div>
        <div data-aos="fade-up" className="mb-6 lg:mb-40">
          <div className="relative mx-auto w-full px-40 pb-16 max-lg:px-10">
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
            <div className="mx-3 mb-20 lg:mx-28" data-aos="fade-up">
              <h3 className="mb-7 text-center font-baijamjuree text-2xl font-bold text-black/80 lg:mb-14 lg:text-start lg:text-6xl">
                High Quality Home
              </h3>
              <div className="mb-7 lg:mb-24">
                <Swiper
                  spaceBetween={24}
                  slidesPerView={3}
                  loop={true}
                  className="product-slider"
                >
                  {getImages()?.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-lg border-2 border-primary bg-primary lg:aspect-video lg:border-4">
                          <img
                            src={`${process.env.REACT_APP_API_IMAGE}/${item}`}
                            alt={`product-${index}`}
                            className="min-h-full min-w-full object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <p className="mb-10 w-1/2 text-justify font-serif text-lg max-lg:w-full">
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
              <PromoList onlyFeatured />
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default DetailProduct;
