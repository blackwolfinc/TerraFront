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

const Homepage = () => {
  return (
    <DefaultLayout>
      <div id="hero">
        <Hero />
      </div>
      <div id="form-promo" className="mb-40">
        <FormPromo />
      </div>
      <div className="mb-40">
        <Fasilitas />
      </div>
      <div className="mb-40">
        <Lokasi />
      </div>
      <div className="mb-40">
        <ProductsList />
      </div>
      <div className="mb-40">
        <WhyChooseUs />
      </div>
      <div className="mb-40">
        <Spesifikasi />
      </div>
      <div className="mb-40">
        <Testimoni />
      </div>
      <div className="mb-40">
        <PromoList />
      </div>
      <div className="mb-10">
        <Gallery />
      </div>
      <div className="mb-40">
        <IntroVideo />
      </div>
      <div className="mb-40">
        <BlogList />
      </div>
      <div className="mb-40">
        <FormPromo />
      </div>
      <div className="mx-80 my-80 h-40 bg-[url('assets/img/logo-transparent.png')] bg-contain bg-center bg-no-repeat opacity-50 max-lg:m-40 max-md:m-20"></div>
      <PartnersList />
    </DefaultLayout>
  );
};

export default Homepage;
