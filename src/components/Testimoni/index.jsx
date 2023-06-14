import React from "react";

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
];

const Testimoni = () => {
  return (
    <div className="mx-10 font-arimo">
      <h3 className="mb-24 text-center font-arimo text-6xl font-bold text-primary">
        Apa Kata Mereka ?
      </h3>
      <div className="grid grid-cols-3 gap-12">
        {DummyTestimoniData.map((testimoni) => (
          <div className="flex flex-col gap-4 rounded-lg bg-primary p-8 text-white shadow-custom1">
            <p className="flex-1 text-lg">{testimoni.message}</p>
            <hr />
            <span className="w-full text-center font-bold">
              {testimoni.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimoni;
