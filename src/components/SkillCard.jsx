import React from "react";
import { RiReactjsFill } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { TbBrandKotlin } from "react-icons/tb";

const SkillCard = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-2  gap-y-8 text-center ">
      <div className="flex flex-col">
        <p className="m-auto">
          <RiReactjsFill size={60} className="text-center" />
        </p>
        <p className="font-semibold">ReactJs</p>
      </div>
      <div className="flex flex-col">
        <p className="m-auto">
          <RiNextjsLine size={60} className="text-center" />
        </p>
        <p className="font-semibold">NextJs</p>
      </div>
      <div className="flex flex-col">
        <p className="m-auto">
          <DiMongodb size={60} className="text-center" />
        </p>
        <p className="font-semibold">MongoDb</p>
      </div>
      <div className="flex flex-col">
        <p className="m-auto">
          <RiTailwindCssFill size={60} className="text-center" />
        </p>
        <p className="font-semibold">Tailwind</p>
      </div>
      <div className="flex flex-col">
        <p className="m-auto">
          <FaBootstrap size={60} className="text-center" />
        </p>
        <p className="font-semibold">Bootstrap</p>
      </div>

      <div className="flex flex-col">
        <p className="m-auto">
          <IoLogoAndroid size={60} className="text-center" />
        </p>
        <p className="font-semibold">Android</p>
      </div>

      <div className="flex flex-col">
        <p className="m-auto">
          <IoLogoHtml5 size={60} className="text-center" />
        </p>
        <p className="font-semibold">HTML</p>
      </div>

      <div className="flex flex-col">
        <p className="m-auto">
          <IoLogoCss3 size={60} className="text-center" />
        </p>
        <p className="font-semibold">CSS</p>
      </div>

      <div className="flex flex-col">
        <p className="m-auto">
          <FaJava size={60} className="text-center" />
        </p>
        <p className="font-semibold">CSS</p>
      </div>

      <div className="flex flex-col">
        <p className="m-auto">
          <TbBrandKotlin size={60} className="text-center" />
        </p>
        <p className="font-semibold">CSS</p>
      </div>
    </div>
  );
};

export default SkillCard;
