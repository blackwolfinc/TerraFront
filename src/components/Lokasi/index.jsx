import React from "react";
import locationTerra from "../../assets/img/location.png";

const Lokasi = () => {
  const redirectMap = () => {
    return window.open(
      "https://www.google.com/maps/place/Cluster+Terrakota+Residence/@-7.595189,111.9071191,17z/data=!4m14!1m7!3m6!1s0x2e784bc6d36ca82f:0xbc2623cb6c4f9a3a!2sCluster+Terrakota+Residence!8m2!3d-7.595189!4d111.909694!16s%2Fg%2F11st9yjgf9!3m5!1s0x2e784bc6d36ca82f:0xbc2623cb6c4f9a3a!8m2!3d-7.595189!4d111.909694!16s%2Fg%2F11st9yjgf9?entry=ttu"
    );
  };

  return (
    <div className="py-8">
      <div className="w-full py-12 text-center text-4xl font-bold text-primary">
        Tempat Strategis
      </div>
      <div className="relative flex w-full justify-center">
        <img
          className="transform transition duration-500 hover:scale-105"
          width={"90%"}
          src={locationTerra}
          alt="location"
          onClick={() => redirectMap()}
        />
        <div className="absolute bottom-[10%] right-0 w-96 bg-slate-300 bg-opacity-70 p-8">
          <div className="md: text-xl font-bold opacity-100">
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
