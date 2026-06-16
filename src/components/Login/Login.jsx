import React, { use, useState } from "react";
import { FaEye, FaKey, FaUser, FaUserTie } from "react-icons/fa";
import Users from "../Users/Users";
import Projects from "../Projects/Projects";

const Login = (props) => {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [profile, setProfile] = useState(null);

  const passwordHandler = () => {
    const item = document.querySelector("#password");
    item.type == password ? (item.type = text) : (item.type = password);
  };
  return (
    <div>
      {login == false && (
        <div className="flex w-80 flex-col justify-center shadow-2xl items-center gap-4 p-8 rounded-xl bg-white/10 backdrop-blur-sm absolute top-1/2 left-1/2 -translate-x-1/2 text-white/80 -translate-y-1/2">
          <FaUserTie className="text-6xl" />
          <h1 className="text-3xl font-bold">Login</h1>
          <div className="flex items-center p-4 gap-4 border w-full rounded-xl">
            <FaUser className="w-max shrink-0 flex" />
            <input
              type="text"
              id="username"
              placeholder="username"
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex items-center p-4 gap-4 border w-full rounded-xl">
            <FaKey className="w-max shrink-0 flex" />
            <input
              type="password"
              id="password"
              autoComplete="off"
              placeholder="password"
              className="w-full"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              onClick={passwordHandler}
              className="flex items-center justify-center cursor-pointer"
            >
              <FaEye className="text-2xl" />
            </button>
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
            className="text-sm duration-200 hover:text-blue-600 cursor-pointer"
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
