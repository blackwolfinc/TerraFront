import React from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import TerraLogo from "assets/img/terra-logo.png";

const Navbar = () => {
  return (
    <nav className="min-w-screen">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-20 py-6">
        <img src={TerraLogo} alt="Terra Logo" className="w-40" />
        <div className="flex gap-10 font-serif font-light text-primary">
          <a href="/#">Home</a>
          <a href="/#">Products</a>
          <a href="/#">Gallery</a>
          <a href="/#">Our Partners</a>
          <a href="/#">About Us</a>
          <HiOutlineMagnifyingGlass
            size={24}
            className="cursor-pointer text-primary"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
