import React, { useState } from "react";
import Tasks from "../TasksList/Tasks";
const DashProjects = () => {
  const [Designer, setDesigner] = useState("Rohullah");
  return (
    <div className="flex flex-col gap-4 p-4 items-center grewUp1">
      <h1 className="text-4xl text-[var(--text)] font-bold">Projects</h1>
      <div className="w-full flex gap-1 flex-wrap">
        {Tasks.map((task) => {
          return (
            task.designer === Designer && (
              <article
                className="w-max flex flex-col gap-2 bg-[var(--background)]/50 rounded-xl text-[var(--text)] p-4 text-xs"
                key={task.id}
              >
                <img src={task.sample} alt={task.title} />
                <h1 className="font-bold text-lg">{task.title}</h1>
                <p>{task.designer}</p>
                <p>{task.info}</p>
                <a href={task.finalLink}>See the final link</a>
              </article>
            )
          );
        })}
      </div>
    </div>
  );
};

export default DashProjects;
