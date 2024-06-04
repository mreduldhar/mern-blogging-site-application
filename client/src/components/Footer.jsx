import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#333333] py-20 text-[#737373]">
      <div className="container mx-auto max-w-[71.375rem] h-[20rem]">
        <div className="row w-full h-full flex flex-column gap-20">
          <div className="w-2/5 about px-10">
            <h1 className="text-white text-xl mb-3">About Us</h1>
            <p className="text-[#737373]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              reprehenderit magnam deleniti quasi saepe, consequatur atque sequi
              delectus dolore veritatis obcaecati quae, repellat eveniet omnis,
              voluptatem in. Soluta, eligendi, architecto.
            </p>
          </div>
          <div className="w-1/5 links flex gap-10">
            <div>
              <ul className="list-none leading-8">
                <li>
                  <NavLink
                    to="/"
                    className="text-sm hover:text-white transition-all ease-in-out duration-300"
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className="text-sm hover:text-white transition-all ease-in-out duration-300"
                  >
                    Advertise
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className="text-sm hover:text-white transition-all ease-in-out duration-300"
                  >
                    Careers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className="text-sm font-semibold hover:text-white transition-all ease-in-out duration-300"
                  >
                    Subscribe
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-none leading-8">
                <li>
                  <NavLink
                    to="/"
                    className="text-sm hover:text-white transition-all ease-in-out duration-300"
                  >
                    Travel
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className="text-sm hover:text-white transition-all ease-in-out duration-300"
                  >
                    Lifestyle
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className="text-sm hover:text-white transition-all ease-in-out duration-300"
                  >
                    Sports
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className="text-sm font-semibold hover:text-white transition-all ease-in-out duration-300"
                  >
                    Nature
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-2/5 contact">
            <h1 className="capitalize text-white text-lg mb-2">
              Connect with us
            </h1>
            <ul className="list-none flex gap-5 mt-5">
              <li>
                <NavLink
                  to="/"
                  className="font-semibold hover:text-white transition-all ease-in-out duration-300"
                >
                  <FaFacebookF />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="font-semibold hover:text-white transition-all ease-in-out duration-300"
                >
                  <FaTwitter />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="font-semibold hover:text-white transition-all ease-in-out duration-300"
                >
                  <FaInstagram />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="font-semibold hover:text-white transition-all ease-in-out duration-300"
                >
                  <MdEmail />
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="font-semibold hover:text-white">
                  <FaLinkedin />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* copyrights */}
        <h1 className="text-center">
          Copyright © 2024 All rights reserved | This template is made by{" "}
          <strong>Mredul Kanthy Dhar</strong>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
