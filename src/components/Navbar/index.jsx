import React from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { MdMenu, MdClose } from "react-icons/md";
import TerraLogo from "assets/img/terra-logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <nav className="min-w-screen">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-20 py-6 max-lg:px-2">
        <img
          src={TerraLogo}
          alt="Terra Logo"
          className="w-40 cursor-pointer max-sm:w-28"
          onClick={() => navigate("/")}
        />
        <button
          className="hidden max-lg:block"
          onClick={() => setShowMenu(true)}
        >
          <MdMenu size={36} />
        </button>
        <div
          className={`max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:z-[999] max-lg:h-screen max-lg:w-screen max-lg:bg-white/80 ${
            showMenu ? "" : "max-lg:translate-x-full"
          } transition-all duration-300`}
        >
          <button
            className="absolute right-10 top-10 hidden max-lg:z-[1000] max-lg:block"
            onClick={() => setShowMenu(false)}
          >
            <MdClose size={36} />
          </button>
          <div className="flex gap-10 font-serif font-light text-primary max-lg:h-full max-lg:w-full max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:font-bold max-lg:backdrop-blur-sm">
<<<<<<< Updated upstream
            <span className={"cursor-pointer"} onClick={() => navigate("/")}>
              Home
            </span>
            <span
              className={"cursor-pointer"}
              onClick={() => navigate("/product")}
            >
              Products
            </span>
            <span
              className={"cursor-pointer"}
              onClick={() => navigate("#gallery")}
            >
              Gallery
            </span>
            <span
              className={"cursor-pointer"}
              onClick={() => navigate("#partner")}
            >
              Our Partners
            </span>
            <span
              className={"cursor-pointer"}
              onClick={() => navigate("/about")}
            >
              About Us
            </span>
=======
            <a href="/#">Home</a>
            <a href="/products">Products</a>
            <a href="/#">Gallery</a>
            <a href="/#">Our Partners</a>
            <a href="/#">About Us</a>
>>>>>>> Stashed changes
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
