import React from "react";
import { TbUserScreen } from "react-icons/tb";
import { SiAlwaysdata, SiTestinglibrary } from "react-icons/si";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiInfoCircle } from "react-icons/bi";

const Services = () => {
  const services = [
    {
      id: 1,
      Icon: TbUserScreen,
      title: "UI and UX Design",
      info: "this is the title that i have w to make a new and i will bew life for myself and my family",
      feedback: "",
    },
    {
      id: 2,
      Icon: SiAlwaysdata,
      title: "API Development",
      info: "this is the title that i have w to make a new and i will bew life for myself and my family",
      feedback: "",
    },
    {
      id: 3,
      Icon: SiTestinglibrary,
      title: "QA & Testing",
      info: "this is the title that i have w to make a new and i will bew life for myself and my family",
      feedback: "",
    },
  ];
  return (
    <div
      id="service"
      className="w-full min-h-screen flex-col flex items-center justify-center gap-16 bg-[var(--background)]"
    >
      <div className="w-full flex items-center justify-center flex-col gap-4">
        <span className="px-4 p-1 border gap-2 border-[var(--primary)]/50 text-[var(--primary)] rounded-full text-sm flex items-center shadow-[0_0_30px_#15ff00]/50 bg-[var(--primary)]/20 hover:bg-[var(--primary)]/30 duration-300 hover:scale-105 cursor-pointer ">
          <IoMdCheckmarkCircleOutline className="text-xl font-bold" />
          Services
        </span>
        <p className="text-[var(--primary)] text-sm">
          Customized and wanted services
        </p>
      </div>

      <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-8 bg-[var(--background)]">
        {services.map((service) => {
          return (
            <div
              key={service.id}
              className="flex flex-col border-[var(--primary)]/60 bg-[var(--primary)]/20 text-[var(--primary)] shadow-[0_0_110px_-50px_#15ff00] hover:shadow-[0_0_110px_5px_#15ff00] duration-300 hover:bg-[var(--primary)]/80 hover:text-[var(--text)] hover:scale-110 cursor-default items-center border p-6 rounded-md"
            >
              <service.Icon className="text-6xl" />

              <h1 className="text-xl font-bold">{service.title}</h1>

              <p className="max-w-[30ch] text-sm">{service.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
