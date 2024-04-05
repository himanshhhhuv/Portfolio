import React from "react";
import styled from "styled-components";
import { data } from "../data/data";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const WorkCard = () => {
  const reversedData = [...data].reverse();

  return (
    <>
      {reversedData.map((data) => (
        <div
          data-aos="zoom-in"
          key={data.id}
          className="flex flex-col justify-center items-center gap-4">
          <POPUP className="img-content relative hover:scale-110 transition-all duration-300">
            <div className="h-[280px] w-[380px] hover:scale-125 transition duration-400 cursor-pointer shadow-xl rounded-md md:w-[90%] lg:w-[90%] lg:h-[100%] 2xl:w-[90%] overflow-hidden md:h-[260px] sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto">
              <img
                src={data.img}
                alt={data.title}
                className="object-fit aspect-auto w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
              />
            </div>
            <div className="popup w-full h-[280px] shadow-xl rounded-md overflow-hidden sm:h-[260px] md:w-[320px] sm:w-[92%] p-4">
              <p className="text-gray-900 text-base leading-[1.4] text-justify w-[90%]">
                {data.desc}
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link
                  to={data.link}
                  target="_blank"
                  className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium">
                  <RxExternalLink className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                  <p className="text-black">Demo</p>
                </Link>
                <Link
                  to={data.git}
                  target="_blank"
                  className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium">
                  <AiOutlineGithub className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                  <p className="text-black">Code</p>
                </Link>
              </div>
            </div>
          </POPUP>
          <p className="text-gray-800 dark:text-white text-xl font-medium sm:text-lg">
            {data.title}
          </p>
        </div>
      ))}
    </>
  );
};

export default WorkCard;

const POPUP = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scale(1.25); // Ensuring uniform scale
    }
  }
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(0, 0, 0, 0);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
  // Example of a media query for responsiveness in styled-components
  @media (max-width: 768px) {
    .popup {
      // Adjust styles for smaller screens if necessary
    }
  }
`;
