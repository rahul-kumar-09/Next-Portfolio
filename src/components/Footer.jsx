import React from "react";

const Footer = () => {
  return (
    <div className="bg-black ">
      <div className="grid grid-cols-3 text-white gap-2 lg:px-28 px-5 py-10">
        <div>
          <h2 className="text-xl font-bold mb-2">Rahul's Portfolio</h2>
          <p className="mb-3">
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
          </p>
          <p>Keep Rising 🚀. Connect with me over live chat!</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">quick links</h2>
          <p>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Skills</li>
              <li>Work</li>
              <li>Experience</li>
            </ul>
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Contact Info</h2>
          <p>+91 xxx-xxx-xxxx </p>
          <p>Noida, UP/Delhi-NCR </p>
        </div>
          </div>
          <hr className="w-[90%] m-auto border-slate-600"/>
          <div className="text-white text-center py-2 ">
              <p>Designed By Rahul Kumar Maury</p>
          </div>
    </div>
  );
};

export default Footer;
