import React, { useState } from "react";
import Users from "../Users/Users";
import ChatInput from "./ChatInput";
import { FaDeleteLeft } from "react-icons/fa6";

const ChatContainer = (props) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "you",
      reciver: props.reciever,
      message: "hi",
      time: null,
      state: "seen",
    },
  ]);

  const [sender, setSender] = useState("you");
  const [counter, setCounter] = useState(1);

  return (
    props.active == true && (
      <div className="flex flex-col gap-1 p-2 w-full h-full justify-between overflow-scroll items-end relative">
        <div className="w-full h-max overflow-y-scroll pb-30 gap-2 flex flex-col relative top-0">
          {messages.map((e, index) => {
            return (
              props.reciever === e.reciver &&
              sender == "you" && (
                <div
                  key={index}
                  className="flex gap-1 w-full items-start animate-[moveUp_.5s_ease_forwards] opacity-0"
                >
                  <div className="w-full p-1 flex flex-col items-end justify-end gap-1">
                    <span className=" rounded-full w-max justify-end items-end flex px-4 flex-col bg-black/50 backdrop-blur-xl shadow-lg text-white">
                      <span>{e.message}</span>
                    </span>
                    <span className="flex gap-2">
                      <small className="text-xs">{e.sender}</small>
                      <small className="text-xs">{e.time}</small>
                    </span>
                  </div>
                  {Users.map((e) => {
                    return (
                      e.username === props.sender && (
                        <img
                          key={e.id}
                          src={e.image}
                          alt={e.name}
                          className="w-6 h-6 rounded-full"
                        />
                      )
                    );
                  })}
                </div>
              )
            );
          })}
        </div>
        <ChatInput
          messages={messages}
          setMessages={setMessages}
          reciever={props.reciever}
        />
      </div>
    )
  );
};

export default ChatContainer;
