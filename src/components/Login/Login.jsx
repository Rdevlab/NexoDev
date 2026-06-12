import React, { use, useState } from "react";
import { FaUser, FaUserTie } from "react-icons/fa";
import Users from "../Users/Users";
import Projects from "../Projects/Projects";
import HomeBtn from "../Home/HomeBtn";

const Login = () => {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [profile, setProfile] = useState(null);
  return (
    <>
      {login == false && (
        <div className="flex flex-col justify-center shadow-2xl items-center gap-2 p-4 rounded-xl bg-white/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <FaUserTie className="text-4xl" />
          <div className="flex flex-col gap-2">
            <label htmlFor="username">Enter your username</label>
            <input
              type="text"
              id="username"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Enter your password</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            className="w-full p-2 bg-green-600 rounded-xl cursor-pointer"
            onClick={() => {
              Users.find((e) => {
                e.username == username && e.password == password
                  ? setLogin(true) && setProfile(e.image)
                  : null;
              });
            }}
          >
            Login
          </button>
        </div>
      )}
      {login == true && <Projects username={username} />}
      <HomeBtn goHome={setLogin} image={profile} />
    </>
  );
};

export default Login;
