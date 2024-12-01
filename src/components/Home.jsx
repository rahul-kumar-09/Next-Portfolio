import React from 'react'
import { SiGithub } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { HiMiniArrowDownCircle } from "react-icons/hi2";
import Image from "next/image"

const Home = () => {
  return (
    <div className="lg:flex items-center justify-between min-h-screen px-28 ">
      <div>
        <p
          className="lg:text-5xl text-[#002057] my-5"
          style={{ fontWeight: "800" }}
        >
          Hi There,
        </p>
        <p
          className="lg:text-5xl text-[#002057] my-5"
          style={{ fontWeight: "800" }}
        >
          I'm Rahul <span className="text-[#ff7b00]">Kumar</span>
        </p>
        <p className="lg:text-2xl font-bold my-5">
          I Am Into{" "}
          <span style={{ color: "rgb(148, 8, 8)" }}> Web Development </span>
        </p>

        <button
          className="bg-[#2506ad] text-white px-10 py-3 rounded-3xl text-xl font-semibold my-5 hover:bg-[#2506adec] flex gap-1 items-center"
          style={{ boxShadow: "0px 5px 18px rgba(48, 68, 247, 0.6)" }}
        >
          <span>About Me</span>

          <span className="font-bold">
            <HiMiniArrowDownCircle />
          </span>
        </button>

        <div className="flex gap-3 mt-5">
          <span className="bg-black p-4 rounded-full text-[#00d9ff] text-xl">
            <FaTelegram />
          </span>
          <span className="bg-black p-4 rounded-full text-[#00d9ff] text-xl">
            <FaLinkedin />
          </span>
          <span className="bg-black p-4 rounded-full text-[#00d9ff] text-xl">
            <FaTwitter />
          </span>
          <span className="bg-black p-4 rounded-full text-[#00d9ff] text-xl">
            <SiGithub />
          </span>
          <span className="bg-black p-4 rounded-full text-[#00d9ff] text-xl">
            <FaInstagram />
          </span>
        </div>
      </div>
          <div>
              <Image src={"undraw_avtar.svg"} width={100} height={100} className='lg:w-80 w-48'  />
          </div>
    </div>
  );
}

export default Home
