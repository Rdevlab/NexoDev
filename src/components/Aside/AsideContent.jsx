import React from "react";
import Users from "../Users/Users";
import Tasks from "../Tasks/Tasks";
import { FaTimes } from "react-icons/fa";

const AsideContent = ({ user }) => {
  let no = 0.2;
  return (
    <div
      className="relative rounded-xl bg-white/50 backdrop-blur-sm w-0 shrink-0 overflow-hidden items-end flex flex-col duration-300"
      id="content"
    >
      <button
        className="p-2 hover:text-red-700 duration-300 text-2xl cursor-pointer"
        onClick={() => {
          document.querySelector("#content").classList.add("w-0");
          document.querySelector("#content").classList.remove("w-80");
        }}
      >
        <FaTimes />
      </button>
      <div className="w-full flex flex-col gap-2 p-2 overflow-y-scroll">
        {Users.map((e) => {
          return (
            e.username === user && (
              <div
                className={`flex flex-col p-2 w-full gap-2 items-center rounded-xl animate-[moveUp_.5s_ease_forwards]`}
              >
                <span className="w-30 h-30 shadow-xl rounded-[991px] hover:w-full hover:h-76 hover:rounded-4xl duration-400 transition-linear overflow-hidden">
                  <img
                    src={e.image}
                    alt=""
                    className="hover:scale-120 duration-300"
                  />
                </span>
                <h1 className="font-bold text-4xl w-full text-center">
                  {e.name}
                </h1>
                <h3>{e.role}</h3>
                <div className="flex justify-around rounded-full bg-white/40 shadow-xl w-full p-2">
                  {e.socialMedia.map((ev) => {
                    return (
                      <a
                        href={ev.link}
                        key={ev.id}
                        className="text-2xl hover:scale-120 duration-300"
                      >
                        <ev.Icon />
                      </a>
                    );
                  })}
                </div>
                <div className="flex gap-6 p-2 items-center flex-wrap">
                  {e.tech.map((t) => {
                    return (
                      <span
                        key={t.id}
                        className="p-2 rounded-xl drop-shadow-xl  shrink-0 flex flex-col flex items-center justify-center w-30 duration-300 group bg-white/40 shadow-xl cursor-pointer hover:scale-110"
                      >
                        <t.Icon
                          className={`text-3xl duration-300 group-hover:scale-120 drop-shadow-xl`}
                        />
                        {t.name}
                      </span>
                    );
                  })}
                </div>
                <div className="w-full rounded-xl bg-white/10 p-2  flex gap-4 flex-wrap">
                  <h1 className="text-xl font-bold w-full text-center">
                    Currently Working on
                  </h1>
                  {e.group.map((elem) => {
                    return (
                      <span
                        key={elem.id}
                        className="flex flex-col gap-2 items-center items-center p-2 bg-white/40 rounded-2xl w-30 shrink-0 hover:scale-110 shadow-2xl duration-300"
                      >
                        <span className="w-26 h-20 overflow-hidden flex items-center justify-center">
                          <img
                            src={elem.logo}
                            alt={elem.name}
                            className=" w-full hover:scale-120 duration-300"
                          />
                        </span>
                        <h1 className="text-lg font-bold text-center">
                          {elem.name}
                        </h1>
                      </span>
                    );
                  })}
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default AsideContent;
