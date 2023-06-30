import React from "react";

const PromoItem = (props) => {
  const { id, image, title, description, NoImage } = props;

  return (
    <a
      href={"/promo/" + id}
      className="flex flex-col no-underline md:flex-row md:gap-x-8 lg:gap-x-16"
    >
      <div className="mb-4 md:w-1/2">
        <div className="flex h-[12rem] items-center justify-center overflow-hidden rounded-2xl border-[16px] lg:h-[18rem]">
          <img
            src={
              image ? `${process.env.REACT_APP_API_IMAGE}/${image}` : NoImage
            }
            alt="Promo"
            className="min-h-full min-w-full object-cover"
          />
        </div>
      </div>
      <div className="md:w-1/2">
        <div className="flex flex-col">
          <h3 className="mb-2 font-bevietnampro text-xl font-bold text-black lg:mb-6 lg:text-3xl">
            {title}
          </h3>
          <p className="overflow-hidden text-ellipsis font-brygada text-sm text-black lg:text-lg">
            {description.slice(0, 250) + "..."}
          </p>
        </div>
      </div>
    </a>
  );
};

export default PromoItem;
