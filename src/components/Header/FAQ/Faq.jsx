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
      className="flex flex-col gap-4 w-full min-h-screen justify-center bg-[var(--background)] items-center p-10 "
      id="faq"
    >
      <span className="flex items-center px-4 p-1 rounded-full text-[var(--text)] border gap-2">
        <IoMdCheckmarkCircleOutline /> Frequently asked questions
      </span>
      <div className="w-full h-full justify-center flex flex-wrap p-4 gap-6">
        {faqData.map((item, index) => {
          return (
            <div
              className="w-80 flex-col items-center p-2 gap-4 p-2 text-[var(--text)] border rounded-xl flex justify-start"
              key={index}
              onClick={(e) => {
                e.target.classList.toggle("group");
              }}
            >
              <div className="flex p-2 w-10 h-10 rounded-full border rounded-full items-center justify-center">
                {index + 1}
              </div>
              <h1 className="">{item.question}</h1>

              <p className=""> a. {item.answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
