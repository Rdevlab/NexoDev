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
      className="flex flex-col gap-4 w-full h-screen justify-center bg-[var(--background)] items-center p-10 "
      id="faq"
    >
      <span className="flex items-center px-4 p-1 rounded-full text-[var(--text)] border gap-2">
        <IoMdCheckmarkCircleOutline /> Frequently asked questions
      </span>
      <div className="w-full h-full flex flex-col p-4 gap-4">
        {faqData.map((item, index) => {
          return (
            <div className="w-full flex-col gap-4 p-2 text-[var(--text)] border rounded-xl flex justify-between">
              <div className="flex gap-4 items-center">
                <div>{index + 1}</div>
                <h1 className="text-xl">{item.question}</h1>
              </div>
              <p className="px-8"> a. {item.answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
