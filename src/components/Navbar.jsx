/* eslint-disable no-unused-vars */
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="text-white">
      <div className="container ">
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
          <div className="">
            <GiHamburgerMenu className="cursor-pointer text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
