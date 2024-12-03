import React from "react";
import { FaCode } from "react-icons/fa6";

const Skills = () => {
    return (
      <div className="lg:w-100 h-screen py-2 ">
        <h2 className="text-5xl text-center drblue flex justify-center font-bold items-center">
          <span className="mr-3">
            <FaCode />
          </span>{" "}
          Skill<span style={{ color: "rgb(115, 3, 167)" }}>s</span>
        </h2>
        <div className=""></div>
      </div>
    );
};

export default Skills;
