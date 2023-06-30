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

const Spesifikasi = ({ list }) => {
  const [specsList, setSpecsList] = React.useState([]);

  React.useEffect(() => {
    if (!list) return;
    setSpecsList(list);
  }, [list]);

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="mx-10 max-lg:mx-0">
        <div className="mb-20">
          <div className="relative flex w-full items-stretch max-lg:flex-col">
            <div className="w-1/2 max-lg:relative max-lg:h-full max-lg:w-full">
              <div className="relative z-10 flex aspect-square h-full w-full items-center max-lg:aspect-video">
                <div className="relative aspect-square w-4/5 max-lg:aspect-video max-lg:w-full max-lg:px-10">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      className="aspect-square w-full object-cover max-lg:aspect-[4/3]"
                      src={SpesifikasiImg}
                      alt="spesifikasi"
                    />
                  </div>
                  <div className="absolute -top-[10%] right-5 aspect-[1/3] w-8 rounded-lg bg-[#3B5858] shadow-custom1 max-lg:-top-[5%] max-lg:right-20 max-lg:aspect-[1/2] max-lg:w-6"></div>
                  <div className="absolute -top-[10%] right-16 aspect-[1/3] w-8 rounded-lg bg-[#3B5858] shadow-custom1 max-lg:-top-[5%] max-lg:right-28 max-lg:aspect-[1/2] max-lg:w-6 "></div>
                </div>
              </div>
              <div className="absolute right-1/2 top-0 z-0 h-full w-1/4 bg-primary max-lg:bottom-0 max-lg:right-0 max-lg:top-auto max-lg:h-1/2 max-lg:w-full"></div>
            </div>
            <div className="flex !h-auto flex-1 items-center bg-primary py-28 pr-20 max-lg:w-full max-lg:px-10 max-sm:py-10">
              <div className="text-white">
                <h3 className="mb-10 font-dmserif text-6xl leading-snug max-sm:mb-7 max-sm:text-2xl">
                  Spesifikasi Bangunan
                </h3>
                <div>
                  {specsList.length <= 6 &&
                    specsList.map((item, index) => (
                      <div
                        key={`specs-${index}`}
                        className="mb-5 flex items-center gap-4 font-brygada"
                      >
                        <AiOutlineCheckCircle className="w-6 text-2xl max-sm:text-base" />
                        <p className="flex-1 text-xl max-sm:text-sm">{item}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          {specsList.length > 6 && (
            <div className="flex w-full justify-end">
              <div className="grid w-3/4 grid-cols-2 gap-2 bg-primary p-8 text-white max-lg:w-full">
                {specsList.map((item, index) => (
                  <div
                    key={`specs-${index}`}
                    className="mb-5 flex items-center gap-4 font-brygada"
                  >
                    <AiOutlineCheckCircle className="w-6 text-2xl max-sm:text-base" />
                    <p className="flex-1 text-xl max-sm:text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div>
          <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-lg:px-10 max-sm:px-4">
            {SpesifikasiImageList.map((item, index) => (
              <div
                key={`specs-images-${index}`}
                className="cursor-pointer overflow-hidden rounded-xl"
              >
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
