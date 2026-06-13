import React, { useState } from "react";
import Users from "../Users/Users";
import Chat from "./Chat";

const Messanger = (props) => {
  const [user, setUser] = useState(props.user);

  // chat constasts
  const [contactName, setContactName] = useState(null);
  const [contactProfile, setContactProfile] = useState(null);
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div className="absolute bottom-4 right-0 p-4  bg-[#b9b9b9] rounded-l-xl min-w-160  h-140 flex flex-col">
      <div className="w-max  bg-[#c6c6c7] p-2 border-[#c6c6c7] rounded-full flex items-center ">
        <small>All</small>
      </div>
      <div className="flex w-full h-full">
        {Users.map((person) => {
          return (
            person.username === user && (
              <div className="w-max shrink-0 pr-0 h-full flex flex-col justify-between pt-2 ">
                {/* contact list */}
                <div className="flex flex-col gap-2">
                  {Users.map((contact) => {
                    return (
                      contact.username !== user && (
                        <button
                          onClick={() => {
                            setIsStarted(true);
                            setContactName(contact.name);
                            setContactProfile(contact.image);
                          }}
                          className="cursor-pointer flex gap-2 p-2 rounded-l-xl items-center hover:bg-[#c6c6c7] hover:shadow-[5px_6px_10px_rgb(40,40,40),5px_-5px_10px_rgb(230,229,229)] duration-300 "
                        >
                          <img
                            src={contact.image}
                            alt=""
                            className="w-10 h-10 rounded-full shadow-[-3px_5px_10px_#333232]"
                          />
                          <h1>{contact.name}</h1>
                        </button>
                      )
                    );
                  })}
                </div>
                {/* profile */}
                <div className="flex items-center gap-2">
                  <img
                    src={person.image}
                    alt=""
                    className="w-10 h-10 rounded-full shadow-[-5px_8px_12px_#333232]"
                  />
                  <h1>{person.name}</h1>
                </div>
              </div>
            )
          );
        })}
        <Chat
          contactName={contactName}
          contactProfile={contactProfile}
          active={isStarted}
        />
      </div>
    </div>
  );
};

export default Messanger;
