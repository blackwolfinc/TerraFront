import React from "react";
import ourVideo from "../../assets/video/Big_Buck_Bunny_360_10s_1MB.mp4";
import ReactPlayer from "react-player";

const IntroVideo = () => {
  return (
    <>
      <div className="relative">
        <div className="flex h-full flex-col items-start justify-center p-10 sm:mt-[30%] lg:h-64">
          <div className="w-full lg:w-[50%]">
            <div className="hidden py-4 font-bevietnampro text-4xl font-bold tracking-widest text-primary lg:block">
              Terra Kota Residance Video
            </div>
          </div>
        </div>
        <div className="flex h-full flex-col items-start justify-center gap-5 bg-primary p-10 pt-[45%] font-baijamjuree text-white md:pt-[35%] lg:h-64 lg:pt-0">
          {/* mobile */}
          <div className="block py-4 font-bevietnampro text-2xl font-bold tracking-widest text-white sm:text-4xl lg:hidden">
            Terra Kota Residance Video
          </div>
          {/*  */}
          <span className="lg:text-md w-full text-xs md:text-sm lg:w-[50%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type
          </span>
          <span className="lg:text-md w-full text-xs md:text-sm lg:w-[50%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type
          </span>
        </div>
        <div className="absolute bottom-[60%] w-full sm:px-10 md:bottom-[50%] lg:bottom-[22%] lg:right-0 lg:w-[50%]">
          <div className="mx-auto w-[90%] shadow-2xl lg:w-full">
            <ReactPlayer
              className="h-100 overflow-hidden rounded-2xl border-8 border-gray-400"
              // url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
              url={ourVideo}
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroVideo;
