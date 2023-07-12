import DefaultLayout from 'layout/DefaultLayout'
import React from 'react'
import GalleryComponent from 'components/Gallery'
import IntroVideo from 'components/IntroVideo'
import FormPromo from 'components/FormPromo'
import { useGalleryDataQuery } from 'services/gallery/get-gallery'
import PromoList from 'components/PromoList'
import PartnersList from 'components/PartnersList'

const GalleryPage = () => {

  const { data: dataGallery } = useGalleryDataQuery({
    params: "",
    settings: "",
  });

  const galleryData = dataGallery?.data?.datas[0];
  
  return (
    <DefaultLayout>
      <div className="mb-40 px-16 pt-28 font-dmserif text-6xl font-bold tracking-wider text-primary lg:mb-40 lg:pt-32 lg:text-center">
        Gallery
      </div>
      <div>
        <GalleryComponent section={true} data={galleryData} />
      </div>
      <div>
        <IntroVideo />
      </div>
      <div>
        {dataGallery?.data && dataGallery?.data?.datas?.slice(1,3).map((value, index) => {
          return <GalleryComponent section={true} data={value} key={index} />
        })}
      </div>
      <div className='py-[5%]'>
        <FormPromo bgForm />
      </div>
      <div id="promo-list" className="mb-40" data-aos="fade-up">
        <PromoList onlyFeatured />
      </div>
      <div id="partners">
        <PartnersList />
      </div>
    </DefaultLayout>
  )
}

export default GalleryPage