import React from "react";
import { useGalleryDataQuery } from "../../services/gallery/get-gallery";
import SwipperGallery from "./SwiperGallery";

const Gallery = () => {
  //Data
  const [galleryData, setGalleryData] = React.useState([]);

  const { data: dataGallery } = useGalleryDataQuery({
    params: "",
    settings: "",
  });

  React.useEffect(() => {
    if (!dataGallery) {
      return;
    }

    setGalleryData(dataGallery?.data?.datas[0]);
    // return () => {
    //   cleanup
    // };
  }, [dataGallery]);

  return (
    <>
      <div>
        <div className="bg-primary py-6 text-center font-dmserif text-3xl text-white md:text-6xl">
          Galery
        </div>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col justify-start gap-10 bg-white py-8">
            <SwipperGallery value={galleryData} key={galleryData.id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
