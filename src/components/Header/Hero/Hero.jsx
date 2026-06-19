import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { CgChevronDoubleDown } from "react-icons/cg";
import { SiChevrolet } from "react-icons/si";

const Hero = () => {
  const developmentGroup = [
    {
      title: "Nexo Development Group",
      info: "It's formed to gather Developers around the world for a better teamwork leading to a golden future",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop",
    },
    {
      title: "Web Development",
      info: "Building modern, responsive, and scalable websites for businesses and individuals.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop",
    },
    {
      title: "Mobile App Development",
      info: "Creating smooth and user-friendly mobile applications for Android and iOS platforms.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop",
    },
    {
      title: "UI/UX Design",
      info: "Designing clean and engaging user interfaces with a focus on user experience.",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=800&fit=crop",
    },
    {
      title: "Backend Development",
      info: "Developing secure server-side systems, APIs, and database architecture.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop",
    },
    {
      title: "Database Management",
      info: "Managing and optimizing databases to ensure reliable and fast data access.",
      image:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&h=800&fit=crop",
    },
    {
      title: "Team Collaboration",
      info: "Working together efficiently to deliver innovative and high-quality solutions.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop",
    },
    {
      title: "Startup Innovation",
      info: "Turning creative ideas into real digital products and growing step by step.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=800&fit=crop",
    },
    {
      title: "Cloud Services",
      info: "Deploying applications on modern cloud platforms for better performance and scaling.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop",
    },

    {
      title: "Future Growth",
      info: "A passionate new development team focused on learning, improving, and growing together.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=800&fit=crop",
    },
  ];
  const [count, setCount] = useState(0);
  const nextSlide = () => {
    const isLast = count === developmentGroup.length - 1;
    const newIndex = isLast ? 0 : count + 1;
    setCount(newIndex);
  };
  const prevSlide = () => {
    const isFirst = count === 0;
    const newIndex = isFirst ? developmentGroup.length - 1 : count - 1;
    setCount(newIndex);
  };
  const currentItem = developmentGroup[count];

  return (
    <div
      id="home"
      className="flex flex-col w-full gap-8 h-full justify-center  bg-center bg-cover duration-500 transition-all items-center"
      style={{ backgroundImage: `url(${currentItem.image})` }}
    >
      <button
        onClick={() => {
          prevSlide();
        }}
        className="absolute cursor-pointer top-1/2 xl:left-10 left-4 z-30  flex items-center justify-center p-2 rounded-full bg-black/60"
      >
        <BiChevronLeft size={30} />
      </button>
      <button
        onClick={() => {
          nextSlide();
        }}
        className="absolute cursor-pointer top-1/2 xl:right-10 right-4 z-30 flex items-center justify-center p-2 rounded-full bg-black/60"
      >
        <BiChevronRight size={30} />
      </button>
      {/* dots container */}
      <div className="flex absolute bottom-10 left-1/2 gap-2 -translate-x-1/2 z-20">
        {developmentGroup.map((__, index) => {
          return (
            <button
              onClick={() => {
                setCount(index);
              }}
              className="w-3 h-2 cursor-pointer rounded-full bg-white"
            ></button>
          );
        })}
      </div>
      <div className="flex bg-[var(--background)]/40 flex-col w-full gap-8 h-full justify-center backdrop-blur-xs bg-center bg-cover duration-400 items-center">
        <h1 className="text-6xl font-bold text-[var(--text)] animate-[textAnimate_.5s_ease_forwards]">
          {currentItem.title}
        </h1>
        <p className="text-xl max-w-[30ch] text-center opacity-0 animate-[textAnimate_.5s_.5s_ease_forwards]">
          {currentItem.info}
        </p>
        <a
          href="#about"
          className="flex gap-2 animate-[textAnimate_.5s_1s_ease_forwards] opacity-0 items-center justify-center px-6 p-1 rounded-full text-[var(--text)] border"
        >
          {"Visit"} <CgChevronDoubleDown size={20} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
