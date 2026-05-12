import React from "react";
import { FaUser } from "react-icons/fa";
const Account = () => {
  const showOverlay = () => {
    document.querySelector("#overlay").classList.toggle("hidden");
  };
  return (
    <button
      onClick={() => {
        showOverlay();
      }}
      className="flex font-bold gap-2 p-1 border rounded-full bg-[var(--background)]/30 hover:bg-[var(--primary)]/50 hover:text-[var(--text)] duration-300 cursor-pointer text-[var(--primary)] px-4 items-center z-10"
    >
      <FaUser /> Account
    </button>
  );
};

export default Account;
