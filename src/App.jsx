/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="">
      {/* <Navbar /> */}
      <Hero />
    </div>
  );
};

export default App;
