import { React, useState } from "react";
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
  FaArrowRight,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import ActiveProjects from "./ActiveProjects";

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
    { name: "TawilindCss", Icon: RiTailwindCssFill },

    // Tools / Platforms
    { name: "Git", Icon: FaGitAlt },
    { name: "GitHub", Icon: FaGithub },
    { name: "Database", Icon: FaDatabase },
  ];
  const [next1, setNext1] = useState(false);
  return (
    <>
      {next1 === false && (
        <div className="flex flex-col gap-4 animate-[divAnimate_.4s_ease_forwards] duration-300">
          <h1 className="w-full p-2 bg-white/10 text-center rounded-xl xl:text-2xl font-bold">
            Choose technologies you know
          </h1>
          <div className="w-full p-2 flex flex-wrap justify-center scrollbar overflow-y-scroll h-70  gap-4 rounded-2xl">
            {technologies.map((el, index) => {
              return (
                <div
                  className="flex flex-col gap-2 z-2 relative duration-300 hover:bg-white/2 hover:scale-110 cursor-pointer items-center justify-center xl:w-30 w-20 h-20 xl:h-30 p-2 rounded-xl text-white/60 border"
                  key={index}
                >
                  <el.Icon className="xl:text-6xl text-4xl z-1" />
                  <span className="text-sm xl:text-md z-1">{el.name}</span>
                  <span
                    onClick={(e) => {
                      const tech = props.tech;
                      const me = {
                        name: el.name,
                        Icon: el.Icon,
                      };

                      props.setTech([...tech, me]);

                      e.target.tagName === "SPAN" &&
                        e.target.parentElement.classList.toggle(
                          "text-white/90",
                        );
                    }}
                    className="absolute top-0 left-0 w-full h-full backdrop-blur-sm z-2 rounded-xl"
                  ></span>
                </div>
              );
            })}
          </div>
          <button
            onClick={() => {
              setNext1(true);
            }}
            className="flex gap-4 items-center w-full p-2 bg-white/10 rounded-xl hover:bg-white/20 duration-300 cursor-pointer justify-center"
          >
            Next <FaArrowRight />
          </button>
        </div>
      )}

      {next1 === true && (
        <ActiveProjects
          group={props.group}
          setGroup={props.setGroup}
          setFinal={props.setFinal}
          final={props.final}
        />
      )}
    </>
  );
};
export default Skills;
