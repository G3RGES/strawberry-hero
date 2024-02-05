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
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          min-h-[650px] place-items-center  "
          >
            {/* text container */}
            <div className="text-white space-y-4 p-4 md:mt-0">
              <h1 className="text-3xl pl-6 md:pl-16">01________</h1>
              <h1 className="text-5xl font-bold uppercase text-shadow">
                A helthy fruit
              </h1>
              <p className="text-sm ">
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
              <img className="w-[400px]  " src={HeroImg} alt="strawberry" />
            </div>
            {/* blank container */}
            <div className="md:hidden "></div>
          </div>
        </div>
        <h1 className="uppercase text-center">Berries</h1>
      </section>
    </main>
  );
};

export default Hero;
