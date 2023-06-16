import React from "react";

const FeaturedPromo = (props) => {
  const { id, image, title, description, NoImage, BestOffer, SuperDeal } =
    props;

  return (
    <div className="flex w-full gap-16">
      <div className="relative">
        <img
          src={SuperDeal}
          alt="super-deal"
          className="absolute -left-12 -top-16 h-[40%] w-[40%]"
        />
        <div className="flex h-[400px] items-center justify-center overflow-hidden rounded-3xl bg-gray-100">
          <img
            src={`${process.env.REACT_APP_API_IMAGE}/${image}` || NoImage}
            alt="Promo"
            className="min-h-full min-w-full object-cover"
          />
        </div>
      </div>
      <div className="flex h-auto w-5/12 flex-col">
        <h3 className="mb-8 font-bevietnampro text-3xl font-bold text-black">
          {title}
        </h3>
        <p className="flex-grow font-brygada text-xl text-black">
          {description}
        </p>
        <button
          className="focus:shadow-outline relative w-full rounded bg-primary px-4 py-4 font-bevietnampro text-2xl font-medium text-white hover:bg-primary focus:outline-none"
          type="submit"
          onClick={() => window.location.href=`/promo/${id}`}
        >
          <img
            src={BestOffer}
            alt="best-offer"
            className="absolute -top-8 right-5 h-[150%] w-[30%]"
          />
          More Detail
        </button>
      </div>
    </div>
  );
};

export default FeaturedPromo;
