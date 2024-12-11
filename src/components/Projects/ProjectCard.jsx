import Image from "next/image";
import React from "react";

const ProjectCard = () => {
  return (
    <div className="lg:w-100 min-h-screen py-2 text-justify">
      <div className=" items-center justify-between  lg:px-28 px-5 py-10">
        <div className="md:flex gap-4 md:w-3/4 m-auto my-5 text-sm cursor-pointer">
          <div>
            <Image
              className="w-96 lg:w-56 rounded-lg m-auto"
              src={"/blog_img.jpg"}
              width={100}
              height={100}
            />{" "}
          </div>
          <div className="lg:w-11/12">
            <h2 className="text-2xl font-bold my-2">Quiz App</h2>
            The Quiz App is an interactive web application designed to test your
            knowledge on various topics. Built with HTML, CSS, and JavaScript,
            the app offers multiple-choice questions, instant feedback, and
            real-time score tracking. Enjoy a user-friendly and responsive
            design, making it easy to navigate and fun to use on any device.
            Start the quiz, answer questions, and see your score improve with
            each attempt!
          </div>
        </div>

        <div className="md:flex gap-4 md:w-3/4 m-auto my-5 text-sm cursor-pointer">
          <div>
            <Image
              className="w-96 lg:w-56 rounded-lg m-auto"
              src={"/blog_img.jpg"}
              width={100}
              height={100}
            />{" "}
          </div>
          <div className="lg:w-11/12">
            <h2 className="text-2xl font-bold my-2">Quiz App</h2>
            The Quiz App is an interactive web application designed to test your
            knowledge on various topics. Built with HTML, CSS, and JavaScript,
            the app offers multiple-choice questions, instant feedback, and
            real-time score tracking. Enjoy a user-friendly and responsive
            design, making it easy to navigate and fun to use on any device.
            Start the quiz, answer questions, and see your score improve with
            each attempt!
          </div>
        </div>

        <div className="md:flex gap-4 md:w-3/4 m-auto my-5 text-sm cursor-pointer">
          <div>
            <Image
              className="w-96 lg:w-56 rounded-lg m-auto"
              src={"/blog_img.jpg"}
              width={100}
              height={100}
            />{" "}
          </div>
          <div className="lg:w-11/12">
            <h2 className="text-2xl font-bold my-2">Quiz App</h2>
            The Quiz App is an interactive web application designed to test your
            knowledge on various topics. Built with HTML, CSS, and JavaScript,
            the app offers multiple-choice questions, instant feedback, and
            real-time score tracking. Enjoy a user-friendly and responsive
            design, making it easy to navigate and fun to use on any device.
            Start the quiz, answer questions, and see your score improve with
            each attempt!
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
