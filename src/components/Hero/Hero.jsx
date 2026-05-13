import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import project from "../../assets/projects/project1.png";
import Slider from "../ImageSlider/Slider";
import Navbar from "../Navbar/Navbar";
import Account from "../Account/Account";
import Login from "../Login/Login";
import Ratings from "../Ratings/Ratings";

const Hero = () => {
  const miniLinks = [
    {
      id: 701,
      name: "User interfaces design",
    },
    {
      id: 702,
      name: "Responsive web applications",
    },
    {
      id: 703,
      name: "Creative Components",
    },
    {
      id: 704,
      name: "Customer editions service",
    },
  ];
  return (
    <div
      className="w-full h-screen flex gap-4 items-center bg-[linear-gradient(to_left,_var(--background),_var(--background),_var(--primary))] p-4"
      id="home"
    >
      <div className="w-full h-full pt-30 p-10 relative flex flex-col justify-between text-[var(--text)]">
        <Navbar />
        <div>
          <h1 className="text-6xl text-[var(--primary)] font-bold drop-shadow-lg drop-shadow=black animate-[moveUp_1s__linear_forwards] opacity-0">
            NexoDev Team
          </h1>
          <p
            className={`w-[50ch] px-8 animate-[moveUp_1s_1s_linear_forwards] opacity-0`}
          >
            A pro team for web development that is designed to generate clean
            code for users and managed projects for demands A pro team for web
            development that is designed to generate clean code for users and
            managed projects for demands co
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {miniLinks.map((item) => {
            let index = 0.5;
            return (
              <span
                className={`px-4 p-1 hover:bg-[var(--primary)]/60 duration-300 opacity-0 animate-[enterFromLeft_.5s_1s_linear_forwards] border border-[var(--primary)]/40 w-max rounded-full bg-[var(--primary)]/10 text-xs shadow-lg`}
                key={item.id}
              >
                {item.name}
              </span>
            );
          })}
        </div>
      </div>

      <div className="w-300 bg-[var(--primary)]/10 h-[90vh] rounded-4xl relative flex flex-col hidden xl:flex ">
        <Ratings />

        <div
          className="bg-[var(--background)] w-max border-12 absolute top-0 right-0 rounded-bl-3xl border-[var(--background)] z-10
           after:flex after:content-'' after:h-12 after:w-30  after:absolute after:-left-30 after:border-t-12 after:border-r-12 after:-top-6 after:rounded-tr-4xl after:bg-transparent after:border-[var(--background)]
          before:flex before:content-'' before:h-12 before:w-30  before:absolute before:-right-6 before:border-t-12 before:border-r-12 before:-bottom-12 before:rounded-tr-4xl before:border-[var(--background)] before:bg-transparent
          "
        >
          <Account />
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default Hero;
