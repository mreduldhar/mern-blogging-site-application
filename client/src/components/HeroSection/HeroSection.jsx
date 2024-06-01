import React from "react";
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <div className=" containers w-full h-[87vh] bg-[#8c8c8c29]">
      <div className="column">
        <div className="items">item1</div>
        <div className="items">item2</div>
      </div>
      <div className="column stretch">
        <div className="items stretch-item">item3</div>
      </div>
      <div className="column">
        <div className="items">item4</div>
        <div className="items">item5</div>
      </div>
    </div>
  );
};

export default HeroSection;
