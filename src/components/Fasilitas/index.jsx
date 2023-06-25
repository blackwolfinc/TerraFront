import React, { useEffect } from "react";
import FasilitasImg from "assets/img/fasilitas.png";

const Fasilitas = ({ list }) => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = React.useState([]);

  useEffect(() => {
    if (!list) return;

    setData(list);
  }, [list]);

  return (
    <div className="w-full">
      <div>
        <h3 className="mb-24 text-center font-dmserif text-8xl text-primary max-lg:mb-10 max-lg:text-4xl">
          Fasilitas
        </h3>
      </div>
      <div className="relative">
        <div className="relative z-10 aspect-[4/3] w-full px-24 max-lg:mb-10 max-lg:px-8">
          <div className="relative flex h-full w-full items-center justify-center">
            <img
              src={FasilitasImg}
              alt="Fasilitas"
              className="min-h-full min-w-full object-cover"
            />
            <div className="absolute -top-[5%] right-5 aspect-[7/13] w-[5%] bg-primary opacity-80"></div>
            <div className="absolute -bottom-[3%] left-5 aspect-[7/13] w-[5%] bg-primary opacity-80"></div>
            <div className="absolute -bottom-[20%] -right-[5%] w-[490px] bg-primary p-10 text-white shadow-custom1 max-lg:-bottom-[10%] max-lg:right-[5%] max-lg:w-fit max-lg:p-4">
              <h5 className="mb-8 font-serif text-4xl leading-relaxed max-lg:mb-0 max-lg:text-base max-lg:tracking-wider">
                We Help You
                <br /> Make Modern <br />
                Interior
              </h5>
              <p className="text-justify font-serif max-lg:hidden">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
              </p>
            </div>
          </div>
        </div>
        <div className="z-0 max-lg:hidden">
          <div className="absolute bottom-0 left-0 h-20 w-full bg-primary/90"></div>
        </div>
      </div>
      <div className="bg-primary/90 px-28 py-16 max-lg:bg-white max-lg:px-8">
        <div className="mb-10 mr-[500px] text-justify max-lg:mr-0">
          <p className="font-serif text-white max-lg:text-black">
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
        <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1">
          {data.map((item, index) => (
            <FasilitasItem key={index} text={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FasilitasItem = ({ text }) => {
  return (
    <div className="rounded-lg bg-primary px-10 py-5 shadow-custom1 max-lg:px-5">
      <span className="line-clamp-1 text-ellipsis font-bevietnampro text-2xl text-white max-sm:text-base">
        {text}
      </span>
    </div>
  );
};

export default Fasilitas;
