/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// components
import Navbar from "./Navbar";

// assets
import HeroImg from "../assets/strawberry.png";

// icons
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <main className="bg-primaryDark md:py-6 md:px-12 text-white">
      <section
        className="relative min-h-[650px] bg-gradient-to-r from-primary
      to-secondary w-full md:rounded-xl shadow-md "
      >
        <div className="container">
          <Navbar setSidebar={setSidebar} sidebar={sidebar} />
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          min-h-[650px] place-items-center  "
          >
            {/* text container */}
            <div className="text-white space-y-4 p-4 md:mt-0 mt-[100px]">
              <h1 className="text-3xl pl-6 md:pl-16" data-aos="fade-up">
                01________
              </h1>
              <h1
                className="text-5xl font-bold uppercase text-shadow"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                A helthy fruit
              </h1>
              <p className="text-sm" data-aos="fade-up" data-aos-delay="600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur soluta modi optio suscipit ex ipsum minus hic,
                voluptates accusantium dolor!
              </p>
              <button
                className="border border-white px-4 py-2 rounded-lg"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                Shop Now
              </button>
            </div>
            {/* image container */}
            <div className="">
              <img
                data-aos="zoom-in"
                className="w-[400px] img-shadow relative z-[1]"
                src={HeroImg}
                alt="strawberry"
              />
            </div>
            {/* blank container */}
            <div className="md:hidden "></div>
          </div>
        </div>
        <h1
          data-aos="zoom-out"
          className="uppercase text-center text-[80px] font-bold
         sm:text-[120px] md:text-[150px] xl:text-[180px]
          absolute bottom-0 w-full z-0 text-shadow"
        >
          Berries
        </h1>
        {sidebar && (
          <div
            className="absolute top-0 right-0 w-[120px] 
          h-full bg-gradient-to-b from-primary to-secondary z-10 rounded-tr-xl 
          rounded-br-xl"
          >
            <div className="w-full h-full flex flex-col justify-center items-center gap-6">
              {/* line */}
              <div className="w-[1px] h-[70px] bg-white  "></div>

              {/* socials */}
              <div className="inline-block p-2 rounded-full border border-white">
                <a className="" href="https://www.facebook.com/gergesnashaat95">
                  <FaFacebookF className="text-2xl" />
                </a>
              </div>
              <div className="inline-block p-2 rounded-full border border-white">
                <a className="" href="https://www.instagram.com/gergesnashaat/">
                  <FaInstagram className="text-2xl" />
                </a>
              </div>
              <div className="inline-block p-2 rounded-full border border-white">
                <a
                  className=""
                  href="https://www.linkedin.com/in/gergesnashaat/"
                >
                  <FaLinkedinIn className="text-2xl" />
                </a>
              </div>

              {/* line */}
              <div className="w-[1px] h-[70px] bg-white  "></div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Hero;
