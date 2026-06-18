import React from "react";
import { CgChevronDoubleDown } from "react-icons/cg";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col w-full gap-8 h-full justify-center backdrop-blur-xs bg-[var(--background)]/30 items-center p-20 pt-40"
    >
      <h1 className="text-6xl font-bold text-[var(--text)] animate-[textAnimate_.5s_ease_forwards]">
        Nexo Development Group
      </h1>
      <p className="text-xl max-w-[30ch] text-center opacity-0 animate-[textAnimate_.5s_.5s_ease_forwards]">
        It's formed to gather Developers for a better teamwork leading to a
        golden future.
      </p>
      <a
        href="about"
        className="flex gap-2 animate-[textAnimate_.5s_1s_ease_forwards] opacity-0 items-center justify-center px-6 p-1 rounded-full text-[var(--text)] border"
      >
        {"Visit"} <CgChevronDoubleDown size={20} />
      </a>
    </div>
  );
};

export default Hero;
