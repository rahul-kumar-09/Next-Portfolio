import React, { useState } from "react";

const Navbar = ({
  home,
  about,
  skill,
  contact,
  work,
  scrollHandler,
  experience,
}) => {
  const [active, setActive] = useState("home");

  const handleScroll = (section, sectionName) => {
    scrollHandler(section);
    setActive(sectionName);
  };

  return (
    <div
      className="hid-nav hidden lg:py-3 text-black bg-[#ffffff] w-screen" // Visible only on large screens
      style={{
        boxShadow: "0 1px 4px rgba(146, 161, 176, 0.3)",
        position: "fixed",
        top: "0px",
      }}
    >
      <div className="flex justify-between items-center lg:px-28 px-5">
        <div
          className="text-4xl font-bold cursor-pointer"
          onClick={() => handleScroll(home, "home")}
        >
          RK
        </div>
        <div>
          <ul className="flex gap-8 font-bold">
            <li
              className={`cursor-pointer hover:text-[#2506ad] ${
                active === "home" &&
                "text-[#2506ad] border-b-2 border-[#2506ad]"
              }`}
              onClick={() => handleScroll(home, "home")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer hover:text-[#2506ad] ${
                active === "about" &&
                "text-[#2506ad] border-b-2 border-[#2506ad]"
              }`}
              onClick={() => handleScroll(about, "about")}
            >
              About
            </li>
            <li
              className={`cursor-pointer hover:text-[#2506ad] ${
                active === "skill" &&
                "text-[#2506ad] border-b-2 border-[#2506ad]"
              }`}
              onClick={() => handleScroll(skill, "skill")}
            >
              Skills
            </li>
            <li
              className={`cursor-pointer hover:text-[#2506ad] ${
                active === "work" &&
                "text-[#2506ad] border-b-2 border-[#2506ad]"
              }`}
              onClick={() => handleScroll(work, "work")}
            >
              Work
            </li>
            <li
              className={`cursor-pointer hover:text-[#2506ad] ${
                active === "experience" &&
                "text-[#2506ad] border-b-2 border-[#2506ad]"
              }`}
              onClick={() => handleScroll(experience, "experience")}
            >
              Experience
            </li>
            <li
              className={`cursor-pointer hover:text-[#2506ad] ${
                active === "contact" &&
                "text-[#2506ad] border-b-2 border-[#2506ad]"
              }`}
              onClick={() => handleScroll(contact, "contact")}
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
