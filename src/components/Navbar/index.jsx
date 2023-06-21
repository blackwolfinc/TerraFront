import React from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { MdMenu, MdClose } from "react-icons/md";
import TerraLogo from "assets/img/terra-logo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <nav className="min-w-screen">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-20 py-6 max-lg:px-2">
        <img src={TerraLogo} alt="Terra Logo" className="w-40 max-sm:w-28" />
        <button
          className="hidden max-md:block"
          onClick={() => setShowMenu(true)}
        >
          <MdMenu size={36} />
        </button>
        <div
          className={`max-md:fixed max-md:left-0 max-md:top-0 max-md:z-[999] max-md:h-screen max-md:w-screen max-md:bg-white/80 ${
            showMenu ? "" : "max-md:translate-x-full"
          } transition-all duration-300`}
        >
          <button
            className="absolute right-10 top-10 hidden max-md:z-[1000] max-md:block"
            onClick={() => setShowMenu(false)}
          >
            <MdClose size={36} />
          </button>
          <div className="flex gap-10 font-serif font-light text-primary max-md:h-full max-md:w-full max-md:flex-col max-md:items-center max-md:justify-center max-md:font-bold max-md:backdrop-blur-sm">
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
      </div>
    </nav>
  );
};

export default Navbar;
