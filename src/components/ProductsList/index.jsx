import React from "react";
import Component from "./component";

const ProductsList = (props) => {
  return (
    <>
      <div className="mx-auto w-full max-w-screen-xl">
        <Component {...props} />
      </div>
    </>
  );
};

export default ProductsList;
