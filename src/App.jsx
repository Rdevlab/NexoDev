import React, { useState } from "react";
import Login from "./components/Login/Login";
import Aside from "./components/Aside/Aside";
import HomeBtn from "./components/Home/HomeBtn";
import SignUp from "./components/SignUp/SignUp";
import Header from "./components/Header/Header";

const App = () => {
  const [sign, setSign] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  return (
    <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRSkxuyei_jaRLeXzKa5wF1YurXf6M67gYkMZvnwggATEIq22FHdJhkOC&s=10')] w-full h-screen bg-no-repeat bg-fixed overflow-scroll bg-cover bg-center">
      {dashboard == true && (
        <>
          <Aside />
          {sign == false ? (
            <Login setSign={setSign} setDashboard={setDashboard} />
          ) : (
            <SignUp sign={sign} setSign={setSign} />
          )}
        </>
      )}
      {dashboard == false && <Header setDashboard={setDashboard} />}
    </div>
  );
};

export default App;
