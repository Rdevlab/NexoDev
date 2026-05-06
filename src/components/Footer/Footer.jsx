import React from "react";
import { DiVim } from "react-icons/di";

const Footer = () => {
  return (
    <div className="w-full flex justify-between flex-col bg-[var(--background)] text-[var(--text)] border-t">
      <div className="w-full flex justify-between items-center p-4">
        <h1 className="font-bold text-2xl text-[var(--primary)]">Nexo Dev</h1>

        <div className="flex gap-4 text-xs">
          <a href="#">Home</a>
          <a href="#">Privcy policy</a>
          <a href="#">FAQ</a>
          <a href="#">login</a>
        </div>
      </div>
      <div className="w-full flex justify-between items-center p-4">
        <p className="text-xs">&copy; all rights reserved</p>
        <p className="text-xs">designed by Neo | | DevGroup</p>
      </div>
    </div>
  );
};

export default Footer;
