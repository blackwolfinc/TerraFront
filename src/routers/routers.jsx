import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailProduct from "views/DetailProduct";
import Homepage from "views/Homepage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="product">
        <Route path=":id" element={<DetailProduct />} />
      </Route>
    </Routes>
  );
};

export default Routers;
