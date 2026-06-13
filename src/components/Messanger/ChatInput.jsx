import React from "react";

const ChatInput = () => {
  return (
    <div className="p-2 w-full gap-4 flex justify-between absolute bg-gray-400 px-6 w-full  bottom-0 right-0">
      <div>S</div>
      <input type="text" placeholder="Type here ......" className="w-full" />
      <button>send</button>
    </div>
  );
};

export default ChatInput;
