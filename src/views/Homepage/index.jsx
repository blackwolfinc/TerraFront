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
      <Hero />
      <div className="mb-[300px]">
        <FormPromo />
      </div>
      <div className="mb-[300px]">
        <Fasilitas />
      </div>
      <Lokasi />
      <ProductsList />
      <WhyChooseUs />
      <div className="mb-[300px]">
        <Spesifikasi />
      </div>
      <div className="mb-[270px]">
        <Testimoni />
      </div>
      <div className="mb-[300px]">
        <PromoList />
      </div>
      <Gallery />
      <IntroVideo />
      <div className="mb-[300px]">
        <BlogList />
      </div>
      <div className="mb-[300px]">
        <FormPromo />
      </div>
      <PartnersList />
    </DefaultLayout>
  );
};

export default Homepage;
