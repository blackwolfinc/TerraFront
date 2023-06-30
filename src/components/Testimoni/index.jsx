import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import "swiper/css";

const DummyTestimoniData = [
  {
    id: 1,
    name: "Elly F",
    message:
      "Saya memilih CitraLand Puncak Tidar karena lokasinya yang strategis, pemandangannya langsung menghadap Gunung Arjuno & Panderman. Mantappp, nilai investasi nya jos.",
  },
  {
    id: 2,
    name: "Samuel Sutanto",
    message:
      "Perumahan milik Terra tidak pernah mengecewakan, kawasan premium & lokasi strategis. Pemandangannya josss banget.",
  },
  {
    id: 3,
    name: "Jonathan A",
    message:
      "Lokasi strategis, harga relatif terjangkau untuk rumah mewah. Kawasannya premium, jauh dari hiruk pikuk kota tapi akses ke kota masih tergolong mudah.",
  },
  {
    id: 1,
    name: "Elly F",
    message:
      "Saya memilih CitraLand Puncak Tidar karena lokasinya yang strategis, pemandangannya langsung menghadap Gunung Arjuno & Panderman. Mantappp, nilai investasi nya jos.",
  },
  {
    id: 2,
    name: "Samuel Sutanto",
    message:
      "Perumahan milik Terra tidak pernah mengecewakan, kawasan premium & lokasi strategis. Pemandangannya josss banget.",
  },
  {
    id: 3,
    name: "Jonathan A",
    message:
      "Lokasi strategis, harga relatif terjangkau untuk rumah mewah. Kawasannya premium, jauh dari hiruk pikuk kota tapi akses ke kota masih tergolong mudah.",
  },
];

const Testimoni = () => {
  const swiperRef = useRef(null);

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="mx-4 font-arimo lg:mx-10">
        <h3 className="mb-24 text-center font-arimo text-6xl font-bold text-primary max-md:mb-10 max-md:text-4xl max-sm:text-2xl">
          Apa Kata Mereka ?
        </h3>
        <div className="relative">
          <div className="flex items-center">
            <div className="absolute left-2 top-0 z-10 mr-4 flex h-full text-white md:left-0 md:text-primary lg:relative lg:top-auto">
              <button
                onClick={() => {
                  swiperRef.current.slidePrev();
                }}
              >
                <MdOutlineArrowBackIos size={24} />
              </button>
            </div>
            <Swiper
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {DummyTestimoniData.map((testimoni, i) => (
                <SwiperSlide
                  key={`testi-${i}`}
                  className="swiper-slide !h-auto"
                >
                  <div className="flex min-h-full flex-col gap-4 rounded-lg bg-primary p-8 text-white shadow-custom1">
                    <p className="flex-1 text-lg max-md:px-4 max-md:text-center max-md:text-3xl max-md:leading-relaxed max-sm:text-lg">
                      {testimoni.message}
                    </p>
                    <hr />
                    <span className="w-full text-center font-bold max-md:px-4">
                      {testimoni.name}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute right-2 top-0 z-10 ml-4 flex h-full items-center text-white md:right-0 md:text-primary lg:relative">
              <button
                onClick={() => {
                  swiperRef.current.slideNext();
                }}
              >
                <MdOutlineArrowForwardIos size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
