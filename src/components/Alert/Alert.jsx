import React from "react";
import { BiErrorCircle } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { RiErrorWarningFill } from "react-icons/ri";

const Alert = (props) => {
  return (
    <div className="absolute w-full h-full top-0 left-0 bottom-0 right-0 backdrop-blur-xl bg-black/80 flex items-center justify-center">
      <div className=" z-50 backdrop-blur-lg bg-black/20 justify-between gap-2  animate-[popUp_.3s_ease_forwards] opacity-0 flex-col xl:flex-row p-2 rounded-xl  flex items-center gap-4 z-4 text-white xl:w-100 w-80 border ">
        <div className="flex gap-4 items-center flex-col xl:flex-row ">
          <BiErrorCircle className="text-8xl" />
          <h1 className="xl:text-xl text-lg">{props.text}</h1>
        </div>
        <button
          onClick={() => {
            props.setAlert(false);
          }}
          className="flex p-2 border rounded-xl px-4"
        >
          Okey
        </button>
      </div>
    </div>
  );
};

export default Alert;
