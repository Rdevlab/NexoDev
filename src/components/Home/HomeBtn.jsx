import React from "react";
import { FaHome } from "react-icons/fa";

const HomeBtn = ({ goHome }) => {
  return (
    <button
      className="absolute top-4 right-4 p-2 flex items-center justify-center rounded-full text-white bg-white/20 duration-300 hover:bg-white/50 cursor-pointer shadow-xl"
      onClick={() => {
        goHome(false);
      }}
    >
      <FaHome />
    </button>
  );
};

export default HomeBtn;
