import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaGlobe, FaMobileScreen, FaPalette, FaServer } from "react-icons/fa6";
const Services = () => {
  const serviceList = [
    {
      Icon: FaGlobe,
      name: "Web Development",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      info: "We build fast, responsive, and modern websites tailored to business and customer needs.",
    },
    {
      Icon: FaMobileScreen,
      name: "Mobile App  Developement",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",

      info: "We create smooth and powerful mobile applications for Android and iOS platforms.",
    },
    {
      Icon: FaPalette,
      name: "UI / UX Desgin",
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&h=600&fit=crop",
      info: "We design attractive, user-friendly interfaces that deliver better user experience and engagement.",
    },
    {
      Icon: FaServer,
      name: "Backend Developnent & APIs",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      info: "We develop secure and scalable server-side systems, APIs, and database architectures.",
    },
  ];
  return (
    <div
      className="flex flex-col w-full min-h-screen gap-12 items-center justify-center bg-[var(--background)] p-10 pt-20"
      id="services"
    >
      <span className="flex items-center px-4 p-1 rounded-full text-[var(--text)] border gap-2">
        <IoMdCheckmarkCircleOutline /> Our Services
      </span>
      <div className="flex gap-6 flex-wrap justify-center items-center w-full h-full">
        {serviceList.map((item, index) => {
          return (
            <div
              className="border text-[var(--text)] xl:w-150 w-full xl:h-60 group cursor-pointer h-124 rounded-xl flex border-transparent p-2 hover:text-[var(--primary2)] hover:border-[var(--primary2)] flex-col xl:flex-row items-center overflow-hidden"
              key={index}
            >
              <img
                src={item.image}
                alt=""
                className="xl:h-full xl:w-[40%] w-full rounded-xl grayscale group-hover:scale-110 duration-300"
              />
              <div className="flex flex-col gap-4 w-full h-full p-8 duration-300">
                <span className="flex flex-col items-center gap-2 duration-3--">
                  <item.Icon size={30} />
                  <h1 className="text-2xl text-center">{item.name}</h1>
                </span>
                <p className="text-center">{item.info}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
