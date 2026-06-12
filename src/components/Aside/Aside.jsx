import React, { useState } from "react";
import Users from "../Users/Users";
import { FaUser, FaList } from "react-icons/fa";
import AsideContent from "./AsideContent";

const Aside = () => {
  const [user, setUser] = useState(null);
  return (
    <div className=" absolute top-20 bottom-20 left-0  flex gap-2 ">
      <div
        className="p-2 rounded-r-2xl bg-white/40 backdrop-blur-sm flex flex-col h-full shrink-0 w-18 overflow-y-scroll gap-2 duration-300"
        id="userContainer"
      >
        <button className="w-12 h-12 bg-white/50 rounded-full shrink-0 flex items-center justify-center cursor-pointer">
          <FaList />
        </button>

        {Users.map((e) => {
          return (
            <div
              className="flex gap-2 items-center rounded-full p-1 bg-white/40 cursor-pointer"
              onClick={() => {
                setUser(e.username);
                document.querySelector("#content").classList.add("w-80");
                document.querySelector("#content").classList.remove("w-0");
              }}
            >
              <button className="w-12 h-12 rounded-full overflow-hidden group shrink-0">
                <img
                  src={e.image}
                  alt={e.name}
                  className="w-full h-full group-hover:scale-120 duration-300"
                />
              </button>
            </div>
          );
        })}
      </div>
      <AsideContent user={user} />
    </div>
  );
};

export default Aside;
