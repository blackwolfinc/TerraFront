import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import SpesifikasiImg from "assets/img/spesifikasi/spesifikasi.png";
import Spesifikasi1 from "assets/img/spesifikasi/spesifikasi1.png";
import Spesifikasi2 from "assets/img/spesifikasi/spesifikasi2.png";
import Spesifikasi3 from "assets/img/spesifikasi/spesifikasi3.png";
import Spesifikasi4 from "assets/img/spesifikasi/spesifikasi4.png";
import Spesifikasi5 from "assets/img/spesifikasi/spesifikasi5.png";
import Spesifikasi6 from "assets/img/spesifikasi/spesifikasi6.png";
import Spesifikasi7 from "assets/img/spesifikasi/spesifikasi7.png";
import Spesifikasi8 from "assets/img/spesifikasi/spesifikasi8.png";

const SpesifikasiList = [
  "Pondasi : Batu Kali + Stauss Pile ",
  "Struktur : Beton Bertulang",
  "Dinding : Bata Merah Plester Aci",
  "Lantai : Keramik 40x40",
  "Plafond : Gypsum Rangka Hollow",
];

const SpesifikasiImageList = [
  Spesifikasi1,
  Spesifikasi2,
  Spesifikasi3,
  Spesifikasi4,
  Spesifikasi5,
  Spesifikasi6,
  Spesifikasi7,
  Spesifikasi8,
];

const Spesifikasi = () => {
  return (
    <div>
      <div className="mx-10 max-md:mx-0">
        <div className="relative mb-20 flex w-full items-center max-md:flex-col">
          <div className="w-1/2 max-md:relative max-md:w-full">
            <div className="relative z-10 flex aspect-square w-full items-center max-md:aspect-video">
              <div className="relative aspect-square w-4/5 max-md:aspect-video max-md:w-full max-md:px-10">
                <div className="overflow-hidden rounded-lg">
                  <img
                    className="aspect-square w-full object-cover max-md:aspect-[4/3]"
                    src={SpesifikasiImg}
                    alt="spesifikasi"
                  />
                </div>
                <div className="absolute -top-[10%] right-5 aspect-[1/3] w-8 rounded-lg bg-[#3B5858] shadow-custom1 max-md:-top-[5%] max-md:right-20 max-md:aspect-[1/2] max-md:w-6"></div>
                <div className="absolute -top-[10%] right-16 aspect-[1/3] w-8 rounded-lg bg-[#3B5858] shadow-custom1 max-md:-top-[5%] max-md:right-28 max-md:aspect-[1/2] max-md:w-6 "></div>
              </div>
            </div>
            <div className="absolute right-1/2 top-0 z-0 h-full w-1/4 bg-primary max-md:bottom-0 max-md:right-0 max-md:top-auto max-md:h-1/2 max-md:w-full"></div>
          </div>
          <div className="flex flex-1 items-center bg-primary py-28 pl-10 max-md:w-full max-md:px-14 max-sm:py-14">
            <div className="text-white">
              <h3 className="mb-10 font-dmserif text-6xl leading-snug max-sm:text-2xl">
                Spesifikasi Bangunan
              </h3>
              <div>
                {SpesifikasiList.map((item, index) => (
                  <div
                    key={index}
                    className="mb-5 flex items-center font-brygada"
                  >
                    <AiOutlineCheckCircle className="mr-5 text-2xl max-sm:text-base" />
                    <p className="text-xl max-sm:text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-5">
            {SpesifikasiImageList.map((item, index) => (
              <div className="overflow-hidden rounded-xl">
                <img
                  className="aspect-video w-full object-cover"
                  src={item}
                  alt="spesifikasi"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spesifikasi;
