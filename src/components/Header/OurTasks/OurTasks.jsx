import { React, useState } from "react";
import { FaRegTired } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import task1 from "./files/ourtask1.png";
import task2 from "./files/ourtask2.png";
import task3 from "./files/ourtask3.png";
import task4 from "./files/ourtask4.png";
import task5 from "./files/ourtask5.png";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const OurTasks = () => {
  const taskData = [
    {
      url: task1,
      link: "hello",
      name: "Aurum online Library",
      info: "enjoy comic books, history books, sciece books, economical books. Download, read e-books online for free. ",
    },
    {
      url: task2,
      link: "hello",
      name: "Box Market online shop",
      info: "enjoy comic books, history books, sciece books, economical books. Download, read e-books online for free. ",
    },
    {
      url: task3,
      link: "hello",
      name: "Afghan food resturant",
      info: "enjoy comic books, history books, sciece books, economical books. Download, read e-books online for free. ",
    },
    {
      url: task4,
      link: "hello",
      name: "profile portfolio",
      info: "enjoy comic books, history books, sciece books, economical books. Download, read e-books online for free. ",
    },
    {
      url: task5,
      link: "hello",
      name: "portfolio",
      info: "enjoy comic books, history books, sciece books, economical books. Download, read e-books online for free. ",
    },
  ];
  const [no, setNo] = useState(0);
  const show = taskData[no];
  const nextSlide = () => {
    const isLast = no === taskData.length - 1;
    const newIdx = isLast ? 0 : no + 1;
    setNo(newIdx);
  };
  const prevSlide = () => {
    const isFirst = no === 0;
    const newIdx = isFirst ? taskData.length - 1 : no - 1;
    setNo(newIdx);
  };

  return (
    <div
      id="projects"
      className="w-full h-screen flex relative flex-col gap-8 items-center bg-[var(--background)] justify-center  p-16"
    >
      <span className="flex items-center gap-2 px-4 p-1 rounded-full border text-[var(--primary2)] border-[var(--primary2)]">
        <IoMdCheckmarkCircleOutline size={20} /> Our Projects
      </span>
      <button
        onClick={prevSlide}
        className="flex p-2 text-2xl hover:scale-110 hover:text-[var(--text)] duration-300 cursor-pointer absolute left-10 top-1/2"
      >
        <BiChevronLeft size={80} />
      </button>

      <button
        onClick={nextSlide}
        className="flex p-2  hover:scale-110 duration-300 hover:text-[var(--text)] cursor-pointer absolute right-10 top-1/2"
      >
        <BiChevronRight size={80} />
      </button>
      {
        <div className="bg-center relative bg-contain relative w-[70vw] h-[70vh]  duration-300 bg-no-repeat flex group ">
          <div
            className="w-full shadwo-xl rounded-xl h-full bg-center bg-cover bg-no-repeat duration-300 p-0 rounded-2xl"
            style={{ backgroundImage: `url(${show.url})` }}
          ></div>
          <div className="absolute w-full cursor-pointer h-full hidden group-hover:flex z-10  bg-[var(--background)]/60 text-[var(--text)] backdrop-blur-xs  items-center justify-center flex-col gap-4  left-0 right-0 bottom-0 rounded-xl p-10">
            <h1 className="text-4xl font-bold animate-[textAnimate_.4s_ease]">
              {show.name}
            </h1>
            <p className="max-w-[40ch] text-center opacity-0 animate-[textAnimate_.4s_.4s_ease_forwards]">
              {show.info}
            </p>
            <a
              href={show.link}
              className="animate-[textAnimate_.4s_.8s_ease_forwards] opacity-0 duration-300 px-4 p-1 border rounded-full"
            >
              see the website
            </a>
          </div>
        </div>
      }
    </div>
  );
};
export default OurTasks;
