import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import project from "../../assets/projects/project1.png";
import Slider from "../ImageSlider/Slider";
import Navbar from "../Navbar/Navbar";
import Account from "../Account/Account";
import Login from "../Login/Login";

const Hero = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col gap-4 items-center xl:p-28 p-10 pt-30  bg-[var(--background)]/40"
      id="home"
    >
      <Navbar />

      <button
        onClick={() => {
          document
            .querySelector("#loginSection div")
            .classList.remove("hidden");
        }}
      >
        <Account />
      </button>

      <div id="loginSection">
        <Login />
      </div>
      <h1 className="xl:text-8xl text-4xl font-bold text-[var(--primary)] drop-shadow-xl drop-shadow-black">
        NexoDev Team
      </h1>

      <p className="xl:w-[40ch] w-[30ch] text-center xl:text-xl font-bold text-[var(--text)] drop-shadow-xl drop-shadow-black">
        Explore through out modern user interface, responsive UIs and
        interactive web applications
      </p>

      <div className="flex w-full">
        <Slider />
      </div>

      <span className="absolute bottom-10 flex gap-8 items-center">
        <a
          href="#about"
          className="px-4 p-1 rounded-full flex items-center gap-2 bg-[var(--primary)]/30 border border-[var(--primary)] text-[var(--text)] font-bold shadow-[0_0_50px_#15ff00] hover:scale-110 duration-200 hover:-translate-y-2 "
        >
          Explore
          <FaChevronDown />
        </a>
        <a
          href="#about"
          className="px-4 p-1 rounded-full flex items-center gap-2 bg-[var(--primary)]/30 border border-[var(--primary)] text-[var(--text)] font-bold shadow-[0_0_50px_#15ff00] hover:scale-110 duration-200 hover:-translate-y-2 "
        >
          Hire
          <FaChevronDown />
        </a>
      </span>
    </div>
  );
};

export default Hero;
