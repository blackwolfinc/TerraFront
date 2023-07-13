import Aos from "aos";
import BlogList from "components/BlogList";
import Fasilitas from "components/Fasilitas";
import FormPromo from "components/FormPromo";
import Gallery from "components/Gallery";
import Hero from "components/Hero";
import IntroVideo from "components/IntroVideo";
import Lokasi from "components/Lokasi";
import PartnersList from "components/PartnersList";
import ProductsList from "components/ProductsList";
import PromoList from "components/PromoList";
import Spesifikasi from "components/Spesifikasi";
import Testimoni from "components/Testimoni";
import WhyChooseUs from "components/WhyChooseUs";
import DefaultLayout from "layout/DefaultLayout";
import React from "react";
import { useProductDataQuery } from "services/product/get-product";
import { useGalleryDataQuery } from 'services/gallery/get-gallery'

Aos.init({ duration: 1000, anchorPlacement: "top-bottom", once: true });

const Homepage = () => {
  const { data: productData } = useProductDataQuery({
    params: {
      page: 1,
      paginate: 1,
    },
  });

  const { data: dataGallery } = useGalleryDataQuery({
    params: "",
    settings: "",
  });

  const showedProduct = productData?.data?.datas[0];

  const galleryData = dataGallery?.data?.datas[0];
  
  return (
    <DefaultLayout>
      <div id="hero" className="mb-40 mt-20 h-fit lg:mt-20" data-aos="fade-up">
        <Hero />
      </div>
      <div id="form-promo" className="mb-40 hidden lg:block" data-aos="fade-up">
        <FormPromo />
      </div>
      <div className="mb-40" data-aos="fade-up">
        <Fasilitas list={showedProduct?.facilities} />
      </div>
      <div id="form-promo" className="mb-40 lg:hidden" data-aos="fade-up">
        <FormPromo />
      </div>
      <div className="mb-40" data-aos="fade-up">
        <Lokasi />
      </div>
      <div className="mb-40" data-aos="fade-up">
        <ProductsList
          id={`product-${showedProduct?.id}`}
          title={"Our Product"}
          denah={showedProduct?.image_denah_path}
          images={showedProduct?.productImageSlides}
          description={showedProduct?.description}
        />
      </div>
      <div id="why-choose-us" className="mb-40" data-aos="fade-up">
        <WhyChooseUs />
      </div>
      <div className="mb-40" data-aos="fade-up">
        <Spesifikasi list={showedProduct?.specification} />
      </div>
      <div className="mb-40" data-aos="fade-up">
        <Testimoni />
      </div>
      <div id="promo-list" className="mb-40" data-aos="fade-up">
        <PromoList />
      </div>
      <div id="gallery" className="mb-10" data-aos="fade-up">
        <Gallery data={galleryData} />
      </div>
      <div className="mb-40" data-aos="fade-up">
        <IntroVideo />
      </div>
      <div className="mb-40" data-aos="fade-up">
        <BlogList />
      </div>
      <div className="mb-40" data-aos="fade-up">
        <FormPromo bgForm />
      </div>
      <div className="mx-80 my-80 h-40 bg-[url('assets/img/logo-transparent.png')] bg-contain bg-center bg-no-repeat opacity-50 max-lg:m-40 max-md:m-20"></div>
      <div id="partners">
        <PartnersList />
      </div>
    </DefaultLayout>
  );
};

export default Homepage;
