import React, { useState } from "react";
import Login from "./components/Login/Login";
import Aside from "./components/Aside/Aside";
import HomeBtn from "./components/Home/HomeBtn";
import SignUp from "./components/SignUp/SignUp";

const App = () => {
  const [sign, setSign] = useState(false);
  return (
    <div className="bg-[url('https://i.pinimg.com/736x/1e/2f/e1/1e2fe1dca75463b697c3b36656c6af39.jpg')] w-full h-screen bg-no-repeat bg-fixed overflow-scroll bg-cover bg-center">
      <Aside />
      {sign == false ? (
        <Login setSign={setSign} />
      ) : (
        <SignUp sign={sign} setSign={setSign} />
      )}
    </div>
  );
};

export default App;
