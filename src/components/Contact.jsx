import Image from 'next/image';
import React from 'react'
import { FaRegMessage } from "react-icons/fa6";

const Contact = ({contact}) => {
    return (
      <div className="lg:w-100 min-h-screen bg-slate-200 py-2 " ref={contact}>
        <h2 className="text-5xl text-center drblue font-bold flex justify-center items-center">
          <span className="mr-1">
            <FaRegMessage />
          </span>
          Contact{" "}
          <span style={{ color: "rgb(115, 3, 167)", marginLeft: "5px" }}>
            Me
          </span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-4 items-center justify-between min-h-screen lg:px-28 px-5 py-10">
          <div>
            <Image
              src={"contact_person.svg"}
              width={100}
              height={100}
              className="lg:w-80 w-48 m-auto lg:m-0"
              alt="About"
            />
          </div>
          <div>
            <p>
              <input
                className="my-2 py-2 px-8 rounded-md border-2 w-80 border-[#2506ad]"
                type="text"
                placeholder="Name"
              />
            </p>
            <p>
              <input
                className="my-2 py-2 px-8 rounded-md border-2 w-80 border-[#2506ad]"
                type="email"
                placeholder="Email"
              />
            </p>
            <p>
              <input
                className="my-2 py-2 px-8 rounded-md border-2 w-80 border-[#2506ad]"
                type="number"
                placeholder="Phone"
              />
            </p>
            <p>
              <textarea
                className="my-2 py-2 px-8 rounded-md border-2 w-80 border-[#2506ad]"
                placeholder="Message"
                name=""
                id=""
              ></textarea>{" "}
            </p>
            <p className="">
              <button className="py-2 px-5 text-white rounded-lg hover:bg-white hover:text-black  border-2 border-[#2506ad] bg-[#2506ad]">
                Submit
              </button>
            </p>
          </div>
        </div>
      </div>
    );
}

export default Contact
