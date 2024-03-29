/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ setSidebar, sidebar }) => {
  return (
    <div className="text-white py-2 absolute top-0 left-0 w-full z-20">
      <div data-aos="fade-down" className="container ">
        <div className="flex justify-between items-center">
          <h1 className="uppercase text-4xl font-bold">
            Straw<span className="font-normal">Berries</span>
          </h1>
          <ul className="hidden lg:flex space-x-14 text-xl">
            <li className="">
              <a className="" href="#">
                Home
              </a>
            </li>
            <li className="">
              <a className="" href="#">
                Where to find
              </a>
            </li>
            <li className="">
              <a className="" href="#">
                Contact
              </a>
            </li>
          </ul>
          <button className="" onClick={() => setSidebar(!sidebar)}>
            <GiHamburgerMenu className="cursor-pointer text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
