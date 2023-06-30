import React, { useEffect, useState } from "react";
import SwiperProduct from "./SwiperProduct";
import "swiper/swiper.css";
import spDeal from "assets/img/ourproduct/sp_deal.png";
import { useNavigate } from "react-router-dom";
import NoImage from "assets/img/no-image.jpg";

const Component = ({
  id,
  title,
  denah,
  showCategory = false,
  showButton1 = false,
  showButton2 = false,
  images = [],
  description,
  isLoading,
  section,
}) => {
  const navigate = useNavigate();
  const [showedImages, setShowedImages] = useState(null);

  useEffect(() => {
    if (images.length === 0) {
      setShowedImages(null);
      return;
    }

    setShowedImages(images[0].image_path);
  }, [images]);

  const onChangeShowedImage = (path) => {
    setShowedImages(path);
  };

  const onClickDetail = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      className={`relative w-full pt-[80px] md:mt-[300px] lg:mt-0 lg:pt-0 ${
        isLoading ? "animate-pulse" : ""
      }`}
    >
      <div className="hidden h-full flex-col items-end justify-center pb-10 lg:flex lg:h-auto">
        <SwiperProduct
          id={id}
          title={title}
          images={images}
          classContainer={`w-[50%] text-primary`}
          section={section}
          onClickImage={onChangeShowedImage}
        />
      </div>
      {showButton2 && (
        <div className="hidden w-full items-center justify-end lg:flex">
          <div className="w-[50%] border-black">
            <div
              className="w-[60%] cursor-pointer rounded-lg bg-accent py-4 text-center font-bevietnampro text-xl font-bold text-white shadow-custom1"
              onClick={onClickDetail}
            >
              More Detail
            </div>
          </div>
        </div>
      )}
      <div
        className={`text lg:min-h-64 flex h-full items-start justify-end px-6 pb-16 lg:p-16 ${
          section === "ourproduct2"
            ? "bg-white text-primary"
            : "bg-primary text-white"
        }`}
      >
        <div
          className={`w-full ${
            section === "ourproduct2" ? "pt-[55%]" : "pt-[40%]"
          } md:pt-20 lg:mt-0 lg:w-[50%] lg:pt-0`}
        >
          {/* mobile view */}
          <SwiperProduct
            id={id}
            title={title}
            images={images}
            classContainer={`w-full block mb-10 mt-10 lg:hidden ${
              section === "ourproduct2" ? "text-primary" : "text-white"
            }`}
            section={section}
            onClickImage={onChangeShowedImage}
          />
          {/**/}
          <div
            className={`text-justify font-serif text-xs leading-loose sm:text-base lg:line-clamp-6 lg:text-ellipsis lg:text-2xl ${
              section === "ourproduct2" ? "text-primary" : "text-white"
            }`}
          >
            {description}
          </div>
          {showButton1 && (
            <div className="flex justify-center pt-8 lg:hidden">
              <div
                className="w-full rounded-lg bg-accent py-4 text-center font-bevietnampro font-bold text-white shadow-custom1 md:text-xl"
                onClick={onClickDetail}
              >
                More Detail
              </div>
            </div>
          )}
        </div>
        {section === "ourproduct2" && (
          <div className="bottom-0 left-0 hidden h-[50%] w-[40%] rounded-e-xl bg-primary lg:absolute"></div>
        )}
      </div>
      <div className="absolute top-0 aspect-video max-w-[600px] px-6 md:-top-72 md:left-[10%] md:right-[10%] md:mx-auto md:aspect-[58/43] md:w-full md:px-0 lg:bottom-12 lg:left-[2%] lg:top-0 lg:mx-0 lg:h-[420px] lg:w-[45%]">
        <div className="relative h-full w-full">
          <div className="relative z-10 h-full w-full overflow-hidden rounded-lg shadow-custom1">
            <img
              className="min-h-full min-w-full object-cover object-center"
              src={`${
                showedImages
                  ? `${process.env.REACT_APP_API_IMAGE}/${showedImages}`
                  : NoImage
              }`}
              alt={`Preview`}
            />
          </div>
          {section === "ourproduct2" && (
            <div className="absolute -left-7 -right-7 top-1/2 h-3/4 bg-primary lg:right-auto lg:w-11/12 lg:rounded-r-xl"></div>
          )}
          {showCategory && (
            <div className="absolute -left-3 -top-4 z-10 lg:-left-3 lg:-top-10">
              <img className="w-28 lg:w-48" src={spDeal} alt="super deal" />
            </div>
          )}
          {showButton1 && (
            <div className="z-10 -mt-[6%] hidden w-full justify-center lg:absolute lg:flex">
              <div
                className="w-[90%] cursor-pointer rounded-lg bg-accent py-4 text-center font-bevietnampro text-xl font-bold text-white shadow-custom1"
                onClick={onClickDetail}
              >
                More Detail
              </div>
            </div>
          )}
          {showButton2 && (
            <div className="absolute z-10 -mt-[6%] flex w-full justify-center lg:hidden">
              <div
                className="w-[90%] cursor-pointer rounded-lg bg-accent py-3 text-center font-bevietnampro font-bold text-white shadow-custom1"
                onClick={onClickDetail}
              >
                More Detail
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Component;
