import React from "react";
import FasilitasImg from "assets/img/fasilitas.png";

const DummyFasilitas = [
  "1,7 Km dari RSU Nganjuk",
  "2 Km dari Terminal Nganjuk",
  "5 Menit Dari Alun - Alun",
  "2 Km dari Pintu Tol",
  "2 Km dari Pasar Besar",
  "2 Km dari Stasiun Nganjuk",
  "0.8 Km dari Pusat Perbelanjaan",
  "Dekat Dengan Sekolah",
];

const Fasilitas = () => {
  return (
    <div className="w-full">
      <div>
        <h3 className="mb-24 text-center font-dmserif text-8xl text-primary max-md:mb-10 max-md:text-4xl">
          Fasilitas
        </h3>
      </div>
      <div className="relative">
        <div className="relative z-10 aspect-[4/3] w-full px-24 max-md:mb-10 max-md:px-8">
          <div className="relative flex h-full w-full items-center justify-center">
            <img
              src={FasilitasImg}
              alt="Fasilitas"
              className="min-h-full min-w-full object-cover"
            />
            <div className="absolute -top-[5%] right-5 aspect-[7/13] w-[5%] bg-primary opacity-80"></div>
            <div className="absolute -bottom-[3%] left-5 aspect-[7/13] w-[5%] bg-primary opacity-80"></div>
            <div className="absolute -bottom-[20%] -right-[5%] w-[490px] bg-primary p-10 text-white shadow-custom1 max-md:-bottom-[10%] max-md:right-[5%] max-md:w-fit max-md:p-4">
              <h5 className="mb-8 font-serif text-4xl leading-relaxed max-md:mb-0 max-md:text-base max-md:tracking-wider">
                We Help You
                <br /> Make Modern <br />
                Interior
              </h5>
              <p className="text-justify font-serif max-md:hidden">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
              </p>
            </div>
          </div>
        </div>
        <div className="z-0 max-md:hidden">
          <div className="absolute bottom-0 left-0 h-20 w-full bg-primary/90"></div>
        </div>
      </div>
      <div className="bg-primary/90 px-28 py-16 max-md:bg-white max-md:px-8">
        <div className="mb-10 mr-[500px] text-justify max-md:mr-0">
          <p className="font-serif text-white max-md:text-black">
            <span className="mr-2 font-damion text-5xl">Terra</span> Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text eversince the
            1500s, <br />
            <br />
            When an unknown printer took a simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text eversince the 1500s, when an unknown printer took a
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
          {DummyFasilitas.map((item, index) => (
            <FasilitasItem key={index} text={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FasilitasItem = ({ text }) => {
  return (
    <div className="rounded-lg bg-primary px-10 py-5 shadow-custom1 max-md:px-5">
      <span className="line-clamp-1 text-ellipsis font-bevietnampro text-2xl text-white max-sm:text-base">
        {text}
      </span>
    </div>
  );
};

export default Fasilitas;
