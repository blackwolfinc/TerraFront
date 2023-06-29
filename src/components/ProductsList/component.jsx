import React from "react";
import SwiperProduct from "./SwiperProduct";
import "swiper/swiper.css";
import spDeal from "../.././assets/img/ourproduct/sp_deal.png";
import { useNavigate } from "react-router-dom";

const Component = ({
  id,
  title,
  denah,
  images = [],
  description,
  isLoading,
  section,
}) => {
  const navigate = useNavigate();

  const onClickDetail = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className={`relative ${isLoading ? "animate-pulse" : ""}`}>
      <div className="flex h-full flex-col items-end justify-center p-10 lg:h-64">
        <SwiperProduct
          id={id}
          title={title}
          images={images}
          classContainer="w-[50%] hidden lg:block"
          section={section}
        />
      </div>
      {section === "ourproduct2" && (
        <div className="hidden w-full items-center justify-end lg:flex">
          <div className="w-[50%] border-black">
            <div
              className="w-[60%] cursor-pointer rounded-lg bg-orange-600 py-2 text-center font-bevietnampro text-xl font-bold text-white shadow-custom1"
              onClick={onClickDetail}
            >
              More Detail
            </div>
          </div>
        </div>
      )}
      <div
        className={`text flex h-full items-start justify-end p-10 lg:h-64 ${
          section === "ourproduct2" ? "bg-white" : "bg-primary"
        }`}
      >
        <div className="mt-[200px] w-full sm:mt-[20%] lg:mt-0 lg:w-[50%]">
          {/* mobile view */}
          <SwiperProduct
            id={id}
            title={title}
            images={images}
            classContainer="w-full block mb-10 lg:hidden"
            section={section}
          />
          {/**/}
          <div
            className={`text-justify font-serif leading-loose sm:text-base lg:line-clamp-6 lg:text-ellipsis lg:text-lg ${
              section === "ourproduct2" ? "text-primary" : "text-white"
            }`}
          >
            {description}
          </div>
          {section === "ourproduct" && (
            <div className="flex justify-center pt-8 lg:hidden">
              <div
                className="w-full rounded-lg bg-orange-600 py-2 text-center font-bevietnampro text-sm font-bold text-white shadow-custom1"
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
      <div className="absolute top-0 max-w-[600px] px-2 sm:px-0 md:bottom-[60%] md:left-[10%] md:w-full lg:bottom-[15%] lg:left-[2%] lg:w-[45%]">
        <img
          className="h-full w-full object-center sm:rounded-lg md:h-[400px] lg:h-full "
          src={`${process.env.REACT_APP_API_IMAGE}/${denah}`}
          alt={`Denah ${title}`}
        />
        {section === "ourproduct" && (
          <>
            <div className="-mt-[3%] hidden justify-center lg:flex">
              <div
                className="w-[90%] cursor-pointer rounded-lg bg-orange-600 py-4 text-center font-bevietnampro text-xl font-bold text-white shadow-custom1"
                onClick={onClickDetail}
              >
                More Detail
              </div>
            </div>
            <div className="absolute -left-[5%] -top-[10%] md:-left-[8%] md:-top-[10%] lg:-left-[10%] lg:-top-[12%] ">
              <img className="w-40 sm:w-60" src={spDeal} alt="super deal" />
            </div>
          </>
        )}
        {section === "ourproduct2" && (
          <>
            <div className="-mt-[3%] flex justify-center">
              <div
                className="w-[90%] cursor-pointer rounded-lg bg-orange-600 py-4 text-center font-bevietnampro text-xl font-bold text-white shadow-custom1"
                onClick={onClickDetail}
              >
                More Detail
              </div>
            </div>
            <div className="absolute -left-[5%] -top-[10%] md:-left-[8%] md:-top-[10%] lg:-left-[10%] lg:-top-[12%] ">
              <img className="w-40 sm:w-60" src={spDeal} alt="super deal" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Component;
