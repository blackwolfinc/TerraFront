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
        <div className="mx-auto max-w-screen-xl py-20">
          <div className="flex h-full w-3/5 flex-col items-center justify-center max-lg:w-full">
            <div className="grid w-full grid-cols-3 gap-6 gap-y-8 px-10 max-lg:flex max-lg:flex-wrap max-lg:items-center max-lg:justify-center">
              {partnerData?.data.datas.map((partner, i) => (
                <div
                  key={`partner-${i}`}
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
    </div>
  );
};

export default PartnersList;
