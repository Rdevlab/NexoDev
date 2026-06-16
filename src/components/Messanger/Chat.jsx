import React from "react";
import ChatContainer from "./ChatContainer";
import { BiDotsVertical } from "react-icons/bi";

const Chat = (props) => {
  return (
    <div className="w-full h-full flex flex-col justify-between z-10 p-2 relative overflow-hidden bg-white/20 rounded-xl">
      {props.active == false ? (
        <div className="w-full h-full z-10 p-2 rounded-xl flex items-center justify-center text-xl">
          <span>No chat started yet</span>
        </div>
      ) : (
        <div className="relative w-full flex gap-4 justify-between items-center border-b p-2 border-black/10">
          <div className="flex gap-4 items-center">
            <img
              src={props.contactProfile}
              className="w-10 h-10 rounded-full shadow-[-5px_8px_16px_#333232]"
              alt=""
            />
            <h1 className="font-bold">{props.contactName}</h1>
          </div>
          <div className="flex gap-4 items-center">
            <BiDotsVertical className="text-2xl" />
          </div>
        </div>
      )}
      <ChatContainer
        sender={props.sender}
        reciever={props.reciever}
        active={props.active}
      />
    </div>
  );
};

export default Chat;
// RW7mbecT2p4SjDJi
