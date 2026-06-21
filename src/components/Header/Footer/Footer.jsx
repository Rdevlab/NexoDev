import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
  const links = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: " Projects",
      link: "#projects",
    },
    {
      name: "FAQ",
      link: "#faq",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  const socialLinks = [
    {
      Icon: FaWhatsapp,
      link: "whatsapp",
    },
    {
      Icon: FaFacebook,
      link: "facebook",
    },
    {
      Icon: FaTelegram,
      link: "telegram",
    },
    {
      Icon: FaInstagram,
      link: "instagram",
    },
  ];
  return (
    <div className="flex p-8 w-full bg-[var(--background)] text-[var(--text)] justify-between items-center border-t">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-xl text-[var(--primary2)]">
          Nexo Development Group
        </h1>
        <h5>Public</h5>
      </div>
      <div className="flex items-center gap-4">
        {links.map((item, index) => {
          return (
            <a
              href={item.link}
              key={index}
              className="hover:text-[var(--primary2)] duration-300"
            >
              {item.name}
            </a>
          );
        })}
      </div>
      <div className="flex items-center gap-4">
        {socialLinks.map((item, index) => {
          return (
            <a href={item.link} key={index}>
              <item.Icon />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
