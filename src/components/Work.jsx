import React from 'react'
import { FaLaptopCode } from "react-icons/fa";

const Work = () => {
    return (
      <div className="lg:w-100 h-screen bg-slate-200 py-2 ">
        <h2 className="text-5xl text-center drblue flex justify-center items-center font-bold">
          <span className="mr-3">
            <FaLaptopCode />
          </span>{" "}
          Wor<span style={{ color: "rgb(115, 3, 167)" }}>k</span>
        </h2>
        <div className=""></div>
      </div>
    );
}

export default Work
