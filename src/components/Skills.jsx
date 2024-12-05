import React from "react";
import { FaCode } from "react-icons/fa6";
import SkillCard from "./SkillCard";

const Skills = ({skill}) => {
    return (
      <div className="lg:w-100 min-h-screen py-2 " ref={skill}>
        <h2 className="text-5xl text-center drblue flex justify-center font-bold items-center">
          <span className="mr-3">
            <FaCode />
          </span>{" "}
          Skill<span style={{ color: "rgb(115, 3, 167)" }}>s</span>
        </h2>
        <div className="items-center justify-between min-h-screen lg:px-28 px-5 py-10">
          <SkillCard />
        </div>
      </div>
    );
};

export default Skills;
