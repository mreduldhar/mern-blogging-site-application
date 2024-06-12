import React from "react";
import img from "../../assets/images/img.jpeg";
import women from "../../assets/images/women.jpeg";

const BlogHeroSection = () => {
  return (
    <div className="w-full h-[54rem] relative overflow-hidden flex justify-center items-center">
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
      <img
        className="w-full h-full object-cover absolute"
        src={img}
        alt="img"
      />
      <div className="w-full h-[42rem] flex flex-col justify-center items-center content text-white z-20">
        <span className="bg-[#F89D13] py-1 px-3 rounded-md tracking-[0.25em] font-medium text-xs uppercase">
          Travel
        </span>
        <h2 className="text-7xl text-center leading-[6.5rem] my-6">
          The Al magically removes <br /> moving objects from <br /> videos.
        </h2>
        <div className="users flex justify-center items-center">
          <img
            className="w-8 h-auto rounded-full mr-4"
            src={women}
            alt="women"
          />
          <span className="text-sm">
            By <a href="#"> Carrol Atkinson</a> - July 19, 2024
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogHeroSection;
