import React from "react";
import { BiPhone } from "react-icons/bi";
import {
  BsFacebook,
  BsInstagram,
  BsTelegram,
  BsWhatsapp,
} from "react-icons/bs";
import { SlEnvolope, SlLocationPin, SlPhone } from "react-icons/sl";

const Contact = () => {
  const contactData = [
    {
      Icon: SlEnvolope,
      text: "Mail Us",
      links: [
        {
          link: "rohullahahmadi531@gmail.com",
        },
        {
          link: "latifkheradmand@gmail.com",
        },
      ],
    },
    {
      Icon: SlPhone,
      text: "Contact Us",
      links: [
        {
          link: "+93123456789",
        },
        { link: "+9112345678910" },
      ],
    },
    {
      Icon: SlLocationPin,
      text: "Location",
      links: [
        {
          link: "on earth,under the sky, 1st heaven street, hell last floor, room 0",
        },
      ],
    },
  ];
  const socialLink = [
    {
      Icon: BsWhatsapp,
      link: "",
    },
    {
      Icon: BsFacebook,
      link: "",
    },
    {
      Icon: BsTelegram,
      link: "",
    },
    {
      Icon: BsInstagram,
      link: "",
    },
  ];
  return (
    <div
      className="w-full min-h-[80vh] relative bg-[var(--background)] overflow-hidden text-[var(--text)] flex flex-col xl:flex-row xl:p-20 p-2 xl:px-60"
      id="contact"
    >
      <div className="flex flex-col gap-6 justify-center p-4">
        <div className="w-full flex flex-col gap-4 h-max">
          {contactData.map((item, index) => {
            return (
              <div className="flex gap-4 w-max items-center p-2" key={index}>
                <div className=" flex items-center justfy-center p-4 rounded-xl bg-white/20">
                  <item.Icon size={20} />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[var(--text)]/60">{item.text}</p>
                  {item.links.map((el, index) => {
                    return (
                      <a
                        key={index}
                        href={el.link}
                        className="max-w-[30ch] text-sm"
                      >
                        {el.link}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col w-full gap-2">
          <h3 className="px-20 text-[var(--text)]/70">Social link</h3>
          <div className="flex p-4 w-full items-center justify-center gap-6">
            {socialLink.map((item, index) => {
              return (
                <a href={item.link} key={index}>
                  <item.Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <form className="w-full h-full border border-[var(--primary1)]/50 rounded-xl p-4 gap-2 flex flex-col text-md bg-white/6 pt-10">
        <h1 className="text-xl mb-4">
          Let's work <span className="text-[var(--primary2)]">Together</span>
        </h1>
        <input
          type="text"
          placeholder="name *"
          className="w-full p-2 rounded-lg bg-white/10 border border-transparent duration-200 focus:border-[var(--primary2)]"
        />
        <input
          type="text"
          placeholder="Email *"
          className="w-full p-2 rounded-lg bg-white/10 border border-transparent duration-200 focus:border-[var(--primary2)]"
        />
        <input
          type="text"
          placeholder="Your subject *"
          className="w-full p-2 rounded-lg bg-white/10 border border-transparent duration-200 focus:border-[var(--primary2)]"
        />
        <textarea
          type="text"
          placeholder="Your message *"
          className="w-full p-2 rounded-lg bg-white/10 border border-transparent duration-200 focus:border-[var(--primary2)] resize-none"
        />
        <button
          type="submit"
          onSubmit={() => {
            preventDefault();
          }}
          className="w-full p-2 rounded-lg bg-white/10 hover:bg-[var(--primary1)] border border-transparent cursor-pointer duration-200 hover:border-[var(--primary1)] resize-none"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
