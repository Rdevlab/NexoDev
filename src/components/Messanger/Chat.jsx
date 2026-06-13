import React from "react";
import ChatInput from "./ChatInput";

const Chat = (props) => {
  return (
    <div className="w-full h-full z-10 p-2 relative overflow-hidden bg-[#c6c6c7] rounded-xl">
      {props.active == false ? (
        <div className="w-full h-full z-10 p-2 bg-[#c6c6c7] rounded-xl flex items-center justify-center text-xl">
          <span>No chat started yet</span>
        </div>
      ) : (
        <div className="relative w-full flex gap-4 border-b p-2 border-black/10">
          <img
            src={props.contactProfile}
            className="w-10 h-10 rounded-full shadow-[-5px_8px_16px_#333232]"
            alt=""
          />
          <h1 className="font-bold">{props.contactName}</h1>
        </div>
      )}
      {props.active == true && <ChatInput />}
    </div>
  );
};

export default Chat;
