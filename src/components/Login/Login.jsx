import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import Background from "../../assets/backgrounds/mainBackground.png";
const Login = () => {
  const [Username, setUsername] = "";
  const [Password, setPassword] = "";

  return (
    <div className="w-full h-full top-0 h-30 backdrop-blur-xl flex justify-center items-center">
      <form
        action="#"
        className="flex flex-col gap-4 p-6 rounded-xl bg-white/20 shadow-2xl backdrop-blur-md shadow-black"
      >
        <span className="flex flex-col gap-2 items-center">
          <FaUser className="text-6xl" />
          <h1 className="font-bold"> Your Account</h1>
        </span>
        <div className="flex flex-col gap-1 relative">
          <label htmlFor="#" className="text-sm">
            User Name
          </label>
          <input
            setUsername={setUsername}
            id="username"
            type="text"
            placeholder="Username"
            className="border-b-2 px-4 focus:border-[var(--primary)] duration-300 peer"
          />
        </div>
        <div className="flex flex-col gap-1 relative">
          <label htmlFor="#" className="text-sm">
            Password
          </label>
          <input
            setPassword={setPassword}
            id="password"
            type="password"
            placeholder="Enter Your Password"
            className="border-b-2 px-4 focus:border-[var(--primary)] duration-300"
          />
        </div>
        <input
          type="submit"
          value={"Login"}
          className="w-full rounded-md bg-[var(--primary)] p-2 font-bold text-[var(--text)] cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Login;
