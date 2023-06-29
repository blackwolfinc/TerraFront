import React, { useEffect, useRef } from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import Swiper from "swiper";
import { register } from "swiper/element";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

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
  const swiper = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const id = Math.round(Math.random() * 100);

  useEffect(() => {
    swiper.current = new Swiper(`.swiper-testimoni-${id}`, {
      slidesPerView: "auto",
      spaceBetween: 20,
      navigation: {
        nextEl: navigationNextRef.current,
        prevEl: navigationPrevRef.current,
      },
      loop: true,
      breakpoints: {
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    register();

    return () => {
      swiper.current.destroy();
    };
  });

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="mx-10 font-arimo">
        <h3 className="mb-24 text-center font-arimo text-6xl font-bold text-primary max-md:mb-10 max-md:text-4xl max-sm:text-2xl">
          Apa Kata Mereka ?
        </h3>
        <div className="relative px-20 max-md:px-0">
          <div className={`swiper-testimoni-${id} w-full overflow-hidden`}>
            <div className={`swiper-wrapper`}>
              {DummyTestimoniData.map((testimoni, i) => (
                <div key={`testi-${i}`} className="swiper-slide !h-auto">
                  <div className="flex min-h-full flex-col gap-4 rounded-lg bg-primary p-8 text-white shadow-custom1">
                    <p className="flex-1 text-lg max-md:text-center max-md:text-3xl max-md:leading-relaxed max-sm:text-lg">
                      {testimoni.message}
                    </p>
                    <hr />
                    <span className="w-full text-center font-bold">
                      {testimoni.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-2 top-0 z-10 flex items-center text-white md:left-0 md:text-primary">
            <div ref={navigationPrevRef}>
              <MdOutlineArrowBackIos size={24} />
            </div>
          </div>
          <div className="absolute bottom-0 right-2 top-0 z-10 flex items-center text-white md:right-0 md:text-primary">
            <div ref={navigationNextRef}>
              <MdOutlineArrowForwardIos size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
