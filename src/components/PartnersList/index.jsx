import React from "react";

const PartnerDummyData = [
  {
    id: 6,
    title: "BLP Property",
    image: "image-1686718232359-cropped-logo-blp2-1.png",
    link: "https://boomesport.gg/",
    createdAt: "2023-06-10T02:45:03.000Z",
    updatedAt: "2023-06-14T04:50:32.000Z",
  },
  {
    id: 4,
    title: "Wonderful Indonesia",
    image: "image-1686717728801-621437638c977337188787.png",
    link: "dasd",
    createdAt: "2023-06-04T17:00:02.000Z",
    updatedAt: "2023-06-14T04:42:08.000Z",
  },
  {
    id: 5,
    title: "Holcim",
    image: "image-1686717697901-Holcim_logo.svg.png",
    link: "https://github.com/",
    createdAt: "2023-06-04T17:15:32.000Z",
    updatedAt: "2023-06-14T04:41:37.000Z",
  },
  {
    id: 6,
    title: "BLP Property",
    image: "image-1686718232359-cropped-logo-blp2-1.png",
    link: "https://boomesport.gg/",
    createdAt: "2023-06-10T02:45:03.000Z",
    updatedAt: "2023-06-14T04:50:32.000Z",
  },
  {
    id: 4,
    title: "Wonderful Indonesia",
    image: "image-1686717728801-621437638c977337188787.png",
    link: "dasd",
    createdAt: "2023-06-04T17:00:02.000Z",
    updatedAt: "2023-06-14T04:42:08.000Z",
  },
  {
    id: 5,
    title: "Holcim",
    image: "image-1686717697901-Holcim_logo.svg.png",
    link: "https://github.com/",
    createdAt: "2023-06-04T17:15:32.000Z",
    updatedAt: "2023-06-14T04:41:37.000Z",
  },
  {
    id: 6,
    title: "BLP Property",
    image: "image-1686718232359-cropped-logo-blp2-1.png",
    link: "https://boomesport.gg/",
    createdAt: "2023-06-10T02:45:03.000Z",
    updatedAt: "2023-06-14T04:50:32.000Z",
  },
  {
    id: 4,
    title: "Wonderful Indonesia",
    image: "image-1686717728801-621437638c977337188787.png",
    link: "dasd",
    createdAt: "2023-06-04T17:00:02.000Z",
    updatedAt: "2023-06-14T04:42:08.000Z",
  },
  {
    id: 5,
    title: "Holcim",
    image: "image-1686717697901-Holcim_logo.svg.png",
    link: "https://github.com/",
    createdAt: "2023-06-04T17:15:32.000Z",
    updatedAt: "2023-06-14T04:41:37.000Z",
  },
];

const PartnersList = () => {
  return (
    <div>
      <h3 className="mb-10 text-center font-bevietnampro text-2xl font-extrabold tracking-widest text-primary">
        OUR PARTNER
      </h3>
      <div
        className={`h-[550px] bg-[url(assets/img/bg-our-partners.png)] bg-cover`}
      >
        <div className="flex h-full w-3/5 flex-col items-center justify-center">
          <div className="grid w-full grid-cols-3 gap-6 gap-y-8 px-10">
            {PartnerDummyData.map((partner) => (
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
