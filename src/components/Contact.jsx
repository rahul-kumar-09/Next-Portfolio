import React from 'react'
import { FaRegMessage } from "react-icons/fa6";

const Contact = () => {
    return (
      <div className="lg:w-100 h-screen bg-slate-200 py-2 ">
        <h2 className="text-5xl text-center drblue font-bold flex justify-center items-center">
          <span className='mr-1'>
            <FaRegMessage />
          </span>
          Contact{" "}
          <span style={{ color: "rgb(115, 3, 167)", marginLeft: "5px" }}>
            Me
          </span>
        </h2>
        <div className=""></div>
      </div>
    );
}

export default Contact
