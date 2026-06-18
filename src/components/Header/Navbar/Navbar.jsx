import React from "react";
import { BiUser } from "react-icons/bi";

const Navbar = ({ setDashboard }) => {
  const links = [
    {
      link: "#home",
      name: "Home",
    },
    {
      link: "#about",
      name: "About",
    },

    {
      link: "#services",
      name: "Services",
    },
    {
      link: "#faq",
      name: "FAQ",
    },
    {
      link: "#contact",
      name: "Contact",
    },
  ];
  return (
    <div className="w-full z-50  backdrop-blur-xs p-4 px-6 border-b border-[var(--text)]/20 fixed top-0 right-0 left-0 flex  gap-4 items-center justify-between">
      <div className="flex gap-2 items-center">
        <img src="./devgrouplogo.png" alt="" className="h-10" />
        Nexo Development Group
      </div>
      <div className="flex items-center gap-10 duration-400">
        {links.map((link, index) => {
          return (
            <a
              href={link.link}
              key={index}
              className="duration-300 hover:text-[var(--primary2)]"
            >
              {link.name}
            </a>
          );
        })}
        <button
          onClick={() => {
            setDashboard(true);
          }}
          className="flex items-center gap-2 px-4 p-1 border rounded-full bg-white/10 cursor-pointer"
        >
          <BiUser /> Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
