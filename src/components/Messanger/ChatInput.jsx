import React, { use, useState } from "react";
import { IoSend, IoAttach } from "react-icons/io5";
import { RiEmojiStickerFill } from "react-icons/ri";
import { BsTrash3Fill } from "react-icons/bs";

const ChatInput = (props) => {
  const [message, setMessage] = useState(null);
  const [sender, setSender] = useState(null);
  const [time, setTime] = useState(null);
  const [reciever, setReciver] = useState(null);
  function sendMessage() {
    const text = document.querySelector("#yourmessage");
    const text1 = {
      id: 1,
      sender: "you",
      reciver: props.reciever,
      message: text.value,
      time: "just now",
      state: "seen",
    };
    props.setMessages([...props.messages, text1]);
    text.value = "";
  }
  return (
    <div className="p-2 w-full items-center gap-4 flex justify-between sticky bg-gray-400 px-6 w-full rounded-full  bottom-0 right-0">
      <div>
        <RiEmojiStickerFill className="text-xl cursor-pointer" />
      </div>
      <input
        type="text"
        placeholder="Type here ......"
        className="w-full px-4 p-1 rounded-full bg-white/20"
        id="yourmessage"
      />
      <button
        onClick={() => {
          sendMessage();
        }}
      >
        <IoSend className="text-xl cursor-pointer" />
      </button>
      <button>
        <IoAttach className="text-2xl cursor-pointer" />
      </button>
      <button>
        <BsTrash3Fill
          className="text-xl duration-300 hover:text-red-700 cursor-pointer"
          onClick={() => {
            props.setMessages([]);
          }}
        />
      </button>
    </div>
  );
};

export default ChatInput;
