import React from "react";
import person from "../../assets/images/person_2.jpg";
import women from "../../assets/images/women.jpeg";

const Comment = () => {
  return (
    <div className="w-full h-full">
      <h1 className="text-4xl">6 Comments</h1>

      <div className="comments flex space-x-8 mt-10">
        <img src={women} alt="user" className="w-12 h-full rounded-full" />
        <div className="comment">
          <h2 className="text-xl mb-2">Jane Doe</h2>
          <span className="date text-[#cccccc] uppercase text-sm tracking-widest">
            January 12, 2023 at 2.20pm
          </span>
          <p className="text-[#808080] mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
            dicta?Lorem ipsum dolor sit. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Exercitationem, nostrum!
          </p>
          <a href="#" className="px-2.5 py-1 text-sm bg-[#e6e6e6] rounded">
            Reply
          </a>
        </div>
      </div>

      {/* reply section here */}
      <div className="comments flex space-x-8 mt-10">
        <img src={women} alt="user" className="w-12 h-full rounded-full" />
        <div className="comment">
          <h2 className="text-xl mb-2">Jane Doe</h2>
          <span className="date text-[#cccccc] uppercase text-sm tracking-widest">
            January 12, 2023 at 2.20pm
          </span>
          <p className="text-[#808080] mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
            dicta?Lorem ipsum dolor sit. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Exercitationem, nostrum!
          </p>
          <a href="#" className="px-2.5 py-1 text-sm bg-[#e6e6e6] rounded">
            Reply
          </a>
          {/* reply section */}
          <div class="comment flex space-x-8 mt-10 -ml-10">
            <img src={women} alt="user" class="w-12 h-12 rounded-full" />
            <div class="comment-content flex-1">
              <h2 class="text-xl mb-2">Jane Doe</h2>
              <span class="date text-gray-400 uppercase text-sm tracking-widest">
                January 13, 2023 at 3.20pm
              </span>
              <p class="text-gray-500 mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Exercitationem, nostrum!
              </p>
              <a href="#" class="px-2.5 py-1 text-sm bg-gray-200 rounded">
                Reply
              </a>
              {/* reply section */}
              <div class="comment flex space-x-8 mt-10 -ml-10">
                <img src={women} alt="user" class="w-12 h-12 rounded-full" />
                <div class="comment-content flex-1">
                  <h2 class="text-xl mb-2">Jane Doe</h2>
                  <span class="date text-gray-400 uppercase text-sm tracking-widest">
                    January 13, 2023 at 3.20pm
                  </span>
                  <p class="text-gray-500 mb-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Exercitationem, nostrum!
                  </p>
                  <a href="#" class="px-2.5 py-1 text-sm bg-gray-200 rounded">
                    Reply
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="comments flex space-x-8 mt-10">
        <img src={women} alt="user" className="w-12 h-full rounded-full" />
        <div className="comment">
          <h2 className="text-xl mb-2">Jane Doe</h2>
          <span className="date text-[#cccccc] uppercase text-sm tracking-widest">
            January 12, 2023 at 2.20pm
          </span>
          <p className="text-[#808080] mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
            dicta?Lorem ipsum dolor sit. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Exercitationem, nostrum!
          </p>
          <a href="#" className="px-2.5 py-1 text-sm bg-[#e6e6e6] rounded">
            Reply
          </a>
        </div>
      </div>

      <div className="comments flex space-x-8 mt-10">
        <img src={women} alt="user" className="w-12 h-full rounded-full" />
        <div className="comment">
          <h2 className="text-xl mb-2">Jane Doe</h2>
          <span className="date text-[#cccccc] uppercase text-sm tracking-widest">
            January 12, 2023 at 2.20pm
          </span>
          <p className="text-[#808080] mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
            dicta?Lorem ipsum dolor sit. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Exercitationem, nostrum!
          </p>
          <a href="#" className="px-2.5 py-1 text-sm bg-[#e6e6e6] rounded">
            Reply
          </a>
        </div>
      </div>

      {/* Leave a comments */}
      <div className="leave_comment my-20">
        <h1 className="text-3xl mb-10">Leave a comment</h1>
        <div className="form p-12 bg-[#f8f9fa]">
          <form action="">
            <label htmlFor="name" className="text-lg text-[#808080] mb-5">
              Name *
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 mb-5 border border-[#CED4DA] "
            />
            <label htmlFor="email" className="text-lg text-[#808080]">
              Email *
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full p-2 mb-5 border border-[#CED4DA] "
            />
            <label htmlFor="website" className="text-lg text-[#808080]">
              Website
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="Website URL"
              className="w-full p-2 mb-5 border border-[#CED4DA] "
            />
            <label htmlFor="message" className="text-lg text-[#808080]">
              Message *
            </label>
            <textarea
              placeholder="Enter your message"
              className="w-full p-2 mb-5 border border-[#CED4DA] h-32"
            ></textarea>
            <input
              type="submit"
              value="Post comment"
              className="py-2 px-6 bg-blue-600 rounded text-lg text-white hover:bg-blue-700 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comment;
