import React from "react";
import Login from "../Login/Login";

const LoginBtn = ({ setLogin }) => {
  return (
    <>
      <button
        onClick={() => {
          setLogin(true);
        }}
      >
        Login
      </button>
      {/* ;<Login /> */}
    </>
  );
};

export default LoginBtn;
