import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper";
import useWindowDimensions from "utils/useWindowDimension";

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
  const { width } = useWindowDimensions();

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="mx-10 font-arimo">
        <h3 className="mb-24 text-center font-arimo text-6xl font-bold text-primary max-md:mb-10 max-md:text-4xl max-sm:text-2xl">
          Apa Kata Mereka ?
        </h3>
        <Swiper
          spaceBetween={24}
          slidesPerView={width > 768 ? 3 : 1}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          style={{
            "--swiper-navigation-color": "white",
          }}
          className="testimoni-swiper"
        >
          {DummyTestimoniData.map((testimoni, i) => (
            <SwiperSlide key={`testi-${i}`} className="!h-auto">
              <div className="flex min-h-full flex-col gap-4 rounded-lg bg-primary p-8 text-white shadow-custom1">
                <p className="flex-1 text-lg max-md:text-center max-md:text-3xl max-md:leading-relaxed max-sm:text-lg">
                  {testimoni.message}
                </p>
                <hr />
                <span className="w-full text-center font-bold">
                  {testimoni.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimoni;
