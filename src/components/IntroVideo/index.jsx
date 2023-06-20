import React from "react";
import ourVideo from '../../assets/video/Big_Buck_Bunny_360_10s_1MB.mp4'
import ReactPlayer from "react-player";

const IntroVideo = () => {
  return (
    <>
      <div className="relative">
        <div className="h-64 p-10 flex flex-col justify-center items-start">
          <div className="w-[50%]">
            <div className="font-bold text-4xl text-primary py-4">
              Terra Kota Residance Video
            </div>
          </div>
        </div>
        <div className="z-1 h-64 p-10 flex flex-col justify-center items-start gap-5 bg-primary text-white">
          <span className="w-[50%] text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
          </span>
          <span className="w-[50%] text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
          </span>
        </div>
        <div className="absolute bottom-[25%] right-10 w-[40%] shadow-2xl">
          <ReactPlayer
            className='h-100 border-8 border-emerald-600 rounded-2xl overflow-hidden'
            // url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            url={ourVideo}
            width='100%'
            height='100%'
            controls={true}
          />
        </div>
      </div>
    </>
  );
};

export default IntroVideo;
