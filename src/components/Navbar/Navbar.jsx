import React, { useState } from "react";
import {
  FaHome,
  FaClipboard,
  FaUser,
  FaUsers,
  FaBars,
  FaServer,
  FaPhone,
} from "react-icons/fa";
const Navbar = () => {
  const Navlinks = [
    {
      id: 1,
      name: "Home",
      Icon: FaHome,
      link: "#home",
    },
    {
      id: 2,
      name: "About",
      Icon: FaUsers,
      link: "#about",
    },
    {
      id: 3,
      name: "Porjects",
      Icon: FaClipboard,
      link: "#project",
    },
    {
      id: 4,
      name: "Services",
      Icon: FaServer,
      link: "#service",
    },
    {
      id: 5,
      name: "Contact",
      Icon: FaPhone,
      link: "#contact",
    },
  ];

  return (
    <>
      <nav className=" xl:rounded-full px-12 py-2  backdrop-blur-md bg-[var(--background)]/10 flex justify-between text-[var(--primary)] fixed  xl:top-0 xl:bottom-auto  bottom-0  w-full xl:w-max xl:left-20 left-0 xl:top-4 z-30 border border-[var(--primary)]/40">
        <ul className="flex gap-8 items-center ">
          {Navlinks.map((link) => {
            return (
              <li
                key={link.id}
                className="flex gap-2 items-center relative justify-center group drop-shadow-xl drop-shadow-green-800"
              >
                <link.Icon className="absolute group-hover:text-transparent group-hover:scale-0 duration-300 " />
                <a
                  href={link.link}
                  className="text-transparent scale-0 group-hover:text-[var(--primary)] group-hover:-trasnlate-y-2  group-hover:scale-100  duration-300"
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
