import React from "react";

const Ratings = () => {
  const ratings = [
    {
      id: 1,
      number: "12k+",
      title: "customers",
    },
    {
      id: 2,
      number: "4k+",
      title: "Projects",
    },
    {
      id: 3,
      number: "7.7",
      title: "Rating",
    },
  ];
  return (
    <div className="flex gap-4 bg-[var(--background)] border-8 p-2 border-[var(--background)] absolute -translate-x-70 rounded-4xl w-max absolute top-1/2 z-20">
      <span className="w-20 h-10 bg-transparent absolute right-11 -top-10 border-l-10 border-b-8 rounded-bl-4xl border-[var(--background)]"></span>
      <span className="w-20 h-10 bg-transparent absolute right-11 -bottom-10 border-l-10 border-t-8 rounded-tl-4xl border-[var(--background)]"></span>
      {ratings.map((item) => {
        return (
          <div
            className="flex flex-col p-4 items-center w-28 rounded-2xl bg-[var(--primary)]/50 border border-[var(--primary)] text-[var(--text)] duration-300 hover:scale-110 hover:bg-[var(--primary)]/70 "
            key={item.id}
          >
            <span className="text-4xl font-bold">{item.number}</span>
            <span>{item.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Ratings;
