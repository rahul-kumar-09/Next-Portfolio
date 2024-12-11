import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import ProjectCard from "./Projects/ProjectCard";

const Work = ({ work }) => {
  return (
    <div className="lg:w-100 h-screen bg-slate-200 py-2 " ref={work}>
      <h2 className="text-5xl text-center drblue flex justify-center items-center font-bold">
        <span className="mr-3">
          <FaLaptopCode />
        </span>{" "}
        Project<span style={{ color: "rgb(115, 3, 167)" }}>s</span>
      </h2>
      <div className="">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Work;
