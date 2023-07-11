import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailBlogs from "views/DetailBlogs";
import DetailProduct from "views/DetailProduct";
import OurProduct from "views/OurProduct";
import Homepage from "views/Homepage";
import Blogs from "views/Blogs";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="product">
        <Route path="" element={<OurProduct />} />
        <Route path=":id" element={<DetailProduct />} />
      </Route>
      <Route path="blogs">
        <Route path="" element={<Blogs />} />
        <Route path=":id" element={<DetailBlogs />} />
      </Route>
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};

export default Routers;
