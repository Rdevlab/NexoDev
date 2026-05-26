import React, { useState } from "react";
import { CiUser, CiMedicalClipboard, CiStar, CiTimer } from "react-icons/ci";
import { BiTask } from "react-icons/bi";
import { RxGear } from "react-icons/rx";
import { GrTask } from "react-icons/gr";
import Team from "../../assets/team/Team";
import Overview from "../Overview/Overview";
import DashProjects from "../Projects/DashProjects";
import Setting from "../Setting/Setting";
const Dashboard = () => {
  const [State, setState] = useState("Overview");
  const sideLinks = [
    {
      id: 1001,
      name: "Overview",
      Icon: CiStar,
    },
    {
      id: 1002,
      name: "Projects",
      Icon: CiMedicalClipboard,
    },

    {
      id: 1003,
      name: "Settings",
      Icon: RxGear,
    },
  ];
  return (
    <div
      id="overView"
      className="w-full min-h-screen h-screen flex hidden  bg-[url('https://static.vecteezy.com/system/resources/previews/060/602/868/large_2x/modern-dynamic-background-purple-color-simple-dynamic-design-can-be-used-for-greeting-card-banner-landing-page-presentation-background-eps10-vector.jpg')] bg-cover bg-no-repeat fixed top-0 left-0 right-0 z-50"
    >
      <aside className="h-full bg-gray-950">
        <ul className="flex flex-col gap-4 text-[var(--text)] w-50 p-6">
          <button
            onClick={() => {
              document.querySelector("#overView").classList.toggle("hidden");
            }}
          >
            close
          </button>
          {sideLinks.map((link) => {
            return (
              <button
                key={link.id}
                onClick={() => setState(link.name) && Dashboard()}
                className="duration-300 px-4 cursor-pointer flex gap-2 p-2 rounded-full border-transparent hover:border-[var(--text)]/10 shadow-2 xl hover:scale-120 hover:shadow-purple-700/80 bg-gray-950 hover:bg-[var(--primary)]/70 duration-300 border font-bold items-center relative"
              >
                <link.Icon />
                {link.name}
              </button>
            );
          })}
        </ul>
      </aside>
      {State === "Overview" && (
        <div className="w-full h-full backdrop-blur-md">
          <Overview />
        </div>
      )}
      {State === "Projects" && (
        <div className="w-full h-full  backdrop-blur-md">
          <DashProjects />
        </div>
      )}
      {State === "Likes" && (
        <div className="w-full h-full backdrop-blur-md">
          <Likes />
        </div>
      )}
      {State === "Settings" && (
        <div className="w-full h-full backdrop-blur-md">
          <Setting />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
