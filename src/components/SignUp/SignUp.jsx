import React from "react";
import WCpage from "./WCpage";
import "./SignAnimations.css";

const SignUp = ({ sign, setSign }) => {
  return (
    sign === true && (
      <div className="w-full h-screen bg-black/60 flex flex-col gap-4 items-center justify-center">
        <WCpage sign={sign} setSign={setSign} />
      </div>
    )
  );
};

export default SignUp;
