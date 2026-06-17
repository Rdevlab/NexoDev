import React, { useState } from "react";
import { RiArrowRightUpLongLine } from "react-icons/ri";
import Step1 from "./SignSteps/Step1";

const WCpage = ({ setSign, sign }) => {
  const [cont, setCont] = useState(false);
  return (
    sign === true && (
      <>
        {cont == false ? (
          <div className="w-full h-screen flex  flex-col gap-4 items-center justify-center">
            <h1 className=" xl:text-6xl text-2xl font-bold  text-white/90 w-max animate-[titleAnimate_1s_ease_forwards]">
              Welcome to NexoDev Team
            </h1>
            <p className="xl:text-2xl text-white/90 max-w-[30ch] text-center animate-[infoAnimate_1s_1s_ease_forwards] opacity-0">
              Join a friendly area, where all talents are being shared for a
              better growth path way
            </p>
            <button
              onClick={() => {
                setCont(true);
              }}
              className="border text-white/60 px-6 p-2 rounded-full font-bold text-xl flex gap-2 items-center justify-between duration-300 hover:bg-white/20 cursor-pointer opacity-0 animate-[btnAnimate_1s_2s_ease_forwards]"
            >
              Continue <RiArrowRightUpLongLine />
            </button>
          </div>
        ) : (
          <Step1 setSign={setSign} sign={sign} />
        )}
      </>
    )
  );
};

export default WCpage;
