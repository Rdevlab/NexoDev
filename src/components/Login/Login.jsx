import React, { useState } from "react";
import { FaUser, FaKey, FaEye } from "react-icons/fa";
const Login = () => {
  return (
    <div
      className="w-full h-screen z-30 flex items-center justify-center bg-black/90 fixed top-0 right-0 left-0 hidden"
      id="overlay"
      onClick={(e) => {
        if (e.target === document.querySelector("#overlay"))
          e.target.classList.toggle("hidden");
      }}
    >
      <form
        action=""
        className="p-4 bg-[var(--text)]/30 backdrop-blur-xl border rounded-xl flex flex-col items-center gap-6"
      >
        <FaUser className="text-5xl" />
        <div className="flex items-center gap-2 p-2 rounded-md border w-full">
          <FaUser />
          <input type="text" placeholder="Enter your username" name="" id="" />
        </div>
        <div className="flex items-center gap-2 p-2 rounded-md border w-full">
          <FaKey />
          <input
            type="password"
            placeholder="Enter your username"
            name=""
            id=""
          />
          <FaEye />
        </div>
        <input
          type="submit"
          onClick={() => alert("submited")}
          value={"Login"}
          className="w-full text-center p-2 bg-[var(--text)]/40 font-bold rounded-md"
        />
      </form>
    </div>
  );
};

export default Login;
