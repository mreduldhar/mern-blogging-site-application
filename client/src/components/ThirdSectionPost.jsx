import book from "../assets/images/book.jpeg";
import img from "../assets/images/img.jpeg";
import mountain from "../assets/images/mountain.jpeg";
import man from "../assets/images/man.jpeg";

const ThirdSectionPost = () => {
  return (
    <div className="bg-[#f8f9fa] py-20">
      <div className="container mx-auto max-w-[71.375rem] h-full">
        <div className="row w-full h-[39.375rem] flex flex-column gap-[1.813rem]">
          <div className="c-1 w-[41.875rem] h-full flex flex-col">
            <div className="item-1 w-full h-full">
              <div className="card-1 w-full h-[18.75rem] rounded-md mb-[1.875rem] relative overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
                <img
                  className="w-full h-full object-cover absolute"
                  src={book}
                  alt=""
                />
                <div className="content absolute p-4 text-white z-20">
                  <div className="mb-36">
                    <span className="bg-[#8BC34A] px-3 py-[0.2rem] rounded-md tracking-[0.2em] font-[0.6rem] text-xs uppercase leading-none">
                      Nature
                    </span>
                  </div>
                  <h2 className="text-xl">
                    The 20 Biggest Fintech Companies In <br /> America 2019
                  </h2>
                  <h3 className="text-white text-base opacity-50 my-2">
                    February 19, 2019
                  </h3>
                </div>
              </div>
            </div>
            <div className="item-2 w-full h-full flex justify-between gap-[1.875rem]">
              <div className="card-1 w-[20rem] h-[18.75rem] rounded-md mb-[1.875rem] relative overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
                <img
                  className="w-full h-full object-cover absolute"
                  src={img}
                  alt=""
                />
                <div className="content absolute p-4 text-white z-20">
                  <div className="mb-36">
                    <span className="bg-[#2F89FC] px-3 py-[0.2rem] rounded-md tracking-[0.2em] font-[0.6rem] text-xs uppercase leading-none">
                      Sports
                    </span>
                  </div>
                  <h2 className="text-xl">
                    The 20 Biggest Fintech <br />
                    Companies In America 2019
                  </h2>
                  <h3 className="text-white text-base opacity-50 my-2">
                    February 19, 2019
                  </h3>
                </div>
              </div>
              <div className="card-2 w-[20rem] h-[18.75rem] rounded-md mb-[1.875rem] relative overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
                <img
                  className="w-full h-full object-cover absolute"
                  src={mountain}
                  alt=""
                />
                <div className="content absolute p-4 text-white z-20">
                  <div className="mb-36">
                    <span className="bg-[#F89D13] px-3 py-[0.2rem] rounded-md tracking-[0.2em] font-[0.6rem] text-xs uppercase leading-none">
                      lifestyle
                    </span>
                  </div>
                  <h2 className="text-xl">
                    The 20 Biggest Fintech <br />
                    Companies In America 2019
                  </h2>
                  <h3 className="text-white text-base opacity-50 my-2">
                    February 19, 2019
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="c-2 w-[29.375rem] h-full">
            <div className="item-1 w-full h-full">
              <div className="card-1 w-full h-[39.375rem] rounded-md mb-[1.875rem] relative overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
                <img
                  className="w-full h-full object-cover absolute"
                  src={man}
                  alt=""
                />
                <div className="content absolute bottom-0 p-4 text-white z-20">
                  <div className="mb-[26rem]">
                    <span className="bg-red-700 px-3 py-[0.2rem] rounded-md tracking-[0.2em] font-[0.6rem] text-xs uppercase leading-none">
                      Travel
                    </span>
                  </div>
                  <h2 className="text-[1.625rem]">
                    The 20 Biggest Fintech <br /> Companies In America <br />{" "}
                    2019
                  </h2>
                  <h3 className="text-white text-base opacity-50 my-2">
                    February 19, 2019
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSectionPost;
