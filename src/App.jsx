import React, { useState } from "react";
import Login from "./components/Login/Login";
import Aside from "./components/Aside/Aside";
import HomeBtn from "./components/Home/HomeBtn";
import SignUp from "./components/SignUp/SignUp";

const App = () => {
  const [sign, setSign] = useState(false);
  return (
    <div className="bg-[url('https://th.bing.com/th/id/R.7d3024544713bff8f0b0fc4118065824?rik=PF9J8iQDxUUnmg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fComputer-background-cool-desktop.jpg&ehk=UROrojTWZpuvqafwLJSLNgKy27Ik%2bHoaDRzQ0u8Ldw4%3d&risl=&pid=ImgRaw&r=0')] w-full h-screen bg-no-repeat bg-cover bg-center">
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
