import React from "react";
import HeroSlide from "./HeroSlide";
import Hero1 from "../../assets/img/hero/hero-1.png";

const images = [Hero1, Hero1, Hero1];

const Hero = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl">
        <div className="px-8 md:px-24">
          <div className="relative top-[3rem] lg:flex lg:min-h-[600px] lg:justify-end">
            <div className="absolute -left-[1rem] -top-[1rem] z-20 h-[2rem] w-[2rem] bg-primary opacity-80 md:-left-[1.5rem] md:-top-[1.5rem] md:h-[4rem] md:w-[4rem] lg:left-[6rem] lg:top-[70%] lg:z-0 lg:h-[7rem] lg:w-[7rem]"></div>
            <div className="z-10 justify-center lg:w-[84%]">
              <HeroSlide images={images} />
            </div>
            <div className="absolute -right-[1rem] top-[2rem] z-0 h-[2rem] w-[2rem] bg-primary opacity-80 md:-right-[1.5rem] md:top-[4rem] md:h-[4rem] md:w-[4rem] lg:-right-[2rem] lg:top-[86%] lg:z-10 lg:h-[7rem] lg:w-[8rem]"></div>
          </div>
        </div>
        <div className="relative lg:-top-[24rem] lg:z-20 lg:w-[40%]">
          <div className="bg-primary px-8 pb-8 pt-20 text-white md:px-24 lg:px-12 lg:py-12">
            <h5 className="mb-4 w-[80%] font-serif text-3xl leading-relaxed md:text-4xl lg:w-[60%]">
              We Help You Make Modern Interior
            </h5>
            <p className="text-justify font-serif text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
