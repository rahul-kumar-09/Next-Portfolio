import React from "react";
import { IoPersonOutline } from "react-icons/io5";

const About = () => {
  return (
    <div className="lg:w-100 h-screen bg-slate-200 py-2 ">
      <h2 className="text-5xl text-center drblue justify-center flex items-center font-bold">
        <span className="mr-2">
          <IoPersonOutline size={43} />
        </span>
        About{" "}
        <div style={{ color: "rgb(115, 3, 167)", marginLeft: "5px" }}> Me</div>
      </h2>
      <div className=""></div>
    </div>
  );
};

export default About;
