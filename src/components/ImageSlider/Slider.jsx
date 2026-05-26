import React, { useEffect, useState } from "react";
import {
  FaChevronRight,
  FaChevronLeft,
  FaVoicemail,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";
import Team from "../../assets/team/Team";
import { BsTranslate } from "react-icons/bs";

const Slider = () => {
  return (
    <div className="w-full h-full bg-white/10 rounded-4xl relative flex rounded-4xl overflow-hidden overflow-x-scroll">
      {Team.map((person) => {
        return (
          <div
            className="w-full shrink-0 h-full relative"
            key={person.id}
            id="imageContainer"
          >
            <img
              src={person.profile}
              className="w-full h-full flex shrink-0"
              alt={person.name}
            />
            <div className="absolute w-60 bottom-8 right-2 flex flex-col gap-4 ">
              <span
                className="p-1 px-4 w-max text-lg  text-[var(--primary)] bg-[var(--primary)]/10 font-bold backdrop-blur-md rounded-full border 
              hover:bg-[var(--primary)]/50 rounded-full hover:text-[var(--text)] duration-300
              "
              >
                {person.name}
              </span>
              <span className="p-1 px-4 text-xs w-max text-[var(--primary)] bg-[var(--primary)]/10 backdrop-blur-md rounded-full border hover:bg-[var(--primary)]/50 hover:text-[var(--text)] duration-300">
                {person.role}
              </span>
              <span className="text-white bg-[var(--background)]/30  rounded-full items-center justify-around p-4 flex gap-4 text-[var(--text)]">
                <a
                  href={person.mail}
                  className="border rounded-full p-2 flex items-center justify-center hover:text-[var(--primary)] duration-300"
                >
                  <FaVoicemail />
                </a>
                <a
                  href={person.whatsapp}
                  className="border rounded-full p-2 flex items-center justify-center hover:text-[var(--primary)] duration-300"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href={person.phone}
                  className="border rounded-full p-2 flex items-center justify-center hover:text-[var(--primary)] duration-300"
                >
                  <FaPhone />
                </a>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
