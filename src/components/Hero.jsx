import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Experience from "./Experience";
import Contact from "./Contact";



const Hero = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Experience />
      <Contact />
   </div>
  );
};

export default Hero;
