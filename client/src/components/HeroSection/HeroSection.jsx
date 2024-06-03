import React from "react";
// import "./HeroSection.css";
import book from "../../assets/images/book.jpeg";
import img from "../../assets/images/img.jpeg";
import dog from "../../assets/images/dog.jpeg";
import mountain from "../../assets/images/mountain.jpeg";
import man from "../../assets/images/man.jpeg";

const HeroSection = () => {
  return (
    <div className="containers w-full h-[87.5vh] bg-[#8c8c8c29] py-16">
      <div className="column">
        <div className="items rounded-md">
          <img src={book} alt="Book" />
          <div className="content">
            <h2>
              The Al magically removes moving <br /> objects from videos.
            </h2>
            <h3>July 19, 2020</h3>
          </div>
        </div>
        <div className="items rounded-md">
          <img src={img} alt="image-2" />
          <div className="content">
            <h2>
              The Al magically removes moving <br /> objects from videos.
            </h2>
            <h3>July 19, 2020</h3>
          </div>
        </div>
      </div>
      <div className="column stretch">
        <div className="items stretch-item rounded-md">
          <img src={dog} alt="image-2" />
          <div className="content">
            <div className="categories">
              <span className="bg-red-800">Travel</span>
              <span className="bg-blue-800">Food</span>
            </div>
            <h2>
              The Al magically removes moving <br /> objects from videos.
            </h2>
            <h3>July 19, 2020</h3>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="items rounded-md">
          <img src={mountain} alt="image-2" />
          <div className="content">
            <h2>
              The Al magically removes moving <br /> objects from videos.
            </h2>
            <h3>July 19, 2020</h3>
          </div>
        </div>
        <div className="items rounded-md">
          <img src={man} alt="image-2" />
          <div className="content">
            <h2>
              The Al magically removes moving <br /> objects from videos.
            </h2>
            <h3>July 19, 2020</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
