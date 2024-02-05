/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <main className="bg-primaryDark md:py-6">
      <section
        className="relative min-h-[650px] bg-gradient-to-r from-primary
      to-secondary w-full md:rounded-xl shadow-md "
      >
        <div className="container">
          <Navbar />
        </div>
      </section>
    </main>
  );
};

export default Hero;
