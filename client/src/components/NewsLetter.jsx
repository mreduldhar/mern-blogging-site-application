import React from "react";

const NewsLetter = () => {
  return (
    <div className="container flex flex-col p-24 justify-center items-center mx-auto w-full h-full">
      <div className="heading text-center">
        <h1 className="text-xl">Subscribe to our newsletter</h1>
        <p className="text-gray-400 px-14 py-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit <br /> nesciunt
          error illum a explicabo, ipsam nostrum.
        </p>
      </div>
      <div className="input-box mt-[2rem]">
        <input className="border border-[#CED4DA] w-[22rem] p-2" type="text" placeholder="Enter your email address" />
        <button className="bg-[#0974FB] border p-2 text-white placeholder:text-[#495057]" type="submit">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
