import React from "react";
import profileImage from "../../assets/profile.png";

import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Resume.pdf";

const Hero = ({ darkmode }) => {
  return (
    <div
      id="home"
      className={`bg-zinc-50 mx-16 mt-20 lg:mt-0 lg:mx-auto lg:rounded-none rounded-2xl dark:bg-black`}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem]">
              Hey👋, I'm{" "}
              <span className="italic font-thin ">Himanshu Verma</span>
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Frontend Developer",
                1500,
                "Freelancer",
                1500,
                "Editor",
                1000,
                "UX/UI Designer",
                1500,
                "",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-slate-800 text-4xl font-bold sm:text-3xl bg-yellow-300"
            />
            <p
              data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full tracking-widest text-gray-500 sm:text-[.95rem]">
              Coder.Photographer.Editor.Designer.
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href="#contact"
              className=" bg-black text-[1rem] dark:hover:bg-zinc-50 border hover:border-none border-opacity-40 dark:hover:text-black text-white hover:bg-zinc-300 hover:text-black px-10 py-2 sm:px-8 rounded-lg font-bold  ">
              <span> Contact</span>
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] border bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  dark:hover:scale-110 sm:hover:text-black sm:hover:scale-100 hover:text-amber-500 hover:scale-110"
              download>
              <div className=" dark:text-black flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5">
              <li>
                <a href="https://github.com/himanshhhhuv">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/himanshu-verma-b6707520a/?trk=opento_sprofile_details">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
              
              </li>
              <li>
                <a href="">
                  {" "}
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
              data-aos="fade-up"
              className=" h-[80%] lg:w-[100%] lg:h-[60%] w-full object-cover md:h-[90%] md:m-auto sm:m-0 drop-shadow-2xl"
              src={profileImage}
              // src={mine}
              alt="mine"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
