import React from "react";
import locationTerra from "../../assets/img/location.png";

const Lokasi = () => {
  const redirectMap = () => {
    return window.open(
      "https://www.google.com/maps/place/Cluster+Terrakota+Residence/@-7.595189,111.9071191,17z/data=!4m14!1m7!3m6!1s0x2e784bc6d36ca82f:0xbc2623cb6c4f9a3a!2sCluster+Terrakota+Residence!8m2!3d-7.595189!4d111.909694!16s%2Fg%2F11st9yjgf9!3m5!1s0x2e784bc6d36ca82f:0xbc2623cb6c4f9a3a!8m2!3d-7.595189!4d111.909694!16s%2Fg%2F11st9yjgf9?entry=ttu"
    );
  };

  return (
    <div className="py-8 md:py-6 sm:py-0">
      <div className="w-full py-12 text-center text-4xl font-bold text-primary">
        Tempat Strategis
      </div>
      <div className="w-full lg:relative md:flex flex-col justify-center items-center">
          <img
            className="transform transition duration-500 lg:hover:scale-105 lg:w-[90%] lg:rounded-lg"
            // width={"90%"}
            src={locationTerra}
            alt="location"
            onClick={() => redirectMap()}
          />
          <div className="absolute lg:-top-[5%] -top-[8%] left-[10%] z-1 aspect-[1/3] lg:w-6 md:w-0 rounded-lg bg-[#3B5858] opacity-75 shadow-custom1 "></div>
          <div className="absolute lg:-top-[5%] -top-[8%] left-[15%] z-1 aspect-[1/3] lg:w-6 md:w-0 rounded-lg bg-[#3B5858] opacity-75 shadow-custom1 "></div>
        <div className="lg:absolute bottom-[10%] right-[2%] lg:w-96 w-full lg:bg-slate-300 bg-opacity-70 p-8 lg:space-y-0 space-y-5 text-justify text-primary">
          <div className="text-xl font-bold opacity-100">
            Terrakota Residence
          </div>
          <div className="flex flex-col gap-5 text-xs opacity-100">
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </div>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown{" "}
            </div>
            <div>
              printer took a galley of type and scrambled it to make a type
              specimen book.{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lokasi;
