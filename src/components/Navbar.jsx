import React from "react";

const Navbar = () => {
  return (
    <div
      className="py-3 text-black bg-[#ffffff] "
      style={{ boxShadow: "0 1px 4px rgba(146, 161, 176, 0.3)" }}
    >
      <div className="flex justify-between items-center px-28 ">
        <div className="text-4xl font-bold">RK</div>
        <div>
          <ul className="flex gap-8 font-bold ">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Skills</li>
            <li className="cursor-pointer">Work</li>
            <li className="cursor-pointer">Experience</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
