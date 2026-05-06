import React from "react";
import {
  FaHome,
  FaClipboard,
  FaUser,
  FaUsers,
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
    <div className="w-full px-12 py-4 backdrop-blur-md bg-[var(--primary)]/10 flex justify-between text-[var(--text)] fixed top-0 z-30 border-b border-[var(--primary)]">
      <div className="text-xl font-bold text-[var(--primary)]">NexoDev</div>
      <ul className="flex gap-8 items-center text-lg">
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

      {/* <a
        href="https://dev-group-mu.vercel.app/"
        className="flex gap-2 items-center px-4 p-1 rounded-full bg-[var(--primary)]/40 hover:bg-[var(--primary)] duration-300"
      >
        <FaUser />
        Accoount
      </a> */}
    </div>
  );
};

export default Navbar;
