import React from "react";
import { FaChevronDown } from "react-icons/fa";
import project from "../../assets/projects/project1.png";
import Slider from "../ImageSlider/Slider";

const Hero = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col gap-4 items-center p-28  bg-[var(--background)]/40"
      id="home"
    >
      <h1 className="text-8xl font-bold text-[var(--primary)] drop-shadow-xl drop-shadow-black">
        NexoDev Team
      </h1>

      <p className="w-[40ch] text-center text-xl font-bold text-[var(--text)] drop-shadow-xl drop-shadow-black">
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
