import React from "react";

const FeaturedPromo = (props) => {
  const { id, image, title, description, NoImage, BestOffer, SuperDeal } =
    props;

  return (
    <div className="flex flex-col md:flex-row md:gap-x-8 lg:gap-x-16">
      <div className="relative mb-8 md:mb-0 md:w-1/2 lg:w-7/12">
        <img
          src={SuperDeal}
          alt="super-deal"
          className="absolute -left-[10%] -top-[14%] h-[40%] w-[40%]"
        />
        <div className="flex h-[12rem] w-full items-center justify-center overflow-hidden rounded-3xl bg-gray-100 lg:h-[24rem]">
          <img
            src={
              image ? `${process.env.REACT_APP_API_IMAGE}/${image}` : NoImage
            }
            alt="Promo"
            className="min-h-full min-w-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col md:w-1/2 lg:w-5/12">
        <h3 className="mb-4 font-bevietnampro text-xl font-bold text-black lg:mb-8 lg:text-3xl">
          {title}
        </h3>
        <p className="mb-4 flex-grow overflow-hidden text-ellipsis font-brygada text-sm text-black md:shrink lg:text-lg">
          {description.slice(0, 200) + "..."}
        </p>
        <button
          className="relative w-full rounded bg-primary px-2 py-2 font-bevietnampro text-lg font-normal text-white lg:py-4 lg:text-xl"
          type="submit"
          onClick={() => (window.location.href = `/promo/${id}`)}
        >
          <img
            src={BestOffer}
            alt="best-offer"
            className="absolute -top-[36%] right-[1%] h-full w-[30%] lg:-top-[44%] lg:h-[130%]"
          />
          More Detail
        </button>
      </div>
    </div>
  );
};

export default FeaturedPromo;
