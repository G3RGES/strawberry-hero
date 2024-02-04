/* eslint-disable no-unused-vars */
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="">
      <div className="container">
        <div className="">
          <h1 className="uppercase">
            Straw<span className="">Berries</span>
          </h1>
          <ul className="hidden lg:flex space-x-14">
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
        </div>
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
