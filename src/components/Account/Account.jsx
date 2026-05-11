import React from "react";
import { FaUser } from "react-icons/fa";
const Account = () => {
  return (
    <button className="flex font-bold gap-2 z-20 p-1 border rounded-full bg-[var(--background)]/30 text-[var(--primary)] px-4 items-center z-50">
      <FaUser /> Account
    </button>
  );
};

export default Account;
