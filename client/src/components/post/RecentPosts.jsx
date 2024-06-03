import React from "react";
import book from "../../assets/images/book.jpeg";
import img from "../../assets/images/img.jpeg";
import mountain from "../../assets/images/mountain.jpeg";
import women from "../../assets/images/women.jpeg";

const RecentPosts = () => {
  return (
    <div className="container mx-auto max-w-[71.375rem] h-full">
      <div className="row">
        <h1 className="text-5xl mx-auto my-[3.5rem]">Recent Posts</h1>
        <div className="posts">
          {/* first row */}
          <div className="row w-full flex justify-between mb-10">
            <div className="card-1 w-[32%] h-auto col-end-3">
              <a href="#">
                <img className="rounded-lg object-cover" src={book} alt="" />
              </a>
              <div className="content p-7">
                <div className="categories text-white">
                  <span className="bg-[#6C757D] py-2 px-4 rounded-md tracking-[0.25em] font-medium text-xs uppercase">
                    Politics
                  </span>
                </div>
                <a href="#">
                  <h1 className="text-3xl font-medium py-5">
                    The AI magically removes moving objects from videos.
                  </h1>
                </a>
                <div className="users flex items-center">
                  <img
                    className="w-10 h-auto rounded-full mr-4"
                    src={women}
                    alt="women"
                  />
                  <span className="text-base text-[#d2d1d1]">
                    By{" "}
                    <a href="#" className="text-black">
                      {" "}
                      Carrol Atkinson
                    </a>{" "}
                    - July 19, 2024
                  </span>
                </div>
                <p className="text-[#666666] py-5 text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  sunt tempora dolor laudantium sed optio, explicabo ad deleniti
                  impedit facilis fugit recusandae! Illo, aliquid, dicta beatae
                  quia porro id est.
                </p>
                <a href="#" className="text-xl text-blue-700">
                  Read More
                </a>
              </div>
            </div>
            <div className="card-2 w-[32%] h-auto col-end-3">
              <a href="#">
                <img className="rounded-lg object-cover" src={img} alt="" />
              </a>
              <div className="content p-7">
                <div className="categories text-white">
                  <span className="bg-[#8BC34A] py-2 px-4 rounded-md tracking-[0.25em] font-medium text-xs uppercase">
                    Nature
                  </span>
                </div>
                <a href="#">
                  <h1 className="text-3xl font-medium py-5">
                    The AI magically removes moving objects from videos.
                  </h1>
                </a>
                <div className="users flex items-center">
                  <img
                    className="w-10 h-auto rounded-full mr-4"
                    src={women}
                    alt="women"
                  />
                  <span className="text-base text-[#d2d1d1]">
                    By{" "}
                    <a href="#" className="text-black">
                      {" "}
                      Carrol Atkinson
                    </a>{" "}
                    - July 19, 2024
                  </span>
                </div>
                <p className="text-[#666666] py-5 text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  sunt tempora dolor laudantium sed optio, explicabo ad deleniti
                  impedit facilis fugit recusandae! Illo, aliquid, dicta beatae
                  quia porro id est.
                </p>
                <a href="#" className="text-xl text-blue-700">
                  Read More
                </a>
              </div>
            </div>
            <div className="card-3 w-[32%] h-auto col-end-3">
              <a href="#" className="">
                <img
                  className="rounded-lg object-cover"
                  src={mountain}
                  alt=""
                />
              </a>
              <div className="content p-7">
                <div className="categories text-white">
                  <span className="bg-[#F89D13] py-2 px-4 rounded-md tracking-[0.25em] font-medium text-xs uppercase">
                    Travel
                  </span>
                </div>
                <a href="#">
                  <h1 className="text-3xl font-medium py-5">
                    The AI magically removes moving objects from videos.
                  </h1>
                </a>
                <div className="users flex items-center">
                  <img
                    className="w-10 h-auto rounded-full mr-4"
                    src={women}
                    alt="women"
                  />
                  <span className="text-base text-[#d2d1d1]">
                    By{" "}
                    <a href="#" className="text-black">
                      {" "}
                      Carrol Atkinson
                    </a>{" "}
                    - July 19, 2024
                  </span>
                </div>
                <p className="text-[#666666] py-5 text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  sunt tempora dolor laudantium sed optio, explicabo ad deleniti
                  impedit facilis fugit recusandae! Illo, aliquid, dicta beatae
                  quia porro id est.
                </p>
                <a href="#" className="text-xl text-blue-700">
                  Read More
                </a>
              </div>
            </div>
          </div>
          {/* second row */}
          <div className="row w-full flex justify-between mb-10">
            <div className="card-1 w-[32%] h-auto col-end-3">
              <a href="#">
                <img className="rounded-lg object-cover" src={book} alt="" />
              </a>
              <div className="content p-7">
                <div className="categories text-white">
                  <span className="bg-[#6C757D] py-2 px-4 rounded-md tracking-[0.25em] font-medium text-xs uppercase">
                    Politics
                  </span>
                </div>
                <a href="#">
                  <h1 className="text-3xl font-medium py-5">
                    The AI magically removes moving objects from videos.
                  </h1>
                </a>
                <div className="users flex items-center">
                  <img
                    className="w-10 h-auto rounded-full mr-4"
                    src={women}
                    alt="women"
                  />
                  <span className="text-base text-[#d2d1d1]">
                    By{" "}
                    <a href="#" className="text-black">
                      {" "}
                      Carrol Atkinson
                    </a>{" "}
                    - July 19, 2024
                  </span>
                </div>
                <p className="text-[#666666] py-5 text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  sunt tempora dolor laudantium sed optio, explicabo ad deleniti
                  impedit facilis fugit recusandae! Illo, aliquid, dicta beatae
                  quia porro id est.
                </p>
                <a href="#" className="text-xl text-blue-700">
                  Read More
                </a>
              </div>
            </div>
            <div className="card-2 w-[32%] h-auto col-end-3">
              <a href="#">
                <img className="rounded-lg object-cover" src={img} alt="" />
              </a>
              <div className="content p-7">
                <div className="categories text-white">
                  <span className="bg-[#8BC34A] py-2 px-4 rounded-md tracking-[0.25em] font-medium text-xs uppercase">
                    Nature
                  </span>
                </div>
                <a href="#">
                  <h1 className="text-3xl font-medium py-5">
                    The AI magically removes moving objects from videos.
                  </h1>
                </a>
                <div className="users flex items-center">
                  <img
                    className="w-10 h-auto rounded-full mr-4"
                    src={women}
                    alt="women"
                  />
                  <span className="text-base text-[#d2d1d1]">
                    By{" "}
                    <a href="#" className="text-black">
                      {" "}
                      Carrol Atkinson
                    </a>{" "}
                    - July 19, 2024
                  </span>
                </div>
                <p className="text-[#666666] py-5 text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  sunt tempora dolor laudantium sed optio, explicabo ad deleniti
                  impedit facilis fugit recusandae! Illo, aliquid, dicta beatae
                  quia porro id est.
                </p>
                <a href="#" className="text-xl text-blue-700">
                  Read More
                </a>
              </div>
            </div>
            <div className="card-3 w-[32%] h-auto col-end-3">
              <a href="#" className="">
                <img
                  className="rounded-lg object-cover"
                  src={mountain}
                  alt=""
                />
              </a>
              <div className="content p-7">
                <div className="categories text-white">
                  <span className="bg-[#F89D13] py-2 px-4 rounded-md tracking-[0.25em] font-medium text-xs uppercase">
                    Travel
                  </span>
                </div>
                <a href="#">
                  <h1 className="text-3xl font-medium py-5">
                    The AI magically removes moving objects from videos.
                  </h1>
                </a>
                <div className="users flex items-center">
                  <img
                    className="w-10 h-auto rounded-full mr-4"
                    src={women}
                    alt="women"
                  />
                  <span className="text-base text-[#d2d1d1]">
                    By{" "}
                    <a href="#" className="text-black">
                      {" "}
                      Carrol Atkinson
                    </a>{" "}
                    - July 19, 2024
                  </span>
                </div>
                <p className="text-[#666666] py-5 text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  sunt tempora dolor laudantium sed optio, explicabo ad deleniti
                  impedit facilis fugit recusandae! Illo, aliquid, dicta beatae
                  quia porro id est.
                </p>
                <a href="#" className="text-xl text-blue-700">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
