import React, { useEffect } from "react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

const DefaultLayout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="mx-auto mt-20 bg-white lg:mt-16">{children}</main>
      <Footer id="about" />
    </>
  );
};

export default DefaultLayout;
