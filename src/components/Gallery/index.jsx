import React from "react";
import { useGalleryDataQuery } from '../../services/gallery/get-gallery';
import SwipperGallery from "./SwipperGallery";

const Gallery = () => {
  //Data
  const [galleryData, setGalleryData] = React.useState([]);

  const { data: dataGallery, isLoading: IsLoadingGallery } = useGalleryDataQuery({
    params: '',
    settings:''
  });

 

  React.useEffect(() => {
    if (!dataGallery) { return; }

    setGalleryData(dataGallery?.data?.datas[0])
    // return () => {
    //   cleanup
    // };
  }, [dataGallery]);
 
  return (
    <>
      <div className="pt-4 pb-16 bg-primary">
        <div className="text-center font-bold text-white text-4xl py-4">
          Galery
        </div>
        <div className="flex flex-col justify-start bg-white gap-10 py-8">
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
