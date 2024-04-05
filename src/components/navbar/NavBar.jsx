import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { MdDarkMode } from "react-icons/md";

const navItems = [
  {
    id: 0,
    name: "home",
  },
  {
    id: 1,
    name: "skills",
  },
  {
    id: 2,
    name: "works",
  },
  {
    id: 3,
    name: "resume",
  },
  {
    id: 4,
    name: "contact",
  },
];

const NavBar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the navbar
  const toggleNav = (name) => {
    setIsOpen(!isOpen);
    setActiveIndex(name === activeIndex ? null : name);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full fixed top-0 py-5 sm:py-3    z-30 ${
        scrollPosition > 0
          ? `bg-slate-100 dark:bg-black`
          : "bg-slate-100/40 dark:bg-black"
      } ${darkMode ? "dark" : ""}`}>
      <nav className="container m-auto flex items-center justify-between">
        <div data-aos="fade-down" className="logo">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/"
            className="text-2xl  font-normal  xl:font-bold
    sm:text-2xl  exsm:text-xl text-black dark:text-white">
            Himanshu Verma
          </Link>
        </div>
        <div
          data-aos="fade-down"
          className="nav-items flex items-center space-x-11">
          <button
            onClick={toggleDarkMode}
            className="rounded-full py-3 px-3 sm:visible hidden md:block text-white bg-black dark:bg-white
               dark:text-black">
            <MdDarkMode size="1.2rem"></MdDarkMode>
          </button>
          <button
            onClick={toggleNav}
            className="cursor-pointer text-2xl hidden md:block text-black dark:text-white">
            <HiMenu size={25} />
          </button>

          <ul
            className={`flex items-center space-x-11 ${
              !isOpen ? "md:flex" : "md:right-[0%]"
            } md:flex-col md:absolute m-auto md:top-0 md:right-[-100%] md:w-[78%] md:h-screen md:bg-white dark:md:bg-slate-900`}>
            <button
              onClick={toggleNav}
              className="text-3xl hidden md:block relative right-0 top-4 container mx-auto text-black dark:text-white">
              <RxCross2 size={25} />
            </button>
            {navItems.map((item) => (
              <li
                key={item.id}
                className="md:m-6 md:flex md:gap-6 md:items-center md:justify-center">
                <a
                  onClick={() => toggleNav(item.name)}
                  href={`#${item.name}`}
                  className={`uppercase cursor-pointer text-black dark:text-white hover:bg-zinc-300/50 dark:hover:bg-slate-600 hover:rounded-md hover:px-6 hover:py-2 hover:text-black dark:hover:text-white font-bold ${
                    item.name === activeIndex
                      ? "text-slate-800 dark:text-slate-200 px-6 py-2 bg-white dark:bg-slate-600 rounded-2xl"
                      : ""
                  }`}>
                  {item.name}
                </a>
              </li>
            ))}
            <a
              href=""
              className="bg-black dark:bg-white text-[1rem] text-white dark:text-black px-8 py-2 rounded-xl font-bold md:m-5 md:block md:mx-auto md:w-fit lg:px-3">
              HIRE ME
            </a>
            <button
              onClick={toggleDarkMode}
              className="rounded-full py-3 px-3 sm:hidden text-white bg-black dark:bg-white
               dark:text-black">
              <MdDarkMode size="1.2rem"></MdDarkMode>
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
