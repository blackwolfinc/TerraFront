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

  console.log(promoData);

  return (
    <div className="px-16 py-20 ">
      <h3 className="mb-28 font-arimo text-5xl font-bold text-[#092138]">
        Special Promotion
      </h3>
      <div className="mb-28">
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
      <div className="grid gap-12">
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
