import React from "react";
import Tasks from "../Tasks/Tasks";
import { BsTextareaResize } from "react-icons/bs";
import { TbWorldShare, TbListDetails } from "react-icons/tb";
import { PiLinkBreakThin, PiEyedropperSampleLight } from "react-icons/pi";
import {
  MdOutlineAccessTime,
  MdTitle,
  MdGroupAdd,
  MdOutlinePhonelink,
} from "react-icons/md";
import { SiSaturn } from "react-icons/si";
import { FaHourglassStart } from "react-icons/fa";

const Projects = ({ username, image }) => {
  const baseDelayMs = 200;
  return (
    <div className="absolute top-10 bottom-10 left-26 right-16 bg-white/40 p-4 flex gap-2 flex-col rounded-xl">
      <div className="flex w-full text-white p-4 bg-black rounded-t-xl">
        <span className="w-14 flex items-center gap-2 shrink-0">
          Round <SiSaturn />
        </span>
        <span className="w-40  flex items-center gap-2 shrink-0">
          Group <MdGroupAdd />
        </span>
        <span className="w-60  flex items-center gap-2 shrink-0">
          Title <MdTitle />
        </span>
        <span className="w-80  flex items-center gap-2 shrink-0">
          Info <TbListDetails />
        </span>
        <span className="w-20  flex items-center gap-2 shrink-0">
          Sample
          <PiEyedropperSampleLight />
        </span>
        <span className="w-20  flex items-center gap-2 shrink-0">
          Final <MdOutlinePhonelink />
        </span>
        <span className="w-20 flex items-center gap-2 shrink-0">
          Time
          <MdOutlineAccessTime />
        </span>
        <span className="w-30  flex items-center gap-2 shrink-0">
          State <FaHourglassStart />
        </span>
      </div>
      {Tasks.filter((e) => e.designer === username).map((e, index) => {
        const animationDelay = `${baseDelayMs * (index + 1)}ms`;
        return (
          <div
            key={e.id ?? `${e.designer}-${index}`}
            className="w-full h-max border border-white shadow-2xl rounded-xl bg-white/50 p-2 animate-[moveUp_.5s_ease_forwards] opacity-0 flex flex-col gap-2"
            style={{ animationDelay }}
          >
            <div className="flex flex-col bg-cover justify-center rounded-xl">
              <div className="flex gap-4 justify-between items-center p-2 overflow-scroll">
                <span className="w-14 font-bold text-xl">{e.round}</span>
                <span className="w-40 shrink-0 ">{e.group}</span>
                <span className="w-60 shrink-0 ">{e.title}</span>
                <p className="w-80 shrink-0">{e.info}</p>
                <a
                  href={e.link}
                  className="w-10 font-bold duration-300 hover:scale-120 text-xl shrink-0"
                >
                  <PiLinkBreakThin />
                </a>
                <a
                  href={e.finalLink}
                  className="w-10 font-bold text-xl duration-300 hover:scale-120 shrink-0 "
                >
                  <TbWorldShare />
                </a>
                <span className="w-20 shrink-0 flex ">{e.time} hours</span>
                <span className="w-30 shrink-0 ">{e.state}</span>
              </div>
              {/* info */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
