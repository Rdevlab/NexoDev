import React from "react";
import { FaUsers, FaCode, FaBullseye } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const About = () => {
  const items = [
    {
      Icon: FaUsers,
      name: "Who we are? ",
      info: "We are a passionate development team focused on building modern digital solutions for businesses and individuals.",
    },
    {
      Icon: FaCode,
      name: "What we do?",
      info: "We specialize in web development, mobile applications, UI/UX design, branding, and software solutions.",
    },
    {
      Icon: FaBullseye,
      name: "Our mission",
      info: "Our mission is to create innovative, scalable, and user-friendly technology that helps people grow and succeed.",
    },
  ];
  return (
    <div
      className="flex flex-col w-full min-h-screen gap-4 bg-[var(--background)] items-center justify-center pt-20 "
      id="about"
    >
      <span className="flex gap-2 items-center px-4 p-1 border text-[var(--text)] rounded-full">
        <IoMdCheckmarkCircleOutline /> About us
      </span>
      <div className="w-full h-full flex flex-col xl:flex-row md:flex-row justify-center gap-8 items-center p-10 gap-4 animate-[divAnimate_ease]">
        {items.map((item, index) => {
          return (
            <div
              className="flex flex-col group gap-4 h-80 items-center border-transparent hover:border-[var(--text)] text-[var(--text)] justify-center p-8 border duration-300 cursor-pointer hover:scale-105 rounded-xl"
              key={index}
            >
              <item.Icon
                size={50}
                className="group-hover:animate-bounce duration-300"
              />
              <h1 className="text-2xl font-bold">{item.name}</h1>
              <p className="max-w-[30ch] text-center leading-7">{item.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
