import React, { useRef } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Experience from "./Experience";
import Contact from "./Contact";



const Hero = () => {
  const home = useRef();
  const about = useRef();
  const contact = useRef();
  const skill = useRef();
  const work = useRef();
  const experience = useRef();

   const scrollHandler = (eleRef) => {
     window.scrollTo({ top: eleRef.current.offsetTop, behavior: "smooth" });
   };
  return (
    <div>
      <Navbar scrollHandler={scrollHandler} home={home} about={about} contact={contact} skill={skill} work={work} experience={experience} />
      <Home home={home} />
      <About about={about} />
      <Skills skill={skill} />
      <Work work={work} />
      <Experience experience={experience} />
      <Contact contact={contact} />
    </div>
  );
};

export default Hero;
