import React from "react";
import TerraLogoWhite from "assets/img/terra-logo-white.png";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { HiOutlineMail, HiPhone } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="w-full bg-dark-primary max-md:mt-60 max-md:bg-white">
      <div className="mx-auto flex max-w-7xl max-md:flex-col">
        <div className="w-1/2 bg-dark-primary px-10 py-20 font-baijamjuree text-white max-md:order-2 max-md:w-full">
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
          <div className="flex flex-1 gap-8 px-10 max-md:relative max-md:flex-col max-md:items-center max-md:gap-0 max-md:px-0 max-md:pt-32 max-sm:pt-16">
            <div className="-top-1/2 max-md:absolute">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.372306013702!2d111.89092857671346!3d-8.063453671244664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78e2dd9dbdf3e3%3A0x540402dd85e005f3!2sJl.%20Mayjend%20Sungkono%20No.84%2C%20Kutoanyar%2C%20Kec.%20Tulungagung%2C%20Kabupaten%20Tulungagung%2C%20Jawa%20Timur%2066219!5e0!3m2!1sid!2sid!4v1686721217281!5m2!1sid!2sid"
                className="h-[240px] w-[360px] rounded-md max-sm:h-[160px] max-sm:w-[240px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="font-baijamjuree text-white max-md:w-full max-md:bg-primary max-md:px-10 max-md:pt-4">
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
              <p className="max-md:hidden">
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
