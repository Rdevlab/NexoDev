import React, { use, useState } from "react";
import { FaUser, FaUserTie } from "react-icons/fa";
import Users from "../Users/Users";
import Projects from "../Projects/Projects";

const Login = (props) => {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [profile, setProfile] = useState(null);
  return (
    <div>
      {login == false && (
        <div className="flex flex-col justify-center shadow-2xl items-center gap-4 p-8 rounded-xl bg-white/50 backdrop-blur-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <FaUserTie className="text-6xl" />
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
                  ? setLogin(true) && setProfile(e.image) && setUsername(e.name)
                  : null;
              });
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              props.setSign(true);
            }}
            className="text-xs duration-200 hover:text-blue-600 cursor-pointer"
          >
            don't have an account? create one
          </button>
        </div>
      )}
      {login == true && (
        <Projects username={username} image={profile} goHome={setLogin} />
      )}
    </div>
  );
};

export default Login;
