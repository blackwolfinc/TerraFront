import React from "react";
import ourVideo from "../../assets/video/Big_Buck_Bunny_360_10s_1MB.mp4";
import ReactPlayer from "react-player";

const IntroVideo = () => {
  return (
    <>
      <div className="relative">
        <div className="flex h-full flex-col items-start justify-center p-10 lg:h-64 sm:mt-[30%]">
          <div className="w-full lg:w-[50%]">
            <div className="hidden lg:block py-4 font-bevietnampro text-4xl font-bold tracking-widest text-primary">
              Terra Kota Residance Video
            </div>
          </div>
        </div>
        <div className="flex h-full flex-col items-start justify-center gap-5 bg-primary p-10 font-baijamjuree text-white lg:h-64 pt-[45%] lg:pt-0 md:pt-[35%]">
          {/* mobile */}
            <div className="block lg:hidden py-4 font-bevietnampro text-2xl sm:text-4xl font-bold tracking-widest text-white">
              Terra Kota Residance Video
            </div>
          {/*  */}
          <span className="w-full lg:w-[50%] text-xs lg:text-md md:text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type
          </span>
          <span className="w-full lg:w-[50%] text-xs lg:text-md md:text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type
          </span>
        </div>
        <div className="absolute bottom-[60%] lg:bottom-[22%] lg:right-0 lg:w-[50%] md:bottom-[50%] w-full sm:px-10 shadow-2xl">
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
    </>
  );
};

export default IntroVideo;
