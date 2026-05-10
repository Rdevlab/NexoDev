import React from "react";
import { FaUser } from "react-icons/fa";
const Account = () => {
  return (
    <i className="flex font-bold gap-2 z-20 p-1 fixed right-4 top-4 border rounded-full bg-[var(--background)]/30 text-[var(--primary)] px-4 items-center">
      <FaUser /> Account
    </i>
  );
};

export default Account;
