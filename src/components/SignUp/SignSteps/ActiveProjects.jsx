import React from "react";
import ActiveProList from "../../../assests/logos/ActiveProList";

const ActiveProjects = (props) => {
  return (
    <div className="w-full flex gap-6 justify-center items-center h-max p-2 rounded-2xl">
      {ActiveProList.map((e, index) => {
        return (
          <button
            onClick={() => {
              const group = props.group;
              const detail = {
                id: Number,
                name: e.name,
                logo: e.logo,
              };
              props.setGroup([...group, detail]);
            }}
            className="flex flex-col gap-2 duration-300 hover:bg-white/20 hover:scale-110 cursor-pointer items-center justify-center w-40 h-40 p-2 rounded-xl text-white/60 border"
            key={index}
          >
            <img src={e.logo} className="w-30 h-20" alt="" />
            <span>{e.name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ActiveProjects;
