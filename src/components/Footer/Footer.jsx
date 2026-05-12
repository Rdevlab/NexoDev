import React from "react";
import { DiVim } from "react-icons/di";
import logo from "../../assets/logo/logo.png.png";

const Footer = () => {
  const navlinks = [
    {
      id: 1,
      name: "Home",
      link: "#home",
    },
    {
      id: 2,
      name: "About",
      link: "#about",
    },
    {
      id: 3,
      name: "Projects",
      link: "#project",
    },
    {
      id: 4,
      name: "Services",
      link: "#service",
    },
    {
      id: 5,
      name: "Contact",
      link: "#contact",
    },
  ];
  const faq = [
    {
      id: 1,
      q: "Privacy & Policy",
    },
    {
      id: 2,
      q: "Top shared links",
    },
    {
      id: 3,
      q: "Refrences",
    },
    {
      id: 4,
      q: "FAQs",
    },
  ];
  return (
    <div className="w-full flex justify-between p-6 justify-center flex-col bg-[var(--background)] text-[var(--text)] bg-[linear-gradient(135deg,#000000d0,_#000000d0),url('https://rosettalandscape.co.uk/wp-content/uploads/2022/07/footer-background.jpg')] bg-center border-t h-70 border-white/30 flex flex-col gap-2">
      <div className="xl:h-40 h-30 text-xs overflow-hidden flex flex items-center gap-8 xl:gap-40">
        <img src={logo} alt="" className="h-full  scale-160" />
        <div className="flex flex-col gap-4 hidden xl:flex">
          <h1 className="text-xl font-bold text-[var(--primary)]">
            NexoDev development team
          </h1>
          <p className="max-w-[50ch]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At,
            deserunt? Error obcaecati debitis inventore temporibus similique
            doloribus deserunt saepe reiciendis. Quos quaerat ratione harum,
            nesciunt eaque modi quae consectetur error odit blanditiis? Possimus
            odio dolorum veniam. Iusto quasi perferendis nostrum.
          </p>
        </div>
        <ul className="flex flex-col gap-2 w-30">
          <h1 className="font-bold text-xl text-[var(--primary)]">
            Quick links
          </h1>
          {navlinks.map((link) => {
            return (
              <li key={link.id} className="hover:scale-120 duration-300">
                <a
                  href={link.link}
                  className="hover:text-[var(--primary)] hover:scale-120 duration-300"
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        <ul>
          {faq.map((item) => {
            return <li key={item.id}>{item.q}</li>;
          })}
        </ul>
      </div>
      <div className="flex items-center justify-between border-t pt-4 border-white/40 xl:px-18 text-xs">
        <span>&copy; All rights are deserved</span>
        <span>Designed by Rohullah Ahmadi ~~Neo</span>
      </div>
    </div>
  );
};

export default Footer;
