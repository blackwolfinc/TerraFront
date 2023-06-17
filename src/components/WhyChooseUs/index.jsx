import React from "react";

const ListData = [
  {
    title: "Integrated Development",
    description:
      "Fasilitas terlengkap yang terintegrasi secara langsung dengan kawasan hunian seperti pusat perbelanjaan, sarana pendidikan, tempat ibadah, serta rumah sakit.",
  },
  {
    title: "New City Center",
    description:
      "Pusat kota baru yang dikelilingi berbagai macam infrastruktur seperti jalan tol, sarana pendidikan, serta pusat pemerintahan terpadu provinsi Jawa Timur.",
  },
  {
    title: "Bluechip Investment",
    description:
      "Investasi properti terbaik di Nganjuk dengan nilai investasi yang terus meningkat dari tahun ke tahun.",
  },
  {
    title: "Trusted Developer",
    description:
      "Dikembangkan oleh Terra Group sebagai salah satu developer properti terpercaya dan terbesar di Indonesia.",
  },
  {
    title: "Bluechip Investment",
    description:
      "Investasi properti terbaik di Malang dengan nilai investasi yang terus meningkat dari tahun ke tahun.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="relative px-16 py-20">
      <div className="absolute right-[50%] mt-8 aspect-[6/12] h-[70%] w-[8px] rounded-lg bg-[#092138] opacity-30"></div>
      <div className="grid grid-cols-2 gap-x-24">
        <div className="text-right">
          <div className="font-arimo text-5xl font-bold text-[#092138]">
            Why Choose Us?
          </div>
        </div>
        {ListData.map((data, index) => (
          <div key={index} className={index % 2 ? "mt-[-2rem]" : "pt-28"}>
            <h5
              className={`mb-4 font-arimo text-3xl font-bold ${
                index % 2 && "text-right"
              }`}
            >
              {data.title}
            </h5>
            <p className={`font-arimo text-xl ${index % 2 && "text-right"}`}>
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
