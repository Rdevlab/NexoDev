import React, { useEffect, useRef, useState } from "react";
import { IoIosSend, IoMdCheckmarkCircleOutline } from "react-icons/io";
import sliderImage from "../../assets/projects/slider.jsx";

const Projects = () => {
  const sliderRef = useRef(null);
  const [isPaused, setPaused] = useState(false);

  return (
    <div
      id="project"
      className="flex items-center h-screen justify-center  w-full bg-[var(--background)] flex-col xl:p-20 p-6 gap-6"
    >
      <div className="w-full flex items-center justify-center flex-col gap-4">
        <span className="px-4 p-1 border gap-2 border-[var(--primary)]/50 text-[var(--primary)] rounded-full text-sm flex items-center shadow-[0_0_30px_#8c00ff]/50 bg-[var(--primary)]/20 hover:bg-[var(--primary)]/30 duration-300 hover:scale-105 cursor-pointer ">
          <IoMdCheckmarkCircleOutline className="text-xl font-bold" />
          Projects
        </span>
        <p className="text-[var(--primary)] text-sm">
          Explore through our latest Projects
        </p>
      </div>
      <div
        ref={sliderRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="w-full h-max flex gap-6 overflow-x-scroll"
      >
        {sliderImage.map((project) => {
          return (
            <div
              className="relative xl:w-96 w-90 h-70 shrink-0 rounded-xl z-2 "
              key={project.id}
            >
              <img
                src={project.image}
                className="relative rounded-t-xl w-full z-2"
              />
              <div className="absolute flex text-start flex-col text-[var(--text)]  gap-2 top-0 w-full h-full bg-[var(--primary)]/10 -z-1 items-start justify-end p-2 rounded-xl">
                <h1 className="w-full font-bold text-xl">{project.title}</h1>
                <p className="w-[30ch] text-start text-sm ">{project.info}</p>
              </div>
              <a href={project.link}>
                <span
                  className="absolute flex items-center justify-center w-14 h-14 border-6 rounded-xl hover:scale-110 cursor-pointer  border-[var(--background)] -bottom-1 -right-1 duration-300  bg-[var(--primary)]/40
                after:flex after:w-11 after:h-8 after:content-'' after:bg-transparent  after:absolute after:-left-11 after:border-t-transparent after:border-l-transparent after:border-6 after:-bottom-2 after:rounded-br-xl after:border-[var(--background)]  
                before:flex before:w-11 before:h-8 before:content-'' before:bg-transparent  before:absolute before:-top-8 before:border-t-transparent before:border-l-transparent before:border-6 before:-right-2 before:rounded-br-xl before:border-[var(--background)]"
                >
                  <IoIosSend className="text-2xl  text-[var(--text)]" />
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
