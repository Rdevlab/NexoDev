import React, { useState } from "react";
import { FaUser, FaKey, FaEye } from "react-icons/fa";
const Login = () => {
  const alert = () => {
    return (
      <div className="fixed top-10 m-auto p-4 flex items-center">
        <h1>form submited successfully</h1>
      </div>
    );
  };
  alert();
  return (
    <div
      className="w-full backdrop-blur-md h-screen z-40 flex items-center justify-center  bg-gradient-to-bl from-[var(--primary)]/50 to-[var(--background)]/50 fixed top-0 right-0 left-0 hidden"
      id="overlay"
      onClick={(e) => {
        if (e.target === document.querySelector("#overlay"))
          e.target.classList.toggle("hidden");
      }}
    >
      <form
        action=""
        className="p-4 bg-[var(--primary)]/30 shadow-2xl backdrop-blur-xl text-[var(--text)] rounded-xl flex flex-col items-center gap-6 grewUp"
      >
        <FaUser className="text-5xl" />
        <div className="flex items-center gap-2 p-2 rounded-md border w-full">
          <FaUser />
          <input
            type="text"
            placeholder="Enter your username"
            name=""
            id="username"
          />
        </div>
        <div className="flex items-center gap-2 p-2 rounded-md border w-full">
          <FaKey />
          <input
            type="password"
            placeholder="Enter your password"
            name=""
            id="password"
          />
          <FaEye />
        </div>
        <input
          type="button"
          onClick={() => {
            document.querySelector("#overView").classList.toggle("hidden");
          }}
          value={"Dashboard"}
          className="w-full text-center p-2 bg-[var(--text)]/40 font-bold rounded-md"
        />
      </form>
    </div>
  );
};

export default Login;
