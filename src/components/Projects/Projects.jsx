import React, { useEffect, useState } from "react";
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
import { FaHourglassStart, FaEye } from "react-icons/fa";

const Projects = ({ username, image }) => {
  const [check, setCheck] = useState(0);
  const baseDelayMs = 200;
  useEffect(() => {
    document.querySelectorAll(".check").forEach((e) => {
      localStorage.setItem("check", e.value);
    });
  }, [check]);
  return (
    <div className="absolute top-10 bottom-10 left-26 right-16 bg-white/50 p-4 flex gap-2 flex-col rounded-xl">
      <div className="flex gap-4 justify-around items-center p-2 overflow-scroll bg-black text-white rounded-t-2xl">
        <span className="w-14 flex items-center justify-center gap-2 shrink-0 flex-col border-r">
          Round <SiSaturn />
        </span>
        <span className="w-40 justify-center  flex text-center items-center gap-1 shrink-0 flex-col border-r">
          Group <MdGroupAdd />
        </span>

        <span className="w-80  flex items-center gap-1 shrink-0 flex-col border-r">
          Info <TbListDetails />
        </span>
        <span className="w-20  flex items-center gap-1 shrink-0 flex-col border-r">
          Sample
          <PiEyedropperSampleLight />
        </span>
        <span className="w-20  flex items-center gap-1 shrink-0 flex-col border-r">
          Final <MdOutlinePhonelink />
        </span>
        <span className="w-20 flex items-center gap-1 shrink-0 flex-col border-r">
          Duration
          <MdOutlineAccessTime />
        </span>
        <span className="w-30  flex items-center gap-1 shrink-0 flex-col border-r">
          State <FaHourglassStart />
        </span>
        <span className="w-20  flex items-center gap-1 shrink-0 flex-col">
          Seen <FaEye />
        </span>
      </div>
      {Tasks.filter((e) => e.designer === username).map((e, index) => {
        const animationDelay = `${baseDelayMs * (index + 1)}ms`;
        return (
          <div
            key={e.id ?? `${e.designer}-${index}`}
            className="w-full h-max border border-white shadow-2xl rounded-xl bg-white/70 backdrop-blur-sm p-2 animate-[moveUp_.5s_ease_forwards] opacity-0 flex flex-col gap-2"
            style={{ animationDelay }}
          >
            <div className="flex flex-col bg-cover justify-center items-between rounded-xl">
              <div className="flex gap-4 justify-around items-center p-2 overflow-scroll">
                <span className="w-14 shrink-0 font-bold text-xl text-center flex items-center justify-center border-r">
                  {e.round}
                </span>
                <span className="w-40 shrink-0  flex items-center text-center justify-center border-r">
                  {e.group}
                </span>
                <p className="w-80 shrink-0  flex items-center flex-wrap justify-center border-r">
                  {e.info}
                </p>
                <a
                  href={e.link}
                  target="_blank"
                  className="w-20 font-bold duration-300 hover:scale-120 text-xl shrink-0  flex items-center justify-center border-r"
                >
                  <PiLinkBreakThin />
                </a>
                <a
                  href={e.finalLink}
                  target="_blank"
                  className="w-20 font-bold text-xl duration-300 hover:scale-120 shrink-0  flex items-center justify-center border-r"
                >
                  <TbWorldShare />
                </a>
                <span className="w-20 shrink-0  flex items-center justify-center border-r">
                  {e.time} hours
                </span>
                <span className="w-30 shrink-0  flex items-center justify-center border-r">
                  {e.state}
                </span>
                <input
                  type="checkbox"
                  onChange={() => {
                    setCheck(check + 1);
                  }}
                  value={localStorage.getItem("check")}
                  className="w-20 text-center flex items-center shrink-0 justify-center check"
                />
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
