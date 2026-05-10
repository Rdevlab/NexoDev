import React, { useEffect, useState } from "react";
import "./SliderAnimation.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import sliderImage from "../../assets/projects/slider.jsx";
const Slider = () => {
  let index = 1;
  return (
    <div className="w-full h-max items-center flex flex-col p-8 gap-4 justify-end relative">
      {sliderImage.map((slide) => {
        return (
          <div
            key={slide.id}
            className={`image${index < 6 ? index++ : (index = 1)} relative items-center flex justify-center`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`xl:w-100 w-60 xl:h-50 duration-300 shadow-2xl  rounded-xl `}
            />
            <h1 className="text-sm text-white border border-[var(--primary)] font-bold px-4 bg-[var(--primary)]/20 p-1 backdrop-blur-xl rounded-full ">
              {slide.title}
            </h1>
          </div>
        );
      })}
      {/* <div className="w-full flex gap-10 justify-center">
        <button className="p-4 bg-[var(--primary)]/70 text-green-950 rounded-full">
          <FaChevronLeft />
        </button>
        <button className="p-4 bg-[var(--primary)]/70 text-green-950 rounded-full">
          <FaChevronRight />
        </button>
      </div> */}
    </div>
  );
};

export default Slider;
