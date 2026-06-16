import React from "react";

import { IoMdDoneAll } from "react-icons/io";
import {
  PiArrowsInLineHorizontalThin,
  PiCheckCircleDuotone,
} from "react-icons/pi";
import { RiArrowRightCircleFill, RiVerifiedBadgeFill } from "react-icons/ri";

const FinalPage = (props) => {
  return (
    <div className="w-full h-full flex flex-col gap-4 p-8  animate-[divAnimate_.4s_ease_forwards] items-center justify-center">
      <RiVerifiedBadgeFill className="text-8xl" />
      <h1 className="text-4xl font-bold max-w-[20ch] text-center">
        Hoorey, your all done just click to get start
      </h1>
      <p className="max-w-[30ch] text-center">
        Thank you! now you can be a part of NexoDev group which stands for "Nexo
        Development Group". you will recieve tasks according to your
        technologies.{" "}
      </p>
      <button
        className="w-full flex cursor-pointer hover:bg-white/10 text-xl duration-200 items-center gap-4 p-2 justify-center border rounded-xl"
        onClick={() => {
          props.sendData();
        }}
      >
        Continue <RiArrowRightCircleFill />
      </button>
    </div>
  );
};

export default FinalPage;
