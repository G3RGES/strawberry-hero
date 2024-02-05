/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <main className="bg-primaryDark md:py-6 md:px-12">
      <section
        className="relative min-h-[650px] bg-gradient-to-r from-primary
      to-secondary w-full md:rounded-xl shadow-md "
      >
        <div className="container">
          <Navbar />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
