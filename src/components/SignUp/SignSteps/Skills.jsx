import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaDatabase,
} from "react-icons/fa";

const Skills = (props) => {
  const technologies = [
    // Programming Languages
    { name: "HTML5", Icon: FaHtml5 },
    { name: "CSS3", Icon: FaCss3Alt },
    { name: "JavaScript", Icon: FaJs },
    { name: "Python", Icon: FaPython },
    { name: "Java", Icon: FaJava },
    { name: "PHP", Icon: FaPhp },

    // Libraries / Frameworks
    { name: "React", Icon: FaReact },
    { name: "Node.js", Icon: FaNodeJs },
    { name: "Bootstrap", Icon: FaBootstrap },

    // Tools / Platforms
    { name: "Git", Icon: FaGitAlt },
    { name: "GitHub", Icon: FaGithub },
    { name: "Database", Icon: FaDatabase },
  ];

  return (
    <div className="w-full p-2 flex flex-wrap justify-center gap-4 rounded-2xl">
      {technologies.map((el, index) => {
        return (
          <div
            className="flex flex-col gap-2 z-2 relative duration-300 hover:bg-white/20 hover:scale-110 cursor-pointer items-center justify-center w-30 h-30 p-2 rounded-xl text-white/60 border"
            key={index}
          >
            <el.Icon className="text-6xl z-1" />
            <span className="z-1">{el.name}</span>
            <button
              onClick={(e) => {
                const tech = props.tech;
                const me = {
                  id: Number,
                  name: el.name,
                  Icon: el.Icon,
                };

                props.setTech([...tech, me]);

                console.log(tech);
                e.target.tagName === "BUTTON" &&
                  e.target.parentElement.classList.toggle("bg-white/50") &&
                  e.target.parentElement.classList.toggle("text-white/60");
              }}
              className="absolute top-0 left-0 w-full h-full backdrop-blur-sm z-2 rounded-xl"
            ></button>
          </div>
        );
      })}
    </div>
  );
};
export default Skills;
