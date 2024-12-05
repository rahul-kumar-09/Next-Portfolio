import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import Image from "next/image";

const About = ({about}) => {
  return (
    <div className="lg:w-100 h-screen bg-slate-200 py-2 " ref={about}>
      <h2 className="text-5xl text-center drblue justify-center flex items-center font-bold">
        <span className="mr-2">
          <IoPersonOutline size={43} />
        </span>
        About{" "}
        <div style={{ color: "rgb(115, 3, 167)", marginLeft: "5px" }}> Me</div>
      </h2>
      <div className="grid lg:grid-cols-2 gap-4 items-center justify-between min-h-screen lg:px-28 px-5 py-10">
        <div>
          <Image
            src={"aboutimg.svg"}
            width={100}
            height={100}
            className="lg:w-80 w-48 m-auto lg:m-0"
            alt="About"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold ">I'm Rahul Kumar Maury</h2>
          <p className="text-lg font-bold">Frontend Developer</p>
          <p>
            I am a passionate front-end developer with a Travvir web applications.
            I have honed my skills in
            front-end technologies like React. My goal is to leverage my
            expertise to create innovative solutions that drive business growth
            and deliver exceptional user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
