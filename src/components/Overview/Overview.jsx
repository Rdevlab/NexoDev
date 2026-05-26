import React, { useState } from "react";
import { CiUser, CiMedicalClipboard, CiStar, CiTimer } from "react-icons/ci";
import { BiTask } from "react-icons/bi";
import { RxGear } from "react-icons/rx";
import { GrTask } from "react-icons/gr";
import Team from "../../assets/team/Team";
const Overview = () => {
  const [User, setUser] = useState(1);

  return (
    <div className="w-full h-full  flex flex-col gap-2 p-10 overflow-y-scroll backdrop-blur-md">
      {Team.map((person) => {
        return (
          person.id === User && (
            <div
              key={person.id}
              className="w-full flex gap-6 justify-between items-center text-[var(--text)] p-1 px-8 animate-[moveUp_0.5s_linear_forwards]"
            >
              <span className="w-full flex gap-4 items-center  bg-[var(--text)]/20 font-bold shadow-xl backdrop-blur-md px-4 p-2 rounded-md">
                {person.name}
              </span>
              <span className=" w-full flex gap-4 items-center bg-[var(--text)]/20 font-bold shadow-xl backdropblur-md px-4 p-2 rounded-md justify-between">
                {person.todayTasks} <CiTimer className="text-xl " />
              </span>
              <span className=" w-full flex gap-4 items-center bg-[var(--text)]/20 font-bold shadow-xl backdropblur-md px-4 p-2 rounded-md  justify-between">
                {person.completedTasks}
                <BiTask />
              </span>
              <span className="w-full flex gap-4 items-center bg-[var(--text)]/20 font-bold shadow-xl backdrop-blur-md px-4 p-2 rounded-md  justify-between">
                {person.totalTasks} <GrTask />
              </span>
              <span className="w-full  flex gap-4 items-center bg-[var(--text)]/20 font-bold shadow-xl backdrop-blur-md px-4 p-2 rounded-md  justify-between">
                {person.ratings} <CiStar></CiStar>
              </span>
            </div>
          )
        );
      })}

      <div className="w-full  flex justify-between text-[var(--text)] gap-4 p-4 animate-[moveUp_0.5s_.5s_linear_forwards] opacity-0">
        <div className="h-60 w-120 shrink-0 border flex rounded-xl  relative justify-end border-[var(--primary)]/80 backdrop-blur-xl bg-white/20">
          {Team.map((person) => {
            return (
              person.id === User && (
                <span className="w-full bg-gradient-to-r from-[var(--background)] via-[var(--background)] h-full flex flex-col gap-2  text-sm absolute left-0 pt-4 rounded-xl p-4 ">
                  <span className="text-[var(--primary)] text-2xl max-w-[20ch] font-bold">
                    {person.role}
                  </span>
                  <p className="w-[28ch]">{person.info}</p>
                </span>
              )
            );
          })}
          {Team.map((person) => {
            return (
              person.id === User && (
                <img src={person.profile} className="rounded-r-xl" />
              )
            );
          })}
        </div>
        <span className="w-full h-60 flex bg-[var(--primary)]/70 backdrop-blur-sm rounded-xl "></span>
      </div>
      {/* technologies */}
      <div className="w-full  h-60 flex shadow-2xl justify-between text-[var(--text)] gap-4 p-4  bg-[var(--primary)]/30 backdrop-blur-sm rounded-xl animate-[moveUp_0.5s_1s_linear_forwards] opacity-0">
        {Team.map((item) => {
          return (
            item.id === User &&
            item.tech.map((e) => {
              return (
                <span
                  key={e.id}
                  className="w-full h-full flex flex-col gap-4 items-center justify-center bg-[var(--background)]/40 rounded-xl p-4"
                >
                  <e.Icon className="text-6xl text-[var(--text)]" />
                  <span className="text-2xl font-bold">{e.name}</span>
                  <p className="text-sm text-center">{e.info}</p>
                </span>
              );
            })
          );
        })}
        {/* {tech.map((item) => {
          return (
            <span
              key={item.id}
              className="w-full h-full flex flex-col gap-4 items-center justify-center bg-[var(--background)]/40 rounded-xl p-4"
            >
              <item.Icon className="text-6xl text-[var(--text)]" />
              <span className="text-2xl font-bold">{item.name}</span>
              <p className="text-sm text-center">{item.info}</p>
            </span>
          );
        })} */}
      </div>
    </div>
  );
};

export default Overview;
