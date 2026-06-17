import React from "react";
import ActiveProList from "../../../assests/logos/ActiveProList";
import { FaArrowRight } from "react-icons/fa";

const ActiveProjects = (props) => {
  return (
    props.final === false && (
      <div className="flex w-full flex-col gap-4 animate-[divAnimate_.4s_ease_forwards] duration-300">
        <h1 className="w-full p-2 bg-white/10 text-center rounded-xl xl:text-2xl font-bold">
          Select a project to have membership
        </h1>
        <div className="w-full flex-wrap flex gap-6 justify-center items-center overflow-scroll  h-max p-2 rounded-2xl">
          {ActiveProList.map((e, index) => {
            return (
              <div
                className="flex flex-col relative gap-2 duration-300 overflow-hidden hover:bg-white/20 hover:scale-110 cursor-pointer items-center justify-center xl:w-40 w-30 h-30 xl:h-40 p-8 rounded-xl text-white/60 border"
                key={index}
              >
                <img src={e.logo} className="w-full h-full" alt="" />
                <span>{e.name}</span>
                <button
                  className="absolute w-full z-4 h-full backdrop-blur-xl overlay"
                  onClick={(el) => {
                    const group = props.group;
                    const detail = {
                      id: Number,
                      name: e.name,
                      logo: e.logo,
                    };
                    props.setGroup([...group, detail]);
                    el.target.tagName === "BUTTON" &&
                      el.target.classList.toggle("bg-black/80");
                  }}
                ></button>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => {
            props.setFinal(true);
          }}
          className="flex gap-4 items-center w-full p-2 bg-white/10 rounded-xl hover:bg-white/20 duration-300 cursor-pointer justify-center"
        >
          Next <FaArrowRight />
        </button>
      </div>
    )
  );
};

export default ActiveProjects;
