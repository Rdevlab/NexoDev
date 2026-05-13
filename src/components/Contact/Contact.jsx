import React from "react";
import { DiVim } from "react-icons/di";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaUser,
  FaGoogle,
  FaPhone,
} from "react-icons/fa";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Contact = () => {
  const icons = [
    {
      id: 401,
      Icon: FaWhatsapp,
      link: "",
    },
    {
      id: 402,
      Icon: FaInstagram,
      link: "",
    },
    {
      id: 403,
      Icon: FaFacebookF,
      link: "",
    },
  ];
  return (
    <section
      id="contact"
      className="h-screen w-full bg-[var(--background)] flex gap-4 flex-col items-center justify-center text-[var(--text)]"
    >
      <div className="w-full flex items-center justify-center flex-col gap-4">
        <span className="px-4 p-1 border gap-2 border-[var(--primary)]/50 text-[var(--primary)] rounded-full text-sm flex items-center shadow-[0_0_30px_#8c00ff]/50 bg-[var(--primary)]/20 hover:bg-[var(--primary)]/30 duration-300 hover:scale-105 cursor-pointer ">
          <IoMdCheckmarkCircleOutline className="text-xl font-bold" />
          Contact
        </span>
      </div>

      <div className="xl:w-200  z-1 xl:h-110 h-max border rounded-xl  z-2 backdrop-blur-sm relative flex xl:flex-row flex-col p-10 border-white/10 shadow-2xl shadow-[#8c00ff]/20 bg-[var(--background)]/40">
        <div className="xl:w-70 h-full flex items-start p-4 flex-col gap-6 justify-center text-sm relative">
          <h1 className="xl:absolute top-0 left-0 font-bold text-3xl">
            Contact Us
          </h1>

          <a href="#" className="flex items-center gap-2">
            <FaGoogle /> rohullahahmadi531@gmail.com
          </a>

          <a href="#" className="flex gap-2 items-center">
            <FaPhone /> 093764564241
          </a>
        </div>
        <form
          action="#"
          onSubmit={(e) => e.preventDefault()}
          className="w-full h-full border-l border-white/20  flex flex-col p-4 gap-4"
        >
          <div
            className="flex flex-col  relative
         after:flex after:content-'' after:w-0  after:h-0.5 after:absolute after:bottom-0 ater:left-0 after:bg-white focus-within:after:w-full valid-within:after:w-full after:duration-500
          "
          >
            <label htmlFor="username" className="text-sm">
              Enter your name
            </label>

            <input
              id="username"
              type="text"
              placeholder="name"
              required
              className="p-2 border-b border-white/40 text-xs"
            />
          </div>

          <div
            className="flex flex-col  relative
         after:flex after:content-'' after:w-0  after:h-0.5 after:absolute after:bottom-0 ater:left-0 after:bg-white focus-within:after:w-full valid-within:after:w-full after:duration-500
          "
          >
            <label htmlFor="email" className="text-sm">
              Enter your name
            </label>
            <input
              id="email"
              type="e-mail"
              placeholder="name"
              required
              className="p-4 border-b border-white/40 text-xs
               
              "
            />
          </div>
          <div className="flex flex-col p-2 gap-2">
            <label htmlFor="subject" className="text-sm">
              Enter your name
            </label>
            <textarea
              name=""
              id="subject"
              required
              cols={5}
              rows={4}
              placeholder="subject"
              maxLength={180}
              className="text-xs resize-none border p-2 border-white/10 rounded-xl"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Send"
            onClick={() => {
              alert("Your form submited");
            }}
            className="w-full p-2 bg-[var(--primary)]/50 hover:bg-[var(--primary)]/70 duration-300 rounded-md font-bold cursor-pointer "
          />
        </form>
      </div>
      {/* background dots */}
      <span className="z-1 hidden md:flex xl:flex w-40 h-40 bg-[var(--primary)]/40 translate-x-92 translate-y-58 absolute rounded-full"></span>
      <span className="z-1  hidden md:flex xl:flex w-40 h-40 bg-[var(--primary)]/40 -translate-x-98 -translate-y-18 absolute rounded-full"></span>
      <span className="z-1  hidden md:flex xl:flex w-20 h-20 bg-[var(--text)]/40 translate-x-78 -translate-y-28 absolute rounded-full"></span>
      <span className="z-1  hidden md:flex xl:flex w-20 h-20 bg-[var(--text)]/40 -translate-x-68 translate-y-38 absolute rounded-full"></span>
    </section>
  );
};

export default Contact;
