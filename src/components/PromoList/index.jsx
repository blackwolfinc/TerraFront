import React from "react";
import { usePromoDataQuery } from "services/promo/get-all-promos";
import BestOffer from "../../assets/img/promo/best-offer.png";
import NoImage from "../../assets/img/no-image.jpg";
import SuperDeal from "../../assets/img/promo/super-deal.png";
import FeaturedPromo from "./FeaturedPromo";
import PromoItem from "./PromoItem";

const PromoList = () => {
  const { data: promoData } = usePromoDataQuery({
    params: {
      page: 1,
      paginate: 3,
    },
  });

  return (
    <div className="px-6 py-4 lg:px-24">
      <h1 className="mb-12 text-center font-arimo text-2xl font-extrabold text-[#092138] md:mb-16 md:text-4xl lg:mb-24 lg:text-5xl">
        Special Promotion
      </h1>
      <div className="mb-14 md:px-6">
        {promoData?.data.datas?.map(
          (promo) =>
            promo.category === "SPECIAL" && (
              <FeaturedPromo
                key={promo.id}
                id={promo.id}
                image={promo.image}
                title={promo.title}
                description={promo.description}
                NoImage={NoImage}
                BestOffer={BestOffer}
                SuperDeal={SuperDeal}
              />
            )
        )}
      </div>
      <div className="grid gap-y-16 md:gap-y-6 md:px-6">
        {promoData?.data.datas?.map(
          (promo) =>
            promo.category === "STANDARD" && (
              <PromoItem
                key={promo.id}
                id={promo.id}
                image={promo.image}
                title={promo.title}
                description={promo.description}
                NoImage={NoImage}
              />
            )
        )}
      </div>
    </div>
  );
};

export default PromoList;
