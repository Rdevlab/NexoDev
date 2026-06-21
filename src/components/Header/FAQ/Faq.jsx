import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Faq = () => {
  const faqData = [
    {
      question: "What services does your development group provide?",
      answer:
        "We provide web development, mobile app development, UI/UX design, backend development, branding, and software solutions for businesses and individuals.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines depend on complexity and requirements. Small projects may take a few weeks, while larger systems can take several months.",
    },
    {
      question: "Do you create custom websites for businesses?",
      answer:
        "Yes, we design and develop custom websites tailored to your business goals, brand identity, and customer needs.",
    },
    {
      question: "Can you develop mobile applications for Android and iOS?",
      answer:
        "Yes, we build high-performance mobile applications for both Android and iOS platforms using modern development frameworks.",
    },
    {
      question: "Do you provide UI/UX design before development?",
      answer:
        "Yes, we create wireframes, prototypes, and modern user interface designs before starting development to ensure better user experience.",
    },
  ];
  return (
    <div
      className="flex flex-col gap-4 w-full min-h-screen justify-center bg-[var(--background)] items-center p-10 pt-20"
      id="faq"
    >
      <span className="flex items-center px-4 p-1 rounded-full text-[var(--text)] border gap-2">
        <IoMdCheckmarkCircleOutline /> Frequently asked questions
      </span>
      <div className="w-full h-full justify-center items-center flex flex-col xl:p-8 gap-6">
        {faqData.map((item, index) => {
          return (
            <div
              className="xl:w-max cursor-pointer duration-300 hover:bg-white/10 h-max border border-transparent hover:border-[var(--primary2)]  items-center p-2 gap-4 text-[var(--text)] rounded-xl flex justify-start"
              key={index}
            >
              <div className="flex p-2 w-10 h-full bg-[var(--primary2)] border-[var(--primary2)]  rounded-xl border rounded-full items-center justify-center">
                {index + 1}
              </div>
              <div className="w-full flex flex-col gap-2">
                <h1 className="font-bold xl:text-xl">{item.question}</h1>

                <p className="max-w-[80ch]"> {item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
