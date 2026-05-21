import React from "react";
import { CiUser, CiMedicalClipboard, CiStar } from "react-icons/ci";
import { RxGear } from "react-icons/rx";
const Dashboard = () => {
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
      name: "likes",
      Icon: CiUser,
    },
    {
      id: 1004,
      name: "Settings",
      Icon: RxGear,
    },
  ];
  return (
    <div className="w-full min-h-screen h-screen flex">
      <aside className="h-full bg-gray-950">
        <ul className="flex flex-col gap-4 text-[var(--text)] w-50 p-6">
          {sideLinks.map((link) => {
            return (
              <li
                key={link.id}
                className="duration-300 px-4 cursor-pointer flex gap-2 p-2 rounded-full border-transparent hover:border-[var(--text)]/10 shadow-2 xl hover:scale-120 hover:shadow-purple-700/80 bg-gray-950 hover:bg-[var(--primary)]/70 duration-300 border font-bold items-center relative"
              >
                <link.Icon />
                {link.name}
              </li>
            );
          })}
        </ul>
      </aside>
      <div className="w-full h-full"></div>
    </div>
  );
};

export default Dashboard;
