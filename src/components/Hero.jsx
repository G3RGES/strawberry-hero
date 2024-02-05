/* eslint-disable no-unused-vars */
import React from "react";
// components
import Navbar from "./Navbar";

// assets
import HeroImg from "../assets/strawberry.png";

// icons
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Hero = () => {
  return (
    <main className="bg-primaryDark md:py-6 md:px-12 text-white">
      <section
        className="relative min-h-[650px] bg-gradient-to-r from-primary
      to-secondary w-full md:rounded-xl shadow-md "
      >
        <div className="container">
          <Navbar />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* text container */}
            <div className="text-white ">
              <h1 className="">01________</h1>
              <h1 className="">A helthy fruit</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur soluta modi optio suscipit ex ipsum minus hic,
                voluptates accusantium dolor!
              </p>
              <button className="border border-white px-4 py-2 rounded-lg">
                Shop Now
              </button>
            </div>
            {/* image container */}
            <div className="">
              <img className="" src={HeroImg} alt="strawberry" />
            </div>
            {/* blank container */}
            <div className=""></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
