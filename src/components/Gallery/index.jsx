import React from "react";
import { useGalleryDataQuery } from "../../services/gallery/get-gallery";
import SwipperGallery from "./SwipperGallery";

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
      <div className="bg-primary">
        <div className="py-6 text-center font-dmserif text-6xl text-white">
          Galery
        </div>
        <div className="flex flex-col justify-start gap-10 bg-white py-8">
          {/* {galleryData && galleryData?.length > 0 && galleryData?.slice(0, 3)?.map((value) => { */}
          {/* return (
              <SwipperGallery value={value} key={value.id}/>
            )
          })} */}
          <SwipperGallery value={galleryData} key={galleryData.id} />
        </div>
      </div>
    </>
  );
};

export default Gallery;
