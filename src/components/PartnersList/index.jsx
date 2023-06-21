import React from "react";
import { usePartnersDataQuery } from "services/partners/get-partners";

const PartnersList = () => {
  const { data: partnerData } = usePartnersDataQuery({});

  return (
    <div>
      <h3 className="mb-10 text-center font-bevietnampro text-2xl font-extrabold tracking-widest text-primary">
        OUR PARTNER
      </h3>
      <div
        className={`h-[550px] bg-[url(assets/img/bg-our-partners.png)] bg-cover`}
      >
        <div className="flex h-full w-3/5 flex-col items-center justify-center max-md:w-full">
          <div className="grid w-full grid-cols-3 gap-6 gap-y-8 px-10 max-md:flex max-md:flex-wrap max-md:items-center max-md:justify-center">
            {partnerData?.data.datas.map((partner) => (
              <div
                className="flex h-20 cursor-pointer items-center justify-center"
                onClick={() => window.open(partner.link, "_blank")}
              >
                <img
                  src={`${process.env.REACT_APP_API_IMAGE}/${partner.image}`}
                  alt={partner.title}
                  className="max-h-full max-w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersList;
