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
      <main className=" mx-auto mt-32 bg-white">{children}</main>
      <Footer id="about" />
    </>
  );
};

export default DefaultLayout;
