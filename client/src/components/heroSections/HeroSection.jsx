import book from "../../assets/images/book.jpeg";
import img from "../../assets/images/img.jpeg";
import dog from "../../assets/images/dog.jpeg";
import mountain from "../../assets/images/mountain.jpeg";
import man from "../../assets/images/man.jpeg";

const HeroSection = () => {
  return (
    <div className="container mx-auto w-full h-[35rem]">
      <div className="row flex justify-center">
        <div className="columns-3 mx-auto py-20">
          <div className="item-1 w-[23.125rem] h-full flex flex-col relative">
            <div className="card-1 w-full h-[12.5rem] rounded-md mb-[1.875rem] relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
              <img
                className="w-full h-full object-cover absolute"
                src={book}
                alt="Book"
              />
              <div className="content absolute bottom-0 left-0 p-4 text-white z-20">
                <h2>
                  The Al magically removes moving <br /> objects from videos.
                </h2>
                <h3 className="text-white opacity-50">July 19, 2020</h3>
              </div>
            </div>
            <div className="card-2 w-full h-[12.5rem] rounded-md relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-custom-gradient z-10"></div>
              <img
                className="w-full h-full object-cover absolute"
                src={img}
                alt="Book"
              />
              <div className="content absolute bottom-0 left-0 p-4 text-white z-20">
                <h2>
                  The Al magically removes moving <br /> objects from videos.
                </h2>
                <h3 className="text-white opacity-50">July 19, 2020</h3>
              </div>
            </div>
          </div>
          <div className="item-2 w-[23.125rem] h-[26.875rem] relative px-[0.875rem]">
            <div className="card-1 w-full h-full rounded-md relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-custom-gradient z-10"></div>
              <img className="w-full h-full object-cover" src={dog} alt="Dog" />
              <div className="content absolute bottom-0 left-0 p-4 text-white z-20">
                <div className="flex space-x-2 mb-2">
                  <span className="bg-red-800 px-3.5 py-[0.3rem] rounded-md tracking-[0.2em] font-[0.6rem] text-xs uppercase leading-none">Travel</span>
                  <span className="bg-blue-800 px-3.5 py-[0.3rem] rounded-md tracking-[0.2em] font-[0.6rem] text-xs uppercase leading-none">Food</span>
                </div>
                <h2>
                  The Al magically removes moving <br /> objects from videos.
                </h2>
                <h3 className="text-white opacity-50">July 19, 2020</h3>
              </div>
            </div>
          </div>
          <div className="item-3 w-[23.125rem] h-full flex flex-col relative">
            <div className="card-1 w-full h-[12.5rem] rounded-md mb-[1.875rem] relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-custom-gradient z-10"></div>
              <img
                className="w-full h-full object-cover absolute"
                src={mountain}
                alt="Book"
              />
              <div className="content absolute bottom-0 left-0 p-4 text-white z-20">
                <h2>
                  The Al magically removes moving <br /> objects from videos.
                </h2>
                <h3 className="text-white opacity-50">July 19, 2020</h3>
              </div>
            </div>
            <div className="card-2 w-full h-[12.5rem] rounded-md mb-[1.875rem] relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-custom-gradient z-10"></div>
              <img
                className="w-full h-full object-cover absolute"
                src={man}
                alt="Book"
              />
              <div className="content absolute bottom-0 left-0 p-4 text-white z-20">
                <h2>
                  The Al magically removes moving <br /> objects from videos.
                </h2>
                <h3 className="text-white opacity-50">July 19, 2020</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
