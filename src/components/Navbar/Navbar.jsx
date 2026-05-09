import React from "react";
import {
  FaHome,
  FaClipboard,
  FaUser,
  FaUsers,
  FaBars,
  FaServer,
  FaPhone,
} from "react-icons/fa";
import logo from "../../assets/logo/logo.png.png";
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
      <div className=" rounded-b-2xl px-12 py-2 backdrop-blur-md bg-[var(--background)]/10 flex justify-between text-[var(--text)] fixed  top-0 xl:right-20 w-full xl:w-auto xl:left-20 z-30 border-b border-[var(--primary)]/40">
        <div className="text-xl w-full font-bold text-[var(--primary)] overflow-hidden h-10 w-auto">
          <img src={logo} className="h-full xl:scale-160 scale-180" alt="" />
        </div>
        <ul className="xl:flex hidden gap-8 items-center text-lg ">
          {Navlinks.map((link) => {
            return (
              <li
                key={link.id}
                className="flex gap-2 items-center hover:text-[var(--primary)] relative justify-center group drop-shadow-xl drop-shadow-green-800"
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
        <FaBars className="xl:hidden flex text-4xl" />
      </div>
    </>
  );
};

export default Navbar;
