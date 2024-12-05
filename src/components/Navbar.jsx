import React from "react";

const Navbar = ({
  home,
  about,
  skill,
  contact,
  work,
  scrollHandler,
  experience,
}) => {
  return (
    <div
      className="lg:py-3 text-black bg-[#ffffff]  w-screen"
      style={{
        boxShadow: "0 1px 4px rgba(146, 161, 176, 0.3)",
        position: "fixed",
        top: "0px",
      }}
    >
      <div className="flex justify-between items-center lg:px-28 px-5 ">
        <div className="text-4xl font-bold cursor-pointer">RK</div>
        <div>
          <ul className="flex gap-8 font-bold ">
            <li
              className="cursor-pointer hover:text-[#2506ad]"
              onClick={() => scrollHandler(home)}
            >
              Home
            </li>
            <li
              className="cursor-pointer hover:text-[#2506ad]"
              onClick={() => scrollHandler(about)}
            >
              About
            </li>
            <li
              className="cursor-pointer hover:text-[#2506ad]"
              onClick={() => scrollHandler(skill)}
            >
              Skills
            </li>
            <li
              className="cursor-pointer hover:text-[#2506ad]"
              onClick={() => scrollHandler(work)}
            >
              Work
            </li>
            <li
              className="cursor-pointer hover:text-[#2506ad]"
              onClick={() => scrollHandler(experience)}
            >
              Experience
            </li>
            <li
              className="cursor-pointer hover:text-[#2506ad]"
              onClick={() => scrollHandler(contact)}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
