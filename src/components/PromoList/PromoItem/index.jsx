import React from "react";

const PromoItem = (props) => {
  const { id, image, title, description, NoImage } = props;

  return (
    <a href={"/promo/" + id} className="flex w-full gap-16 no-underline ">
      <div className="flex h-[300px] w-5/12 items-center justify-center overflow-hidden rounded-3xl border-[16px]">
        <img
          src={`${process.env.REACT_APP_API_IMAGE}/${image}` || NoImage}
          alt="Promo"
          className="min-h-full min-w-full object-cover"
        />
      </div>
      <div className="flex h-auto w-7/12 flex-col">
        <h3 className="mb-8 font-bevietnampro text-3xl font-bold text-black">
          {title}
        </h3>
        <p className="flex-grow font-brygada text-xl text-black">
          {description}
        </p>
      </div>
    </a>
  );
};

export default PromoItem;
