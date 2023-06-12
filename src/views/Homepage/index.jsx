import BlogList from "components/BlogList";
import Fasilitas from "components/Fasilitas";
import Footer from "components/Footer";
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
import React from "react";

const Homepage = () => {
  return (
    <div className="min-w-screen min-h-screen bg-blue-100">
      <Hero />
      <FormPromo />
      <Fasilitas />
      <Lokasi />
      <ProductsList />
      <WhyChooseUs />
      <Spesifikasi />
      <Testimoni />
      <PromoList />
      <Gallery />
      <IntroVideo />
      <BlogList />
      <FormPromo />
      <PartnersList />
      <Footer />
    </div>
  );
};

export default Homepage;
