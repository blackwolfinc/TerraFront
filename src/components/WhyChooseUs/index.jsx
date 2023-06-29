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
    <div className="mx-auto max-w-screen-xl">
      <div className="relative px-6 py-4">
        <div className="mb-12 text-center lg:absolute lg:right-[54%]">
          <h1 className="font-arimo text-2xl font-extrabold text-[#092138] md:text-3xl lg:text-5xl">
            Why Choose Us?
          </h1>
        </div>
        <div className="md:absolute md:right-[50%] md:top-[7rem] md:h-[70%] md:w-[0.3rem] md:rounded-lg md:bg-[#092138] md:opacity-30 lg:top-[3rem] lg:w-[0.5rem]"></div>
        <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-28">
          {ListData?.map((data, index) => (
            <div
              className={`mb-6 lg:grid ${index === 0 && "lg:col-start-2"} ${
                index % 2 ? "md:mt-[2rem] lg:-mt-[1rem]" : "lg:mt-[6rem]"
              }`}
              key={index}
            >
              <h5
                className={`mb-2 font-arimo font-bold lg:text-2xl ${
                  index % 2 ? "lg:text-right" : "md:text-right lg:text-left"
                }`}
              >
                {data.title}
              </h5>
              <p
                className={`text-justify font-arimo text-sm lg:w-[80%] lg:text-lg ${
                  index % 2
                    ? "md:text-left lg:-mt-[5rem] lg:justify-self-end lg:text-right"
                    : "md:text-right lg:text-left"
                }`}
              >
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
