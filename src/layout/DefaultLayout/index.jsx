import React from "react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-screen-xl bg-white">{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
