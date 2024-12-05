import React from 'react'
import { PiOfficeChairBold } from "react-icons/pi";

const Experience = ({ experience }) => {
  return (
    <div className="lg:w-100 h-screen py-2 " ref={experience}>
      <h2 className="text-5xl text-center drblue flex justify-center items-center font-bold">
        <span>
          {" "}
          <PiOfficeChairBold />
        </span>
        Experienc <span style={{ color: "rgb(115, 3, 167)" }}>e</span>
      </h2>
      <div className=""></div>
    </div>
  );
};

export default Experience
