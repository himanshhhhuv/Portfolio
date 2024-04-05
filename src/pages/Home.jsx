import React, { useState } from "react";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import NavBar from "../components/navbar/NavBar";
import Resume from "../components/resume/Resume";
import Skills from "../components/skills/Skills";
import Work from "../components/work/Work";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => {
      if (prevDarkMode) {
        document.body.classList.remove("dark");
      } else {
        document.body.classList.add("dark");
      }
      return !prevDarkMode;
    });
  }

  return (
    <>
      <NavBar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        className={darkMode ? "dark" : ""}
      />
      <Hero
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        className={darkMode ? "dark" : ""}
      />
      <Skills
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        className={darkMode ? "dark" : ""}
      />
      <Work
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        className={darkMode ? "dark" : ""}
      />

      <Contact
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        className={darkMode ? "dark" : ""}
      />
      <Footer
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        className={darkMode ? "dark" : ""}
      />
    </>
  );
};

export default Home;
