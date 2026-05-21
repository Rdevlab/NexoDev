import React from "react";
import { FaCode, FaUsers, FaPhone } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const About = () => {
  const aboutTitles = [
    {
      id: 301,
      Icon: FaCode,
      title: "Clean Code",
      description:
        "Our team is providing clean code service so you will be able to even edit codes by your own",
      feedback: "2K+ provided user interfaces",
    },
    {
      id: 302,
      Icon: FaUsers,
      title: "Clean Code",
      description:
        "Our team is providing clean code service so you will be able to even edit codes by your own",
      feedback: "150+ Active Usrs",
    },
    {
      id: 303,
      Icon: FaPhone,
      title: "Clean Code",
      description:
        "Our team is providing clean code service so you will be able to even edit codes by your own",
      feedback: "24 Hours on Call",
    },
  ];
  return (
    <section
      id="about"
      className="w-full min-h-screen justify-center flex flex-col gap-6 bg-[var(--background)] items-center justify-center p-4 pt-26 "
    >
      <span className="px-4 p-1 border gap-2 border-[var(--primary)]/50 text-[var(--primary)] rounded-full text-sm flex items-center shadow-[0_0_30px_#8c00ff]/50 bg-[var(--primary)]/20 hover:bg-[var(--primary)]/30 duration-300 hover:scale-105 cursor-pointer ">
        <IoMdCheckmarkCircleOutline className="text-xl font-bold" />
        About us
      </span>
      <span className="text-[var(--primary)] text-sm">Experienced Team</span>
      <div className="w-full min-h-[50vh] flex flex-col xl:flex-row items-center gap-10 justify-center p-10 bg-[var(--background)]">
        {aboutTitles.map((item) => {
          return (
            <div
              key={item.id}
              className="text-[var(--text)] p-6 rounded-xl h-max cursor-pointer bg-[var(--primary)]/10 hover:bg-[var(--primary)]/50 border border-[var(--primary)]/50 hover:border-[var(--primary)] w-70 items-center justify-center flex flex-col gap-4 hover:scale-105 duration-300 hover:shadow-2xl shadow-[#8c00ff]/70 "
            >
              <item.Icon className="text-5xl text-[var(--primary)] " />
              <h1 className="font-bold text-2xl">{item.title}</h1>
              <p className="text-sm">{item.description}</p>
              <span className="px-4 p-1 rounded-full border text-sm border-[var(--primary)] bg-[var(--primary)]/40 font-bold">
                {item.feedback}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
