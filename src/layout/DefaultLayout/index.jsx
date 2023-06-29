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
      <main className="mx-auto max-w-screen-xl bg-white">{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
