import React from "react";
import { BsInstagram, BsTelegram, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      className="w-full h-[80vh] relative bg-[var(--background)] overflow-hidden"
      id="contact"
    >
      <div className="absolute  gap-4 w-700 top-370 left-1/2 text-[var(--text)] -translate-x-1/2 -translate-y-1/2 h-700 rounded-full bg-black flex justify-start flex-col pt-40 items-center ">
        <h1>Available 24 hours</h1>
        <a href="" className="px-8 p-2 border rounded-xl xl:text-4xl">
          www.NexoDevelopmentGroup@gmail.com
        </a>
        <div className="flex p-4 items-center gap-8 text-2xl">
          <a href="#">
            <BsWhatsapp />
          </a>
          <a href="#">
            <BsInstagram />
          </a>
          <a href="#">
            <BsTelegram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
