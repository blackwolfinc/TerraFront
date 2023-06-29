import React from "react";
import TerraLogoWhite from "assets/img/terra-logo-white.png";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { HiOutlineMail, HiPhone } from "react-icons/hi";

const Footer = (props) => {
  return (
    <footer
      className="w-full bg-dark-primary max-lg:mt-60 max-lg:bg-white"
      {...props}
    >
      <div className="mx-auto flex max-w-7xl max-lg:flex-col">
        <div className="w-1/2 bg-dark-primary px-10 py-20 font-baijamjuree text-white max-lg:order-2 max-lg:w-full">
          <img src={TerraLogoWhite} alt="Terra Logo" className="mb-6 w-60" />
          <div className="mb-9">
            <span>
              At TERRAKOTA RESIDANCE
              <br />
              We Build Your Story.
            </span>
          </div>
          <div className="mb-6 flex gap-4">
            <FaFacebook size={36} />
            <FaInstagram size={36} />
            <FaTiktok size={36} />
          </div>
          <p className="text-xs leading-relaxed">
            For over 30 years, TERRAKOTA RESIDANCE develops and manages
            affordable to high-end homes, integrated communities,and more for
            the purpose of elevating lifestyles and improving the lives of
            everyone we touch.
          </p>
        </div>
        <div className="flex items-center bg-primary">
          <div className="flex flex-1 gap-8 px-10 max-lg:relative max-lg:flex-col max-lg:items-center max-lg:gap-0 max-lg:px-0">
            <div className="relative z-10 w-full bg-white lg:bg-transparent">
              <div className="relative z-10 flex w-full justify-center">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.372306013702!2d111.89092857671346!3d-8.063453671244664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78e2dd9dbdf3e3%3A0x540402dd85e005f3!2sJl.%20Mayjend%20Sungkono%20No.84%2C%20Kutoanyar%2C%20Kec.%20Tulungagung%2C%20Kabupaten%20Tulungagung%2C%20Jawa%20Timur%2066219!5e0!3m2!1sid!2sid!4v1686721217281!5m2!1sid!2sid"
                  className="aspect-[3/2] w-[90%] rounded-md md:w-[80%] lg:w-[360px]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full bg-primary lg:hidden"></div>
            </div>
            <div className="font-baijamjuree text-white max-lg:w-full max-lg:bg-primary max-lg:px-10 max-lg:pt-4">
              <h1 className="mb-10 text-2xl font-bold">Contact Us</h1>
              <div className="mb-10">
                <div className="mb-4 flex items-center gap-2">
                  <HiOutlineMail size={24} />
                  <span>terrabumipesada@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiPhone size={24} />
                  <span>0811-320-45678</span>
                </div>
              </div>
              <p className="max-lg:hidden">
                Jl. Mayjend Sungkono No.84, Kutoanyar, Kec. Tulungagung,
                Kabupaten Tulungagung, Jawa Timur 66219
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
